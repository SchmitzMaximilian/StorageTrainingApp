import React, { useEffect, useState, useRef } from 'react'
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Movment from '../Auslagerung/Components/Knöpfe/Movment'
import { StackActions } from '@react-navigation/native';
import Bossfightmodal from '../Auslagerung/Components/ModalSeiten/ModalSpielwiese/Bossfightmodal';
import FightmodalBp from '../Auslagerung/Components/ModalSeiten/ModalSpielwiese/FightmodalBp';


const Spielwiese2 = ({navigation}) => {
  const [Playerstats,setPlayerstats]=useState([300,300])
  const [Encounter,setEncounter]=useState([false,false,false,false,false,false])
  const [EnemyStatArray,setEnemyStatArray]=useState([])
  const [bossfight,setbossfight]=useState(false)
  const [fight,setfight]=useState(false)
  const [bosskilled,setbosskilled]=useState(false)
  const [looted1,setlooted1]=useState(false)
  const [looted2,setlooted2]=useState(false)
  const [looted3,setlooted3]=useState(false)
  const [horival,sethorival]=useState(10)
  const [vertival,setvertival]=useState(10)
  const [Bosshorival,setBosshorival]=useState(550)
  const [Bossvertival,setBossvertival]=useState(750)
  const [EI,setEI]=useState()
  //console.log("hori: " + horival + " , verti: " + vertival)
  //console.log("hori: " + Bosshorival + " , verti: " + Bossvertival)
  console.log("---------------------------------------------------")
  const interval = useRef(null);
  const BossKoordinates= [Bosshorival,Bossvertival]

  const enemylist=(key)=>{
    let statsarr=[]
    let index
    switch(key){
      case 1:
      statsarr.push([300,100],[200,50],[300,100],[250,80])
      index=5
      break;

      case 2:
      statsarr.push([50,10],[30,50],[50,10],[70,30])
      index=0
      break;

      case 3:
      statsarr.push([600,250])
      index=1
      break;

      case 4:
      statsarr.push([250,100], [250,100])
      index=2
      break;

      case 5:
      statsarr.push([250,50],[200,50],[300,50],[200,50])
      index=4
      break;

      case 6:
      statsarr.push([450,350])
      index=3
      break;
    }
    console.log("Whats this below")
    setEI(index)
    console.log(EI)
    console.log(statsarr)
    setEnemyStatArray(statsarr)
    }

    const gainedloot=(key)=>{
      let arr=Playerstats
      console.log("gained Loot")
      console.log(arr)
      switch(key){
        case 1:
          arr[0]=(arr[0]+0)
          arr[1]=(arr[1]+150)
          setPlayerstats(arr)
          break;
        case 2:
          arr[0]=(arr[0]+0)
          arr[1]=(arr[1]+150)
          setPlayerstats(arr)
          break;
        case 3:
          arr[0]=(arr[0]+50)
          arr[1]=(arr[1]+100)
          console.log(arr)
          setPlayerstats(arr)
          break;
        case 4:
          arr[0]=(arr[0]+0)
          arr[1]=(arr[1]+0)
          setPlayerstats(arr)
          break;
        case 5:
          arr[0]=(arr[0]+0)
          arr[1]=(arr[1]+0)
          setPlayerstats(arr)
          break;
        case 6:
          arr[0]=(arr[0]+0)
          arr[1]=(arr[1]+0)
          setPlayerstats(arr)
          break;
          
      }
    }
    console.log(Playerstats)
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
    navigation.dispatch(StackActions.pop(1))
    navigation.navigate("IntervalTraining")
  }
  const bossmove=()=>{
    //
    let key =Math.floor(Math.random()*8)
    console.log(key)
    let position = BossKoordinates
    console.log(position)
    switch(key){
      case 0:
        if(position[1]>150){
        setBossvertival(prev=>prev - 20)
        position[1]=(position[1]-20)
      }else{
        setBosshorival(prev=>prev + 20)
        position[1]=(position[1]+20)
      }
      break;
      case 1:
        if(position[1]<1070){
        setBossvertival(prev=>prev + 20)
        position[1]=(position[1]+20)
      }else{
        setBosshorival(prev=>prev - 20)
        position[1]=(position[1]-20)
      }
      break;
      case 2:
        if(position[0]>30){
        setBosshorival(prev=>prev - 20)
        position[0]=(position[0]-20)
      }else{
        setBosshorival(prev=>prev + 20)
        position[0]=(position[0]+20)
      }

      break;
      case 3:
        if(position[0]<750){
        setBosshorival(prev=>prev + 20)
        position[0]=(position[0]+20)
      }else{
        setBosshorival(prev=>prev - 20)
        position[0]=(position[0]-20)
      }
      
      break;
      case 4:
        if(position[1]>150){
        setBossvertival(prev=>prev - 20)
        position[1]=(position[1]-20)
      }else{
        setBosshorival(prev=>prev + 20)
        position[1]=(position[1]+20)
      }
      break;
      case 5:
        if(position[1]<1070){
        setBossvertival(prev=>prev + 20)
        position[1]=(position[1]+20)
      }else{
        setBosshorival(prev=>prev - 20)
        position[1]=(position[1]-20)
      }
      break;
      case 6:
        if(position[0]>30){
        setBosshorival(prev=>prev - 20)
        position[0]=(position[0]-20)
      }else{
        setBosshorival(prev=>prev + 20)
        position[0]=(position[0]+20)
      }

      break;
      case 7:
        if(position[0]<750){
        setBosshorival(prev=>prev + 20)
        position[0]=(position[0]+20)
      }else{
        setBosshorival(prev=>prev - 20)
        position[0]=(position[0]-20)
      }

      break;
    }
  }

  const randommove=( )=>{
    bossmove()    
  }
  
  //,restartboss(1)
  
  useEffect(()=>{
    interval.current = setInterval(randommove, 2000,Bosshorival, Bossvertival);
    return ()=>{
      clearInterval(interval.current)
    }
  },[])

  const restartboss=(i)=>{
    let check = i
    if(check>0){
      if(bosskilled==false){
    interval.current = setInterval(randommove, 2000);
  }
  }

  }
  
  if(Encounter[0]==false){
    if(horival==150 && vertival==310){
    clearInterval(interval.current)
    Alert.alert("Enemy encounter", "You stumbeled up on a group of Goblins",[{text: "Attack" ,onPress: ()=>{enemylist(2),setfight(true)}},{text:"RUN!!!" ,onPress:()=>{sethorival(horival - 20),restartboss(1)}}])
    
  }}
  if(looted1==false){
  if(horival==430 && vertival==310){
    clearInterval(interval.current)
    Alert.alert("Choose a Reward", "1: Magic Staff \n2: Magic Orb \n3: Magic Robe",[{text: "Item 1",onPress: ()=>{gainedloot(1),setlooted1(true),console.log("Got a Magic Staff"),restartboss(1)}},{text: "Item 2",onPress: ()=>{gainedloot(2),setlooted1(true),console.log("Got a Magic Orb"),restartboss(1)}},{text: "Item 3",onPress: ()=>{gainedloot(3),setlooted1(true),console.log("Got a Magic Robe"),restartboss(1)}}])
  }}
  if(Encounter[1]==false){
  if(horival==750 && vertival==10){
    clearInterval(interval.current)
    Alert.alert("Enemy encounter", "You stumbeled up on a Giant",[{text: "Attack" ,onPress: ()=>{enemylist(3),setfight(true)}},{text:"RUN!!!" ,onPress:()=>{sethorival(horival - 20),restartboss(1)}}])
    
  }}
  if(Encounter[2]==false){
  if(horival==650 && vertival==850){
    clearInterval(interval.current)
    Alert.alert("Enemy encounter", "You meet the Orc Twins Gork and Mork",[{text: "Attack" ,onPress: ()=>{enemylist(4),setfight(true)}},{text:"RUN!!!" ,onPress:()=>{sethorival(horival - 20),restartboss(1)}}])
    
  }}
  if(Encounter[3]==false){
  if(horival==450 && vertival==510){
    clearInterval(interval.current)
    Alert.alert("Enemy encounter", "You stumbeled up on a Guardian Treant",[{text: "Attack" ,onPress: ()=>{enemylist(6),setfight(true)}},{text:"RUN!!!" ,onPress:()=>{sethorival(horival - 20),restartboss(1)}}])
    
  }}
  if(Encounter[4]==false){
  if(horival==30 && vertival==930){
    clearInterval(interval.current)
    Alert.alert("Enemy encounter", "You stumbeled up on a group of Skeletons",[{text: "Attack" ,onPress: ()=>{enemylist(5),setfight(true)}},{text:"RUN!!!" ,onPress:()=>{sethorival(horival - 20),restartboss(1)}}])
    
  }}
  if(Encounter[5]==false){
  if(horival==350 && vertival==1010){
    clearInterval(interval.current)
    Alert.alert("Enemy encounter", "You stumbeled up on a group of Bandits",[{text: "Attack" ,onPress: ()=>{enemylist(1),setfight(true)}},{text:"RUN!!!" ,onPress:()=>{sethorival(horival - 20),restartboss(1)}}])
    
  }}
  /*
  if(looted2==false){
  if(horival==230 && vertival==710){treasure
    clearInterval(interval.current)
    Alert.alert("Choose a Reward", "1: Magic Staff \n2: Magic Orb \n3: Magic Robe",
    [{text: "Item 1",onPress: ()=>{gainedloot(1),setlooted1(true),console.log("Got a Magic Staff"),restartboss(1)}},
    {text: "Item 2",onPress: ()=>{gainedloot(2),setlooted1(true),console.log("Got a Magic Orb"),restartboss(1)}},
    {text: "Item 3",onPress: ()=>{gainedloot(3),setlooted1(true),console.log("Got a Magic Robe"),restartboss(1)}}])
  }}
  if(looted3==false){
  if(horival==670 && vertival==630){treasure
    clearInterval(interval.current)
    Alert.alert("Choose a Reward", "1: Magic Staff \n2: Magic Orb \n3: Magic Robe",
    [{text: "Item 1",onPress: ()=>{gainedloot(1),setlooted1(true),console.log("Got a Magic Staff"),restartboss(1)}},
    {text: "Item 2",onPress: ()=>{gainedloot(2),setlooted1(true),console.log("Got a Magic Orb"),restartboss(1)}},
    {text: "Item 3",onPress: ()=>{gainedloot(3),setlooted1(true),console.log("Got a Magic Robe"),restartboss(1)}}])
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
          Encounter[0]?
          ""
          :
          <View style={styles.Box6}></View>
        }
        {
          Encounter[1]?
          ""
          :
          <View style={styles.Box2}></View>
        }
        {
          Encounter[2]?
          ""
          :
          <View style={styles.Box1}></View>
        }
        {
          Encounter[3]?
          ""
          :
          <View style={styles.Box5}></View>
        }
        {
          Encounter[4]?
          ""
          :
          <View style={styles.Box4}></View>
        }
        {
          Encounter[5]?
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
        <FightmodalBp MV={fight} MVset={setfight} V={setEncounter} Dead={Encounter} Array={EnemyStatArray} AvatarStats={Playerstats} Thisone={EI} />
    </SafeAreaView>
  )
}
//
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
export default Spielwiese2