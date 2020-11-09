import { View, StyleSheet, Animated } from "react-native";
import React, { useRef } from "react";
import { Button } from "react-native-paper";

interface LoginScreenProps {}

export const LoginScreen = React.memo<LoginScreenProps>((props) => {
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

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
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
});
