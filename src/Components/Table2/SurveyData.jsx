import React, { useState } from "react";
import styled from "styled-components";
// import { Row, Col } from "antd";
import { Divider, Radio, Table } from "antd";

const SurveyData = () => {
  const columns = [
    {
      title: "McLagan  Low   Quartile ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "McLagan  Low   Quartile ",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "McLagan  Low   Quartile ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "McLagan  Low   Quartile ",
      dataIndex: "tags",
      key: "tags",
    },
    {
      title: "McLagan  Low   Quartile ",
      dataIndex: "action",
      key: "action",
    },
    {
      title: "McLagan  Low   Quartile ",
      dataIndex: "HallName",
      key: "hall name",
    },
    {
      title: "McLagan  Low   Quartile ",
      dataIndex: "NoOfGuest",
      key: "NoOfGuest",
    },
    {
      title: "McLagan  Low   Quartile ",
      dataIndex: "Date",
    },
    {
      title: "McLagan  Low   Quartile ",
      dataIndex: "DayNight",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No",
      tags: "Shayan",
      action: "harim",
      HallName: "Maaz",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No",
      tags: "Harim",
      action: "harim",
      HallName: "Maaz",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney",
      tags: "hello",
      action: "harim",
      HallName: "Maaz",
    },
    {
      key: "4",
      name: "Joe Black",
      age: 32,
      address: "Sidney ",
      tags: "hello",
      action: "harim",
      HallName: "Maaz",
    },
    {
      key: "5",
      name: "Joe Black",
      age: 32,
      address: "Sidney ",
      tags: "hello",
      action: "harim",
      HallName: "Maaz",
    },
    {
      key: "6",
      name: "Joe Black",
      age: 32,
      address: "Sidney k",
      tags: "hello",
      action: "harim",
      HallName: "Maaz",
    },
    {
      key: "7",
      name: "Joe Black",
      age: 32,
      address: "Sidney ",
      tags: "hello",
      action: "harim",
      HallName: "Maaz",
    },
    {
      key: "8",
      name: "Joe Black",
      age: 32,
      address: "Sidney",
      tags: "hello",
      action: "harim",
      HallName: "Maaz",
    },
    {
      key: "9",
      name: "Joe Black",
      age: 32,
      address: "Sidney No",
      tags: "hello",
      action: "harim",
      HallName: "Maaz",
    },
    {
      key: "10",
      name: "Joe Black",
      age: 32,
      address: "Sidney No",
      tags: "hello",
      action: "harim",
      HallName: "Maaz",
    },
    {
      key: "11",
      name: "Joe Black",
      age: 32,
      address: "Sidney ",
      tags: "hello",
      action: "harim",
      HallName: "Maaz",
    },
    {
      key: "12",
      name: "Joe Black",
      age: 32,
      address: "Sidney",
      tags: "hello",
      action: "harim",
      HallName: "Maaz",
    },
  ];

  const HallBookingContainer = styled.div`
    width: 100%;
    padding: 0.7rem 0rem;
    /* background-color: #D4DADC ; */
  `;
  const BookingDetail = styled(Table)`
    .ant-table-thead > tr > th {
      background-color: #45aa92;
      color: #fff;
      text-align: left;
      border-bottom: 4px solid #fff;
      border-right: 4px solid #fff;
      padding: 0.65rem;
    }
    .ant-table-tbody > tr > td {
      background-color: #a4dfd1;
      text-align: center;
      border-bottom: 4px solid #f0f0f0;
      color: #1b2a3d;
    }
    .ant-table-pagination {
      display: none;
    }
    .ant-table-container table > thead > tr:first-child th:last-child {
      border-right: none;
    }
  `;
  const Wrapper = styled.div`
    background-color: #45aa92;
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
  `;
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 66.7%;
    /* border: 1px solid red ; */
    height: 100%;
    padding: 0.5rem;
  `;

  const Heading = styled.h3`
    color: #fff;
    font-size: 1.3rem;
    margin: 0;
  `;

  const Info = styled.p`
    color: #fff;
    margin: 0;
    text-align: center;
  `;
  const Content = styled.div`
    background-color: #5abfa7;
    padding: 0.7rem;
    width: 11%;
    margin-right: 0.2rem;
    margin-left: ${({ marginleft }) => (marginleft ? "0.5rem" : "0rem")};
  `;

  const WrapperTwo = styled.div`
    display: flex;
    width: 100%;
    height: 8vh;
  `;
  const Summarycontainer = styled.div`
    /* border: 1px solid yellow; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.5rem;
    margin-right: 0.2rem;
    margin-top: 0.2rem ;
    background-color: #45aa92;
  `;

  const Title = styled.h3`
    margin: 0;
    color: #fff;
    font-size: 14px;
  `;
  const SelectedTitle = styled.h3`
    margin: 0;
    color: #fff;
    font-size: 14px;
  `;

  const Summarytitle = styled.h4`
    margin: 0;
    color: #fff;
    font-size: 14px;
  `;

  const ContentItem = styled.div`
  width:33.7% ;
  margin-top: 0.2rem ;
  display: flex ;
  margin-right: 0.2rem ;
  margin-right: ${({Marginright}) => Marginright && '0rem'} ;
  align-items: center ;
  justify-content: center ;
  background-color: #45aa92 ;
  `

  const Price = styled.p`
  margin: 0 ;
  text-align: center ;
  color: #fff ;
  `

  return (
    <>
      <Wrapper>
        <Container>
          <Heading>Survey Data</Heading>
          <Info>PRIOR YEAR DATA</Info>
        </Container>

        <Content marginleft={true}>
          <Info>$1,750,000</Info>
        </Content>
        <Content>
          <Info>$1,750,000</Info>
        </Content>
        <Content>
          <Info>$1,750,000</Info>
        </Content>
      </Wrapper>

      <WrapperTwo>
        <Summarycontainer>
          <Title>MCLAGAN ALL</Title>
        </Summarycontainer>
        <Summarycontainer>
          <SelectedTitle>MCLAGAN SELECTED</SelectedTitle>
          <Summarytitle>SUMMARY</Summarytitle>
        </Summarycontainer>


          <ContentItem>
            <Price>
            $1,714,000
            </Price>
          </ContentItem>
          <ContentItem>
          <Price>
            $1,714,000
            </Price>
          </ContentItem>
          <ContentItem Marginright={true}>
          <Price>
            $1,714,000
            </Price>
          </ContentItem>
        
      </WrapperTwo>

      <HallBookingContainer>
        <BookingDetail columns={columns} dataSource={data} />;
      </HallBookingContainer>
    </>
  );
};

export default SurveyData;