import React from "react";
import styled from "styled-components";
import { Table } from "antd";
const OverView = () => {
  const sorting = "./images/sorting.svg";
  return (
    <Container>
      <OverviewContainer>
        <ItemOne>
          <Heading>Overview</Heading>
          <Summary>SUMMARY</Summary>
        </ItemOne>
        <ItemTwo>
          <Yoycontainer>
            <YoyItem>
              <Text>YOY +/-</Text>
              <Text>$74,300</Text>
            </YoyItem>
            <YoyItem>
              <Text>YOY +/-</Text>
              <Text>$74,300</Text>
            </YoyItem>
          </Yoycontainer>
          <SummaryPricing>
            <PriceBox>$1,733,500</PriceBox>
            <PriceBox> $1,659,200</PriceBox>
            <PriceBox>
              {" "}
              <img src="./images/uparrow.svg" alt="" />
              4.29%
            </PriceBox>
            <PriceBox>$152,000</PriceBox>
            <PriceBox>$121,500</PriceBox>
            <PriceBox>
              {" "}
              <img src="./images/uparrow.svg" alt="" />
              27.89%
            </PriceBox>
          </SummaryPricing>
        </ItemTwo>
      </OverviewContainer>
      <TableWrapperOverView>
        <TableHeadOverView>
          <HeaderLeftSectionOverView>
            <TheadOverView isLeft>
              <OverViewtext isLeft>
                cy <br />
                Rank
              </OverViewtext>
              <img src={sorting} alt="sorting" />
            </TheadOverView>
            <TheadOverView isRight>
              <OverViewtext isRight>
                PY <br /> Rank
              </OverViewtext>
              <img src={sorting} alt="sorting" />
            </TheadOverView>
            <TheadOverView isRight>
              <OverViewtext isRight>
                Current Year <br /> total score
              </OverViewtext>
              <img src={sorting} alt="sorting" />
            </TheadOverView>
            <TheadOverView isRight>
              <OverViewtext isRight>
                Prior Year <br /> total score
              </OverViewtext>
              <img src={sorting} alt="sorting" />
            </TheadOverView>
            <TheadOverView>
              <OverViewtext>
                SCORE <Span>%</Span>{" "}
              </OverViewtext>
            </TheadOverView>
          </HeaderLeftSectionOverView>

          <HeaderRightSectionOverView>
            <TheadOverView isRight>
              <OverViewtext isRight>
                Current Year <br /> All In Comp
              </OverViewtext>
              <img src={sorting} alt="sorting" />
            </TheadOverView>
            <TheadOverView>
              <OverViewtext>
                Prior Year <br /> All In Comp
              </OverViewtext>
              <img src={sorting} alt="sorting" />
            </TheadOverView>
            <TheadOverView>
              <OverViewtext>
                Change <br /> over PY%
              </OverViewtext>
              <img src={sorting} alt="sorting" />
            </TheadOverView>
            <TheadOverView isLight>
              <OverViewtext isLight>
                cY Proposed <br /> Bonus
              </OverViewtext>
              <img src={sorting} alt="sorting" />
            </TheadOverView>
            <TheadOverView>
              <OverViewtext>
                Prior Year <br /> Bonus
              </OverViewtext>
              <img src={sorting} alt="sorting" />
            </TheadOverView>
            <TheadOverView>
              <OverViewtext>
                Change <br /> Over PY%
              </OverViewtext>
              <img src={sorting} alt="sorting" />
            </TheadOverView>
          </HeaderRightSectionOverView>
        </TableHeadOverView>
        <OverViewTableBody>
          {Array(18)
            .fill()
            .sort()
            .map((item, index) => (
              <OverViewTableRow key={item}>
                <RowLeftSectionOverView>
                  <OverViewTRow>
                    <RowTextOverView>{index + 1}</RowTextOverView>
                  </OverViewTRow>
                  <OverViewTRow>
                    <RowTextOverView>4.92</RowTextOverView>
                  </OverViewTRow>
                  <OverViewTRow isDark>
                    <RowTextOverView isDark>4.9253</RowTextOverView>
                  </OverViewTRow>
                  <OverViewTRow>
                    <RowTextOverView>4.92</RowTextOverView>
                  </OverViewTRow>
                  <OverViewTRow>
                    <RowTextOverView>98.4</RowTextOverView>
                  </OverViewTRow>
                </RowLeftSectionOverView>

                <RowRightSectionOverView>
                  <OverViewTRow isDark>
                    <RowTextOverView isDark>$220,000</RowTextOverView>
                  </OverViewTRow>
                  <OverViewTRow isBorder>
                    <RowTextInput isBorder type="text" placeholder="$200,000" />{" "}
                  </OverViewTRow>
                  <OverViewTRow>
                    <RowTextOverView>10.0%</RowTextOverView>
                  </OverViewTRow>
                  <OverViewTRow isLight>
                    <RowTextInput isLight type="text" placeholder="$22,000" />
                  </OverViewTRow>
                  <OverViewTRow>
                    <RowTextOverView>$20,000</RowTextOverView>
                  </OverViewTRow>
                  <OverViewTRow>
                    <RowTextOverView>10.0%</RowTextOverView>
                  </OverViewTRow>
                </RowRightSectionOverView>
              </OverViewTableRow>
            ))}
        </OverViewTableBody>
      </TableWrapperOverView>
    </Container>
  );
};

export default OverView;
const Container = styled.div`
  min-width: 1224px;
  width: 100%;
  height: auto;
`;
const OverviewContainer = styled.div`
  display: flex;
  width: 100%;
  height: 98px;
  background-color: #1e74a4;
  justify-content: space-between;
`;
const ItemOne = styled.div`
  width: 38.4%;
  display: flex;
  padding: 0.4rem 0;
  justify-content: space-between;
`;
const ItemTwo = styled.div`
  width: 61%;
  display: flex;
  gap: 0.3rem;
  flex-direction: column;
  padding: 0.2rem 0;
  padding-bottom: 0;
`;
const Heading = styled.h2`
  font-family: "Inter";
  text-transform: capitalize;
  font-weight: 700;
  font-size: 18px;
  margin: 10px 0;
  color: #ffffff;
  padding-left: 0.8rem;
`;
const Summary = styled.h2`
  font-family: "Inter";
  text-transform: capitalize;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.8rem;
  height: 100%;
  display: flex;
  justify-items: baseline;
  align-items: flex-end;
  margin-block-start: 0;
  margin-block-end: 0;
  color: #ffffff;
`;
const Yoycontainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 55%;
`;
const YoyItem = styled.div`
  width: 40%;
  height: 75%;
  background-color: #348aba;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
`;
const Text = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  width: 50%;
  line-height: 1.2rem;
  color: #ffffff;
`;
const SummaryPricing = styled.div`
  height: 45%;
  display: flex;
`;
const PriceBox = styled.div`
  border: 4px solid #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-bottom: none;
  width: 34%;
  border-right: none;
  color: #ffffff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 1.2rem;
`;

////// Table Section ////////
const TableWrapperOverView = styled.div``;
const TableHeadOverView = styled.div`
  width: 100%;
  height: 42px;
  margin-top: 0.4rem;
  display: flex;
  justify-content: center;
  white-space: nowrap;
`;
const TheadOverView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 100%;
  gap: 0.5rem;
  margin: 0 auto;

  background-color: #1e74a4;
  background-color: ${({ isLight }) => isLight && "#348ABA"};
  height: 44px;
  width: 100%;

  border-right: ${({ isRight }) => (isRight ? "none" : "0px solid #ffffff")};
  border-left: ${({ isLeft }) => (isLeft ? "none" : "4px solid #ffffff")};
`;
const Span = styled.span``;
const HeaderLeftSectionOverView = styled.div`
  width: calc(38.4% + 1rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderRightSectionOverView = styled.div`
  width: 61.6%;
  display: flex;
  justify-content: space-between;
`;
const OverViewtext = styled.h4`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: flex-start;
  white-space: nowrap;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0;
  padding: 0.25rem;
  padding-left: ${({ isLeft }) => isLeft && "10px"};
  padding-right: ${({ isRight }) => isRight && "12px"};
`;
const OverViewTableBody = styled.div``;
const OverViewTableRow = styled.div`
  width: 100%;

  background-color: #a3d1eb;
  height: 44px;
  margin: 0.2rem 0;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  cursor: pointer;
  :hover {
    background-color: #fff;
  }
`;
const RowLeftSectionOverView = styled.div`
  width: calc(38.4% + 1rem);
  max-width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

const RowRightSectionOverView = styled.div`
  width: 61.6%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
`;

const OverViewTRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isDark }) => isDark && "#71BCE5"};
  min-width: ${({ isDark }) => isDark && "135px"};
  background-color: ${({ isLight }) => isLight && "rgba(255, 255, 255, 0.2)"};
`;
const RowTextInput = styled.input`
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
  background: transparent;
  border: 1px solid #519fcb;
  width: 80%;
  width: ${({ isBorder }) => isBorder && "50%"};
  margin: 0 auto;
  border: ${({ isBorder }) => isBorder && "none"};
  border-bottom: ${({ isBorder }) => isBorder && "1px dashed"};

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #1b2a3d;
  }
`;
const RowTextOverView = styled.h4`
  width: 100%;
  margin: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  white-space: pre-wrap;
  color: #1b2a3d;
  padding: 0.25rem;

  width: ${({ isLight }) => isLight && "12rem"};
`;
