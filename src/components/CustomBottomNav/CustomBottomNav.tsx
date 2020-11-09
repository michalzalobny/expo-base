import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { useRoute, useNavigation } from "@react-navigation/native";
import { IconProps } from "react-native-paper/lib/typescript/src/components/MaterialCommunityIcon";
import { IconSource } from "react-native-paper/lib/typescript/src/components/Icon";

interface CustomBottomNavProps {
  tabItems: TabItem[];
  parentRoute: RouteProp<ParamListBase, keyof ParamListBase>;
  initialRouteName: string;
}

export interface TabItem {
  name: string;
  component: React.FunctionComponent<unknown>;
  buttonIcon?: (iconProps: IconProps) => React.ReactNode;
  options?: StackNavigationOptions;
}

export const CustomBottomNav = React.memo<CustomBottomNavProps>((props) => {
  const { tabItems, parentRoute, initialRouteName } = props;
  const { navigate } = useNavigation();
  const route = useRoute();
  const [currentStack, setCurrentStack] = useState(null);
  const Stack = createStackNavigator();

  useEffect(() => {
    // @ts-ignore
    if (parentRoute.state === undefined) {
      navigate(initialRouteName);
    } else {
      // @ts-ignore
      const nestedRoutes = route.state.routes;
      const clickedStack = nestedRoutes[nestedRoutes.length - 1].name;
      tabItems.forEach((tab) => {
        if (tab.name === clickedStack) {
          setCurrentStack(clickedStack);
        }
      });
    }
  }, [parentRoute]);

  const stackTabs = tabItems.map((tab) => {
    return (
      <Stack.Screen
        key={tab.name}
        name={tab.name}
        component={tab.component}
        options={tab.options}
      />
    );
  });

  const stackButtons = tabItems.map((tab) => {
    return (
      <View key={tab.name}>
        {/* <tab.buttonIcon /> */}
        <Button
          color={tab.name === currentStack ? "green" : "red"}
          uppercase={false}
          onPress={() => navigate(tab.name)}
          icon={tab.buttonIcon as IconSource}
        >
          {tab.options?.title || tab.name}
        </Button>
      </View>
    );
  });

  return (
    <>
      <Stack.Navigator initialRouteName={initialRouteName}>
        {stackTabs}
      </Stack.Navigator>
      <View
        style={{
          backgroundColor: "pink",
          flexDirection: "row",
          justifyContent: "center",
          padding: 5,
        }}
      >
        {stackButtons}
      </View>
    </>
  );
});
