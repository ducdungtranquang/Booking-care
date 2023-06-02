import { useContext, useEffect, useState, useRef } from "react";
import { SearchContext } from "../App";
import { ACCESS_TOKEN, URL } from "../constant";
import styled from "styled-components";
import { ContainerBox } from "./GlobalStyledComponent";

export default function FilterData() {
  const { filterValue } = useContext(SearchContext);
  const [dataSearch, setDataSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dataSearchRef = useRef(dataSearch);
  const filterValueRef = useRef(filterValue);
  // Thay doi ACCESS_TOKEN neu nhu loi 429 xay ra
  const getDataSearch = async (index, value = filterValue, maxResults = 20) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `${URL}?q=${value}&maxResults=${maxResults}&startIndex=${index}&key=${ACCESS_TOKEN}`,
        {
          method: "GET",
          Authorization: ACCESS_TOKEN,
        }
      );
      const data = await res.json();
      const items = data?.items;
      if (items) {
        setDataSearch((prevData) => [...prevData, ...items]);
      } else {
        setDataSearch([]);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleScroll = async () => {
    const isScrolledToBottom =
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) ===
      document.documentElement.offsetHeight;
    if (isScrolledToBottom && dataSearchRef.current.length > 0 && !isLoading) {
      await getDataSearch(dataSearch?.length, filterValueRef.current, 10);
    }
  };

  useEffect(() => {
    setDataSearch([]);
    getDataSearch(0);
  }, [filterValue]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    dataSearchRef.current = dataSearch;
    filterValueRef.current = filterValue;
  }, [dataSearch]);
  return (
    <>
      <div style={{ background: "#f9f9f9" }}>
        <ContainerBox>
          <div style={{ paddingTop: "50px" }}>
            {dataSearch
              ? dataSearch?.map((item, i) => (
                  <ContentBox key={i}>
                    <ImgBox>
                      <a
                        href={
                          item?.saleInfo?.buyLink
                            ? item?.saleInfo?.buyLink
                            : item?.volumeInfo?.previewLink
                        }
                        target="_blank"
                      >
                        <img
                          width="150px"
                          height="210px"
                          style={{ margin: "auto", display: "block" }}
                          src={`${item.volumeInfo?.imageLinks?.thumbnail}`}
                          alt="Image"
                        />
                      </a>
                    </ImgBox>
                    <DataBox>
                      <h2>{item.volumeInfo?.title}</h2>
                      <p>
                        {item.volumeInfo?.description
                          ? item.volumeInfo?.description
                          : "No Descriprion"}
                      </p>
                    </DataBox>
                  </ContentBox>
                ))
              : null}
          </div>
          {isLoading ? <p style={{ textAlign: "center" }}>Loading...</p> : null}
        </ContainerBox>
      </div>
    </>
  );
}

const ContentBox = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  border-radius: 8px;
  border-bottom: none;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const ImgBox = styled.div`
  padding: 15px;
  margin: auto;
  margin-top: 0;
  @media (min-width: 900px) {
    width: 30%;
  }
  @media (max-width: 900px) {
    float: left;
    width: 30%;
    border-right: 1px solid #eee;
    padding-right: 10px;
  }
`;

const DataBox = styled.div`
  margin: autto;
  @media (min-width: 760px) {
    width: 70%;
    // float: left;
    padding: 0;
    margin: 0;
  }
  @media (min-width: 900px) {
    width: 70%;
  }
`;
