import { View, Text,Pressable,StyleSheet } from "react-native";

export function GoalItem(props) {

  function deleteGoalHandler(id) {
    props.onDeleteGoal(id);
  }  
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => deleteGoalHandler(props.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    padding: 10,
    borderRadius: 5,
  },
  goalText: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});