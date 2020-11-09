import { View, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

interface LoginScreenProps {}

export const LoginScreen = React.memo<LoginScreenProps>((props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Button mode="contained" style={styles.button}>
          Login
        </Button>
        <Button style={styles.button}>Im button</Button>
      </View>
    </View>
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
