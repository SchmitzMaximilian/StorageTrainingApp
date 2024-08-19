import React, { useEffect, useState, useRef } from 'react'
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Movment from '../Auslagerung/Components/Knöpfe/Movment'
import { StackActions } from '@react-navigation/native';
import Patrol from '../Auslagerung/functions/Services/Tracker/Patrol';
const DefendFogTown = ({navigation}) => {
  const [horival,sethorival]=useState(10)
  const [vertival,setvertival]=useState(10)
  const [Pat6hori,setPat6hori]=useState(315)
  const [Pat6verti,setPat6verti]=useState(395)
  const [Guardhori,setGuardhori]=useState(455)
  const [Guardverti,setGuardverti]=useState(535)
  const interval = useRef(null)
  
  const goaroundTop = (SH)=>{							//-->Walk from left to right
    SH(prev=>prev + 20)
  }
  const goaroundRight = (SV)=>{							//-->Walk from top to bottom
    SV(prev=>prev + 20)
  }
  const goaroundBottom = (SH)=>{						//-->Walk from right to left
    SH(prev=>prev - 20)
  }
  const goaroundLeft = (SV)=>{							//-->walk from bottom to top
    SV(prev=>prev - 20)
  }
  
  const checkposition = ()=>{
    
  if(Pat6hori==455 && Pat6verti==395){
    clearInterval(interval.static1)
    interval.static2 = setInterval(goaroundRight,2000,setPat6verti)
  }
  if(Pat6verti==535 && Pat6hori==455){
    clearInterval(interval.static2)
    interval.static3 = setInterval(goaroundBottom,2000,setPat6hori)
  }
  if(Pat6hori==315 && Pat6verti==535){
    clearInterval(interval.static3)
    interval.static4 = setInterval(goaroundLeft,2000,setPat6verti)
  }
  if(Pat6hori==315 && Pat6verti==415){
    clearInterval(interval.static4)
    setTimeout(()=>{
      setPat6verti(prev=>prev - 20)
      interval.static1 = setInterval(goaroundTop,2000,setPat6hori)
    },2000)
  }}

  const checkguard = ()=>{

  if(Guardhori==455 && Guardverti==395){
    clearInterval(interval.guardpath1)
    interval.guardpath2 = setInterval(goaroundRight,2000,setGuardverti)
  }
  if(Guardverti==535 && Guardhori==455){
    clearInterval(interval.guardpath2)
    interval.guardpath3 = setInterval(goaroundBottom,2000,setGuardhori)
  }
  if(Guardhori==315 && Guardverti==535){
    clearInterval(interval.guardpath3)
    interval.guardpath4 = setInterval(goaroundLeft,2000,setGuardverti)
  }
  if(Guardhori==315 && Guardverti==415){
    clearInterval(interval.guardpath4)
    setTimeout(()=>{
      setGuardverti(prev=>prev - 20)
      interval.guardpath1 = setInterval(goaroundTop,2000,setGuardhori)
    },2000)
  }


} 
/* 
  <Patrol  PV={Guardverti}
  PH={Guardhori}
  setPV={setGuardverti}
  setPH={setGuardhori}
  StartV={300}
  EndV={420}
  StartH={580}
  EndH={700}
  Delay={2000}
  GP={"Guardpath"}
  interval={interval}
  />*/
  useEffect(()=>{
    checkguard()
  },[Guardhori,Guardverti]);
    
  useEffect(()=>{
  checkposition()
},[Pat6hori,Pat6verti]);
useEffect(()=>{
  interval.static1 = setInterval(goaroundTop,2000,setPat6hori)
  return ()=>{
    clearInterval(interval.current)
    clearInterval(interval.static1)
    clearInterval(interval.static2)
    clearInterval(interval.static3)
    clearInterval(interval.static4)
    clearInterval(interval.guardpath1)
    clearInterval(interval.guardpath2)
    clearInterval(interval.guardpath3)
    clearInterval(interval.guardpath4)
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
        <View style={styles.EnemyBase}><Text style={{color:'#fff',alignSelf:'center'}}>Cave</Text></View>
        <View style={{position:'absolute',marginLeft:Pat6hori,marginTop:Pat6verti}}><View style={styles.Guard}><Text style={{color:'#fff',alignSelf:'center'}}></Text></View></View>
        <View style={{position:'absolute',marginLeft:Guardhori,marginTop:Guardverti}}><View style={styles.Guard}><Text style={{color:'#fff',alignSelf:'center'}}></Text></View></View>

      </View>
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
    backgroundColor:'#84cc16'
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
    width:120,
    height:120,
    backgroundColor:'#71717a',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:415
    
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
  EnemyBase:{
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
  RedBox:{
    
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    backgroundColor:'#dc2626'
  },
  Guard:{
    
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
export default DefendFogTown