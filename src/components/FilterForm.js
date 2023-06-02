import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { SearchContext } from "../../src/App";

export default function FilterForm() {
  const placeholderData = [
    "Tìm bệnh viện",
    "Tìm bác sĩ",
    "Tìm phòng khám",
    "Tìm gói xét nghiệm",
    "Tìm gói khám tổng quát",
  ];
  const [placeholder, setPlaceholder] = useState(placeholderData[0]);
  const [valueSearch, setValueSearch] = useState("");
  const { setFilterValue } = useContext(SearchContext);
  const inputRef = useRef(null)

  const handleChange = (e) => {
    setValueSearch(e.target.value);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setFilterValue(valueSearch);
      setValueSearch("")
      inputRef.current.focus()
    },
    [valueSearch]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder((content) => {
        const currentIndex = placeholderData.indexOf(content);
        const nextIndex = (currentIndex + 1) % placeholderData.length;
        return placeholderData[nextIndex];
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box onSubmit={handleSubmit}>
      <FilterBox>
        <IconSearch>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </IconSearch>
        <InputBox
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          value={valueSearch}
        />
      </FilterBox>
    </Box>
  );
}

const Box = styled.form`
  text-align: center;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin: 10px auto;
    width: 40%;
    min-width: 300px;
    position: relative;
    z-index: 2;
    min-height: 15vh;
  }
`;

const FilterBox = styled.div`
  background: #f7d800;
  color: #fff;
  outline: none;
  border-radius: 25px;
  border: 1px solid transparent;
  line-height: 50px;
  height: 50px;
  padding-left: 50px;
  padding-right: 25px;
  position: relative;
`;

const InputBox = styled.input`
  background: transparent;
  outline: none;
  border: none;
  width: 100%;
`;

const IconSearch = styled.i`
  width: 50px;
  height: 50px;
  line-height: 50px;
  position: absolute;
  top: 2px;
  left: 0;
  color: #333;
  text-align: center;
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
