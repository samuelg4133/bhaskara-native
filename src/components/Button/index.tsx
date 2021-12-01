import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Base, Container, Text } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <Container>
      <Base {...props}>
        <Text>{text.toUpperCase()}</Text>
      </Base>
    </Container>
  );
};

export default Button;
