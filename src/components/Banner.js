import React from "react";
import styled from "styled-components";
import FilterForm from "./FilterForm";

export default function Banner() {
  return (
    <main>
      <BannerBox>
        <div>
          <FilterContainer>
            <FilterContentBox>
              <HeadingBanner>
                Nền tảng y tế
                <br />
                <b>chăm sóc sức khỏe toàn diện</b>
              </HeadingBanner>
              <FilterForm/>
            </FilterContentBox>
          </FilterContainer>
        </div>
      </BannerBox>
    </main>
  );
}

const BannerBox = styled.div`
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("bookingcare-cover-4.jpg");
`;

const FilterContainer = styled.div`
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.25),
    rgba(255, 255, 255, 0.1)
  );
  padding: 45px 0;
  color: #333;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    min-height: 60vh;
  }
`;

const FilterContentBox = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1200px) {
    width: 1170px;
  }
  @media (max-width: 1200px) {
    width: 970px;
  }
  @media (max-width: 992px) {
    width: 750px;
  }
`;

const HeadingBanner = styled.h1`
  color: #fff;
  font-size: 18px;
  margin-bottom: 20px;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px #333;
  font: 14px/1.5 "Montserrat", sans-serif;
  outline: none;
  @media (min-width: 768px){
    font-size: 32px;
  }
  @media (max-width: 768px){
    font-size: 20px;
  }
`;
