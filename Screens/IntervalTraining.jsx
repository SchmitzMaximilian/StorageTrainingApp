import React, { useEffect, useState, useRef } from 'react'
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StackActions } from '@react-navigation/native';
import Routeplaner, { checkposition } from '../Auslagerung/functions/Services/Tracker/Routeplaner';
import Patrol from '../Auslagerung/functions/Services/Tracker/Patrol';
const IntervalTraining = ({navigation}) => {
  const [Pat1hori,setPat1hori]=useState(455)
  const [Pat1verti,setPat1verti]=useState(615)
  const [Pat2hori,setPat2hori]=useState(235)
  const [Pat2verti,setPat2verti]=useState(535)
  const [Pat3hori,setPat3hori]=useState(175)
  const [Pat3verti,setPat3verti]=useState(775)
  const [Pat4hori,setPat4hori]=useState(575)
  const [Pat4verti,setPat4verti]=useState(795)
  const [Pat5hori,setPat5hori]=useState(395)
  const [Pat5verti,setPat5verti]=useState(895)
  const [Pat6hori,setPat6hori]=useState(130)
  const [Pat6verti,setPat6verti]=useState(930)

  const [Guardhori,setGuardhori]=useState(580)
  const [Guardverti,setGuardverti]=useState(280)
  const interval = useRef(null)
  //grenzelinks=20
  //grenzerechts=750
  //grenzeoben=20
  //grenzeunten=1070
 //<View style={{marginLeft:170,marginTop:1010}}><View style={styles.Loot}><Text style={{color:'#fff',alignSelf:'center'}}></Text></View></View>
  const goaroundTop = ()=>{
      setPat6hori(prev=>prev + 20)
    }
    const goaroundRight = ()=>{
      setPat6verti(prev=>prev + 20)
    }
    const goaroundBottom = ()=>{
      setPat6hori(prev=>prev - 20)
    }
    const goaroundLeft = ()=>{
      setPat6verti(prev=>prev - 20)
    }
    
    const checkposition = ()=>{
    if(Pat6hori==250 && Pat6verti==930){
      clearInterval(interval.static1)
      interval.static2 = setInterval(goaroundRight,2000)
    }
    if(Pat6verti==1050 && Pat6hori==250){
      clearInterval(interval.static2)
      interval.static3 = setInterval(goaroundBottom,2000)
    }
    if(Pat6hori==130 && Pat6verti==1050){
      clearInterval(interval.static3)
      interval.static4 = setInterval(goaroundLeft,2000)
    }
    if(Pat6hori==130 && Pat6verti==950){
      clearInterval(interval.static4)
      setTimeout(()=>{
        setPat6verti(prev=>prev - 20)
        interval.static1 = setInterval(goaroundTop,2000)
      },2000)
    }} 
      
    useEffect(()=>{
    checkposition()
  },[Pat6hori,Pat6verti]);
    
  <Patrol  PV={Guardverti}
  PH={Guardhori}
  setPV={setGuardverti}
  setPH={setGuardhori}
  StartV={300}
  EndV={420}
  StartH={580}
  EndH={700}
  Delay={2000}/>
    

    



  if(Pat1hori<30 || Pat2hori<30 || Pat3hori<30 || Pat4hori<30 || Pat5hori<30 || Pat1hori>730 || Pat2hori>730 || Pat3hori>730 || Pat4hori>730 || Pat5hori>730){
    clearInterval(interval.current)
  }
  if(Pat1verti<130 || Pat2verti<130 || Pat3verti<130 || Pat4verti<130 || Pat5verti<130 || Pat1verti>1050 || Pat2verti>1050 || Pat3verti>1050 || Pat4verti>1050 || Pat5verti>1050){
    clearInterval(interval.current)
  }
 /*
 setInterval(()=>Routeplaner.goaroundTop,2000)
  <Routeplaner PV={Pat6verti}
   PH={Pat6hori}
   setPV={setPat6verti}
   setPH={setPat6hori}
   StartV={930}
   EndV={1050}
   StartH={130}
   EndH={250}
   Delay={2000}
   IV={interval} />
*/


  const patroute=()=>{
    let key=Math.floor(Math.random()*10)
    console.log("You rolled a " + key)
    switch(key){
        case 0://syncron
          setPat1hori(prev=>prev - 20)
          setPat2hori(prev=>prev + 20)
          setPat3hori(prev=>prev - 20)
          setPat4hori(prev=>prev - 20)
          setPat5hori(prev=>prev + 20)
        break;
        case 1:
          setPat1verti(prev=>prev + 20)
          setPat2verti(prev=>prev - 20)
          setPat3verti(prev=>prev - 20)
          setPat4verti(prev=>prev - 20)
          setPat5verti(prev=>prev + 20)
        break;
        case 2:
          setPat1verti(prev=>prev - 20)
          setPat2verti(prev=>prev + 20)
          setPat3verti(prev=>prev + 20)
          setPat4verti(prev=>prev + 20)
          setPat5verti(prev=>prev - 20)
        break;
        case 3:
          setPat1hori(prev=>prev + 20)
          setPat2hori(prev=>prev - 20)
          setPat3hori(prev=>prev + 20)
          setPat4hori(prev=>prev + 20)
          setPat5hori(prev=>prev - 20)
        break;
        case 4://mix untershiedlich
          setPat1verti(prev=>prev + 20)
          setPat2hori(prev=>prev - 20)
          setPat3hori(prev=>prev - 20)
          setPat4hori(prev=>prev - 20)
          setPat5hori(prev=>prev + 20)
        break;
        case 5:
          setPat1hori(prev=>prev - 20)
          setPat2verti(prev=>prev + 20)
          setPat3hori(prev=>prev + 20)
          setPat4verti(prev=>prev - 20)
          setPat5verti(prev=>prev + 20)
        break;
        case 6:
          setPat1hori(prev=>prev + 20)
          setPat2hori(prev=>prev - 20)
          setPat3verti(prev=>prev - 20)
          setPat4verti(prev=>prev + 20)
          setPat5hori(prev=>prev + 20)
        break;
        case 7:
          setPat1verti(prev=>prev - 20)
          setPat2verti(prev=>prev - 20)
          setPat3verti(prev=>prev + 20)
          setPat4hori(prev=>prev - 20)
          setPat5hori(prev=>prev - 20)
        break;
        case 8:
          setPat1verti(prev=>prev + 20)
          setPat2verti(prev=>prev - 20)
          setPat3hori(prev=>prev + 20)
          setPat4hori(prev=>prev - 20)
          setPat5verti(prev=>prev - 20)
        break;
        case 9:
          setPat1verti(prev=>prev - 20)
          setPat2verti(prev=>prev + 20)
          setPat3hori(prev=>prev - 20)
          setPat4verti(prev=>prev - 20)
          setPat5verti(prev=>prev + 20)
        break;
        
        
      
    }
  }
  const getamoveon = (i) =>{
    let check =i
    if(check>0){
      interval.current = setInterval(patroute, 3000,Pat1hori,Pat1verti,Pat2hori,Pat2verti,Pat3hori,Pat3verti,Pat4hori,Pat4verti,Pat5hori,Pat5verti);

    }
  }
  useEffect(()=>{
    interval.static1 = setInterval(goaroundTop,2000)
    interval.current = setInterval(patroute, 3000,Pat1hori,Pat1verti,Pat2hori,Pat2verti,Pat3hori,Pat3verti,Pat4hori,Pat4verti,Pat5hori,Pat5verti);    
    return ()=>{
      clearInterval(interval.current)
      clearInterval(interval.static1)
      clearInterval(interval.static2)
      clearInterval(interval.static3)
      clearInterval(interval.static4)
    }
  },[])
  return (
    <SafeAreaView style={styles.SAV}>
      <TouchableOpacity onPress={()=>navigation.dispatch(StackActions.pop(1))}>
      <Text style={styles.text}>Training</Text></TouchableOpacity>
      <View style={styles.BigBox}>
        <View style={styles.Town}><Text style={{color:'#fff',alignSelf:'center'}}>Town</Text></View>
        <View style={styles.Village}><Text style={{color:'#fff',alignSelf:'center'}}>Village</Text></View>
        <View style={styles.Castle}><Text style={{color:'#fff',alignSelf:'center'}}>Castle</Text></View>
        
        <View style={{position:'absolute',marginLeft:Pat1hori,marginTop:Pat1verti}}><View style={styles.Pat1}><Text style={{color:'#fff',alignSelf:'center'}}>1</Text></View></View>
        <View style={{position:'absolute',marginLeft:Pat2hori,marginTop:Pat2verti}}><View style={styles.Pat1}><Text style={{color:'#fff',alignSelf:'center'}}>2</Text></View></View>
        <View style={{position:'absolute',marginLeft:Pat3hori,marginTop:Pat3verti}}><View style={styles.Pat1}><Text style={{color:'#fff',alignSelf:'center'}}>3</Text></View></View>
        <View style={{position:'absolute',marginLeft:Pat4hori,marginTop:Pat4verti}}><View style={styles.Pat1}><Text style={{color:'#fff',alignSelf:'center'}}>4</Text></View></View>
        <View style={{position:'absolute',marginLeft:Pat5hori,marginTop:Pat5verti}}><View style={styles.Pat1}><Text style={{color:'#fff',alignSelf:'center'}}>5</Text></View></View>
        <View style={{position:'absolute',marginLeft:Pat6hori,marginTop:Pat6verti}}><View style={styles.Pat1}><Text style={{color:'#fff',alignSelf:'center'}}>6</Text></View></View>
        
        <View style={{position:'absolute',marginLeft:Guardhori,marginTop:Guardverti}}><View style={styles.Guard}><Text style={{color:'#fff',alignSelf:'center'}}></Text></View></View>
      </View>
      <TouchableOpacity onPress={()=>clearInterval(interval.current)}>
      <Text style={styles.text}>Frezze</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getamoveon(1)}>
      <Text style={styles.text}>Restart</Text></TouchableOpacity>
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
    justifyContent:'center'
    
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
  Castle:{
    position:'absolute',
    borderColor:'#fff',
    borderWidth:2,
    width:100,
    height:100,
    backgroundColor:'#1e293b',
    justifyContent:'center',
    marginTop: 950,
    marginLeft: 150
    
  },
  Pat1:{
    
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
  
})

export default IntervalTraining