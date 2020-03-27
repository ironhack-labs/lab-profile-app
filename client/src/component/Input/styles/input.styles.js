import styled from "styled-components";

export const InputText = styled.input`
  display: block;
  margin-bottom: 20px;
  width: 100%;
  &.error {
    border: 1px solid red;
  }
`;

export const LabelText = styled.label`
  display: block;
  margin-bottom: 7px;
  width: 100%;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 13px;
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: -19px;
`;
