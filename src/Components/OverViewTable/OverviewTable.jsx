import React from "react";
import styled from "styled-components";
const OverviewTable = () => {
  const arrow = "./images.uparrow.svg";
  return (
    <OverviewContainer>
      <SurveyTopSection>
        <TopLeftSection>
          <MainHeading>Overview</MainHeading>
        </TopLeftSection>
        <TopRightSection>
          <ContentBox>
            <ContentText>$1,750,000</ContentText>
          </ContentBox>
          <ContentBox>
            <ContentText>$1,750,000</ContentText>
          </ContentBox>
        </TopRightSection>
      </SurveyTopSection>
      <MidSection>
        <MidLeftSection>
          <MidHeading left={"20px"}>MCLAGAN ALL</MidHeading>
        </MidLeftSection>
        <MidCenterSection>
          <MidHeading>MCLAGAN SELECTED</MidHeading>
          <MidHeading isBold>SUMMARY</MidHeading>
        </MidCenterSection>
        <MidRightSection>
          <SummaryBox isRight>
            <SummaryText>$1,714,000</SummaryText>
          </SummaryBox>
          <SummaryBox>
            <SummaryText isRight isLeft>
              $1,714,000
            </SummaryText>
          </SummaryBox>
          <SummaryBox isLeft>
            <SurveyIcon src={arrow} className="me-1" />
            <SummaryText>0.81%</SummaryText>
          </SummaryBox>
        </MidRightSection>
      </MidSection>
      <TableWrapper>
        <TableHead>
          <HeaderLeftSection>
            <Thead isLeft>
              <SurveyText isLeft>McLagan Low Quartile</SurveyText>
            </Thead>
            <Thead>
              <SurveyText>McLagan Median Quartile</SurveyText>
            </Thead>
            <Thead>
              <SurveyText>McLagan High Quartile</SurveyText>
            </Thead>
          </HeaderLeftSection>
        </TableHead>
        <SurveyTableBody>
          {Array(22)
            .fill()
            .map((item) => (
              <TableRow key={item}>
                <RowLeftSection>
                  <TRow>
                    <RowText>$150,000</RowText>
                  </TRow>
                  <TRow>
                    <RowText>$150,000</RowText>
                  </TRow>
                  <TRow>
                    <RowText>$150,000</RowText>
                  </TRow>
                </RowLeftSection>
                <RowMidSection>
                  <TRow>
                    <RowText>$150,000</RowText>
                  </TRow>
                  <TRow>
                    <RowText>$150,000</RowText>
                  </TRow>
                  <TRow>
                    <RowText>$150,000</RowText>
                  </TRow>
                </RowMidSection>
                <RowRightSection>
                  <TRow>
                    <RowText>$150,000</RowText>
                  </TRow>
                  <TRow>
                    <RowText>$150,000</RowText>
                  </TRow>
                  <TRow>
                    <RowText>-1.8%</RowText>
                  </TRow>
                </RowRightSection>
              </TableRow>
            ))}
        </SurveyTableBody>
      </TableWrapper>
    </OverviewContainer>
  );
};

export default OverviewTable;
const OverviewContainer = styled.div`
  height: inherit;
  overflow-y: auto;
  min-width: 1224px;
  width: 100%;
`;

const SurveyTopSection = styled.div`
  background-color: #45aa92;
  width: 100%;
  height: 48px;
  padding: 6px 12px 6px 20px;
  color: #ffffff;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
`;
const TopLeftSection = styled.div``;
const MainHeading = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  text-transform: capitalize;
  color: #ffffff;
  margin: 0;
  padding: 0;
`;
const TopRightSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;
const SurveyHeading = styled.h4`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin: 0;
  padding: 0;
  padding-right: 0.8rem;
  white-space: nowrap;
`;
const ContentBox = styled.div`
  background-color: #5abfa7;
  width: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.45rem;
  border-right: 2px solid #45aa92;
`;
const ContentText = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  margin: 0;
  padding: 0;
`;
const MidSection = styled.div`
  border-top: 1px solid white;
  background-color: #45aa92;
  /* padding: 0px 21px 0px 20px; */
  width: 100%;
  height: 50px;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
`;
const MidLeftSection = styled.div`
  border-right: 1px solid white;
  display: flex;
  align-items: center;
  width: 33.333%;
`;
const MidCenterSection = styled.div`
  border-right: 1px solid white;
  border-left: 1px solid white;
  display: flex;
  justify-content: space-between;
  width: 33.333%;
  padding: 0 0.6rem;
`;
const MidRightSection = styled.div`
  border-left: 1px solid white;
  width: 33.333%;
  display: flex;
  justify-content: space-between;
`;
const SurveyIcon = styled.img`
  width: 0.75rem;
  height: 0.75rem;
`;
const MidHeading = styled.h4`
  font-family: "Poppins";
  font-style: normal;
  font-weight: ${({ isBold }) => (isBold ? "600" : "500")};
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin: 0;
  padding: 0;
  padding-left: ${({ left }) => left && left};
`;
const SummaryBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: ${({ isRight }) => isRight && "2px solid #ffffff"};
  border-left: ${({ isLeft }) => isLeft && "2px solid #ffffff"};
`;
const SummaryText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;
const TableWrapper = styled.div``;
const TableHead = styled.div`
  width: 100%;
  height: 42px;
  margin-top: 0.4rem;
  display: flex;
  justify-content: space-between;
`;
const Thead = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-right: ${({ isRight }) => (isRight ? "none" : "1px solid #ffffff")};
  border-left: ${({ isLeft }) => (isLeft ? "none" : "1px solid #ffffff")};
`;

const HeaderLeftSection = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: space-between;
  background-color: #5bbfa7;
`;
const HeaderMidSection = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: space-between;
  background-color: #5bbfa7;
`;
const HeaderRightSection = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: space-between;
  background-color: #5bbfa7;
`;
const SurveyText = styled.h4`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0;
  padding: 0.25rem;
  padding-left: ${({ isLeft }) => isLeft && "20px"};
`;
const SurveyTableBody = styled.div``;
const TableRow = styled.div`
  width: 100%;
  background-color: #a4dfd1;
  height: 44px;
  margin: 0.2rem 0;
  display: flex;
  cursor: pointer;
  :hover {
    background-color: #d1ede6;
  }
`;
const RowLeftSection = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: space-between;
`;
const RowMidSection = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: space-between;
`;
const RowRightSection = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: space-between;
`;

const TRow = styled.div`
  display: flex;
  align-items: center;
`;
const RowText = styled.h4`
  width: 100%;
  margin: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #1b2a3d;
  padding: 0.25rem;
`;
