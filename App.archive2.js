import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column",
        },
      ]}
    >
      <View
        style={{ flex: 2, backgroundColor: "red", height: "20" }}
      />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 2, backgroundColor: "green" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
