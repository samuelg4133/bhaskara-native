import React from "react";
import { Container, Small, Text } from "./styles";

type ResultProps = {
  variables: Array<string>;
};

export function Result({ variables }: ResultProps): JSX.Element {
  return (
    <Container>
      <Text>Resultado: </Text>
      {variables.map((item, index) => {
        return <Small key={index}>{item}</Small>;
      })}
    </Container>
  );
}
