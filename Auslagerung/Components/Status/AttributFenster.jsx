import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
const AttributFenster = (props) => {
  const [Attriarr,setAttriarr]=useState([])
  const readAttributeliste=async()=>{
    console.log("Looking around")
    console.log(props.CharID)
    if(props?.CharID){
      console.log("Found something?")
    try{
      const request={
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          "query": 6,
          "ZID": props.CharID
        })
      }
      const d= await fetch('http://192.168.2.44/datenbankapi/MagicStuff/indexmagic.php',request);
      let e = await d.json()
      console.log("tried it")
      setAttriarr(e)
    }catch(err){
      console.log(err)
    }}
  }
  useFocusEffect(React.useCallback(()=>{
    readAttributeliste()
  },[]))
  useEffect(()=>{
    readAttributeliste()
  },[props?.CharID])
  return (
    <>
    {Attriarr.length>0?
      <>
      
      <View style={styles.row}><Text style={{color:'#fff',paddingTop:10}}>Konstitution:</Text><View ><Text style={{color:'#fff',paddingTop:10}}>{Attriarr[0]}</Text></View></View>
      
      <View style={styles.row}><Text style={{color:'#fff',paddingTop:20}}>Stärke:</Text><View ><Text style={{color:'#fff',paddingTop:20}}>{Attriarr[1]}</Text></View></View>
      
      <View style={styles.row}><Text style={{color:'#fff',paddingTop:20}}>Agilität:</Text><View ><Text style={{color:'#fff',paddingTop:20}}>{Attriarr[2]}</Text></View></View>
      
      <View style={styles.row}><Text style={{color:'#fff',paddingTop:20}}>Intelligenz:</Text><View ><Text style={{color:'#fff',paddingTop:20}}>{Attriarr[3]}</Text></View></View>
      
      <View style={styles.row}><Text style={{color:'#fff',paddingTop:20}}>Weisheit:</Text><View ><Text style={{color:'#fff',paddingTop:20}}>{Attriarr[4]}</Text></View></View>
      
      <View style={styles.row}><Text style={{color:'#fff',paddingTop:20}}>Charisma:</Text><View ><Text style={{color:'#fff',paddingTop:20}}>{Attriarr[5]}</Text></View></View>
      </>
      :
      <>
      <Text style={{color:'#fff',paddingTop:10}}>Attribute</Text>
          <Text style={{color:'#fff',paddingTop:20}}>Attribute</Text>
          <Text style={{color:'#fff',paddingTop:20}}>Attribute</Text>
          <Text style={{color:'#fff',paddingTop:20}}>Attribute</Text>
          <Text style={{color:'#fff',paddingTop:20}}>Attribute</Text>
          <Text style={{color:'#fff',paddingTop:20}}>Attribute</Text>
          </>
    }
    
    </>
  )
}
const styles=StyleSheet.create({
  row:{
    flexDirection: 'row',
    width:'100%',
    justifyContent:'space-between'
  },
  row2:{
    flexDirection: 'row',
    margin:5,
  },
})
export default AttributFenster