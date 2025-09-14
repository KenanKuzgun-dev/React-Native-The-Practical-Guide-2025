import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { useState } from "react";

export function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredGoalText) {
    setEnteredGoalText(enteredGoalText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          placeholder="Enter your goal"
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" onPress={props.onCancel} color="#f31282"  />
          <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    alignItems: "center",
    borderBottomColor: "#e4d0ff",
    borderBottomWidth: 1,
    flex: 1,
    backgroundColor: "#1a0b2e",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "80%",
    padding: 10,
    height: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
  },
});
