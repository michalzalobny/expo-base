import { ParamListBase, RouteProp } from "@react-navigation/native";
import React from "react";

import {
  CustomBottomNav,
  TabItem,
} from "components/CustomBottomNav/CustomBottomNav";

import { DiscoverScreen } from "screens/DiscoverScreen/DiscoverScreen";
import { forFade, forFadeTransitionSpec } from "../animations/forFade";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { IconProps } from "react-native-paper/lib/typescript/src/components/MaterialCommunityIcon";

interface HomeStackProps {
  route: RouteProp<ParamListBase, keyof ParamListBase>;
}

export const HomeStack = React.memo<HomeStackProps>((props) => {
  const { route } = props;

  const tabItems: TabItem[] = [
    {
      name: "following",
      component: DiscoverScreen,
      buttonIcon: (iconProps: IconProps) => (
        <Ionicons {...iconProps} name="md-people" />
      ),
      options: {
        headerShown: false,
        animationEnabled: true,
        cardStyleInterpolator: forFade,
        title: "Following",
        transitionSpec: forFadeTransitionSpec,
      },
    },
    {
      name: "settings",
      component: DiscoverScreen,
      buttonIcon: (iconProps: IconProps) => (
        <AntDesign {...iconProps} name="find" />
      ),
      options: {
        headerShown: false,
        animationEnabled: true,
        cardStyleInterpolator: forFade,
        title: "Discover",
        transitionSpec: forFadeTransitionSpec,
      },
    },
    {
      name: "discover",
      component: DiscoverScreen,
      buttonIcon: (iconProps: IconProps) => (
        <Feather {...iconProps} name="settings" />
      ),
      options: {
        headerShown: false,
        animationEnabled: true,
        cardStyleInterpolator: forFade,
        title: "Profile",
        transitionSpec: forFadeTransitionSpec,
      },
    },
  ];
  return (
    <>
      <CustomBottomNav
        initialRouteName="discover"
        parentRoute={route}
        tabItems={tabItems}
      />
    </>
  );
});
