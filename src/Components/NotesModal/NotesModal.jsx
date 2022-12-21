import React, { useState } from "react";
import styled from "styled-components";

const NotesModal = ({ Heading, src, text }) => {
  const [isTrue, setIsTrue] = useState(true);
  return (
    <>
      {isTrue && (
        <ModalContainer>
          <CustomModal>
            <CrossIconWrapper onClick={() => setIsTrue(false)}>
              <CrossImage src="/images/cross_icon.svg" alt="cross icon" />
            </CrossIconWrapper>
            <Wrapper>
              <NoteWrapper>
                <TextArea type="textArea" name="note" />
              </NoteWrapper>
            </Wrapper>
            <ButtonsWrapper>
              <SaveButton type="submit">Save</SaveButton>
            </ButtonsWrapper>
          </CustomModal>
        </ModalContainer>
      )}
    </>
  );
};
export default NotesModal;

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
  width: 100%;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid #feab3d;
`;
const CrossImage = styled.img`
  cursor: pointer;
`;
const CustomModal = styled.div`
  padding: 1rem;
  min-width: 410px;
  width: 25%;
  background: #fff;
  border-radius: 8px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Icon = styled.img``;
const NoteWrapper = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  height: 100%;
`;
const TextArea = styled.textarea`
  width: calc(100% - 1rem);
  height: calc(100% - 4rem);
  border: none;
  font-family: "Poppins";
  padding: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 20px;

  &:focus {
    outline: none;
    outline: 1px solid gray;
    border-radius: 4px;
  }
`;
const ButtonsWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;
const SaveButton = styled.button`
  border: none;
  background-color: transparent;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  text-transform: uppercase;
  background: #4b8121;
  border-radius: 4px;
  width: 50px;
  height: 36px;
  transition: 0.5s ease-in-out;

  &:hover {
    background: #284f0a;
  }
`;
