import React, { useEffect, useState, useRef } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StackActions } from "@react-navigation/native";
import MovmentTurnBased from "../Auslagerung/Components/Knöpfe/MovmentTurnBased";
/*  const forward1 = () => {
    let walkarr = Necroarmy1;
    walkarr.forEach((e) => {
      e[0] = e[0] - 20;
    });
    setNecroarmy1(walkarr);
  };
  const forward2 = () => {
    let walkarr = Necroarmy2;
    walkarr.forEach((e) => {
      e[0] = e[0] - 20;
    });
    setNecroarmy2(walkarr);
  };
  const forward3 = () => {
    let walkarr = Necroarmy3;
    walkarr.forEach((e) => {
      e[0] = e[0] - 20;
    });
    setNecroarmy3(walkarr);
  };
 */
const generateArmy = (StartpunktX, StartpunktY, Anzahl, Abstand, isAlive) => {
  const army = [];
  for (let i = 0; i < Anzahl; i++) {
    const x = StartpunktX;
    const y = StartpunktY + i * Abstand;
    army.push([x, y, isAlive]);
  }
  return army;
};

const TurnBasedTest = ({ navigation }) => {
  const [horival, sethorival] = useState(10);
  const [vertival, setvertival] = useState(10);
  const [Necroarmy1, setNecroarmy1] = useState(() =>
    generateArmy(795, 35, 10, 80, false)
  );
  const [Necroarmy2, setNecroarmy2] = useState(() =>
    generateArmy(875, 75, 9, 80, false)
  );
  const [Necroarmy3, setNecroarmy3] = useState(() =>
    generateArmy(955, 35, 10, 80, false)
  );
  const [Guardarmy1, setGuardarmy1] = useState(() =>
    generateArmy(155, 35, 19, 40, true)
  );
  const [Guardarmy2, setGuardarmy2] = useState(() =>
    generateArmy(195, 35, 19, 40, true)
  );
  const [timer, settimer] = useState(5);
  const [count, setcount] = useState(timer);
  const [army1full, setarmy1full] = useState(false);
  const [army2full, setarmy2full] = useState(false);
  const [army3full, setarmy3full] = useState(false);
  const [Resurrected1, setResurrected1] = useState(false);
  const [Resurrected2, setResurrected2] = useState(false);
  const [Resurrected3, setResurrected3] = useState(false);
  const [addedMages, setaddedMages] = useState(false);
  const [lifelink, setlifelink] = useState(false);
  const [bonus, setbonus] = useState([0, 0]);

  const interval = useRef(null);
  const raiseundead = () => {
    let key = Math.floor(Math.random() * 3);
    switch (key) {
      case 0:
        spawnnecarmy1();
        break;
      case 1:
        spawnnecarmy2();
        break;
      case 2:
        spawnnecarmy3();
        break;
    }
  };
  const spawnnecarmy1 = () => {
    let index = Math.floor(Math.random() * 10);
    let arr1 = Necroarmy1;
    console.log("Army 1 Voll " + army1full);
    console.log("Army 1 First index " + index);
    if (army1full != true) {
      if (
        arr1[0][2] == true &&
        arr1[1][2] == true &&
        arr1[2][2] == true &&
        arr1[3][2] == true &&
        arr1[4][2] == true &&
        arr1[5][2] == true &&
        arr1[6][2] == true &&
        arr1[7][2] == true &&
        arr1[8][2] == true &&
        arr1[9][2] == true
      ) {
        setarmy1full(true);
      } else {
        if (index == 9 && arr1[9][2] == true) {
          index = 0;
          while (arr1[index][2] == true && index < 9) {
            index++;
          }
          if (arr1[index][2] != true) {
            arr1[index][2] = true;
            setNecroarmy1(arr1);
            console.log(arr1);
          }
        } else {
          while (arr1[index][2] == true && index < 9) {
            index++;
            if (index == 9 && arr1[index][2] == true) {
              index = 0;
            }
            console.log("mod index " + index);
          }
          console.log("did i change " + index);
          if (arr1[index][2] != true) {
            arr1[index][2] = true;
            setNecroarmy1(arr1);
            console.log(arr1);
          }
        }
      }
    } else if (army1full == true && army2full == true && army3full == true) {
      ritual();
    } else {
      console.log("Skip to 2 " + army1full + " " + army2full + " " + army3full);
      spawnnecarmy2();
    }
  };
  const spawnnecarmy2 = () => {
    let index = Math.floor(Math.random() * 9);
    let arr2 = Necroarmy2;
    console.log("Army 2 Voll " + army2full);
    console.log("Army 2 First index " + index);
    if (army2full != true) {
      if (
        arr2[0][2] == true &&
        arr2[1][2] == true &&
        arr2[2][2] == true &&
        arr2[3][2] == true &&
        arr2[4][2] == true &&
        arr2[5][2] == true &&
        arr2[6][2] == true &&
        arr2[7][2] == true &&
        arr2[8][2] == true
      ) {
        setarmy2full(true);
      } else {
        if (index == 8 && arr2[8][2] == true) {
          index = 0;
          while (arr2[index][2] == true && index < 8) {
            index++;
          }
          if (arr2[index][2] != true) {
            arr2[index][2] = true;
            setNecroarmy2(arr2);
            console.log(arr2);
          }
        } else {
          while (arr2[index][2] == true && index < 8) {
            index++;
            if (index == 8 && arr2[index][2] == true) {
              index = 0;
            }
            console.log("mod index " + index);
          }
          console.log("did i change " + index);
          if (arr2[index][2] != true) {
            arr2[index][2] = true;
            setNecroarmy2(arr2);
            console.log(arr2);
          }
        }
      }
    } else if (army1full == true && army2full == true && army3full == true) {
      ritual();
    } else {
      console.log("Skip to 3 " + army1full + " " + army2full + " " + army3full);
      spawnnecarmy3();
    }
  };
  const spawnnecarmy3 = () => {
    let index = Math.floor(Math.random() * 10);
    let arr3 = Necroarmy3;
    console.log("Army 3 Voll " + army3full);
    console.log("Army 3 First index " + index);
    if (army3full != true) {
      if (
        arr3[0][2] == true &&
        arr3[1][2] == true &&
        arr3[2][2] == true &&
        arr3[3][2] == true &&
        arr3[4][2] == true &&
        arr3[5][2] == true &&
        arr3[6][2] == true &&
        arr3[7][2] == true &&
        arr3[8][2] == true &&
        arr3[9][2] == true
      ) {
        setarmy3full(true);
      } else {
        if (index == 9 && arr3[9][2] == true) {
          index = 0;
          while (arr3[index][2] == true && index < 9) {
            index++;
          }
          if (arr3[index][2] != true) {
            arr3[index][2] = true;
            setNecroarmy3(arr3);
            console.log(arr3);
          }
        } else {
          while (arr3[index][2] == true && index < 9) {
            index++;
            if (index == 9 && arr3[index][2] == true) {
              index = 0;
            }
            console.log("mod index " + index);
          }
          console.log("did i change " + index);
          if (arr3[index][2] != true) {
            arr3[index][2] = true;
            setNecroarmy3(arr3);
            console.log(arr3);
          }
        }
      }
    } else if (army1full == true && army2full == true && army3full == true) {
      ritual();
    } else {
      console.log("Skip to 1 " + army1full + " " + army2full + " " + army3full);
      spawnnecarmy1();
    }
  };

  const bossspawn = () => {
    if (Resurrected1 == false) {
      setResurrected1(true);
    } else if (Resurrected2 == false) {
      setResurrected2(true);
    } else {
      setResurrected3(true);
    }
  };

  const ritual = () => {
    let key = Math.floor(Math.random() * 6);
    settimer(10);
    setcount(10);
    console.log("Lich does a Buff Ritual");
    console.log(key);
    switch (key) {
      case 0:
        if (addedMages == false) {
          setaddedMages(true);
          console.log("Added Mages to all Miniongroups");
        } else {
          console.log("Nothing");
        }
        break;
      case 1:
        let arr = bonus;
        arr[0] = arr[0] + 100;
        arr[1] = arr[1] + 50;
        setbonus(arr);
        console.log("Buffed all undead (+100Hp,+50Mp) Bonus: " + bonus);
        break;
      case 2:
        if (lifelink == false) {
          setlifelink(true);
          console.log(
            "Link-Lifeforce: Create a Shared Hppool minions dont die until its 0"
          );
        } else {
          console.log("The Lich continues to gather Energy");
        }
        break;
      case 3:
        console.log("Nothing Happend / Gethering Energy");
        break;
      case 4:
        bossspawn();
        console.log("The Lich awakens his General (Dullahan)");
        break;
      case 5:
        let fail = Math.floor(Math.random() * 5);
        if (fail == 0) {
          console.log("The Ritual Failed Lich suffers 100Hp Backlashdmg");
        } else {
          console.log("The gathered energy dissipates");
        }
        break;
    }
  };
  if (count == 0) {
    if (army1full == true && army2full == true && army3full == true) {
      ritual();
    } else {
      raiseundead();
      raiseundead();
    }
    setcount(timer);
  }

  return (
    <SafeAreaView style={styles.SAV}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(StackActions.pop(1))}
      >
        <Text style={styles.text}>Moves until next Enemy Action {count}</Text>
      </TouchableOpacity>
      <View style={styles.BigBox}>
        <View
          style={{
            position: "absolute",
            zIndex: 10,
            borderColor: "#fff",
            borderWidth: 1,
            width: 30,
            height: 30,
            marginLeft: horival,
            marginTop: vertival,
            backgroundColor: "black",
          }}
        ></View>
        <View style={styles.Town}>
          <Text style={{ color: "#fff", alignSelf: "center" }}>Town</Text>
        </View>
        <View style={styles.Town2}>
          <Text style={{ color: "#fff", alignSelf: "center" }}>Town</Text>
        </View>
        <View style={styles.EnemyBase}>
          <Text style={{ color: "#fff", alignSelf: "center" }}>Ziggurat</Text>
        </View>

        <View
          style={{ position: "absolute", marginLeft: 390, marginTop: 1010 }}
        >
          <View style={styles.Lich}>
            <Text style={{ color: "#fff", alingSelf: "center" }}></Text>
          </View>
        </View>

        {Resurrected1 ? (
          <View
            style={{ position: "absolute", marginLeft: 230, marginTop: 910 }}
          >
            <View style={styles.Lich}>
              <Text style={{ color: "#fff", alingSelf: "center" }}></Text>
            </View>
          </View>
        ) : (
          ""
        )}
        {Resurrected2 ? (
          <View
            style={{ position: "absolute", marginLeft: 550, marginTop: 910 }}
          >
            <View style={styles.Lich}>
              <Text style={{ color: "#fff", alingSelf: "center" }}></Text>
            </View>
          </View>
        ) : (
          ""
        )}
        {Resurrected3 ? (
          <View
            style={{ position: "absolute", marginLeft: 390, marginTop: 910 }}
          >
            <View style={styles.Lich}>
              <Text style={{ color: "#fff", alingSelf: "center" }}></Text>
            </View>
          </View>
        ) : (
          ""
        )}
        {Guardarmy1.map((item, index) =>
          item[2] ? (
            <View
              key={"Vanguard" + index}
              style={{
                position: "absolute",
                marginLeft: item[1],
                marginTop: item[0],
              }}
            >
              <View style={styles.Guard}>
                <Text style={{ color: "#fff", alingSelf: "center" }}></Text>
              </View>
            </View>
          ) : (
            ""
          )
        )}
        {Guardarmy2.map((item, index) =>
          item[2] ? (
            <View
              key={"Guard" + index}
              style={{
                position: "absolute",
                marginLeft: item[1],
                marginTop: item[0],
              }}
            >
              <View style={styles.Guard}>
                <Text style={{ color: "#fff", alingSelf: "center" }}></Text>
              </View>
            </View>
          ) : (
            ""
          )
        )}

        {Necroarmy1.map((item, index) =>
          item[2] ? (
            <View
              key={"Raider1" + index}
              style={{
                position: "absolute",
                marginLeft: item[1],
                marginTop: item[0],
              }}
            >
              <View style={styles.RedBox}>
                <Text style={{ color: "#fff", alingSelf: "center" }}></Text>
              </View>
            </View>
          ) : (
            ""
          )
        )}
        {Necroarmy2.map((item, index) =>
          item[2] ? (
            <View
              key={"Raider2" + index}
              style={{
                position: "absolute",
                marginLeft: item[1],
                marginTop: item[0],
              }}
            >
              <View style={styles.RedBox}>
                <Text style={{ color: "#fff", alingSelf: "center" }}></Text>
              </View>
            </View>
          ) : (
            ""
          )
        )}
        {Necroarmy3.map((item, index) =>
          item[2] ? (
            <View
              key={"Raider3" + index}
              style={{
                position: "absolute",
                marginLeft: item[1],
                marginTop: item[0],
              }}
            >
              <View style={styles.RedBox}>
                <Text style={{ color: "#fff", alingSelf: "center" }}></Text>
              </View>
            </View>
          ) : (
            ""
          )
        )}
      </View>
      <View style={{ alignSelf: "center", marginVertical: 15 }}>
        <MovmentTurnBased
          verti={vertival}
          SV={setvertival}
          hori={horival}
          SH={sethorival}
          SC={setcount}
        />
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
    marginVertical: 10,
    marginLeft: 10,
    alignSelf: "center",
    marginVertical: 15,
  },

  BigBox: {
    flex: 1,
    borderColor: "#fff",
    borderWidth: 2,
    backgroundColor: "grey",
  },
  PlayerBox: {
    borderColor: "#fff",
    borderWidth: 1,
    width: 30,
    height: 30,
  },
  Town: {
    position: "absolute",
    borderColor: "#fff",
    borderWidth: 2,
    width: 100,
    height: 100,
    backgroundColor: "#9333ea",
    justifyContent: "center",
  },
  Town2: {
    position: "absolute",
    borderColor: "#fff",
    borderWidth: 2,
    width: 100,
    height: 100,
    backgroundColor: "#2563eb",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  Village: {
    position: "absolute",
    borderColor: "#fff",
    borderWidth: 2,
    width: 100,
    height: 100,
    backgroundColor: "#a16207",
    justifyContent: "center",
    marginTop: 300,
    marginLeft: 600,
  },
  EnemyBase: {
    position: "absolute",
    borderColor: "#fff",
    borderWidth: 2,
    width: 100,
    height: 100,
    backgroundColor: "#10b981",
    justifyContent: "center",
    marginTop: 1010,
    marginLeft: 350,
  },
  RedBox: {
    borderColor: "black",
    borderWidth: 1,
    width: 20,
    height: 20,
    backgroundColor: "#dc2626",
  },
  Lich: {
    borderColor: "#dc2626",
    borderWidth: 1,
    width: 30,
    height: 30,
    backgroundColor: "black",
  },
  Guard: {
    borderColor: "black",
    borderWidth: 1,
    width: 20,
    height: 20,
    backgroundColor: "#22d3ee",
  },
  Trader: {
    borderColor: "black",
    borderWidth: 1,
    width: 20,
    height: 20,
    backgroundColor: "yellow",
  },
  Loot: {
    borderColor: "black",
    borderWidth: 1,
    width: 20,
    height: 20,
    backgroundColor: "#6d28d9",
  },
});
export default TurnBasedTest;
