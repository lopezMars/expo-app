import { View, Text, StyleSheet } from "react-native";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Tasks</Text>

      <Text style={styles.subtitle}>
        Your completed tasks will appear here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
});