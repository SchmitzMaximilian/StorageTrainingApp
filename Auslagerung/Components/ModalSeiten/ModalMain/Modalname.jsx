import React, { useEffect, useState } from 'react'
import { Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Modalname = (props) => {
  console.log("-------------------")
  console.log(props.AVN)
  console.log("-------------------")
  
  const submitname=async(props)=>{
    let input=props.AVN;
    let check=true
    console.log(input)
    if(input=="Name"){
      check=false
    }

    if(check){
    try{
      const request={
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body:JSON.stringify({
          "query": 3,
          "Charname": input.toString().trim(),
        })
      }
      const d =await fetch('http://192.168.2.44/datenbankapi/MagicStuff/indexmagic.php',request);
      let e = await d.json();
      
      console.log(e)
      if(e.ergebnis>0 &&(!isNaN(e.ergebnis))){
        props.CID(e.ergebnis)
        props.MVset(false)
        
      }
      else if(e.ergebnis=='DBerror'){//zeigt Datenbankfehler an keine speicherung
       
        props.MVset(false)
      }else{//Fehler bei der Eingabe füllen
        props.MVset(false)
      }

    }catch(err){
      props.MVset(false)
      console.log(err)
    }}else{
      props.MVset(false)
    }
  }

  
  return (
    <Modal
    animationType="slide"      
    visible={props.MV}
    
    >
      <SafeAreaView style={styles.SAV}>
        <View style={{justifyContent:'center',alignContent:'center',flex:1}}>
        <TextInput style={styles.inputsanity} onChangeText={(text)=>props.Avatarname(text)} placeholderTextColor={'#fff'} placeholder='My Name'></TextInput>
        <TouchableOpacity onPress={()=>submitname(props)}>
        <View style={{alignSelf:'flex-end',borderWidth:1,borderColor:'#fff',position:'absolute',backgroundColor:'blue',padding:5}}>
          <Text style={{color:'#fff'}}>Go Back</Text>
        </View></TouchableOpacity>
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
  inputsanity:{
    color: '#FFF',
    fontSize:16,
    marginBottom:4,
    textAlign:'left',
    padding: 10,
    paddingLeft:20,
    paddingHorizontal:15,
    borderWidth:2,
    width:'80%',
    alignSelf:'center',
    borderColor: '#047857',
    borderRadius:6,
    marginVertical:15,
    
    zIndex:10,
    backgroundColor: '#6b728090'
  },
  Maincontainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#fff',
    borderWidth:1
    

  },
})
export default Modalname