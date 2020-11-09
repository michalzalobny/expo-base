import { Animated, Text } from "react-native";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  forFadeConfig,
  forFadeSpringConfig,
} from "navigation/animations/forFade";

interface DiscoverScreenProps {}

export const DiscoverScreen = React.memo<DiscoverScreenProps>((props) => {
  const navigation = useNavigation();

  const INITIAL_SCALE_ANIM = 0.8;
  const FINAL_SCALE_ANIM = 1;
  const scaleAnim = useRef(new Animated.Value(INITIAL_SCALE_ANIM)).current;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      Animated.spring(scaleAnim, {
        ...forFadeSpringConfig,
        useNativeDriver: true,
        toValue: INITIAL_SCALE_ANIM,
      }).start();
    });
    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      const x = Animated.timing(scaleAnim, {
        toValue: INITIAL_SCALE_ANIM,
        duration: 0,
        useNativeDriver: true,
        delay: forFadeConfig.completeDuration,
      });
      const y = Animated.spring(scaleAnim, {
        ...forFadeSpringConfig,
        toValue: FINAL_SCALE_ANIM,
        useNativeDriver: true,
      });
      Animated.sequence([x, y]).start();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "violet",
        transform: [{ scale: scaleAnim }],
      }}
    >
      <Text>Discover screen</Text>
    </Animated.View>
  );
});
