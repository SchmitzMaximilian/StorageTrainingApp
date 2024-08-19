import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const SpellselectBox = (props) => {
  let Spellbook= props.SPA
  const [unpicked,setunpicked]=useState(false)

  const addSpell=(props,item)=>{
    props.MSBA.push(item)
    let newarr = props.MSBA.filter((a={}, b=> !(a[b]=b in a)))
    props.LS(newarr)

  }
  const nofreeslots=()=>{
    Alert.alert('Keine freien Spellslots','Ihr Spellbook ist voll, Sie können maximal 15 Zauber lernen',[{text: 'Schade',onPress: ()=>console.log("Voll")}])
  }
  

  return (
    <TouchableOpacity disabled={unpicked} onPress={()=>(props.MSBA.length<15?(setunpicked(true),addSpell(props,Spellbook)):nofreeslots())}>
    <View style={{flexDirection:'row',marginVertical:10,paddingLeft:10,columnGap:10}}>
        <Text style={{color:'#fff'}}>{Spellbook[1] + " Manacost: " + Spellbook[2]}</Text>
    </View></TouchableOpacity>
  )
}

export default SpellselectBox