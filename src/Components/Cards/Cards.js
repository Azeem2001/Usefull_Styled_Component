import React from "react";
import styled from "styled-components";
// import image_1 from "./public/images/image_1.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  font-family: sans-serif;
`;
const CardContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const Card = styled.div`
  width: 28%;
  box-shadow: 5px 5px 2px 0px rgba(33, 33, 33, 0.12);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(33, 33, 33, 0.12);
  -moz-box-shadow: 10px 10px 5px 0px rgba(33, 33, 33, 0.12);
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  padding-top: 0;
`;
const Image = styled.img`
  width: 100%;
`;
const CardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Heading = styled.h1`
  font-weight: 500;
`;
const Disc = styled.p`
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 1.45rem;
  color: #000000;
`;
const Button = styled.button`
  font-weight: 400;
  border-radius: 24px;
  font-size: 1rem;
  height: 40px;
  border: none;
  font-family: Montserrat;
  padding: 10px 20px;
  color: rgb(255, 255, 255);
  text-align: center;
  background: rgb(0, 153, 89);
`;
const InvestButton = styled.button`
  width: 100%;
  font-size: 1.2rem;
  line-height: 2.5rem;
  border-radius: 24px;
  background: transparent;
  border: 1px solid red;
`;
const Cards = () => {
  const image_1 = "./images/image_1.png";
  const image_2 = "./images/image_2.jpg";
  const image_3 = "./images/image_3.png";

  return (
    <Container>
      <CardContainer>
        <Card>
          <Image src={image_1} alt="image_1" />
          <CardItem>
            <Heading>Wind Power</Heading>
            <Button>Comming Soon</Button>
          </CardItem>
          <Disc>This is an description</Disc>
          <InvestButton>Invest Now</InvestButton>
        </Card>
        <Card>
          <Image src={image_1} alt="image_1" />
          <CardItem>
            <Heading>Wind Power</Heading>
            <Button>Comming Soon</Button>
          </CardItem>
          <Disc>This is an description</Disc>
          <InvestButton>Invest Now</InvestButton>
        </Card>
        <Card>
          <Image src={image_1} alt="image_1" />
          <CardItem>
            <Heading>Wind Power</Heading>
            <Button>Comming Soon</Button>
          </CardItem>
          <Disc>This is an description</Disc>
          <InvestButton>Invest Now</InvestButton>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default Cards;
