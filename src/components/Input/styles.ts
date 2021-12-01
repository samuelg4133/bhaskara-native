import styled from "styled-components/native";

export const Container = styled.View`
  width: 80%;
  height: 60px;
  padding-left: 16px;
  overflow: hidden;
  margin-bottom: 5px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #333;
  flex-direction: row;
  align-items: center;
`;

export const BaseTextInput = styled.TextInput`
  flex: 1;
  color: #333;
  font-size: 16px;
`;

export const Label = styled.View`
  background-color: #fff;
  height: 100%;
  width: 40px;
  align-items: center;
  justify-content: center;
`;
