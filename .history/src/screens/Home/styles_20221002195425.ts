import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#131016",
  },
  eventName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6b62b6",
    fontSize: 16,
  },

  eventInput: {
    backgroundColor: "#1f1e25",
    color: "#FFF",
    height: 56,
    width: 56,
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    //justifyContent: "space-between",
  },
});
