import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";
import { RadioButton } from "react-native-paper";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [coffeePreference, setCoffeePreference] = useState("yes");

  // Reset state manually on app start
  useEffect(() => {
    setName("");
    setAge("");
    setCoffeePreference("yes");
  }, []);

  const handleSubmit = () => {
    const coffeeMessage =
      coffeePreference === "yes" ? "like" : "dislike";

    Alert.alert(
      "Summary",
      `My name is ${name}, I am ${age} years old, I ${coffeeMessage} coffee.`
    );
  };

  return (
    <View style={styles.container}>
      {/* Name Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter Name"
        />
      </View>

      {/* Age Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your Age:</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          placeholder="Enter Age"
        />
      </View>

      {/* COFFEE PREFERENCE */}
      <View style={styles.radioContainer}>
        <Text style={styles.label}>Like Coffee?</Text>
        <View style={styles.radioGroup}>
          <RadioButton
            value="yes"
            status={
              coffeePreference === "yes" ? "checked" : "unchecked"
            }
            onPress={() => setCoffeePreference("yes")}
          />
          <Text>Yes</Text>

          <RadioButton
            value="no"
            status={
              coffeePreference === "no" ? "checked" : "unchecked"
            }
            onPress={() => setCoffeePreference("no")}
          />
          <Text>No</Text>
        </View>
      </View>

      {/* SUBMIT BUTTON */}
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 70,
    backgroundColor: "#ADD8E6",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    width: 100,
    fontSize: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    flex: 1,
    backgroundColor: "white",
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
  },
});
