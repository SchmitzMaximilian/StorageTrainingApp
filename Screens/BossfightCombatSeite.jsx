import React, { useEffect, useRef, useState } from 'react'
import { Alert, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { StackActions } from '@react-navigation/native';

const BossfightCombatSeite = (props) => {
  const [BossMoveSetarr,setBossMoveSetarr]=useState([["Heavy Hit",75,50],["Hit",50,30]])
  const [maxHP,setmaxHP]=useState(300)
  const [currentHP,setcurrentHP]=useState(maxHP)
  const [BossmaxHP,setBossmaxHP]=useState(500)
  const [BosscurrentHP,setBosscurrentHP]=useState(BossmaxHP)
  const [maxMP,setmaxMP]=useState(500)
  const [currentMP,setcurrentMP]=useState(maxMP)
  const [BossmaxMP,setBossmaxMP]=useState(250)
  const [BosscurrentMP,setBosscurrentMP]=useState(BossmaxMP)
  const [Frenzy,setFrenzy]=useState(false)
  const [modify,setmodify]=useState(1)
  const [Phase,setPhase]=useState(0)
  const [Attack,setAttack]=useState("")
  const [Combatlog,setCombatlog]=useState("")
  const interval = useRef(null)
const bossturn=()=>{
    let index=Math.floor(Math.random()*(BossMoveSetarr.length))
    if(Phase==1){
    if(BosscurrentMP>=BossMoveSetarr[index][2]){
    setAttack(BossMoveSetarr[index][0])
    setBosscurrentMP(prev=>prev-BossMoveSetarr[index][2])
    setcurrentHP(prev=>prev-BossMoveSetarr[index][1])
    setCombatlog("You suffered " + BossMoveSetarr[index][1] + " Points of Damage")
    setPhase(2)
    }else if(BosscurrentHP>100){
      setAttack("Recharge")
    setBosscurrentMP(prev=>prev+100)
    setBosscurrentHP(prev=>prev-40)
    setCombatlog("The Boss sacrificed 40 Healthpoints to regain 100 Points of Mana")
    setPhase(2)
    }else{
      setAttack("Recharge")
    setBosscurrentMP(prev=>prev+50)
    setCombatlog("The Boss regained 50 Points of Mana")
    setPhase(2)
    }}}
 useEffect(()=>{
  bossturn()
 },[Phase])
/*


<View style={{flexDirection:'row',borderColor:'#dc2626',borderWidth:1,backgroundColor:'grey',width:BossmaxHP}}><View style={{backgroundColor:'red',width:BosscurrentHP,height:20}}></View></View>
const combatlog =()=>{
  let dmg=item[3]
  let cost=item[4]
  if(currentMP>=cost){
  setcurrentMP(prev=>prev - cost)
  setBosscurrentHp(prev=>(prev - dmg)*modify)
  }
  }if(BossmaxHP>500){width:BossmaxHP/2
}//alle veränderungen auch /2 verringertbalken länge aber relation bleibt gleich aka statt -20 jetzt -20/2=> -10


if(Frenzy==false){if(BosscurrentHP<(BossmaxHP/2)){
  console.log("rage")
setFrenzy(true)
setmodify(2)
}
}

  if(props.Dead==false){
  if(BosscurrentHP<=0){
    clearInterval(interval.DoT)
    Alert.alert("Lok'tar","You have succeeded in killing the Minotaur Field Boss",[{text:"Loot",onPress: ()=>console.log("Sieg")}])
    
  }}


  
*/
  
  const heal=()=>{
    setcurrentHP(prev=>prev+100)
    setcurrentMP(prev=>prev-50)
  }
  const DrainLife=()=>{
    setBosscurrentHP(prev=>prev - 40)
    setcurrentHP(prev=>prev+40)
    setcurrentMP(prev=>prev - 50)

  }
  
  return (

    
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
          {
              Phase==0?
              <>
              <TouchableOpacity onPress={()=>(setBosscurrentHP(prev=>prev - 30),setcurrentMP(prev=>prev - 30),setPhase(1))}>
              <Text style={styles.text}>FeuerNova</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>(setBosscurrentHP(prev=>prev - 80),setcurrentMP(prev=>prev - 50),setPhase(1))}>
              <Text style={styles.text}>Demonblitz</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>(heal(),setPhase(1))}>
              <Text style={styles.text}>Heal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>(DrainLife(),setPhase(1))}>
              <Text style={styles.text}>Drain Life</Text>
            </TouchableOpacity>
            
              </>
              :
              ""
            }
            {Phase==1?
             <>
            
            
            </>
            :
            ""
            }
            {
              Phase==2?
              <>
              <Text style={styles.text}>The Boss used {Attack}</Text>
              <Text style={styles.text}>{Combatlog}</Text>
              <TouchableOpacity onPress={()=>setPhase(0)}><Text style={styles.text}>Round Complet</Text></TouchableOpacity>
              </>
              :
              ""
            }
            </View>
          </View>
          <TouchableOpacity onPress={()=>props.navigation.dispatch(StackActions.pop(1))}>
              <Text style={styles.text}>Reset</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
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
    marginTop:20,
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

export default BossfightCombatSeite