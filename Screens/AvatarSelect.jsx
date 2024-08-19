import React, { useEffect, useState } from 'react'
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const AvatarSelect = ({navigation}) => {
  const [Charpool,setCharpool]=useState([])


  const readAvatarliste=async()=>{
    try{
      const request={
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          "query": 5

        })
      }
      console.log("fetching")
      const d =await fetch('http://192.168.2.44/datenbankapi/MagicStuff/indexmagic.php',request);
      let e = await d.json()
      console.log(JSON.stringify(e))
      setCharpool(e)

    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    readAvatarliste();
  },[])
  return (
    <SafeAreaView style={styles.SAV}>
      <View style={styles.BigBox}>
        <Text style={styles.Titel}>Choose Your Charakter</Text>
        <View style={styles.Box}>
          {
          Charpool.length>0?
          
          Charpool.map((item,index)=>(
            <TouchableOpacity key={"Avatarslot " + item[0]+ " " + index} onPress={()=>navigation.navigate("Main", {AvID:item[0], AN:item[1]})}>
              <Text style={styles.text}>{item[1]}</Text>
            </TouchableOpacity>
          ))
          :
          <>
          <Text style={styles.text}>Avatarslot</Text>
          <Text style={styles.text}>Avatarslot</Text>
          <Text style={styles.text}>Avatarslot</Text>
          <Text style={styles.text}>Avatarslot</Text>
          </>
          }
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Main", {AvID:"", AN:"Name"})}>
        <Text style={styles.Titel2}>Create a new Charakter</Text></TouchableOpacity>
      </View>
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
    marginLeft:10
  },
  Titel:{
    color:'#fff',
    textShadowColor:'#c026d3',
    textShadowOffset:{width:2,height:1},
    textShadowRadius:3,
    fontSize:30,
    marginTop:'5%',
    alignSelf:'center'
  },
  Titel2:{
    color:'#fff',
    textShadowColor:'#c026d3',
    textShadowOffset:{width:2,height:1},
    textShadowRadius:3,
    fontSize:25,
    alignSelf:'center',
    marginBottom:'5%'
  },
  BigBox:{
    flex:1,
    borderColor:'#fff',
    borderWidth:2,
  },
  Box:{
    flex:1,
    borderColor:'#fff',
    borderWidth:1,
    marginHorizontal:'10%',
    marginVertical:'5%'
  },

})
export default AvatarSelect