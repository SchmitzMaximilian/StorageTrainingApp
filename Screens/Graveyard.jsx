import React, { useEffect, useState, useRef } from 'react'
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Movment from '../Auslagerung/Components/Knöpfe/Movment'
import { StackActions } from '@react-navigation/native';
import FigthSkeletonModalmulti from '../Auslagerung/Components/ModalSeiten/Gravyard/FigthSkeletonModalmulti';
/*
*/

const Graveyard = ({navigation}) => {
  const [Playerstats,setPlayerstats]=useState([300,300])
  const [horival,sethorival]=useState(10)
  const [vertival,setvertival]=useState(10)
  const [traderhorival,settraderhorival]=useState(55)
  const [army,setarmy]=useState([])
  const [SKELLGroup,setSKELLGroup]=useState([])
  const interval = useRef(null)
  const [modalvisible,setmodalvisible]=useState(false)
  const [EI,setEI]=useState()
const spawnorder=()=>{
 let hv= ((Math.floor(Math.random()*7))*100)+((Math.floor(Math.random()*5)*20)+15)
 let vv= (((Math.floor(Math.random()*7)+1)*100)+200)+((Math.floor(Math.random()*5)*20)+15)
 console.log("horival")
 console.log(hv)
 console.log("vertival")
 console.log(vv)
 army.push([vv,hv,true])
 console.log(army.length)


if(army.length>=15){
  clearInterval(interval.spawn)
}}

const raiseundead = ()=>{  
  let W=[300,70]
  let A=[150,100]
  let S=[200,50]
  let arr=[]
for(i=0;i<4;i++){
  let key = Math.floor(Math.random()*3)
  switch(key){
    case 0:
      arr.push(W)
      break;
    case 1:
      arr.push(A)
      break;
    case 2:
      arr.push(S)
      break;
  } 
  }
  SKELLGroup.push(arr)
  console.log(SKELLGroup)
  console.log(SKELLGroup.length)
}


const detectencounter=()=>{
  
  let index=army.findIndex((e)=>{horival==(e[1]-5)&&vertival==(e[0]-5)&& e[2]==true})
  if(index != -1){
    setEI(index)
        clearInterval(interval.trade)
        clearInterval(interval.back)
        Alert.alert("Fight","You see a Group of Skeletons walking towards you",[{text: "Attack",onPress: ()=>{setmodalvisible(true)}},{text: "Run",onPress: ()=>{}}])
        
  }
}

const trademove =()=>{
  settraderhorival(prev=>prev+20)
}
if(traderhorival==735){
  clearInterval(interval.trade)
  settraderhorival(715)
  setTimeout(()=>{
    interval.back = setInterval(backmove,1000)
  },5000)
}
const backmove=()=>{
  settraderhorival(prev=>prev-20)
}
if(traderhorival==35){
  clearInterval(interval.back)
  settraderhorival(55)
  setTimeout(()=>{
    interval.trade = setInterval(trademove,1000)
  },5000)
}
useEffect(()=>{
  detectencounter()
},[horival,vertival])
useEffect(()=>{
  if(army.length>=1)
  raiseundead()
},[army.length])

  useEffect(()=>{
    interval.spawn = setInterval(spawnorder,3000)
    interval.trade = setInterval(trademove,1000)
    
    return ()=>{
      clearInterval(interval.spawn)
      clearInterval(interval.trade)
      clearInterval(interval.back)
    }
  },[])

  /*
  
  <View key={"Raider3" + index} style={{position:'absolute',marginLeft:item[1],marginTop:item[0]}}><View style={styles.RedBox}><Text style={{color:'#fff',alingSelf:'center'}}></Text></View></View>
  */
  return (
    <SafeAreaView style={styles.SAV}>
      <TouchableOpacity onPress={()=>navigation.dispatch(StackActions.pop(1))}>
      <Text style={styles.text}>Training</Text></TouchableOpacity>
      <View style={styles.BigBox}>

        <View style={{position:'absolute',zIndex:10,borderColor:'#fff',borderWidth:1,width:30,height:30,marginLeft:horival,marginTop:vertival,backgroundColor:'black'}}></View>
        <View style={styles.Town}><Text style={{color:'#fff',alignSelf:'center'}}>Town</Text></View>
        <View style={styles.Town2}><Text style={{color:'#fff',alignSelf:'center'}}>Town</Text></View>
        <View style={styles.EnemyBase}><Text style={{color:'#fff',alignSelf:'center'}}>Ziggurat</Text></View>

        <View style={{position:'absolute',marginLeft:390,marginTop:1010}}><View style={styles.Lich}><Text style={{color:'#fff',alingSelf:'center'}}></Text></View></View>
        <View style={{position:'absolute',marginLeft:traderhorival,marginTop:35}}><View style={styles.Trader}><Text style={{color:'#fff',alingSelf:'center'}}></Text></View></View>
    
        {
          army.map((item,index)=>(
            item[2]?
            <View key={"Skeletongroup" + index} style={{position:'absolute',marginLeft:item[1],marginTop:item[0]}}><View style={styles.RedBox}><Text style={{color:'#fff',alingSelf:'center'}}></Text></View></View>
            :
            ""
          ))
        }
        </View>
        <FigthSkeletonModalmulti MV={modalvisible} MVset={setmodalvisible} Dead={army} Groupkilled={setarmy} Array={SKELLGroup[EI]}  AvatarStats={Playerstats} Thisone={EI}/>
        <View style={{alignSelf:'center',marginVertical:15}}>
        <Movment  verti={vertival} SV={setvertival} hori={horival} SH={sethorival}/></View>
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
    backgroundColor:'grey'
  },
  PlayerBox:{
    borderColor:'#fff',
    borderWidth:1,
    width:30,
    height:30,
    
  },
  Town:{
    position:'absolute',
    borderColor:'#fff',
    borderWidth:2,
    width:100,
    height:100,
    backgroundColor:'#9333ea',
    justifyContent:'center'
    
  },
  Town2:{
    position:'absolute',
    borderColor:'#fff',
    borderWidth:2,
    width:100,
    height:100,
    backgroundColor:'#2563eb',
    justifyContent:'center',
    alignSelf:'flex-end'
    
  },
  Village:{
    position:'absolute',
    borderColor:'#fff',
    borderWidth:2,
    width:100,
    height:100,
    backgroundColor:'#a16207',
    justifyContent:'center',
    marginTop: 300,
    marginLeft: 600
    
  },
  EnemyBase:{
    position:'absolute',
    borderColor:'#fff',
    borderWidth:2,
    width:100,
    height:100,
    backgroundColor:'#10b981',
    justifyContent:'center',
    marginTop: 1010,
    marginLeft: 350
    
  },
  RedBox:{
    
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    backgroundColor:'#dc2626'
  },
  Lich:{
    
    borderColor:'#dc2626',
    borderWidth:1,
    width:30,
    height:30,
    backgroundColor:'black'
  },
  Guard:{
    
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    backgroundColor:'#22d3ee'
  },
  Trader:{
    
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    backgroundColor:'yellow'
  },
  Loot:{
    
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    backgroundColor:'#6d28d9'
  },
  
})
export default Graveyard