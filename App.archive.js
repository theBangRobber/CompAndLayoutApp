import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import monkeyPng from "./assets/monkey.png";
import { useState } from "react";

function App() {
  const [text, setText] = useState("placeholder");
  return (
    <ScrollView>
      <Text style={{ fontSize: 50, fontWeight: 500, color: "red" }}>
        Hello Smile
      </Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2wcpqmDDUjViB6TEfWO-hxzaf5cwENejaQ&usqp=CAU",
        }}
      ></Image>
      <Image fadeDuration={5000} source={monkeyPng}></Image>
      <TextInput
        style={styles.input}
        value={text}
        onChange={(text) => {
          setText(text);
        }}
      ></TextInput>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 500,
    width: 500,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
