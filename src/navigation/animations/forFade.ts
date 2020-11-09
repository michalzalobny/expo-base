import { StackCardInterpolationProps } from "@react-navigation/stack";
import { TransitionSpec } from "@react-navigation/stack/lib/typescript/src/types";

export const forFadeConfig = {
  completeDuration: 300,
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
  stiffness: 1800,
  damping: 100,
  mass: 5,
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
