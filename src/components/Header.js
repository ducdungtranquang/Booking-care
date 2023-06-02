import React from "react";
import styled from "styled-components";
import { DATA_HEADER } from "../constant";
import { ContainerBox } from "./GlobalStyledComponent";

export default function Header() {
  return (
    <HeaderBox>
      <ContainerBox>
        <HeaderContent>
          <RowOne>
            <ButtonIcon>
              <LineStyle></LineStyle>
              <LineStyle style={{ marginTop: "4px" }}></LineStyle>
              <LineStyle style={{ marginTop: "4px" }}></LineStyle>
            </ButtonIcon>
            <a style={{ display: "inline-block" }} href="/">
              <img
                style={{ paddingTop: "5px" }}
                height="40"
                width="160"
                src="https://bookingcare.vn/assets/icon/bookingcare-2020.svg"
                alt="BookingCare"
              />
            </a>
            <MenuHeading>
              {DATA_HEADER?.map((item, i) => (
                <ListStyle>
                  <SubTitle>
                    {item.title}
                    <SpanSub>{item.sub}</SpanSub>
                  </SubTitle>
                </ListStyle>
              ))}
            </MenuHeading>
          </RowOne>
          <RowTwo>
            <div >
              <SupportStyle>
                <IconSupport>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-question-circle"
                    viewBox="0 0 16 16"
                    style={{
                      background: "#45c3d2",
                      color: "white",
                      borderRadius: "50%",
                      marginRight: "1px",
                    }}
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                  </svg>
                </IconSupport>
                <span style={{ color: "#969495" }}>Hỗ trợ</span>
              </SupportStyle>
              <br />
              <a
                style={{
                  color: "rgb(69, 195, 210)",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
                href="tel:02473012468"
              >
                024-7301-2468
              </a>
            </div>
          </RowTwo>
        </HeaderContent>
      </ContainerBox>
    </HeaderBox>
  );
}

const HeaderBox = styled.header`
  background: rgba(255, 255, 255, 1);
  z-index: 2;
  width: 100%;
  padding: 10px 0;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 18%);
`;

const HeaderContent = styled.div`
  &::after {
    content: "";
    clear: both;
    display: block;
  }
`;

const RowOne = styled.div`
  min-height: 1px;
  @media (min-width: 768px) {
    float: left;
    position: relative;
    min-height: 1px;
    width: 75%;
  }
  @media (max-width: 768px) {
    display:inline-block;
  }
`;

const ButtonIcon = styled.button`
  position: relative;
  padding: 10px 8px 10px 0;
  margin-left: 0px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  display: block;
  float: left;
  cursor: pointer;
`;

const LineStyle = styled.span`
  display: block;
  width: 22px;
  height: 3px;
  border-radius: 1px;
  background-color: #969495;
`;

const MenuHeading = styled.ul`
  float: right;
  margin: 10px 0px 10px 25px;
  @media (min-width: 960px) ul {
    display: inline;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const ListStyle = styled.li`
  display: inline-block;
  cursor: pointer;
  margin-left: 25px;
`;

const SubTitle = styled.a`
  color: #333;
  font-weight: bold;
  font-size: 12px;
  text-decoration: none;
  font: 14px/1.5;
`;

const SpanSub = styled.span`
  font-weight: lighter;
  font-size: 10px;
  display: block;
`;

const RowTwo = styled.div`
  text-align: right;
  @media (min-width: 768px) {
    float: left;
    position: relative;
    min-height: 1px;
    width: 25%;
  }
  @media (max-width: 768px) {
    display: inline-block;
    float:right;
    margin-right:5px;
  }
`;

const SupportStyle = styled.a`
  display: inline-block;
  text-align: right;
  font-weight: bold;
  cursor: pointer;
  color: #45c3d2;
`;

const IconSupport = styled.span`
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: "Glyphicons Halflings";
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
`;
