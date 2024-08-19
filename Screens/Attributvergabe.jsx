import React, { useEffect, useState } from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Werteleiste from '../Auslagerung/Components/Status/Werteleiste'
import { StackActions } from '@react-navigation/native';
/*
 */
const Attributvergabe = (props) => { 
  const ZaubererID=props?.route.params.CharID
  const [Statpointarray,setStatpointarray]=useState([])  
  const [Points,setPoints]=useState(24)
  console.log("-------------")
  console.log(Statpointarray)

  const readAttributeliste=async()=>{
    console.log(ZaubererID)
    try{
      const request={
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          "query": 6,
          "ZID": ZaubererID
        })
      }
      const d= await fetch('http://192.168.2.44/datenbankapi/MagicStuff/indexmagic.php',request);
      console.log("After fetch")
      
      let e = await d.json()
      console.log("Übergabe")
      console.log((e))
      setStatpointarray(e)
    }catch(err){
      console.log(err)
    }
  }
  const Savestatarray=async()=>{
    try{
      const request={
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          "query": 7,
          "Con":Statpointarray[0],
          "STR":Statpointarray[1],
          "AGI":Statpointarray[2],
          "INT":Statpointarray[3],
          "WIS":Statpointarray[4],
          "CHA":Statpointarray[5],
          "ZID":ZaubererID

        })
      }
      const d=await fetch('http://192.168.2.44/datenbankapi/MagicStuff/indexmagic.php',request);

    }catch(err){
      console.log(err)
    }

  }

  const Skillcheck=()=>{
    if(Points==0){
      Savestatarray()
      props.navigation.dispatch(StackActions.pop(1))
    }else{
      Alert.alert('Freie Attributspunkte','Sie haben noch nicht alle Attributspunkte verteilt, wollen Sie wirklich die Attributsverteilung verlassen?',[{text:'Ja, Verteilung abschließen', onPress: ()=>(Savestatarray(),props.navigation.dispatch(StackActions.pop(1)))},{text:'Nein, Verteilung fortsetzen'}])
    }
  }

  
useEffect(()=>{
  readAttributeliste()
  },[])
  useEffect(()=>{},[Savestatarray])
  return (
    <SafeAreaView style={styles.SAV}>
      <View style={styles.Maincontainer}>
      <View style={styles.Grid}>
      <View style={{justifyContent:'center',alignItems:'center'}}><Text style={styles.text}>Freie Attributspunkte: {Points}</Text></View>
      {Statpointarray.length>0?
      <>
        <Werteleiste Attribut={"Konstitution"} Limit={Points} Limitset={setPoints} Statvalue={Statpointarray} Statvalueset={setStatpointarray} Slot={0}/>        
        <Werteleiste Attribut={"Stärke"}       Limit={Points} Limitset={setPoints} Statvalue={Statpointarray} Statvalueset={setStatpointarray} Slot={1}/>
        <Werteleiste Attribut={"Agilität"}     Limit={Points} Limitset={setPoints} Statvalue={Statpointarray} Statvalueset={setStatpointarray} Slot={2}/>
        <Werteleiste Attribut={"Intelligenz"}  Limit={Points} Limitset={setPoints} Statvalue={Statpointarray} Statvalueset={setStatpointarray} Slot={3}/>
        <Werteleiste Attribut={"Weisheit"}     Limit={Points} Limitset={setPoints} Statvalue={Statpointarray} Statvalueset={setStatpointarray} Slot={4}/>
        <Werteleiste Attribut={"Charisma"}     Limit={Points} Limitset={setPoints} Statvalue={Statpointarray} Statvalueset={setStatpointarray} Slot={5}/>
      </>
      :
      ""
      }  
      </View>
      
        <TouchableOpacity onPress={()=>Skillcheck()}>
      <Text style={{color:'#fff'}}>Attributvergabe</Text></TouchableOpacity>
      
      </View>
    </SafeAreaView>
  )
}
const styles= StyleSheet.create({
  Grid: {
    alignSelf:'stretch',
    
  },
  text:{
    color:'#fff',
    alignSelf:'center',
  },
  button:{
    borderColor:'#fff',
    borderWidth:2,
    padding:10,
    paddingHorizontal:20,
    alignItems:'center',
    margin:5,
    marginHorizontal:10,
    backgroundColor:'#06b6d4',
  },
  input : {
    color: '#FFF',
    fontSize:16,
    marginBottom:4,
    textAlign:'left',
    padding: 10,
    paddingLeft:20,
    borderWidth:2,
    width:'80%',
    alignSelf:'center',
    borderColor: '#475569',
    borderRadius:6,
    marginVertical:15,
    color:'#f8fafc',
    backgroundColor:'#6b728090'
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
    

  },Listenfeld2:{
    borderColor:'#fff',
    borderWidth:1,
    position:'absolute',
    alignSelf:'flex-start',
    marginVertical:'90%',
    left: 20,
    padding:10,
    alignSelf:'flex-end',
    width:'95%'
  },row:{
    flexDirection: 'row',
    width:'80%',
    margin:5,
  },
  row2:{
    flexDirection: 'row',
    margin:5,
  },
  Box:{
    
    padding:20,
    flex:1,
    borderWidth:2,
    borderColor: '#fff',
    flexDirection: 'row'
  },
  Box2:{
    
    padding:20,
    flex:1,
    borderWidth:2,
    borderColor: '#fff',
    flexDirection: 'row',
    backgroundColor:'green'
  },
})
export default Attributvergabe