import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { addEmploySchema } from "../AddEmploySchema";
const initialValues = {
  firstName: "",
  lastName: "",
  title: "",
  department: "",
  hiringDate: "",
  currentSellery: "",
  note: "",
};
const AddEmployModal = () => {
  const [isTrue, setIsTrue] = useState(true);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: addEmploySchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  console.log(errors);

  return (
    <>
      {isTrue && (
        <ModalContainer>
          <CustomModal>
            <HeadersWrapper>
              <IconWrapper>
                <Image src="/images/addEmploy.svg" alt="cross icon" />
                <IconText>Add Employee</IconText>
              </IconWrapper>
              <CrossIconWrapper onClick={() => setIsTrue(false)}>
                <CrossImage src="/images/cross_icon.svg" alt="cross icon" />
              </CrossIconWrapper>
            </HeadersWrapper>
            <Form onSubmit={handleSubmit}>
              <FormWrapper>
                <InputWrapper>
                  <Label htmlFor="firstName">First Name*</Label>
                  <Input
                    type="text"
                    name="firstName"
                    autoComplete="off"
                    id="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.firstName && touched.firstName ? (
                    <Message>{errors.firstName}</Message>
                  ) : null}
                </InputWrapper>
                <InputWrapper>
                  <Label htmlFor="lastName">Last Name*</Label>
                  <Input
                    type="text"
                    name="lastName"
                    autoComplete="off"
                    id="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lastName && touched.lastName ? (
                    <Message>{errors.lastName}</Message>
                  ) : null}
                </InputWrapper>
              </FormWrapper>
              <FormWrapper>
                <InputWrapper>
                  <Label htmlFor="title">Title*</Label>
                  <Input
                    type="text"
                    name="title"
                    autoComplete="off"
                    id="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.title && touched.title ? (
                    <Message>{errors.title}</Message>
                  ) : null}
                </InputWrapper>
                <InputWrapper>
                  <Label htmlFor="department">Department</Label>
                  <Input
                    type="text"
                    name="department"
                    autoComplete="off"
                    id="department"
                    value={values.department}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.department && touched.department ? (
                    <Message>{errors.department}</Message>
                  ) : null}
                </InputWrapper>
                <InputWrapper>
                  <Label htmlFor="hiringDate">Date Of Hire</Label>
                  <Input
                    type="text"
                    name="hiringDate"
                    autoComplete="off"
                    id="hiringDate"
                    value={values.hiringDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.hiringDate && touched.hiringDate ? (
                    <Message>{errors.hiringDate}</Message>
                  ) : null}
                </InputWrapper>{" "}
                <InputWrapper>
                  <Label htmlFor="currentSellery">Current Salary</Label>
                  <Input
                    type="number"
                    name="currentSellery"
                    autoComplete="off"
                    id="currentSellery"
                    value={values.currentSellery}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.currentSellery && touched.currentSellery ? (
                    <Message>{errors.currentSellery}</Message>
                  ) : null}
                </InputWrapper>
              </FormWrapper>
              <FormWrapper>
                <NoteWrapper>
                  <Label htmlFor="note">Note</Label>
                  <TextArea
                    type="textArea"
                    name="note"
                    autoComplete="off"
                    id="note"
                    value={values.note}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.note && touched.note ? (
                    <Message>{errors.note}</Message>
                  ) : null}
                </NoteWrapper>
              </FormWrapper>
              <ButtonsWrapper>
                <CancelButton onClick={() => setIsTrue(false)}>
                  Cancel
                </CancelButton>
                <AddButton type="submit">Add</AddButton>
              </ButtonsWrapper>
            </Form>
          </CustomModal>
        </ModalContainer>
      )}
    </>
  );
};
export default AddEmployModal;

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
  background: rgba(0, 0, 0, 0.5);
`;
const HeadersWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #feab3d;
  padding-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const IconText = styled.h2`
  font-size: 1rem;
  padding-top: 0.4rem;
  font-family: "Poppins";
  font-weight: 500;
  margin: 0;
`;
const CrossIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const Image = styled.img`
  cursor: pointer;
`;
const CustomModal = styled.div`
  padding: 1rem;
  min-width: 835px;
  height: auto;
  width: 40%;
  background: #ffff;

  border-radius: 8px;
`;
const FormWrapper = styled.div`
  display: flex;
  width: 99.5%;
  height: 100%;
  margin-top: 0.8rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const Input = styled.input`
  width: 100%;
  min-height: 36px;
  margin-top: 0.5rem;
  height: 100%;
  border: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  &:focus {
    outline: none;
    outline: 1px solid gray;
    border-radius: 4px;
  }
`;
const Label = styled.label`
  display: block;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;
const Form = styled.form``;
const InputWrapper = styled.div`
  width: calc(50% - 1.2rem);
  height: 100%;
`;
const NoteWrapper = styled.div`
  width: 100%;
  height: 15vh;
`;
const TextArea = styled.textarea`
  width: calc(100% - 2rem);
  height: calc(100% - 4rem);
  border: none;
  font-family: "Poppins";
  padding: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
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
const CancelButton = styled.button`
  border: none;
  background-color: transparent;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #1271a6;
  text-transform: uppercase;
  width: 50px;
  height: 36px;
  &:hover {
    color: #075480;
  }
`;
const AddButton = styled.button`
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
const CrossImage = styled.img`
  fill: red;
`;
const Message = styled.p`
  color: red;
`;
