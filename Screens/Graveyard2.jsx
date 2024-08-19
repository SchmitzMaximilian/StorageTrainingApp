import React, { useEffect, useState, useRef } from 'react'
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Movment from '../Auslagerung/Components/Knöpfe/Movment'
import { StackActions } from '@react-navigation/native';
import FigthSkeletonModal from '../Auslagerung/Components/ModalSeiten/Gravyard/FigthSkeletonModal';
/*
*/

const Graveyard2 = ({navigation}) => {
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
 let x= (Math.floor(Math.random()*7))
 console.log(x)
 
 let hv
 let vv
 
 let y= Math.floor(Math.random()*5)
 switch(y){
  case 0:
    hv=(x*100+15)
    break;
  case 1:
    hv=(x*100+35)
    break;
  case 2:
    hv=(x*100+55)
    break;
  case 3:
    hv=(x*100+75)
    break;
  case 4:
    hv=(x*100+95)
    break;
 }
  let a= (Math.floor(Math.random()*7)+1)
 console.log(a)
 let l= Math.floor(Math.random()*5)
 switch(l){
  case 0:
    vv=(200+(a*100+15))
    break;
  case 1:
    vv=(200+(a*100+35))
    break;
  case 2:
    vv=(200+(a*100+55))
    break;
  case 3:
    vv=(200+(a*100+75))
    break;
  case 4:
    vv=(200+(a*100+95))
    break;
 }
 console.log("horival")
 console.log(hv)
 console.log("vertival")
 console.log(vv)
 army.push([vv,hv,true])
 console.log(army.length)

if(army.length>=15){
  clearInterval(interval.spawn)
}}

const raiseundead = ()=>{       //-->generiert Gegnerstats, wird bei Kollision ausgelöst/aufgerufen
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
  setSKELLGroup(arr)
  setmodalvisible(true)
}

const detectencounter=()=>{
  if(army.some(e => horival==(e[1]-5)&&vertival==(e[0]-5)&& e[2]==true)){
    let index = 0
    while(index<army.length){
      if((army[index][0]-5)==vertival && (army[index][1]-5)==horival){
        setEI(index)
        clearInterval(interval.trade)
        clearInterval(interval.back)
        Alert.alert("Fight","You see a Group of Skeletons walking towards you",[{text: "Attack",onPress: ()=>{raiseundead()}},{text: "Run",onPress: ()=>{}}])
        break;
      }
      index++;
    }
    
  }
  
}/*

const detectEncounter=()=>{
  let encounterIndex = army.findIndex(([vv,vh,isAlive])=>{
    return (vv-5)==vertival && (vh-5)==horival && isAlive})
  
  if(encounterIndex != -1){
   setEI(index)
        clearInterval(interval.trade)
        clearInterval(interval.back)
        Alert.alert("Fight","You see a Group of Skeletons walking towards you",[{text: "Attack",onPress: ()=>{raiseundead()}},{text: "Run",onPress: ()=>{}}])
        
  } }

*/

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
        <FigthSkeletonModal MV={modalvisible} MVset={setmodalvisible} Dead={army} Groupkilled={setarmy} Array={SKELLGroup} AvatarStats={Playerstats} Thisone={EI} />
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
export default Graveyard2