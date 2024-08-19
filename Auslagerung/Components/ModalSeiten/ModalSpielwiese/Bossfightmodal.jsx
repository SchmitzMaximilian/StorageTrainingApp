import React, { useEffect, useRef, useState } from 'react'
import { Alert, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Bossfightmodal = (props) => {
  const [maxHP,setmaxHP]=useState(200)
  const [currentHP,setcurrentHP]=useState(maxHP)
  const [BossmaxHP,setBossmaxHP]=useState(500)
  const [BosscurrentHP,setBosscurrentHP]=useState(BossmaxHP)
  const [maxMP,setmaxMP]=useState(500)
  const [currentMP,setcurrentMP]=useState(maxMP)
  const [BossmaxMP,setBossmaxMP]=useState(250)
  const [BosscurrentMP,setBosscurrentMP]=useState(BossmaxMP)
  const [Frenzy,setFrenzy]=useState(false)
  const [modify,setmodify]=useState(1)
  const interval = useRef(null)

 
/*<View style={{flexDirection:'row',borderColor:'#dc2626',borderWidth:1,backgroundColor:'grey',width:BossmaxHP}}><View style={{backgroundColor:'red',width:BosscurrentHP,height:20}}></View></View>
const combatlog =()=>{
  let dmg=item[3]
  let cost=item[4]
  if(currentMP>=cost){
  setcurrentMP(prev=>prev - cost)
  setBosscurrentHp(prev=>(prev - dmg)*modify)
  }
  }if(BossmaxHP>500){width:BossmaxHP/2
}//alle veränderungen auch /2 verringertbalken länge aber relation bleibt gleich aka statt -20 jetzt -20/2=> -10

const bossaction=()=>{
  let key = Math.floor(Math.random()*6)
  switch(key){
  case 0:
    HeavyStrike()
    break:
  case 1:
    Charge()
    break:
  case 2:
    TwinStrike()
    break:
  case 3:
    Axthrow()
    break:
  case 4:
    Warstomp()
    break:
  case 5:
    Strike()
    break:}
  }
*/

if(Frenzy==false){if(BosscurrentHP<(BosscurrentHP/2)){
setFrenzy(true)
setmodify(2)
}
}
if(props.Dead==false){
  if(BosscurrentHP<=0){
    clearInterval(interval.DoT)
    Alert.alert("Lok'tar","You have succeeded in killing the Minotaur Field Boss",[{text:"Loot",onPress: ()=>(props.V(true),props.MVset(false))}])
    
  }}
  const burning=()=>{
    setBosscurrentHP(prev=>prev - 20)
  }
  const dot =()=>{
    clearInterval(interval.DoT)
    setTimeout(()=>{
      clearInterval(interval.DoT)
    },12100)
    interval.DoT = setInterval(burning,3000)
  }

  useEffect(()=>{
    
  },[])
  return (

    <Modal
    animationType="slide"      
    visible={props.MV}    
    >
      <SafeAreaView style={styles.SAV}>
        <View style={styles.Maincontainer}>
          <View style={styles.Topcontainer}>
            <View style={styles.StatsEnemy}>
            <View><Text style={styles.text}>HP: {BosscurrentHP}/{BossmaxHP}</Text></View>
            {
              BossmaxHP>400?
              <View style={{flexDirection:'row',borderColor:'#dc2626',borderWidth:1,backgroundColor:'grey',width:BossmaxHP/2}}><View style={{backgroundColor:'red',width:BosscurrentHP/2,height:20}}></View></View>
              :
              <View style={{flexDirection:'row',borderColor:'#dc2626',borderWidth:1,backgroundColor:'grey',width:BossmaxHP}}><View style={{backgroundColor:'red',width:BosscurrentHP,height:20}}></View></View>

            }            
            <View><Text style={styles.text}>MP: {BosscurrentMP}/{BossmaxMP}</Text></View>
            {
              BossmaxMP>400?
              <View style={{flexDirection:'row',borderColor:'#2563eb',borderWidth:1,backgroundColor:'grey',width:BossmaxMP/2}}><View style={{backgroundColor:'blue',width:BosscurrentMP/2,height:20}}></View></View>
              :
            <View style={{flexDirection:'row',borderColor:'#2563eb',borderWidth:1,backgroundColor:'grey',width:BossmaxMP}}><View style={{backgroundColor:'blue',width:BosscurrentMP,height:20}}></View></View>
            }</View>
          </View>
          <View style={styles.Midcontainer}>
            <View style={styles.StatsSelf}>
              <View><Text style={styles.text}>HP: {currentHP}/{maxHP}</Text></View>
              {
                maxHP>400?
                <View style={{flexDirection:'row',borderColor:'#16a34a',borderWidth:1,backgroundColor:'grey',width:maxHP/2}}><View style={{backgroundColor:'green',width:currentHP/2,height:20}}></View></View>
                :
                <View style={{flexDirection:'row',borderColor:'#16a34a',borderWidth:1,backgroundColor:'grey',width:maxHP}}><View style={{backgroundColor:'green',width:currentHP,height:20}}></View></View>
              }
              
              <View><Text style={styles.text}>MP: {currentMP}/{maxMP}</Text></View>
              {
                maxMP>400?
                <View style={{flexDirection:'row',borderColor:'#2563eb',borderWidth:1,backgroundColor:'grey',width:maxMP/2}}><View style={{backgroundColor:'blue',width:currentMP/2,height:20}}></View></View>
                :
              <View style={{flexDirection:'row',borderColor:'#2563eb',borderWidth:1,backgroundColor:'grey',width:maxMP}}><View style={{backgroundColor:'blue',width:currentMP,height:20}}></View></View>
            }
            </View>
          </View>
          <View style={styles.Botcontainer}>
          <View style={styles.Aktionsleiste}>
            <TouchableOpacity onPress={()=>(dot(),setcurrentMP(prev=>prev - 30))}>
              <Text style={styles.text}>Feuerbrand</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>(setBosscurrentHP(prev=>prev - 80),setcurrentMP(prev=>prev - 50))}>
              <Text style={styles.text}>Demonblitz</Text>
            </TouchableOpacity></View>
          </View>
          <TouchableOpacity onPress={()=>setBosscurrentHP(BossmaxHP)}>
              <Text style={styles.text}>Reset</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  )
}
const styles= StyleSheet.create({
  SAV:{
    flex:1,
    width:'100%',
    height:'100%',
    backgroundColor:'black',

  },
  text:{
    color:'#fff'
  },
  Maincontainer:{
    flex:5,
    justifyContent:'space-around',
    alignItems:'center',
    borderColor:'#fff',
    borderWidth:1,
    width:'100%',
    height:'100%'
    

  },
  Aktionsleiste:{
    padding:5,
    flexDirection:'column',
    flexWrap:'wrap',
    height:'auto'
  },
  Displayleiste:{},
  hprow:{
    flexDirection:'row',
    borderColor:'#16a34a',
    borderWidth:1,
    backgroundColor:'grey'
  },
  StatsEnemy:{
    padding:5,
    width:'100%',
    height:100
  },
  StatsSelf:{
    margin:5,
    width:'100%',
    height:100,
  },
  Enemybild:{},
  BildYou:{},
  Topcontainer:{
    flex:2,
    borderColor:'#fff',
    borderWidth:1,
    width:'100%',
  },
  Midcontainer:{
    flex:2,
    borderColor:'#fff',
    borderWidth:1,
    justifyContent:'flex-end',
    width:'100%'
    },
  Botcontainer:{
    flex:1,
    borderColor:'#fff',
    borderWidth:1,
    width:'100%'
  },
})

export default Bossfightmodal