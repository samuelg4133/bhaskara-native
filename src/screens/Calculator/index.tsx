import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { parseInFloat } from "../../utils/filterNumber";

import { Container } from "./styles";
import { bhaskara, delta } from "../../services/bhaskara";
import { Alert, Text } from "react-native";
import { Result } from "../../components/Result";

export function Calculator(): JSX.Element {
  const [valueA, setValueA] = useState<string>("0");
  const [valueB, setValueB] = useState<string>("0");
  const [valueC, setValueC] = useState<string>("0");

  const [valueX, setValueX] = useState<string>("");
  const [valueY, setValueY] = useState<string>("");

  function handleSubmit() {
    try {
      if (valueA === "" || valueB === "" || valueC === "") {
        Alert.alert("Preencha corretamente todos os campos!");
        return;
      }
      const res = bhaskara({
        a: parseInFloat(valueA),
        b: parseInFloat(valueB),
        c: parseInFloat(valueC),
      });

      setValueX(res.x.toString());
      setValueY(res.y.toString());
    } catch {
      Alert.alert("Não há raízes para a equação!");
      setValueX("");
      setValueY("");
    }
  }

  return (
    <Container>
      <Input
        placeholder="Digite o valor de A"
        label="A"
        keyboardType="numeric"
        value={String(valueA)}
        onChangeText={(t) => setValueA(t)}
      />
      <Input
        placeholder="Digite o valor de B"
        label="B"
        keyboardType="numeric"
        value={String(valueB)}
        onChangeText={(t) => setValueB(t)}
      />
      <Input
        placeholder="Digite o valor de C"
        label="C"
        keyboardType="numeric"
        value={String(valueC)}
        onChangeText={(t) => setValueC(t)}
      />
      <Button text={"calcular"} onPress={handleSubmit} />
      {valueX !== "" && valueY !== "" && (
        <Result variables={[`x1: ${valueX}`, `x2: ${valueY}`]}></Result>
      )}
    </Container>
  );
}
