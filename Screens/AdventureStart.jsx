import React, { useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const AdventureStart = ({ navigation }) => {
  const [AdventureSaves, setAdventureSaves] = useState([]);

  const lookforSavefile = async () => {
    try {
      const request = {
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: 12 }),
      };
      const reply = await fetch(
        "http://192.168.2.44/datenbankapi/MagicStuff/indexmagic.php",
        request
      );
      let data = await reply.json();
      console.log(await data);
      setAdventureSaves(data);
    } catch (err) {
      console.log(err);
    }
  };

  const selectedSave = (index) => {
    let Infoarr = [
      AdventureSaves[index][1],
      AdventureSaves[index][2],
      AdventureSaves[index][3],
      AdventureSaves[index][4],
      AdventureSaves[index][5],
    ];
    navigation.navigate("AvatarSummery", {
      AvID: AdventureSaves[index][6],
      AN: AdventureSaves[index][0],
      InfoArray: Infoarr,
    });
  };
  useEffect(() => {
    lookforSavefile();
  }, []);
  return (
    <SafeAreaView style={styles.SAV}>
      <View style={styles.BigBox}>
        <Text style={styles.Titel}>Continue an Adventure</Text>
        <View style={styles.Box}>
          {AdventureSaves.length > 0 ? (
            AdventureSaves.map((item, index) => (
              <TouchableOpacity
                key={"Savefile " + index}
                onPress={() => selectedSave(index)}
              >
                <View key={"Option " + index} style={styles.Auswahlfeld}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingHorizontal: 5,
                    }}
                  >
                    <Text style={styles.text}>Avatar Name:</Text>
                    <Text style={styles.text}>{item[0]}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingHorizontal: 5,
                    }}
                  >
                    <Text style={styles.text}>Rasse:</Text>
                    <Text style={styles.text}>{item[1]}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingHorizontal: 5,
                    }}
                  >
                    <Text style={styles.text}>Klasse:</Text>
                    <Text style={styles.text}>{item[2]}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingHorizontal: 5,
                    }}
                  >
                    <Text style={styles.text}>Hitpoints:</Text>
                    <Text style={styles.text}>{item[3]}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingHorizontal: 5,
                    }}
                  >
                    <Text style={styles.text}>Mana:</Text>
                    <Text style={styles.text}>{item[4]}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingHorizontal: 5,
                    }}
                  >
                    <Text style={styles.text}>Killcount:</Text>
                    <Text style={styles.text}>{item[5]}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <>
              <View style={styles.Auswahlfeld}>
                <Text style={styles.text}>Empty Savefileslot</Text>
              </View>
              <View style={styles.Auswahlfeld}>
                <Text style={styles.text}>Empty Savefileslot</Text>
              </View>
              <View style={styles.Auswahlfeld}>
                <Text style={styles.text}>Empty Savefileslot</Text>
              </View>
              <View style={styles.Auswahlfeld}>
                <Text style={styles.text}>Empty Savefileslot</Text>
              </View>
              <View style={styles.Auswahlfeld}>
                <Text style={styles.text}>Empty Savefileslot</Text>
              </View>
            </>
          )}
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AvatarCreation", { AvID: "", AN: "Name" })
          }
        >
          <Text style={styles.Titel2}>Start a new Adventure</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  SAV: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  text: {
    color: "#fff",
    fontSize: 15,
    paddingVertical: 5,
  },
  Auswahlfeld: {
    borderColor: "#fff",
    borderWidth: 1,
    width: 250,
    height: "auto",
    margin: 5,
    padding: 10,
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
    fontSize: 25,
    alignSelf: "center",
    marginBottom: "5%",
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
    flexWrap: "wrap",
  },
});
export default AdventureStart;
