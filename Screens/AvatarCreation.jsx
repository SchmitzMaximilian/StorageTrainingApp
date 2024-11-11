import React, { useEffect, useState } from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
/*
  //let text= reply.text()
  //console.log(await text)

  const testfunction=()=>{    
  }
<TouchableOpacity onPress={()=>testfunction()}>
        <Text style={styles.text}>Press Me to Test</Text>
        </TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate("AvatarSummery", {AvID:props?.route.params.AvID, AN:props?.route.params.AN,InfoArray:AvatarInformation})}></TouchableOpacity>
*/
const AvatarCreation = (props) => {
  const [AuswahlArray,setAuswahlArray]=useState([['Human',100,100],['Elf',70,150],['Dwarf',150,60],['Test',100,100]])
  const [AvatarHp,setAvatarHp]=useState()
  const [AvatarMp,setAvatarMp]=useState()
  const [raceSelected,setraceSelected]=useState(false)
  const [ClassArray,setClassArray]=useState([])
  const [AvatarInformation,setAvatarInformation]=useState([])
  const [ContinueAlert,setContinueAlert]=useState(false)
  console.log('Hp: ' + AvatarHp + ' Mp: ' + AvatarMp)

  //---------------------------Data Fetching---------------------//
  const getVolkListe=async()=>{
    try{
      const request={
        method: 'POST',
        header: { 'Content-Type': 'application/json'},
        body: JSON.stringify({"query":9})
    }
      const reply = await fetch('http://192.168.2.44/datenbankapi/MagicStuff/indexmagic.php', request);

      let data =await reply.json()
      setAuswahlArray(data)
    }catch(err){
      console.log(err)
    }
    
  }
  const getClassListe=async()=>{
    try{
      const request={
        method:'POST',
        header: {'Content-Type' : 'application/json'},
        body: JSON.stringify({"query":10})
      }
      const reply= await fetch('http://192.168.2.44/datenbankapi/MagicStuff/indexmagic.php', request);
      
      let data = await reply.json()
      setClassArray(data)
    }catch(err){
      console.log(err)
    }
  }

  //---------------------Rollong for Final Stats---------------------//
  const Statcalculation=(index)=>{    
    let i = index
    AvatarInformation.push(ClassArray[i][0])
    let BaseStat=AvatarHp
    let EndHPmin= ClassArray[i][1]
    let EndHPmax= ClassArray[i][2]
    let Abstand= 10
    let dif= (EndHPmax-EndHPmin)/Abstand+1
    let BonusHp= Math.floor((Math.random())*dif)*Abstand+EndHPmin
    let EndHP=BaseStat + BonusHp
    setAvatarHp(EndHP)
    AvatarInformation.push(EndHP)
    let Manapool= AvatarMp + ClassArray[i][3]
    setAvatarMp(Manapool)
    AvatarInformation.push(Manapool)
    AvatarInformation.push(0)
    setContinueAlert(true)
  }
  const resetPage=()=>{
    setContinueAlert(false)
    setAvatarHp()
    setAvatarMp()
    setraceSelected(false)    
    setAvatarInformation([])
  }

  if(ContinueAlert==true){
    Alert.alert('Confirm Your Selection',
      'You selected ' + AvatarInformation[0] + ' as your Race and ' + AvatarInformation[1] +' as your Class',
      [{text:'Continue Avatar Creation',onPress:()=>props.navigation.navigate("AvatarSummery", {AvID:props?.route.params.AvID, AN:props?.route.params.AN, InfoArray:AvatarInformation})},
      {text:'Reset Selection',onPress:()=>resetPage()}]
    )
  }


  useEffect(()=>{
    getVolkListe()
    getClassListe()
  },[])
  return (
    <SafeAreaView style={styles.SAV}>
      <View style={styles.Maincontainer}>        
        <View style={styles.Liste}>
        {
          raceSelected?
          ClassArray.map((item,index)=>(
            <>
            <TouchableOpacity onPress={()=>(console.log('You choose ' + item[0] + ' as your Class'),Statcalculation(index))}>
            <View key={'Selected Class ' + index + ' : ' + item[0]} style={styles.Auswahlfeld}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:5}}>
              <Text style={styles.text}>Klasse:</Text><Text style={styles.text}>{item[0]}</Text></View>
              <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:5}}>
              <Text style={styles.text}>Hitpoint Bonus:</Text><Text style={styles.text}>{item[1]} - {item[2]}</Text></View>
              <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:5}}>
              <Text style={styles.text}>Mana Bonus:</Text><Text style={styles.text}>{item[3]}</Text></View>
            </View></TouchableOpacity>
            </>
          ))
          :
          AuswahlArray.map((item,index)=>(
            <>
            <TouchableOpacity onPress={()=>(console.log('You choose ' + item[0] + ' as your Race'),setAvatarHp(item[1]),setAvatarMp(item[2]),AvatarInformation.push(item[0]),setraceSelected(true))}>
            <View key={'Option ' + index + ' : ' + item[0]} style={styles.Auswahlfeld}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:5}}>
              <Text style={styles.text}>Rasse:</Text><Text style={styles.text}>{item[0]}</Text></View>
              <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:5}}>
              <Text style={styles.text}>Hitpoints:</Text><Text style={styles.text}>{item[1]}</Text></View>
              <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:5}}>
              <Text style={styles.text}>Mana:</Text><Text style={styles.text}>{item[2]}</Text></View>
            </View></TouchableOpacity>
            </>
          ))
        }
            
        </View>
      </View>
      </SafeAreaView>
  )
}

export default AvatarCreation
const styles= StyleSheet.create({  
  text:{
    color:'#fff',
    fontSize:15,
    paddingVertical:5
  },
  Auswahlfeld:{
    borderColor:'#fff',
    borderWidth:1,
    width:250,
    height:'auto',
    margin:5,
    padding:10
  },
  Liste:{
    flexDirection:'column',
    width:'auto',
    height:'60%',
    flexWrap:'wrap'
  },
  
  SAV:{
    flex:1,
    width:'100%',
    height:'100%',
    backgroundColor:'black',

  },
  Maincontainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#fff',
    borderWidth:1
    

  }
})