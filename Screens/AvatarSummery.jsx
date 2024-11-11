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
import Mappicker from "../Auslagerung/functions/Gadgets/Mappicker";
import AvatarName from "../Auslagerung/Components/ModalSeiten/ModalAdventure/AvatarName";

const AvatarSummery = (props) => {
  const [AvatarID, setAvatarID] = useState(props?.route.params.AvID);
  const [topmodal, settopmodal] = useState(false);
  const [topmodal1, settopmodal1] = useState(false);
  const [name, setname] = useState(props?.route.params.AN);
  const [AvInfo, setAvInfo] = useState(props?.route.params.InfoArray);
  const [Skillset, setSkillset] = useState([]);

  console.log("Info");
  console.log(AvInfo);
  console.log(AvatarID);
  console.log(Skillset);

  const getSkillset = async () => {
    console.log(AvInfo[1]);
    let addarr = [];
    try {
      const request = {
        method: "POST",
        header: { "Content-Type": "applikation/json" },
        body: JSON.stringify({
          query: 13,
          Avatarclasse: AvInfo[1],
        }),
      };
      const reply = await fetch(
        "http://192.168.2.44/datenbankapi/MagicStuff/indexmagic.php",
        request
      );
      let data = await reply.json();
      addarr = data.ergebnis;
    } catch (err) {
      console.log(err);
    }

    try {
      const request = {
        method: "POST",
        header: { "Content-Type": "applikation/json" },
        body: JSON.stringify({
          query: 14,
          Avatarclasse: AvInfo[1],
          Avatarspezie: AvInfo[0],
        }),
      };
      const reply = await fetch(
        "http://192.168.2.44/datenbankapi/MagicStuff/indexmagic.php",
        request
      );
      let data = await reply.json();
      console.log(addarr);
      addarr.push(...data.ergebnis);
    } catch (err) {
      console.log(err);
    }
    setSkillset(addarr);
    console.log(Skillset);
  };
  useEffect(() => {
    getSkillset();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.SAV}>
        <View style={styles.Maincontainer}>
          <View style={styles.Up}>
            <TouchableOpacity onPress={() => settopmodal(true)}>
              <View style={styles.zusatz}>
                <Text style={{ color: "#fff" }}>{name}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("WIP")}>
              <View style={styles.zusatz2}>
                <Text style={{ color: "#fff" }}>WIP</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.Bildcon}></View>
          <View style={styles.Listenfeld}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 5,
              }}
            >
              <Text style={styles.text}>Hitpoints:</Text>
              <Text style={styles.text}>{AvInfo[2]}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 5,
              }}
            >
              <Text style={styles.text}>Mana:</Text>
              <Text style={styles.text}>{AvInfo[3]}</Text>
            </View>
          </View>
          <View>
            <Mappicker navigation={props.navigation} AvID={AvatarID} />
          </View>
          <View style={styles.Listenfeld2}>
            {Skillset.length > 0
              ? Skillset.map((item, index) => (
                  <Text style={styles.text}>{item[0]}</Text>
                ))
              : ""}
          </View>
          <View style={styles.Down}>
            <TouchableOpacity onPress={() => console.log("WIP")}>
              <View style={styles.zusatz}>
                <Text style={{ color: "#fff" }}>WIP</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("WIP")}>
              <View style={styles.zusatz2}>
                <Text style={{ color: "#fff" }}>WIP</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <AvatarName
          MV={topmodal}
          MVset={settopmodal}
          Avatarname={setname}
          AVN={name}
          CID={setAvatarID}
          Info={AvInfo}
        />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  SAV: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  Maincontainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1,
  },
  text: {
    color: "#fff",
    fontSize: 15,
    paddingVertical: 5,
  },
  zusatz: {
    alignSelf: "flex-start",
    borderColor: "#fff",
    borderWidth: 1,
    margin: 20,
    padding: 10,
  },
  zusatz2: {
    alignSelf: "flex-end",
    borderColor: "#fff",
    borderWidth: 1,
    margin: 20,
    padding: 10,
  },
  Down: {
    alignSelf: "stretch",
    borderColor: "#fff",
    borderWidth: 1,
    margin: 20,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Up: {
    alignSelf: "stretch",
    borderColor: "#fff",
    borderWidth: 1,
    margin: 20,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Bildcon: {
    borderColor: "#fff",
    borderWidth: 1,
    position: "absolute",
    marginTop: 150,
    left: 20,
    paddingVertical: 150,
    paddingHorizontal: 100,
  },
  Listenfeld: {
    borderColor: "#fff",
    borderWidth: 1,
    position: "absolute",
    alignSelf: "flex-end",
    marginTop: 150,
    right: 20,
    height: 275,
    width: 200,
    padding: 10,
  },
  Listenfeld2: {
    borderColor: "#fff",
    borderWidth: 1,
    position: "absolute",
    alignSelf: "flex-start",
    marginVertical: "90%",
    left: 20,
    height: 325,
    padding: 10,
    width: "95%",
    flexWrap: "wrap",
    columnGap: 50,
  },
});
/*Basics für test anordnung
    borderColor:'#fff',
    borderWidth:1,

*/
export default AvatarSummery;
