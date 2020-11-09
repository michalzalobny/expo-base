import React from "react";

import { NavigationContainer, LinkingOptions } from "@react-navigation/native";
import { RootStack } from "navigation/RootStack/RootStack";

export default function App() {
  const linking: LinkingOptions = {
    prefixes: ["https://testadres.com", "testadres://"],
  };
  return (
    <NavigationContainer linking={linking}>
      <RootStack></RootStack>
    </NavigationContainer>
  );
}
