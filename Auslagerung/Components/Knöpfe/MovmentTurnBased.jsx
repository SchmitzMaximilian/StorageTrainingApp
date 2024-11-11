import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MovmentTurnBased = (props) => {
  const movebox = (key) => {
    props.SC((prev) => prev - 1);
    let change;
    switch (key) {
      case 1:
        if (props.verti < 1070) {
          change = props.verti + 20;
          props.SV(change);
        }
        break;
      case 2:
        if (props.verti > 20) {
          change = props.verti - 20;
          props.SV(change);
        }
        break;
      case 3:
        if (props.hori < 750) {
          change = props.hori + 20;
          props.SH(change);
        }
        break;
      case 4:
        if (props.hori > 20) {
          change = props.hori - 20;
          props.SH(change);
        }
        break;
      case 5:
        props.SV(10);
        props.SH(10);
        break;
    }
  };
  return (
    <View>
      <View style={styles.Row}>
        <TouchableOpacity onPress={() => movebox(5)}>
          <View style={styles.Rahmen}>
            <Text style={{ color: "#fff" }}>Teleport</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => movebox(4)}>
          <View style={styles.Rahmen}>
            <Text style={{ color: "#fff" }}>LEFT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => movebox(2)}>
          <View style={styles.Rahmen}>
            <Text style={{ color: "#fff" }}>UP</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => movebox(1)}>
          <View style={styles.Rahmen}>
            <Text style={{ color: "#fff" }}>DOWN</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => movebox(3)}>
          <View style={styles.Rahmen}>
            <Text style={{ color: "#fff" }}>RIGHT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Rahmen: {
    borderColor: "#fff",
    borderWidth: 2,
    marginHorizontal: 15,
    paddingVertical: 5,
    width: 100,
    alignItems: "center",
  },
  Row: {
    flexDirection: "row",
  },
});
export default MovmentTurnBased;
