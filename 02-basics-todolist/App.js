import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import { GoalInput } from "./components/GoalInput";
import { GoalItem } from "./components/GoalItem";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  function addGoalHandler(enteredGoalText) {
    setGoalList((currentGoalList) => [
      ...currentGoalList,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    closeModalHandler();
  }
  function deleteGoalHandler(id) {
    setGoalList((currentGoalList) => {
      return currentGoalList.filter((goal) => goal.id !== id);
    });
  }
  function openAddGoalModal() {
    setModalVisible(true);
  }

  function closeModalHandler() {
    setModalVisible(false);
  }

  function clearAllGoalsHandler() {
    setGoalList([]);
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={openAddGoalModal}
              color="#b180f0"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Clear All"
              onPress={clearAllGoalsHandler}
              color="#f31282"
              disabled={goalList.length===0}
            />
          </View>
        </View>
        <GoalInput
          onAddGoal={addGoalHandler}
          onCancel={closeModalHandler}
          visible={modalVisible}
        />
        <View style={styles.goalListContainer}>
          <FlatList
            data={goalList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <GoalItem item={item} onDeleteGoal={deleteGoalHandler} />;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#1a0b2e",
  },
  goalListContainer: {
    flex: 5,
    marginTop:30
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap:10
  },
  button: {
    flex: 1,
  },
});
