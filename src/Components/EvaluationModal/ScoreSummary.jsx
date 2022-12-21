import React from "react";
import styled from "styled-components";

const ScoreSummary = () => {
  return (
    <ScoreSummaryContainer>
      <TableHeader>
        <SummaryUl>
          <SummaryHeading>
            MARKET <br /> SCORE
          </SummaryHeading>
          <SummaryHeading>
            weighted <br /> score
          </SummaryHeading>
          <SummaryHeading>
            years of BR <br /> SERVICE
          </SummaryHeading>
          <SummaryHeading>
            years of <br /> experience
          </SummaryHeading>
          <SummaryHeading>
            role <br /> complexity
          </SummaryHeading>
          <SummaryHeading>perf in role</SummaryHeading>
          <SummaryHeading>cy average</SummaryHeading>
          <SummaryHeading>%</SummaryHeading>
        </SummaryUl>
      </TableHeader>
      <TableItem>
        <SummaryUl>
          <SummaryListInput type="text" placeholder="5.00" />
          <SummaryListInput type="text" placeholder="0.13" />
          <SummaryListInput type="text" placeholder="23.50" />
          <SummaryListInput type="text" placeholder="30" />
          <SummaryListInput type="text" placeholder="5.00" />
          <SummaryListInput type="text" placeholder="8.75" />
          <SummaryListInput type="text" placeholder="8.40" />
          <SummaryListInput type="text" placeholder="0.05% " />
        </SummaryUl>
      </TableItem>
    </ScoreSummaryContainer>
  );
};

export default ScoreSummary;
const ScoreSummaryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const SummaryUl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: calc(100% - 1.5rem);
  margin: 0;
  padding: 0;
  padding-left: 1.5rem;
  height: 44px;
`;
const TableHeader = styled.div`
  background-color: #1271a6;
`;
const SummaryHeading = styled.li`
  text-transform: uppercase;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
  color: #ffffff;
  width: 106px;
  height: 44px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SummaryListInput = styled.input`
  text-transform: uppercase;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
  color: #1b2a3d;
  width: 106px;
  height: 32px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  border: none;

  &:focus {
    outline: 0.5px solid #6a6c6f;
  }
  &::placeholder {
    color: #1b2a3d;
  }
`;
const TableItem = styled.div`
  background: #a7d2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Span = styled.span`
  text-transform: uppercase;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
  color: #03ad14;
  padding: 0.5rem;
`;
