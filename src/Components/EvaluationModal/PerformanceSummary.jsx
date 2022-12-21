import React from "react";
import styled from "styled-components";

const PerformanceSummary = () => {
  const sorting = "./images/sorting.svg";
  const arrow = "./images/uparrow.svg";
  return (
    <MainContainer>
      <TableWrapper>
        <TableHeader>
          <Thead>COMMUNICATION</Thead>
          <Thead>
            INDIVIDUAL
            <br /> EFFECTIVENESS
          </Thead>
          <Thead>
            THINKING AND <br />
            PROBLEM SOLVING
          </Thead>
          <Thead>TEAM WORK</Thead>
          <Thead>
            FUNCTIONAL <br />
            EXPERTISE
          </Thead>
          <Thead>
            PROGRESS ON <br />
            GOALS
          </Thead>
          <Thead>
            COMMITMENT TO ON <br />
            FIRM POLICIES
          </Thead>
          <Thead>
            DEVELOPMENT
            <br />
            AND TRAINING
          </Thead>
          <Thead width="14.5%">
            CY
            <br />
            AVERAGE
            <ShevronBtn>
              <SortIcon src={sorting} />
            </ShevronBtn>
          </Thead>
          <Thead>
            PY
            <br />
            AVERAGE
            <ShevronBtn>
              <SortIcon src={sorting} />
            </ShevronBtn>
          </Thead>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TCol>
              <DescriptionInput type="text" placeholder="10.00" />
            </TCol>
            <TCol>
              <DescriptionInput type="text" placeholder="10.00" />
            </TCol>
            <TCol>
              <DescriptionInput type="text" placeholder="10.00" />
            </TCol>
            <TCol>
              <DescriptionInput type="text" placeholder="10.00" />
            </TCol>
            <TCol>
              <DescriptionInput type="text" placeholder="10.00" />
            </TCol>
            <TCol>
              <DescriptionInput type="text" placeholder="10.00" />
            </TCol>
            <TCol>
              <DescriptionInput type="text" placeholder="10.00" />
            </TCol>
            <TCol>
              <DescriptionInput type="text" placeholder="10.00" />
            </TCol>

            <TCol width="14.5%">
              5.00
              <Span>
                &nbsp;
                <Icon src={arrow} />
                &nbsp; 0.0.5%
              </Span>
            </TCol>
            <TCol>5.00</TCol>
          </TableRow>
        </TableBody>
      </TableWrapper>
    </MainContainer>
  );
};

export default PerformanceSummary;

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
  min-height: 44px;
  height: auto;
  padding: 0rem 1rem;
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
  word-break: break-all;
  text-transform: uppercase;
  color: #ffffff;
  width: ${({ width }) => (width ? width : "9.5%")};
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
  width: ${({ width }) => (width ? width : "9.5%")};
`;

const Span = styled.div`
  display: flex;
  align-items: center;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #03ad14;
`;

const Icon = styled.img`
  width: 12px;
`;

const DescriptionInput = styled.input`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 13px;
  border: 1px solid #1271a6;
  margin: 0;
  width: 30%;
  background-color: #fff;
  color: #1b2a3d;
  padding: 0.25rem;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #1b2a3d;
  }
`;
const SortIcon = styled.img`
  cursor: pointer;
`;

const ShevronBtn = styled.button`
  background-color: transparent;
  border: none;
  transform: translate(2px, -5px);
`;
