import { View, StyleSheet, Animated } from "react-native";
import React, { useRef } from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { forFadeConfig } from "navigation/animations/forFade";

interface DiscoverScreenProps {}

export const DiscoverScreen = React.memo<DiscoverScreenProps>((props) => {
  const navigation = useNavigation();

  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      Animated.timing(scaleAnim, {
        toValue: 0.5,
        duration: forFadeConfig.secondPartDuration,
        useNativeDriver: true,
      }).start();
    });
    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: forFadeConfig.secondPartDuration,
        delay: forFadeConfig.secondPartDuration,
        useNativeDriver: true,
      }).start();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <Animated.View
      style={[styles.wrapper, { transform: [{ scale: scaleAnim }] }]}
    >
      <View style={styles.content}>
        <Button mode="contained" style={styles.button}>
          Discover
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
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
});
