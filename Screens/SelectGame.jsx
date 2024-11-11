import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SelectGame = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.SAV}>
      <View style={styles.BigBox}>
        <View style={styles.Box}>
          <TouchableOpacity onPress={() => navigation.navigate("AvatarSelect")}>
            <Text style={styles.Titel}>Game: Master of Magic</Text>
          </TouchableOpacity>
          <View style={styles.Picture}>
            <Text style={{ fontSize: 16, color: "#fff", alignSelf: "center" }}>
              Insert Picture Here/ Click title to Start
            </Text>
          </View>
        </View>
        <View style={styles.Box}>
          <TouchableOpacity
            onPress={() => navigation.navigate("AdventureStart")}
          >
            <Text style={styles.Titel2}>Game: The Undead Tide</Text>
          </TouchableOpacity>
          <View style={styles.Picture}>
            <Text style={{ fontSize: 16, color: "#fff", alignSelf: "center" }}>
              Insert Picture Here/ Click title to Start
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectGame;
const styles = StyleSheet.create({
  SAV: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  Titel: {
    color: "#fff",
    textShadowColor: "#c026d3",
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 3,
    fontSize: 30,
    marginTop: "5%",
    alignSelf: "center",
  },
  Titel2: {
    color: "#fff",
    textShadowColor: "#c026d3",
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 3,
    fontSize: 30,
    alignSelf: "center",
    marginTop: "5%",
  },
  BigBox: {
    flex: 1,
    borderColor: "#fff",
    borderWidth: 2,
  },
  Box: {
    flex: 1,
    borderColor: "#fff",
    borderWidth: 1,
    marginHorizontal: "10%",
    marginVertical: "5%",
  },
  Picture: {
    flex: 1,
    borderColor: "#fff",
    borderWidth: 1,
    marginHorizontal: "10%",
    marginVertical: "5%",
    justifyContent: "center",
  },
});
