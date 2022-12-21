import React from "react";
import styled from "styled-components";

const Loyalty = () => {
  const sorting = "./images/sorting.svg";

  return (
    <MainContainer>
      <TableWrapper>
        <TableHeader>
          <Thead>
            YEARS OF
            <br />
            BR SERVICE
            <ShevronBtn>
              <SortIcon src={sorting} />
            </ShevronBtn>
          </Thead>
          <Thead>SCORE</Thead>
          <Thead>WEIGHTING</Thead>
          <Thead>DATE HIRED</Thead>
          <Thead width="44%">WEIGHTED SCORE</Thead>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TCol>
              <DescriptionInput type="text" short placeholder="100.00%" />
            </TCol>
            <TCol>10</TCol>
            <TCol>100%</TCol>
            <TCol>
              <DescriptionInput type="text" short placeholder="12/10/2021" />
            </TCol>
            <TCol width="44%">0.35</TCol>
          </TableRow>
        </TableBody>
      </TableWrapper>
    </MainContainer>
  );
};

export default Loyalty;

const MainContainer = styled.div`
  height: 100%;
`;
const TableWrapper = styled.div`
  height: inherit;
  width: calc(100% - 2rem);
`;
const TableHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #1371a6;
  align-items: center;
  height: 44px;
  padding: 0 1rem;
  margin-bottom: 0.2rem;
`;

const Thead = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #ffffff;
  width: ${({ width }) => (width ? width : "14%")};
`;
const TableBody = styled.div`
  width: 100%;
`;
const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #a7d2f2;
  align-items: center;
  height: 44px;
  padding: 0 1rem;
  margin-bottom: 0.2rem;
`;
const TCol = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #1b2a3d;
  width: ${({ width }) => (width ? width : "14%")};
`;

const ShevronBtn = styled.button`
  background-color: transparent;
  border: none;
  transform: translate(2px, -5px);
`;

const SortIcon = styled.img`
  cursor: pointer;
`;
const DescriptionInput = styled.input`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 13px;
  border: 1px solid #1271a6;
  margin: 0;
  width: ${({ short }) => (short ? "45%" : "70%")};
  background-color: #fff;
  color: #1b2a3d;
  padding: 0.28rem;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :focus {
    outline: none;
  }
  ::placeholder {
    outline: none;
    color: #1b2a3d;
  }
`;
