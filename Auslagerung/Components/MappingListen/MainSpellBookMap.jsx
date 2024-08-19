import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
//<View style={{borderColor:'#fff',borderWidth:2,marginVertical:20,justifyContent:'flex-end'}}>
//</View> 
const MSBM = (props) => {
  const [Arraylength,setArraylength]=useState(0)
  let MySpells = props.Array
  const vergessen=(index)=>{
    MySpells.splice(index,1)
    props.setArray(MySpells)
    setArraylength(MySpells.length)
  }

  const deleteAlert=(index)=>{
    Alert.alert('Zaubervergessen','Wollen sie diesen Zauber vergessen/ Aus ihrem Spellbook löschen?',
      [
        {text:'Ja, lass mich vergessen',onPress:()=>vergessen(index)},
        {text:'Nein',onPress: ()=>console.log('Nope')}
      ]
    )
  }
  useState(()=>{

  },[Arraylength])
  return (<>
    {
      props.Array.length>0?
      <>
       
      {MySpells.length>0&&MySpells.map((item,index)=>(
        <TouchableOpacity onPress={()=>deleteAlert(index)}>
        <Text key={"Spellslot " + index} style={{color:'#fff',paddingTop:10}}>{item[1]}</Text>
        </TouchableOpacity>
        ))}
            
      </>
      :
      <>
    <Text style={{color:'#fff',paddingTop:10}}>Skills</Text>
    <Text style={{color:'#fff',paddingTop:20}}>Skills</Text>
    <Text style={{color:'#fff',paddingTop:20}}>Skills</Text>
    <Text style={{color:'#fff',paddingTop:20}}>Skills</Text>
    <Text style={{color:'#fff',paddingTop:20}}>Skills</Text>
    <Text style={{color:'#fff',paddingTop:20}}>Skills</Text>
    <Text style={{color:'#fff',paddingTop:20}}>Skills</Text>
      </>
    }</>
  )
}

export default MSBM