import React from 'react'
import { Alert } from 'react-native'
/*
const [defeated1,setdefeated1]=useState(false)
  const [defeated2,setdefeated2]=useState(false)
  const [defeated3,setdefeated3]=useState(false)
  const [defeated4,setdefeated4]=useState(false)
  const [defeated5,setdefeated5]=useState(false)
  const [defeated6,setdefeated6]=useState(false)
  const [looted1,setlooted1]=useState(false)
  const [looted2,setlooted2]=useState(false)
  const [looted3,setlooted3]=useState(false)
*/
const Stage1 = (horival, vertival) => {
  
  if(horival==150 && vertival==310){
    Alert.alert("Enemy encounter", "You stumbeled up on a group of Goblins",[{text: "Attack" ,onPress: ()=>console.log("Epic fight transition")},{text:"RUN!!!" ,onPress:()=>console.log("Coward")}])
   return true;
  }
  if(horival==430 && vertival==310){
    Alert.alert("Choose a Reward", "1: Magic Staff \n2: Magic Orb \n3: Magic Robe",[{text: "Item 1",onPress: ()=>console.log("Got a Magic Staff")},{text: "Item 2",onPress: ()=>console.log("Got a Magic Orb")},{text: "Item 3",onPress: ()=>console.log("Got a Magic Robe")}])
    return true;
  }
   
  if(horival==750 && vertival==10){
    Alert.alert("Enemy encounter", "You stumbeled up on a Giant",[{text: "Attack" ,onPress: ()=>console.log("Epic fight transition")},{text:"RUN!!!" ,onPress:()=>console.log("Coward")}])
    return true;
  }
  
  if(horival==650 && vertival==850){
    Alert.alert("Enemy encounter", "You stumbeled up on a group of Orcs",[{text: "Attack" ,onPress: ()=>console.log("Epic fight transition")},{text:"RUN!!!" ,onPress:()=>console.log("Coward")}])
    return true;
  }
  if(horival==450 && vertival==510){
    Alert.alert("Enemy encounter", "You stumbeled up on a Guardian Treant",[{text: "Attack" ,onPress: ()=>console.log("Epic fight transition")},{text:"RUN!!!" ,onPress:()=>console.log("Coward")}])
    return true;
  }
  
  if(horival==30 && vertival==930){
    Alert.alert("Enemy encounter", "You stumbeled up on a group of Skeletons",[{text: "Attack" ,onPress: ()=>console.log("Epic fight transition")},{text:"RUN!!!" ,onPress:()=>console.log("Coward")}])
    return true;
  }
  if(horival==350 && vertival==1010){
    Alert.alert("Enemy encounter", "You stumbeled up on a group of Bandits",[{text: "Attack" ,onPress: ()=>console.log("Epic fight transition")},{text:"RUN!!!" ,onPress:()=>console.log("Coward")}])
    return true;
  }
}

export default Stage1