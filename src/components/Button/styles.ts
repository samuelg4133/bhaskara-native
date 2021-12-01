import styled from "styled-components/native";

export const Container = styled.View`
  width: 80%;
  height: 60px;
  margin: 20px 0;
  border-radius: 10px;
  border-width: 4px;
  background-color: #0000ff;
  border-color: #334eff;
  flex-direction: row;
`;

export const Base = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 18px;
  flex: 1;
  text-align: center;
`;
