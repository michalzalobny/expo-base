import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { IconProps } from "react-native-paper/lib/typescript/src/components/MaterialCommunityIcon";
import { PathConfigMap } from "@react-navigation/native";

import {
  CustomBottomNav,
  TabItem,
} from "components/CustomBottomNav/CustomBottomNav";

import { DiscoverScreen } from "screens/DiscoverScreen/DiscoverScreen";
import { FollowingScreen } from "screens/FollowingScreen/FollowingScreen";
import { SCREEN_NAME as DISCOVER_SCREEN_NAME } from "screens/DiscoverScreen/constants";
import { SCREEN_NAME as FOLLOWING_SCREEN_NAME } from "screens/FollowingScreen/constants";

import { forFade, forFadeTransitionSpec } from "../animations/forFade";

export const homeStackLinking: PathConfigMap = {
  [DISCOVER_SCREEN_NAME]: "discover",
  [FOLLOWING_SCREEN_NAME]: "following",
};

interface HomeStackProps {}

export const HomeStack = React.memo<HomeStackProps>((props) => {
  const tabItems: TabItem[] = [
    {
      name: DISCOVER_SCREEN_NAME,
      component: DiscoverScreen,
      buttonIcon: (iconProps: IconProps) => (
        <Ionicons {...iconProps} name="md-people" />
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
      name: FOLLOWING_SCREEN_NAME,
      component: FollowingScreen,
      buttonIcon: (iconProps: IconProps) => (
        <AntDesign {...iconProps} name="find" />
      ),
      options: {
        headerShown: true,
        animationEnabled: true,
        cardStyleInterpolator: forFade,
        title: "Following",
        transitionSpec: forFadeTransitionSpec,
      },
    },
  ];
  return (
    <>
      <CustomBottomNav
        initialRouteName={DISCOVER_SCREEN_NAME}
        tabItems={tabItems}
      />
    </>
  );
});
