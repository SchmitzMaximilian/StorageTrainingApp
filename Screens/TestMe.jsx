import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
/*
const generateArmy = ( StartpunktX, StartpunktY, Anzahl, Abstand,isAlive) =>{
    const army = []
    for (let i = 0; i < Anzahl;i++) {
    const x = StartpunktX
    const y = StartpunktY + i * Abstand
    army.push([x,y,isAlive])
    }
    return army
  }
  const [necarmy,setnecarmy]=useState(generateArmy(300,40,15,80,false))
  const [guard,setguard]=useState(generateArmy(100,40,8,100,true))
  console.log(necarmy)
  console.log(guard)
  
            <View style={styles.Auswahlfeld}>
              <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:5}}>
                <Text style={styles.text}>Rasse:</Text><Text style={styles.text}>Test</Text></View>              
              <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:5}}>
                <Text style={styles.text}>Hitpoints:</Text><Text style={styles.text}>100</Text></View>
              <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:5}}>
                <Text style={styles.text}>Mana:</Text><Text style={styles.text}>100</Text></View>
            </View>

  <TouchableOpacity onPress={()=>console.log('You choose ' + item[0] + ' as your Race')}></TouchableOpacity>
  ['Human',100,100],['Elf',70,150],['Dwarf',150,60],['Test',100,100]
  //let text= reply.text()
  //console.log(await text)
*/

const generateArmy = (StartpunktX, StartpunktY, Anzahl, Abstand, isAlive) => {
  console.log("Generating Army");
  const army = [];
  for (let i = 0; i < Anzahl; i++) {
    const x = StartpunktX;
    const y = StartpunktY + i * Abstand;
    army.push([x, y, isAlive]);
  }
  return army;
};

const generateX = () => {
  const min = 300;
  const max = 1000;
  const step = 40;

  // Berechne die Anzahl der möglichen Werte
  const possibleValuesCount = Math.floor((max - min) / step) + 1;

  // Wähle einen zufälligen Index
  const randomIndex = Math.floor(Math.random() * possibleValuesCount);

  // Berechne die zufällige Zahl
  const randomNumber = min + randomIndex * step + 15;
  console.log(randomNumber);
};
const generateY = () => {
  const min = 15;
  const max = 755;
  const step = 40;

  // Berechne die Anzahl der möglichen Werte
  const possibleValuesCount = Math.floor((max - min) / step) + 1;

  // Wähle einen zufälligen Index
  const randomIndex = Math.floor(Math.random() * possibleValuesCount);

  // Berechne die zufällige Zahl
  const randomNumber = min + randomIndex * step;
  console.log(randomNumber);
};

const TestMe = () => {
  const [count, setcount] = useState(0);
  const [necarmy, setnecarmy] = useState(() =>
    generateArmy(300, 40, 15, 80, false)
  );
  const [guard, setguard] = useState(() => generateArmy(100, 40, 8, 100, true));

  const testfunction = () => {
    setcount(count + 1);
    generateY();
  };
  useEffect(() => {}, []);
  return (
    <SafeAreaView style={styles.SAV}>
      <View style={styles.Maincontainer}>
        <TouchableOpacity onPress={() => testfunction()}>
          <Text style={styles.text}>Press Me to Test</Text>
        </TouchableOpacity>
        <View style={styles.Liste}>
          <Text style={styles.text}>{count}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TestMe;
const styles = StyleSheet.create({
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
  Liste: {
    flexDirection: "column",
    //borderColor:'green',
    //borderWidth:2,
    width: "auto",
    height: "60%",
    flexWrap: "wrap",
  },

  SAV: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  Maincontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1,
  },
});
