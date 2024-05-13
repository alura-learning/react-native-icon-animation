import React, { useRef, useEffect } from 'react';
import { Text, View, Button, StyleSheet, } from "react-native";
import { Feather } from "@expo/vector-icons";
import LottieView from 'lottie-react-native';

export default function Index() {

  const animation = useRef(null);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Ícone com expo/vector-icons</Text>
      <Feather name="play" size={60} color="black" />

      <Text>Ícone com expo/vector-icons</Text>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 400,
          height: 400,
          backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../assets/meditation-animation.json')}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Restart Animation"
          onPress={() => {
            animation.current?.reset();
            animation.current?.play();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});