import { View, StyleSheet, Animated } from "react-native";
import React, { useRef } from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  forFadeConfig,
  forFadeSpringConfig,
} from "navigation/animations/forFade";

interface LoginScreenProps {}

export const LoginScreen = React.memo<LoginScreenProps>((props) => {
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
      style={[styles.wrapper, { transform: [{ scale: scaleAnim }] }]}
    >
      <View style={styles.content}>
        <Button mode="contained" style={styles.button}>
          Login
        </Button>
        <Button style={styles.button}>Im button</Button>
      </View>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  button: {
    margin: 8,
  },
  content: {
    flex: 1,
    padding: 8,
    width: "80%",
    justifyContent: "flex-end",
  },
  wrapper: {
    backgroundColor: "yellow",
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
});
