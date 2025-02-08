import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { RadioButton } from "react-native-paper";
// import { RadioGroup } from "react-native-radio-buttons-group";

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
    <SafeAreaView style={styles.container}>
      {/* NAME INPUT */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter Name"
        />
      </View>

      {/* AGE INPUT */}
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
        <RadioButton.Group
          onValueChange={(value) => setCoffeePreference(value)}
          value={coffeePreference}
        >
          <View style={styles.radioGroup}>
            <RadioButton value="yes" styles={styles.radioButton} />
            <Text>Yes</Text>
            <RadioButton value="no" styles={styles.radioButton} />
            <Text>No</Text>
          </View>
        </RadioButton.Group>
      </View>

      {/* SUBMIT BUTTON */}
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </SafeAreaView>
  );
}

// STYLES
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ADD8E6",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
    marginBottom: 10,
  },
  label: {
    width: 100,
    fontSize: 15,
    marginLeft: 12,
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
    marginBottom: 10,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {},
  button: {
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
  },
});
