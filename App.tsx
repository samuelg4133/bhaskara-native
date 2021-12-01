import React from "react";

import { Calculator } from "./src/screens/Calculator";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bhaskara" component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
