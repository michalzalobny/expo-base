import { StackCardInterpolationProps } from "@react-navigation/stack";
import { TransitionSpec } from "@react-navigation/stack/lib/typescript/src/types";
import { Easing } from "react-native";

export const forFadeConfig = {
  completeDuration: 300,
  secondPartDuration: 200,
};

type ForFadeTransitionSpecs = {
  open: TransitionSpec;
  close: TransitionSpec;
};

export const forFadeTransitionSpec: ForFadeTransitionSpecs = {
  open: {
    animation: "timing",
    config: {
      duration: forFadeConfig.completeDuration,
      easing: Easing.ease,
    },
  },
  close: {
    animation: "timing",
    config: {
      duration: forFadeConfig.completeDuration,
      delay: forFadeConfig.completeDuration / 2,
      easing: Easing.ease,
    },
  },
};

export const forFadeSpringConfig = {
  useNativeDriver: true,
  stiffness: 1500,
  damping: 100,
  mass: 3,
  restDisplacementThreshold: 0.01,
  restSpeedThreshold: 0.01,
};

export const forFade = ({
  current,
  next,
  inverted,
  layouts: { screen },
}: StackCardInterpolationProps) => {
  const fadeOut = current.progress.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
    extrapolate: "clamp",
  });

  return {
    containerStyle: {
      opacity: fadeOut,
    },
  };
};
