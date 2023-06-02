import styled from "styled-components";

export const ContainerBox = styled.div`
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
  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0px;
    padding-left: 0px;
  }
`;
