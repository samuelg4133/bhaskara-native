import React, { forwardRef } from "react";

import { TextInputProps, Text, TextInput } from "react-native";

import { Container, Label, BaseTextInput } from "./styles";

interface InputProps extends TextInputProps {
  label: string;
}

const Input = forwardRef<TextInput, InputProps>(({ label, ...props }, ref) => (
  <Container>
    <BaseTextInput {...props} ref={ref} />
    <Label>
      <Text
        style={{
          fontWeight: "bold",
        }}
      >
        {label.toUpperCase()}
      </Text>
    </Label>
  </Container>
));

export default Input;
