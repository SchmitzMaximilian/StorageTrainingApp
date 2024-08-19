import React, { useEffect, useState, useRef } from 'react'
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Movment from '../Auslagerung/Components/Knöpfe/Movment'
import { StackActions } from '@react-navigation/native';
import GoblinRaider from '../Auslagerung/Components/MappingListen/GoblinRaider';
const Goblinforest = ({navigation}) => {
  const [horival,sethorival]=useState(10)
  const [vertival,setvertival]=useState(10)
  const [traderhorival,settraderhorival]=useState(55)
  const [gobhorival,setgobhorival]=useState(290)
  const [gobvertival,setgobvertival]=useState(1070)
  const [Gobarr,setGobarr]=useState([])
  const [Raidarr,setRaidarr]=useState([])
  const interval = useRef(null)
 
 const gobspawn=()=>{
  Gobarr.push([1010,290,true])
  }
  const spawnlist=()=>{
    goblinmove()
  }
  const goblinmove =()=>{ 
  Gobarr.forEach(e=>{
      if(e[2]==true){
        e[0]=(e[0]-20)
      }
    })
  }
  
  if(Gobarr.length>0){
  if(Gobarr[0][0]==630){
  let newarr=Gobarr.splice(0,1)
  Raidarr.push(newarr[0])
  }}



const loothunt=()=>{
  raiding()
}

const raiding=()=>{
  console.log("im raiding")
  Raidarr.forEach(e=>{
    if(e[2]==true){
      let v= Math.floor(Math.random()*3)
      console.log(v)
      switch(v){
        case 0:
          e[0]=(e[0]-20)
          break;
        case 1:
          e[1]=(e[1]-20)
          break;
        case 2:
          e[1]=(e[1]+20)
          break;
      }
      console.log(e)
    }
  })
  }
/*

let i= Math.floor(Math.random)*2
    let v= Math.floor(Math.random)*2
    if(v>0){
    e[i]=(e[i]-20)
    }else{
    e[i]=(e[i]+20)
    }
    

  */
  if(Raidarr.length==1){
    console.log("do something")
if(Raidarr[0][0]==630){
  let arr=Raidarr
  arr[0][0]=(arr[0][0]-20)
  setRaidarr(arr)
  interval.huntloot = setInterval(loothunt,2000)
}}

  const hide =()=>{
    
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
   interval.trade = setInterval(trademove,1000)
   interval.raid=setInterval(spawnlist,2000)
    interval.spawn= setInterval(gobspawn,16000)
    return()=>{
      clearInterval(interval.raid)
      clearInterval(interval.spawn)
      clearInterval(interval.trade)
      clearInterval(interval.huntloot)
    }
  },[])
 
  return (
    <SafeAreaView style={styles.SAV}>
      <TouchableOpacity onPress={()=>navigation.dispatch(StackActions.pop(1))}>
      <Text style={styles.text}>Training</Text></TouchableOpacity>
      <View style={styles.BigBox}>
      <View style={{position:'absolute',zIndex:10,borderColor:'#fff',borderWidth:1,width:30,height:30,marginLeft:horival,marginTop:vertival,backgroundColor:'black'}}></View>
        <View style={styles.Town}><Text style={{color:'#fff',alignSelf:'center'}}>Town</Text></View>
        <View style={styles.Town2}><Text style={{color:'#fff',alignSelf:'center'}}>Town</Text></View>
        <View style={styles.Village}><TouchableOpacity onPress={()=>hide()}><Text style={{color:'#fff',alignSelf:'center'}}>Village</Text></TouchableOpacity></View>
        <View style={styles.Cave}><Text style={{color:'#fff',alignSelf:'center'}}>Cave</Text></View>
        <View style={{position:'absolute',marginLeft:gobhorival,marginTop:gobvertival}}><View style={styles.Goblin}><Text style={{color:'#fff',alignSelf:'center'}}>G1</Text></View></View>
        <View style={{position:'absolute',marginLeft:traderhorival,marginTop:35}}><View style={styles.Trader}><Text style={{color:'#fff',alingSelf:'center'}}></Text></View></View>
      
      {
          Gobarr.length>0?
        <GoblinRaider Arr={Gobarr} Rarr={Raidarr}/>
        :
        ""
        }
      
        </View>
        <View style={{alignSelf:'center',marginVertical:15}}>
        <Movment  verti={vertival} SV={setvertival} hori={horival} SH={sethorival}/></View>
    </SafeAreaView>)
}
/*
{
        Raidarr.length>0?
        Raidarr.map((item,index)=>(            
          item[2]?
          <View key={"Raider" + index} style={{position:'absolute',marginLeft:item[1],marginTop:item[0]}}><View style={styles.Goblin}><Text style={{color:'#fff',alingSelf:'center'}}>R</Text></View></View>
          :
          ""
        )
        )
        :
        ""
      }
*/
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
  Town:{
    position:'absolute',
    borderColor:'#fff',
    borderWidth:2,
    width:100,
    height:100,
    backgroundColor:'#71717a',
    justifyContent:'center'
    
  },
  Town2:{
    position:'absolute',
    borderColor:'#fff',
    borderWidth:2,
    width:100,
    height:100,
    backgroundColor:'#71717a',
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
  Cave:{
    position:'absolute',
    borderColor:'#fff',
    borderWidth:2,
    width:100,
    height:100,
    backgroundColor:'#451a03',
    justifyContent:'center',
    marginTop: 1010,
    marginLeft: 250
    
  },
  Goblin:{
    
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    backgroundColor:'#dc2626'
  },
  Karavan:{
    
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    backgroundColor:'#22d3ee'
  },
  Loot:{
    
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    backgroundColor:'#6d28d9'
  },
  Trader:{
    
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    backgroundColor:'yellow'
  },
  
})
export default Goblinforest