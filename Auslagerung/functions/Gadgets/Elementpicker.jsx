import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker';
import { StyleSheet, Text, View } from 'react-native';
import { Spelldataset } from '../../Datensets/SpellDatenArray';
//["Air","Demonic","Death","Earth","Fire","Holy","Ice","Lightning","Nature","Water"]
const Elementpicker = (props) => {
  let Spelltype=Spelldataset().Spells.SpellElementtypes
  const [AuswahlOptionZahl, setAuswahlOptionZahl] = useState(props.Auswahl);
  
  const selectionHandler=(itemValue)=>{
    props.Wert(itemValue)
    setAuswahlOptionZahl(itemValue)
  }
  return (
    <View><Text style={styles.Textelemente}>"Wähle eine Elementklasse"</Text>
    <View style={{borderColor:'#fff',borderWidth:1}}>
    
    <Picker
    style={{color:'#FFF',backgroundColor:'grey'}}  dropdownIconColor={"#FFF"}
  selectedValue={AuswahlOptionZahl}
  onValueChange={(itemValue, itemIndex) =>selectionHandler(itemValue)
    
  }>
    
  {Spelltype.length>0&&Spelltype.map((item,index)=>(
    <Picker.Item key={"Elementtype " + item} color="#000" label={item} value={index}/>
  ))}
</Picker>
</View></View>
  )
}
const styles = StyleSheet.create({
    
  Textelemente:{
    color:'#fff',
    padding:5,
    marginVertical:5,
    
  },
});
export default Elementpicker