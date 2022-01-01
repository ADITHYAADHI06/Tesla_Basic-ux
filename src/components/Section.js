import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = (props) => {
  return (
    <>
      <Wrap bgImage={props.image}>
        <Fade bottom>
          <ItemText>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </ItemText>
        </Fade>

        <Fade bottom>
          <Buttons>
            <Button_group>
              <LeftButton>{props.LeftButtonText}</LeftButton>
              {props.RightButtonText && (
                <RightButton>{props.RightButtonText}</RightButton>
              )}
            </Button_group>
            <ArrowBtn>
            <DownArrow src="/images/down-arrow.svg"></DownArrow>
            </ArrowBtn>
          </Buttons>
        </Fade>
      </Wrap>
    </>
  );
};

export default Section;

const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 18vh;
  text-align: center;

`;
const Button_group = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-tranform: uppercase;
  font-size: 12px;
  opacity: 0.8;
  cursor: pointer;
  margin: 20px;
  @media (max-width: 768px) {
    margin: 8px;
  }
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Buttons = styled.div``;

const ArrowBtn=styled.div`
display:flex;
  justify-content:center;
  margin-bottom:10px;
`