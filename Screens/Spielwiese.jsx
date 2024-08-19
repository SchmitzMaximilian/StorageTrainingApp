import React, { useEffect, useState, useRef } from 'react'
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Movment from '../Auslagerung/Components/Knöpfe/Movment'
import { StackActions } from '@react-navigation/native';
import Bossfightmodal from '../Auslagerung/Components/ModalSeiten/ModalSpielwiese/Bossfightmodal';
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
/*
MV={topmodal} MVset={settopmodal}
  const [topmodal,settopmodal]=useState(false)
*/

const Spielwiese = ({navigation}) => {
  const [bossfight,setbossfight]=useState(false)
  const [defeated1,setdefeated1]=useState(false)
  const [defeated2,setdefeated2]=useState(false)
  const [defeated3,setdefeated3]=useState(false)
  const [defeated4,setdefeated4]=useState(false)
  const [defeated5,setdefeated5]=useState(false)
  const [defeated6,setdefeated6]=useState(false)
  const [bosskilled,setbosskilled]=useState(false)
  const [looted1,setlooted1]=useState(false)
  const [looted2,setlooted2]=useState(false)
  const [looted3,setlooted3]=useState(false)
  const [horival,sethorival]=useState(10)
  const [vertival,setvertival]=useState(10)
  const [Bosshorival,setBosshorival]=useState(550)
  const [Bossvertival,setBossvertival]=useState(750)
  //console.log("hori: " + horival + " , verti: " + vertival)
  console.log("hori: " + Bosshorival + " , verti: " + Bossvertival)
  const interval = useRef(null);
/*


  const encountercheck = () => {
   isEncounter = Stage1(horival, vertival)
   isEncounter?clearInterval(interval.current):""
  }
  useEffect(()=>{
    encountercheck()
  },[horival,vertival])*/
if(bosskilled==false){
  if(Bosshorival==horival && Bossvertival==vertival){
    clearInterval(interval.current)
    Alert.alert("Boss Fight","You face a Giant Minotaur. Prepare for Battel.",[{text:"Lok'tar ogar!",onPress: ()=>setbossfight(true)}])
    
  }}
  if(horival==710 & vertival==1050){
    clearInterval(interval.current)
    navigation.navigate("IntervalTraining")
  }

  const randommove=( )=>{
    //
    let key =Math.floor(Math.random()*8)
    console.log(key)
    
    let BHV=Bosshorival
    let BVV=Bossvertival
    switch(key){
      case 0:
        if(BVV){
        setBossvertival(prev=>prev - 20)
      }
      break;
      case 1:
        if(BVV){
        setBossvertival(prev=>prev + 20)
      }
      break;
      case 2:
        if(BHV){
        setBosshorival(prev=>prev - 20)
      }

      break;
      case 3:
        if(BHV){
        setBosshorival(prev=>prev + 20)
      }
      break;
      case 4:
        if(BVV){
        setBossvertival(prev=>prev - 20)
      }
      break;
      case 5:
        if(BVV){
        setBossvertival(prev=>prev + 20)
      }
      break;
      case 6:
        if(BHV){
        setBosshorival(prev=>prev - 20)
      }

      break;
      case 7:
        if(BHV){
        setBosshorival(prev=>prev + 20)
      }

      break;
    }
    
  }
  
  
  
  useEffect(()=>{
    interval.current = setInterval(randommove, 2000,Bosshorival, Bossvertival);
    return ()=>{
      clearInterval(interval.current)
    }
  },[])

  const restartboss=(i)=>{
    let check = i
    if(check>0){
    interval.current = setInterval(randommove, 2000);
  }

  }
  if(Bossvertival<150 || Bossvertival>1070 || Bosshorival<30 || Bosshorival>750){
    clearInterval(interval.current)
    setBosshorival(550)
    setBossvertival(750)
    restartboss(1)
  }
  
  if(defeated1==false){
    if(horival==150 && vertival==310){
    clearInterval(interval.current)
    Alert.alert("Enemy encounter", "You stumbeled up on a group of Goblins",[{text: "Attack" ,onPress: ()=>{setdefeated1(true),restartboss(1)}},{text:"RUN!!!" ,onPress:()=>{sethorival(horival - 20),restartboss(1)}}])
    
  }}
  if(looted1==false){
  if(horival==430 && vertival==310){
    clearInterval(interval.current)
    Alert.alert("Choose a Reward", "1: Magic Staff \n2: Magic Orb \n3: Magic Robe",[{text: "Item 1",onPress: ()=>{setlooted1(true),console.log("Got a Magic Staff"),restartboss(1)}},{text: "Item 2",onPress: ()=>{setlooted1(true),console.log("Got a Magic Orb"),restartboss(1)}},{text: "Item 3",onPress: ()=>{setlooted1(true),console.log("Got a Magic Robe"),restartboss(1)}}])
  }}
  if(defeated2==false){
  if(horival==750 && vertival==10){
    clearInterval(interval.current)
    Alert.alert("Enemy encounter", "You stumbeled up on a Giant",[{text: "Attack" ,onPress: ()=>{setdefeated2(true),restartboss(1)}},{text:"RUN!!!" ,onPress:()=>{sethorival(horival - 20),restartboss(1)}}])
    
  }}
  if(defeated3==false){
  if(horival==650 && vertival==850){
    clearInterval(interval.current)
    Alert.alert("Enemy encounter", "You stumbeled up on a group of Orcs",[{text: "Attack" ,onPress: ()=>{setdefeated3(true),restartboss(1)}},{text:"RUN!!!" ,onPress:()=>{sethorival(horival - 20),restartboss(1)}}])
    
  }}
  if(defeated4==false){
  if(horival==450 && vertival==510){
    clearInterval(interval.current)
    Alert.alert("Enemy encounter", "You stumbeled up on a Guardian Treant",[{text: "Attack" ,onPress: ()=>{setdefeated4(true),restartboss(1)}},{text:"RUN!!!" ,onPress:()=>{sethorival(horival - 20),restartboss(1)}}])
    
  }}
  if(defeated5==false){
  if(horival==30 && vertival==930){
    clearInterval(interval.current)
    Alert.alert("Enemy encounter", "You stumbeled up on a group of Skeletons",[{text: "Attack" ,onPress: ()=>{setdefeated5(true),restartboss(1)}},{text:"RUN!!!" ,onPress:()=>{sethorival(horival - 20),restartboss(1)}}])
    
  }}
  if(defeated6==false){
  if(horival==350 && vertival==1010){
    clearInterval(interval.current)
    Alert.alert("Enemy encounter", "You stumbeled up on a group of Bandits",[{text: "Attack" ,onPress: ()=>{setdefeated6(true),restartboss(1)}},{text:"RUN!!!" ,onPress:()=>{sethorival(horival - 20),restartboss(1)}}])
    
  }}
  /*
  if(looted2==false){
  if(horival==230 && vertival==710){treasure

  }}
  if(looted3==false){
  if(horival==670 && vertival==630){treasure

  }}
  if(horival==710 && vertival==1050){Next Stage

  }  
  */
  return (
    <SafeAreaView style={styles.SAV}>
      
      <TouchableOpacity onPress={()=>navigation.dispatch(StackActions.pop(1))}>
      <Text style={styles.text}>Spielwiese</Text></TouchableOpacity>
      <View style={styles.BigBox}>
        
        <View style={{position:'absolute',zIndex:10,borderColor:'#fff',borderWidth:1,width:30,height:30,marginLeft:horival,marginTop:vertival,backgroundColor:'black'}}></View>
        <View style={styles.Town}><Text style={{color:'#fff',alignSelf:'center'}}>Town</Text></View>
        {
          defeated1?
          ""
          :
          <View style={styles.Box6}></View>
        }
        {
          defeated2?
          ""
          :
          <View style={styles.Box2}></View>
        }
        {
          defeated3?
          ""
          :
          <View style={styles.Box1}></View>
        }
        {
          defeated4?
          ""
          :
          <View style={styles.Box5}></View>
        }
        {
          defeated5?
          ""
          :
          <View style={styles.Box4}></View>
        }
        {
          defeated6?
          ""
          :
          <View style={styles.Box3}></View>
        }
        {
          looted1?
          ""
          :
          <View style={styles.Box7}></View>
        }
        
        
        
        
        
        
        <View style={styles.Box8}></View>
        <View style={styles.Box9}></View>
        <View style={styles.Box10}></View>
        {
          bosskilled?
          ""
          :
          <View style={{position:'absolute',zIndex:10,borderColor:'#b91c1c',borderWidth:1,width:30,height:30,marginLeft:Bosshorival,marginTop:Bossvertival,backgroundColor:'black',justifyContent:'center'}}><Text style={{color:'#fff',alignSelf:'center'}}>B</Text></View>
     
        }
         </View>
      <View style={{alignSelf:'center',marginVertical:15}}>
          <Movment  verti={vertival} SV={setvertival} hori={horival} SH={sethorival}/>
        </View>
        <Bossfightmodal MV={bossfight} MVset={setbossfight} V={setbosskilled} Dead={bosskilled}/>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  SAV:{
    flex:1,
    width:'100%',
    height:'100%',
    backgroundColor:'black',

  },
  text:{
    color:'#fff',
    marginVertical:10,
    marginLeft:10,
    alignSelf:'center',
    marginVertical:15
  },
 
  BigBox:{
    flex:1,
    borderColor:'#fff',
    borderWidth:2,
    backgroundColor:'#84cc16'
  },
  Box:{
    borderColor:'#fff',
    borderWidth:1,
    width:30,
    height:30,
    
  },
  Box1:{
    position:'absolute',
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    marginLeft:655,
    marginTop:855,
    backgroundColor:'#dc2626'
  },
  Box2:{
    position:'absolute',
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    marginLeft:755,
    marginTop:15,
    backgroundColor:'#dc2626'

  },
  Box3:{
    position:'absolute',
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    marginLeft:355,
    marginTop:1015,
    backgroundColor:'#dc2626'
  },
  Box4:{
    position:'absolute',
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    marginLeft:35,
    marginTop:935,
    backgroundColor:'#dc2626'
  },
  Box5:{
    position:'absolute',
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    marginLeft:455,
    marginTop:515,
    backgroundColor:'#dc2626'
  },Box6:{
    position:'absolute',
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    marginLeft:155,
    marginTop:315,
    backgroundColor:'#dc2626'
  },
  Box7:{
    position:'absolute',
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    marginLeft:435,
    marginTop:315,
    backgroundColor:'#c026d3'
  },
  Box8:{
    position:'absolute',
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    marginLeft:235,
    marginTop:715,
    backgroundColor:'#c026d3'
  },
  Box9:{
    position:'absolute',
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    marginLeft:675,
    marginTop:635,
    backgroundColor:'#c026d3'
  },
  Box10:{
    position:'absolute',
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    marginLeft:715,
    marginTop:1055,
    backgroundColor:'#71717a'
  },
  Town:{
    position:'absolute',
    borderColor:'#fff',
    borderWidth:2,
    width:100,
    height:100,
    backgroundColor:'#71717a',
    justifyContent:'center'
    
  },

})
export default Spielwiese