import React, { useEffect, useRef, useState } from 'react'
import { Alert, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { StackActions } from '@react-navigation/native';


/*
let i=0
for(i;i<AttackercurrentHPArray.length;i++)
let arr= AttackercurrentHPArray
let x= Math.floor(Math.random()*AttackercurrentHPArray.length)    //--->Random Defenderselect to Attack
//function for Selecting skill used !Watch for mana requierments! 
let Skilldmg= //Wert vom SkillArray

arr[x]=arr[x]-Skilldmg
setAttackercurrentHPArray(arr)
*/



const Combat = (props) => {
  //----------------->Group1 Stats
  const [AttackerHPArray,setAttackerHPArray]=useState([])
  const [AttackercurrentHPArray,setAttackercurrentHPArray]=useState([])
  const [AttackerMPArray,setAttackerMPArray]=useState([])
  const [AttackercurrentMPArray,setAttackercurrentMPArray]=useState([])

  //---------------->Group2 Stats
  const [DefenderHPArray,setDefenderHPArray]=useState([])
  const [DefendercurrentHPArray,setDefendercurrentHPArray]=useState([])
  const [DefenderMPArray,setDefenderMPArray]=useState([])
  const [DefendercurrentMPArray,setDefendercurrentMPArray]=useState([])

  const [Phase,setPhase]=useState(0)

  const [Attackersdead,setAttackersdead]=useState(0)
  const [Defendersdead,setDefendersdead]=useState(0)

  const loadStats=()=>{
    let AS=props.ASA
    let AHparr=[]
    let AMparr=[]
    AS.forEach(e=>{
      AHparr.push(e[1])
      AMparr.push(e[2])
    })
    setAttackerHPArray(AHparr)
    setAttackercurrentHPArray(AHparr)
    setAttackerMPArray(AMparr)
    setAttackercurrentMPArray(AMparr)

    let DS=props.DSA
    let DHparr=[]
    let DMparr=[]
    DS.forEach(e=>{
      DHparr.push(e[1])
      DMparr.push(e[2])
    })
    setDefenderHPArray(DHparr)
    setDefendercurrentHPArray(DHparr)
    setDefenderMPArray(DMparr)
    setDefendercurrentMPArray(DMparr)


  }

  
  if(props.MV==true){
  if(Attackersdead==props.ASA.length&&props.ASA.length>0){
  Alert.alert("Sieg","The Guards have succeeded in repelling the Attack on the Wall",[{text:"Loot",onPress: ()=>(VictoryGuard())}])
  }else if(Defendersdead==props.DSA.length&&props.DSA.length>0){
  Alert.alert("Breach","The Undead have killed the Guards and breached the Wall",[{text:"Loot",onPress: ()=>(VictoryNecro())}])
  }
  }
  const VictoryGuard=()=>{
    setAttackersdead(0)
    setDefendersdead(0)
    props.function(2)
    props.MVset(false)
    }
  const VictoryNecro=()=>{
    setAttackersdead(0)
    setDefendersdead(0)
    props.function(1)
    props.MVset(false)
    }
  
  
  useEffect(()=>{
    if(props.MV==true){
    loadStats()}
  },[props])

  return (
    <Modal
    animationType="slide"      
    visible={props.MV}    
    >    
      <SafeAreaView style={styles.SAV}>
        <View style={styles.Maincontainer}>
          <View style={styles.Topcontainer}>
            {props.ASA?.length>0?
            <View style={styles.StatsEnemy}>
              {props.ASA.map((item,index)=>(<>
                
                <><View><Text style={styles.text}>HP: {AttackercurrentHPArray[index]}/{item[0]}</Text></View><>
                { 
                  (item[0])>400?              
                  <View style={{flexDirection:'row',borderColor:'#dc2626',borderWidth:1,backgroundColor:'grey',width:((item[0])/2)}}><View style={{backgroundColor:'red',width:AttackercurrentHPArray[index]/2,height:20}}></View></View>
                  :
                  <View style={{flexDirection:'row',borderColor:'#dc2626',borderWidth:1,backgroundColor:'grey',width:(item[0])}}><View style={{backgroundColor:'red',width:AttackercurrentHPArray[index],height:20}}></View></View>
              }</></>           
                <><View><Text style={styles.text}>MP: {AttackercurrentMPArray[index]}/{item[1]}</Text></View><>
                {
                  (item[1])>400?
                  <View style={{flexDirection:'row',borderColor:'#2563eb',borderWidth:1,backgroundColor:'grey',width:((item[1])/2)}}><View style={{backgroundColor:'blue',width:AttackercurrentMPArray[index]/2,height:20}}></View></View>
                  :
                <View style={{flexDirection:'row',borderColor:'#2563eb',borderWidth:1,backgroundColor:'grey',width:(item[1])}}><View style={{backgroundColor:'blue',width:AttackercurrentMPArray[index],height:20}}></View></View>
                }</></>
                  </>))
            }
            </View>
            :
            ""
            }
          </View>
          <View style={styles.Midcontainer}>
            {props.DSA?.length>0?
            <View style={styles.StatsSelf}>
            {props.DSA.map((item,index)=>(<>
                
                <><View><Text style={styles.text}>HP: {DefendercurrentHPArray[index]}/{item[0]}</Text></View><>
                { 
                  (item[0])>400?              
                  <View style={{flexDirection:'row',borderColor:'#dc2626',borderWidth:1,backgroundColor:'grey',width:((item[0])/2)}}><View style={{backgroundColor:'red',width:DefendercurrentHPArray[index]/2,height:20}}></View></View>
                  :
                  <View style={{flexDirection:'row',borderColor:'#dc2626',borderWidth:1,backgroundColor:'grey',width:(item[0])}}><View style={{backgroundColor:'red',width:DefendercurrentHPArray[index],height:20}}></View></View>
              }</></>           
                <><View><Text style={styles.text}>MP: {DefendercurrentMPArray[index]}/{item[1]}</Text></View><>
                {
                  (item[1])>400?
                  <View style={{flexDirection:'row',borderColor:'#2563eb',borderWidth:1,backgroundColor:'grey',width:((item[1])/2)}}><View style={{backgroundColor:'blue',width:DefendercurrentMPArray[index]/2,height:20}}></View></View>
                  :
                <View style={{flexDirection:'row',borderColor:'#2563eb',borderWidth:1,backgroundColor:'grey',width:(item[1])}}><View style={{backgroundColor:'blue',width:DefendercurrentMPArray[index],height:20}}></View></View>
                }</></>
                  </>))
            }
            </View>
            :
            ""
            }
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
          <TouchableOpacity onPress={()=>props.MVset(false)}>
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

export default Combat