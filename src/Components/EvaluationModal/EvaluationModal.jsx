import { Tabs } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import Loyalty from "./Loyality";
import MarketScore from "./MarketScore";
import PerformanceCurve from "./PerformanceCurve";
import PerformanceSummary from "./PerformanceSummary";
import RoleComplexity from "./RoleComplexity";
import ScoreSummary from "./ScoreSummary";
import TotalYears from "./TotalYears";
const EvaluationModal = ({ Heading, src, text }) => {
  const [isTrue, setIsTrue] = useState(true);
  const [IsScoreSummary, SetIsScoreSummary] = useState(false);
  const TabData = [
    {
      title: "SCORE SUMMARY",
      id: 1,
      component: <ScoreSummary />,
    },
    {
      title: "MARKET SCORE",
      id: 2,
      component: <MarketScore />,
    },
    {
      title: "PERFORMANCE SUMMARY",
      id: 3,
      component: <PerformanceSummary />,
    },
    {
      title: "PERFORMANCE CURVE",
      id: 4,
      component: <PerformanceCurve />,
    },
    {
      title: "ROLE COMPLEXITY",
      id: 5,
      component: <RoleComplexity />,
    },
    {
      title: "LOYALTY",
      id: 6,
      component: <Loyalty />,
    },
    {
      title: "TOTAL YEARS OF EXPERIENCE",
      id: 7,
      component: <TotalYears />,
    },
  ];

  return (
    <>
      {isTrue && (
        <ModalContainer>
          <CustomModal>
            <HeadersWrapper>
              <IconWrapper>
                <Image src="/images/george.svg" alt="cross icon" />
                <IconText>George Jackson</IconText>
              </IconWrapper>
              <CrossIconWrapper onClick={() => setIsTrue(false)}>
                <CrossImage src="/images/cross_icon.svg" alt="cross icon" />
              </CrossIconWrapper>
            </HeadersWrapper>
            <Wrapper>
              <NavItem>
                <TabWrapper>
                  <CustomTabs
                    defaultActiveKey="0"
                    size={"small"}
                    style={{
                      margin: 0,
                      padding: 0,
                    }}
                    items={TabData.map((item, i) => {
                      const id = String(i);
                      return {
                        label: `${item?.title}`,
                        key: id,
                        // disabled: i === 28,
                        children: item?.component,
                      };
                    })}
                  />
                </TabWrapper>
              </NavItem>
            </Wrapper>
          </CustomModal>
        </ModalContainer>
      )}
    </>
  );
};
export default EvaluationModal;
const TabWrapper = styled.div`
  /* padding-right: 1.5rem; */
  height: inherit;

  .ant-tabs-tab.ant-tabs-tab .ant-tabs-tab-btn {
    color: #8e97a3 !important;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    text-transform: uppercase;
  }
  .ant-tabs-tab-active {
    border-bottom: 2px solid #feab3d !important;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    text-transform: uppercase;
    color: #1271a6 !important;
  }
`;
const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
const CrossIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const HeadersWrapper = styled.div`
  width: 100%;
  padding-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IconText = styled.h2`
  font-size: 1rem;
  padding-top: 0.4rem;
  font-family: "Poppins";
  font-weight: 500;
  margin: 0;
`;
const CrossImage = styled.img`
  cursor: pointer;
`;
const Image = styled.img`
  cursor: pointer;
`;
const CustomModal = styled.div`
  padding: 1rem;
  min-width: 1024px;
  width: 80%;
  background: #fff;
  border-radius: 8px;
`;
const Wrapper = styled.div``;

const Icon = styled.img``;
const NoteWrapper = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  height: 100%;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const NavItem = styled.div`
  width: 100%;
`;
const UL = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  gap: 3.5rem;
  width: 100%;
  padding-left: 0;
  border-bottom: 1px solid #c5cbd3;
  height: 32px;
`;
const LINK = styled.a`
  text-transform: uppercase;
  font-family: "Inter";
  font-style: normal;
  color: #8e97a3;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  line-height: 16px;
  height: 31px;

  &:focus {
    color: #1271a6;
    border-bottom: 4px solid #feab3d;
  }
`;
const CustomTabs = styled(Tabs)`
  .ant-tabs-nav {
    border-bottom: 1px solid #b7c9e2;
  }
`;
