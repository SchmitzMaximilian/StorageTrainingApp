import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, View } from "react-native";
const Mappicker = (props) => {
  let Mapname = [
    "Spielwiese",
    "IntervalTraining",
    "Goblinforest",
    "Boneyard",
    "Spielwiese2",
    "Graveyard",
    "Graveyard2",
    "DefendFogTown",
    "Attributvergabe",
    "Test1",
    "BossfightCombatSeite",
    "Necropolis",
    "Combat",
    "TestMe",
    "AvatarCreation",
    "AvatarSummery",
    "TurnBasedTest",
  ];
  const [AuswahlOptionZahl, setAuswahlOptionZahl] = useState(0);

  const selectionHandler = (itemValue) => {
    setAuswahlOptionZahl(itemValue);
    switch (itemValue) {
      case 0:
        props.navigation.navigate("Spielwiese");
        break;
      case 1:
        props.navigation.navigate("IntervalTraining");
        break;
      case 2:
        props.navigation.navigate("Goblinforest");
        break;
      case 3:
        props.navigation.navigate("Boneyard");
        break;
      case 4:
        props.navigation.navigate("Spielwiese2");
        break;
      case 5:
        props.navigation.navigate("Graveyard");
        break;
      case 6:
        props.navigation.navigate("Graveyard2");
        break;
      case 7:
        props.navigation.navigate("DefendFogTown");
        break;
      case 8:
        props.navigation.navigate("Attributvergabe", { CharID: props.AvID });
        break;
      case 9:
        props.navigation.navigate("Test1");
        break;
      case 10:
        props.navigation.navigate("BossfightCombatSeite");
        break;
      case 11:
        props.navigation.navigate("Necropolis");
        break;
      case 12:
        props.navigation.navigate("Combat");
        break;
      case 13:
        props.navigation.navigate("TestMe");
        break;
      case 14:
        props.navigation.navigate("AvatarCreation");
        break;
      case 15:
        props.navigation.navigate("AvatarSummery");
        break;
      case 16:
        props.navigation.navigate("TurnBasedTest");
        break;
    }
  };
  return (
    <View>
      <Text style={styles.Textelemente}>"Wähle eine Zonenmap"</Text>
      <View style={{ borderColor: "#fff", borderWidth: 1 }}>
        <Picker
          style={{ color: "#FFF", backgroundColor: "grey" }}
          dropdownIconColor={"#FFF"}
          selectedValue={AuswahlOptionZahl}
          onValueChange={(itemValue, itemIndex) => selectionHandler(itemValue)}
        >
          {Mapname.length > 0 &&
            Mapname.map((item, index) => (
              <Picker.Item
                key={"Elementtype " + item}
                color="#000"
                label={item}
                value={index}
              />
            ))}
        </Picker>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Textelemente: {
    color: "#fff",
    padding: 5,
    marginVertical: 5,
  },
});
export default Mappicker;
