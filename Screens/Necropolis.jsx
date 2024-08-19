import React, { useEffect, useState, useRef } from 'react'
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Movment from '../Auslagerung/Components/Knöpfe/Movment'
import { StackActions } from '@react-navigation/native';
import Combat from '../Auslagerung/Components/ModalSeiten/ModalNecropolis/Combat';
/*
const units = [['W', 300, 100],['A', 100, 200],['S', 200, 150],['G', 250, 100],['Z', 350, 180],['M', 150, 400]];
const group1arr=[['W', 300, 100],['A', 100, 200],['S', 200, 150],['W', 300, 100],['A', 100, 200]]
------------------------------------PVE EncounterDetect
const detectEncounter=()=>{
  let encounterIndex = army.findIndex(([vv,vh,isAlive])=>{
    return (vv-5)==vertival && (vh-5)==horival && isAlive})
  
  if(encounterIndex != -1){
   setEI(encounterIndex)
    Alert.alert("Fight","You see a Group of Skeletons walking towards you",[{text: "Attack",onPress: ()=>{raiseundead()}},{text: "Run",onPress: ()=>{}}])
        
  } }

<skillDB GroupArray={Gruppe1} Skillset={setG1S} />

const getSkillArrays=()=>{
let def=defendersstat[DefenderID]
let ang=enemyGroups[AttackerID]
const DSkillArr=skillDB(def)
const ASkillArr=skillDB(ang)
}

-----------------------------------EVE Combatergebnis
const Aftermath=(Loser)=>{
  if(Loser==1){
  let arr=defenders
  arr[DefenderID][2]=false
  setDefenders(arr)
  }else if(Loser==2){
  let arr=army
  arr[AttackerID][2]=false
  setarmy(arr)
  }
  }

-------------------------------EVE EncounterDetect
cosnt wallAttack=()=>{
  for(let i =0;i<defenders.length;i++){
  for(let j=0;j<army.length;j++){
  if(defenders[i][0]==army[j][0] && defenders[i][1]==army[j][1]){
  setAttackerID(j)
  setDefenderID(i)
  setCombatactive(true)
  }
  }}
  console.log("No Attack on the Wall")
  }

--------------------------------------Advance on Wall

const charge=()=>{
  let x = Math.floor(Math.random()*army.length)
  let arr= army
  arr[x][0]=arr[x][0]-20
  setarmy(arr)
  }

const StormTheWall=()=>{
interval.Advance1 = setInterval(charge,4000)
setTimeout(()=>{
interval.Advance2 = setInterval(charge,4000)},1000)
setTimeout(()=>{
interval.Advance3 = setInterval(charge,4000)},2000)
setTimeout(()=>{
interval.Advance4 = setInterval(charge,4000)},3000)}



  --------------------------------------------------------------------
const skillDB=()=>{
  let arr= group1arr
  let skillarr=[]
  arr.forEach(e=>{
    let key=e[0]
  switch(key){
  case 'W':
    skillarr.push([['Slash', 30, 10, 0],['Shieldbash', 50, 30, 0],['Throw Bone', 20, 0, 20],['Necrotic Strike', 70, 20, 30]])
    break;
  case 'S':
    skillarr.push([[Slash,30,10,0],[Stab,20,10,0],[Twinstrike,60,40],[Throw Bone,20,0,20]])
    break;
  case 'A':
    skillarr.push([[Shot,40,25,0],[Necrotic Arrow,100,50,25],[Throw Bone,20,0,20]])
    break;
  case 'G':
    skillarr.push([[Bite,40,30,-20],[Claw,20,10,0],[Necrotic Claw,60,0,30],[Devour Corpse,0,-40,-30]])
    break;
  case 'Z':
    skillarr.push([[Bite,30,15,0],[Strike,20,15,0],[Headbutt,50,30,-20],[Necrotic Vomit,100,60,-50]])
    break;
  case 'M':
    skillarr.push([[NecroticBolt,50,30,0],[NecroticBlast,100,40,20],[Recharge,0,-200,40]])
    break;
  }
    })
  return skillarr
  
  }

  case 'G':
    skillarr.push()
    break;

const combat = () => {
    while (group1.length > 0 && group2.length > 0) {
      for (const unit of group1) {
        const target = selectTarget(group2);
        const skill = selectSkill(unit);
        useSkill(unit, target, skill);
        if (target.hp <= 0) {
          setGroup2(group2.filter((u) => u !== target));
          console.log(`${target.name} is defeated!`);
        }
      }
      for (const unit of group2) {
        const target = selectTarget(group1);
        const skill = selectSkill(unit);
        useSkill(unit, target, skill);
        if (target.hp <= 0) {
          setGroup1(group1.filter((u) => u !== target));
          console.log(`${target.name} is defeated!`);
        }

      }

    }
    if (group1.length > 0) {
      console.log('Group 1 wins!');
    } else {
      console.log('Group 2 wins!');
    }
  };

let index=Math.floor(Math.random()*(amount of troops in array/arraylength))
Garr=guardgroup
Earr=enemygroup
if(Garr[index][0]>0){

}else{
increase index and try again
}
*/
const Necropolis = (props) => {
  const [Playerstats,setPlayerstats]=useState([300,300])
  const [horival,sethorival]=useState(10)
  const [vertival,setvertival]=useState(10)
  
  const [EnemyGroupArray,setEnemyGroupArray]=useState([[575,60,true],[615,60,true],[575,100,true],[575,140,true],[575,180,true],[575,220,true],[615,220,true],[575,570,true],[615,570,true],[575,610,true],[575,650,true],[575,690,true],[575,730,true],[615,730,true]])
  const [EnemyStatArray,setEnemyStatArray]=useState([])
  const [army,setarmy]=useState([])
  const [enemyGroups,setEnemyGroups]=useState([])
  const [defenders,setDefenders]=useState([])
  const [defendersstat,setDefendersstat]=useState([])
  const [AttackerID,setAttackerID]=useState()
  const [DefenderID,setDefenderID]=useState()
  const [Combatactive,setCombatactive]=useState(false)
  const interval = useRef(null)

const createDefenders = () => {
  for (let x = 15; x <= 780; x += 40) {
    defenders.push([75,x,true])
  }
  for (let x = 35; x <= 760; x += 40) {
    defenders.push([55,x,true])
  }
  setDefenders(defenders)
  console.log(defenders.length)
  createDefenderGroups()
}


const createDefenderGroups=()=>{
  console.log(" Started")
  let Guardarr=[]
  for(let i=0;i<defenders.length;i++){
    let arr=[]
    for(let j=0;j<6;j++){      
    let randomIndex = Math.floor(Math.random() * 4);
    switch (randomIndex) {
      case 0:
        arr.push(['GSB', 350, 150]);
        break;
      case 1:
        arr.push(['GSM', 200, 200]);
        break;
      case 2:
        arr.push(['GCM', 150, 250]);
        break;
      case 3:
        arr.push(['GMF', 300, 160]);
        break;
    
    }
  }
  Guardarr.push(arr)
}
console.log(Guardarr)
setDefendersstat(Guardarr)
}
  const createEnemyGroups = () => {
    for (let i = 0; i < army.length; i++) {  
      const group = []  
      for (let j = 0; j < 5; j++) {  
        const enemyType = Math.random() < 0.5 ? ['G', 200, 100] : ['Z', 400, 180]  
        group.push(enemyType)  
      }  
      enemyGroups.push(group)  
    }
     
    setEnemyGroups(enemyGroups)  
  };
  const spawnOrder = () => {
    let arr=[]
    for(let i=0;i<20;i++){ 
    const hv = (Math.floor(Math.random() * 7) * 100) + (Math.floor(Math.random() * 5) * 20 + 15)
    const vv = (100 + (Math.floor(Math.random() * 3) +1) * 100) + (Math.floor(Math.random() * 5) * 20 + 15)
    arr.push([vv, hv, true])}
    setarmy(arr)
    
  }
  

  const NecronGuardspawn=()=>{
    let enemyCombinations = [];
for (let i = 0; i < EnemyGroupArray.length; i++) {
  let combination = [];
  for (let j = 0; j < 3; j++) {
    let randomIndex = Math.floor(Math.random() * 3);
    switch (randomIndex) {
      case 0:
        combination.push(['W', 300, 100]);
        break;
      case 1:
        combination.push(['A', 100, 200]);
        break;
      case 2:
        combination.push(['S', 200, 150]);
        break;
    }
  }
  enemyCombinations.push(combination);
  
}
console.log(enemyCombinations)
setEnemyStatArray(enemyCombinations)
  }

  const wallAttack=()=>{
    for(let i =0;i<defenders.length;i++){
    for(let j=0;j<army.length;j++){
    if(defenders[i][0]==army[j][0] && defenders[i][1]==army[j][1]){
    setAttackerID(j)
    setDefenderID(i)
    setCombatactive(true)
    }
    }}
    console.log("No Attack on the Wall")
    }

  const Aftermath=(Loser)=>{
    if(Loser==1){
    let arr=defenders
    arr[DefenderID][2]=false
    setDefenders(arr)
    }else if(Loser==2){
    let arr=army
    arr[AttackerID][2]=false
    setarmy(arr)
    }
    }

    const detectEncounter=()=>{
      let encounterIndex = army.findIndex(([vv,vh,isAlive])=>{
        return (vv-5)==vertival && (vh-5)==horival && isAlive})
      
      if(encounterIndex != -1){
        clearInterval(interval.Advance1)
        clearInterval(interval.Advance2)
        clearInterval(interval.Advance3)
        clearInterval(interval.Advance4)
        setEI(encounterIndex)
        Alert.alert("Fight","You see a Group of Skeletons walking towards you",[{text: "Attack",onPress: ()=>{raiseundead()}},{text: "Run",onPress: ()=>{}}])
            
      } }

      const charge=()=>{
        let x = Math.floor(Math.random()*army.length)
        let arr= army
        arr[x][0]=arr[x][0]-20
        setarmy(arr)
        detectEncounter()
        }
      
      const StormTheWall=()=>{
      interval.Advance1 = setInterval(charge,4000)
      setTimeout(()=>{
      interval.Advance2 = setInterval(charge,4000)},1000)
      setTimeout(()=>{
      interval.Advance3 = setInterval(charge,4000)},2000)
      setTimeout(()=>{
      interval.Advance4 = setInterval(charge,4000)},3000)}
useEffect(()=>{
    createEnemyGroups()
    if(defenders.length==0){
    createDefenders()}
    console.log("whats going on")
  },[army?.length])

  useEffect(()=>{ 
    if(EnemyStatArray.length==0){
    NecronGuardspawn()}
    spawnOrder()
    StormTheWall()
    return()=>{
      clearInterval(interval.Advance1)
      clearInterval(interval.Advance2)
      clearInterval(interval.Advance3)
      clearInterval(interval.Advance4)
    }
  },[])

  return (
    <SafeAreaView style={styles.SAV}>
      <TouchableOpacity onPress={()=>props.navigation.dispatch(StackActions.pop(1))}>
      <Text style={styles.text}>Training</Text></TouchableOpacity>
      <View style={styles.BigBox}>

        <View style={{position:'absolute',zIndex:10,borderColor:'#fff',borderWidth:1,width:30,height:30,marginLeft:horival,marginTop:vertival,backgroundColor:'black'}}></View>
        <View style={styles.Town}><Text style={{color:'#fff',alignSelf:'center'}}>Bastion Wall</Text></View>
        
        <View style={styles.EnemyBase}><Text style={{color:'#fff',alignSelf:'center'}}>Necropolis</Text></View>
        <View style={styles.Ziggurat}><Text style={{color:'#fff',alignSelf:'center'}}>Ziggurat</Text></View>
        <View style={styles.Ziggurat2}><Text style={{color:'#fff',alignSelf:'center'}}>Ziggurat</Text></View>
        {
          EnemyGroupArray?.length>0?
          EnemyGroupArray.map((item,index)=>(
            <View key={"Skeletongroup" + index} style={{position:'absolute',marginLeft:item[1],marginTop:item[0]}}><View style={styles.RedBox}><Text style={{color:'#fff',alingSelf:'center'}}></Text></View></View>
            
          ))
          :
          ""
          
        }
        {
          army?.length>0?
          army.map((item,index)=>(
            item[2]==true?
            <View key={"Skeletongroup" + index} style={{position:'absolute',marginLeft:item[1],marginTop:item[0]}}><View style={styles.RedBox}><Text style={{color:'#fff',alingSelf:'center'}}></Text></View></View>
            :
            ""
          ))
          :
          ""
          
        }
        {
          defenders?.length>0?
          defenders.map((item,index)=>(
            item[2]==true?
            <View key={"Guard" + index} style={{position:'absolute',marginLeft:item[1],marginTop:item[0]}}><View style={styles.Guard}><Text style={{color:'#fff',alingSelf:'center'}}></Text></View></View>
            :
            ""
          ))
          :
          ""
          
        }        

        </View>
        <View style={{alignSelf:'center',marginVertical:15}}>
          <Combat ASA={enemyGroups[AttackerID]} DSA={defendersstat[DefenderID]} MV={Combatactive} MVset={setCombatactive} function={Aftermath} />
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
    backgroundColor:'#475569'
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
    width:'100%',
    height:100,
    backgroundColor:'#f97316',
    justifyContent:'center'
    
  },
  Town2:{
    position:'absolute',
    borderColor:'#fff',
    borderWidth:2,
    width:100,
    height:100,
    backgroundColor:'#f97316',
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
    backgroundColor:'#7e22ce',
    justifyContent:'center',
    marginTop: 1010,
    marginLeft: 350
    
  },Ziggurat:{
    position:'absolute',
    borderColor:'#fff',
    borderWidth:2,
    width:100,
    height:100,
    backgroundColor:'#22c55e',
    justifyContent:'center',
    marginTop: 610,
    marginLeft: 100
  },Ziggurat2:{
    position:'absolute',
    borderColor:'#fff',
    borderWidth:2,
    width:100,
    height:100,
    backgroundColor:'#22c55e',
    justifyContent:'center',
    marginTop: 610,
    marginLeft: 610
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
export default Necropolis