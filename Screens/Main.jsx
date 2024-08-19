import React, { useEffect, useState } from 'react'
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modalname from '../Auslagerung/Components/ModalSeiten/ModalMain/Modalname'
import ModalSpellselect from '../Auslagerung/Components/ModalSeiten/ModalMain/ModalSpellselect'
import MSBM from '../Auslagerung/Components/MappingListen/MainSpellBookMap'
import Mappicker from '../Auslagerung/functions/Gadgets/Mappicker'
import AttributFenster from '../Auslagerung/Components/Status/AttributFenster'

const Main = (props) => {
  const [AvatarID,setAvatarID]=useState(props?.route.params.AvID)
  const [SpellID,setSpellID]=useState([])
  const [topmodal,settopmodal]=useState(false)
  const [topmodal1,settopmodal1]=useState(false)
  const [name,setname]=useState(props?.route.params.AN)
  const [MySpellBook,setMySpellBook]=useState([])
  
  console.log("MySpellBook")
  console.log(AvatarID)
    
  const compareNumbers=(a,b)=>{
    return a[2] - b[2]
  }  
  const updateSpellbook=async()=>{
    MySpellBook.sort(compareNumbers)
    MySpellBook.sort((a,b)=>{
    const nameA = a[0].toUpperCase()
    const nameB = b[0].toUpperCase()
    return ((nameA<nameB) ? -1 : ((nameA>nameB) ? 1 : 0))   

  })}

  const saveSpelllist=async(SpellID)=>{  
    let check=false
    if(AvatarID>0){
      check=true
    }
    if(check){
  try{
    console.log(SpellID)
    console.log(MySpellBook[0])/*  Backend prepeard Statement under construction
    const request={
      method: 'POST',
      headers: { 'Content-Type' : 'application/json'},
      body: JSON.stringify({
        "query": 4,
        "ZID": AvatarID,
        "Slot1": SpellID,
      })
      
    } 
    const d = await fetch('http://192.168.2.44/datenbankapi/MagicStuff/indexmagic.php', request);
    console.log("Bookspeicher")
    if(d.ergebnis){
      console.log("You got a Spellbook")
    }*/

  }catch(err){
    console.log(err)
  }
  }else{
      Alert.alert('Kein Name','Da ihr Charakter noch keinen Namen hat kann die von Ihnen zusammengestellte Zauberliste nicht zugeordnet werden. Bitte legen Sie einen Namen fest und versuchen sie es dann erneut.',[{text:'Ok',onPress:()=>settopmodal(true)}])
    }
  }
  const updateSpelllist=()=>{
    let idarr= []
    MySpellBook.forEach((e)=>{
   idarr.push(e[6])
   console.log(idarr)
  })
   setSpellID(idarr)
  }
  
  const saveAlert=()=>{
    Alert.alert('Zauberliste speichern','Wollen Sie ihre ausgewählten Zauber in Ihr Zauberbuch übernehmen?',[{text:'Zauber lernen',onPress:()=>updateSpelllist()},{text:'No',onPress:()=>console.log("Not Yet")}])
  }
  
  useEffect(()=>{
    updateSpellbook(MySpellBook)
  },[MySpellBook])
  useEffect(()=>{
    saveSpelllist(SpellID)
  },[SpellID])
  /*
  <TouchableOpacity onPress={()=>props.navigation.navigate("Spielwiese")}>
          <Text style={{color:'#fff'}}>Bild</Text></TouchableOpacity>
  */
  return (<>
    <SafeAreaView style={styles.SAV}>
      
        <View style={styles.Maincontainer}>
          <View style={styles.Up}>
            <TouchableOpacity onPress={()=>settopmodal(true)}>
          <View style={styles.zusatz}>            
            <Text style={{color:'#fff'}}>{name}</Text>
          </View></TouchableOpacity>
          <TouchableOpacity onPress={()=>saveAlert()}>
          <View style={styles.zusatz2}>
            <Text style={{color:'#fff'}}>Zauberliste</Text>
          </View></TouchableOpacity>
          </View>
          <View style={styles.Bildcon}>
            <Mappicker navigation={props.navigation} AvID={AvatarID}/>
          </View>
          <View style={styles.Listenfeld}>
          <AttributFenster CharID={AvatarID}/>
          {
            /*
            <Text style={{color:'#fff',paddingTop:10}}>Attribute</Text>
          <Text style={{color:'#fff',paddingTop:20}}>Attribute</Text>
          <Text style={{color:'#fff',paddingTop:20}}>Attribute</Text>
          <Text style={{color:'#fff',paddingTop:20}}>Attribute</Text>
          <Text style={{color:'#fff',paddingTop:20}}>Attribute</Text>
          <Text style={{color:'#fff',paddingTop:20}}>Attribute</Text>
          <Text style={{color:'#fff',paddingTop:20}}>Attribute</Text>
            
            */
          }
          </View>
          <View>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Boneyard")}>
          <Text style={{color:'#fff'}}>Main Screen</Text></TouchableOpacity>
          </View>
          <View style={styles.Listenfeld2}>
          <MSBM Array={MySpellBook} setArray={setMySpellBook}/>
          </View>
          <View style={styles.Down}>
          <TouchableOpacity onPress={()=>settopmodal1(true)}>
          <View style={styles.zusatz}>
            <Text style={{color:'#fff'}}>SpellLibrary</Text>
          </View></TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Spellforge")}>
          <View style={styles.zusatz2}>
            <Text style={{color:'#fff'}}>Spellcrafting</Text>
          </View></TouchableOpacity>
          </View>
        </View>
      <Modalname MV={topmodal} MVset={settopmodal} Avatarname={setname} AVN={name} CID={setAvatarID}/>
      <ModalSpellselect MV={topmodal1} MVset={settopmodal1} MSBA={MySpellBook} LS={setMySpellBook}/>
    </SafeAreaView>
    
    </>
  )
}
const styles= StyleSheet.create({
  SAV:{
    flex:1,
    width:'100%',
    height:'100%',
    backgroundColor:'black',

  },
  Maincontainer:{
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    borderColor:'#fff',
    borderWidth:1
    

  },
  zusatz:{
    alignSelf:'flex-start',
    borderColor:'#fff',
    borderWidth:1,
    margin:20,
    padding:10
  },
  zusatz2:{
    alignSelf:'flex-end',
    borderColor:'#fff',
    borderWidth:1,
    margin:20,
    padding:10
  },
  Down:{
    alignSelf:'stretch',
    borderColor:'#fff',
    borderWidth:1,
    margin:20,
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  Up:{
    alignSelf:'stretch',
    borderColor:'#fff',
    borderWidth:1,
    margin:20,
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  Bildcon:{
    borderColor:'#fff',
    borderWidth:1,
    position:'absolute',
    marginTop: 150,
    left: 20,
    paddingVertical:150,
    paddingHorizontal:100
  },
  Listenfeld:{
    borderColor:'#fff',
    borderWidth:1,
    position:'absolute',
    alignSelf:'flex-end',
    marginTop: 150,
    right: 20,
    height:275,
    width:200,
    padding:10,
    
  },
  Listenfeld2:{
    borderColor:'#fff',
    borderWidth:1,
    position:'absolute',
    alignSelf:'flex-start',
    marginVertical:'90%',
    left: 20,
    height:325,
    padding:10,
    width:'95%',
    flexWrap:'wrap',
    columnGap: 50,
  }
})
/*Basics für test anordnung
    borderColor:'#fff',
    borderWidth:1,

*/
export default Main