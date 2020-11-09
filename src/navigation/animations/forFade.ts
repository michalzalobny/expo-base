import { StackCardInterpolationProps } from "@react-navigation/stack";
import { TransitionSpec } from "@react-navigation/stack/lib/typescript/src/types";

export const forFadeConfig = {
  completeDuration: 350,
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
    },
  },
  close: {
    animation: "timing",
    config: {
      duration: forFadeConfig.completeDuration,
      delay: forFadeConfig.completeDuration / 2,
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
    inputRange: [0, 0.5, 1], //change 0.5 for smoother animation (earlier opacity change)
    outputRange: [0, 0, 1],
    extrapolate: "clamp",
  });

  return {
    containerStyle: {
      opacity: fadeOut,
    },
  };
};
