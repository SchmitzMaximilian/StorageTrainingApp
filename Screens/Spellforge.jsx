import React, { useEffect, useState } from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Elementpicker from '../Auslagerung/functions/Gadgets/Elementpicker'
import Spelltypepicker from '../Auslagerung/functions/Gadgets/Spelltypepicker'
import { StackActions } from '@react-navigation/native';
/*
wenn forging succeded
onPress={()=>navigation.navigate("Main")}
*/


const Spellforge = ({navigation}) => {
  const [Element,setElement]=useState(0)
  const [Elementklasse,setElementklasse]=useState("Air")
  const [Zaubername, setZaubername] =useState('')
  const [SpellEffect,setSpellEffect]=useState('none')
  const [Manakosten, setManakosten] =useState('')
  const [dmgnumber, setdmgNumber] =useState('')
  const [Type,setType]=useState(0)
  const [SpellType,setSpellType]=useState("DmgSpell")

  const craftSpell=async()=>{
    
    let check=true
    if(!(Zaubername.length>0)){
      console.log("Fehler 1")
      check=false
    }
    if(!(Number.isInteger(Number(Manakosten)))){
      console.log("Fehler 2")
      check=false
    }
    if(!(Number.isInteger(Number(dmgnumber)))){
      console.log("Fehler 3")
      check=false
    }
    console.log(check)
    if(check){
      console.log("got in")
    try{
      console.log("im trying")
      const request ={
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify({
          "query":1,
          "SPElement":Elementklasse.toString().trim(),
          "SPName":Zaubername.toString().trim(),
          "SPManak":Manakosten.toString().trim(),
          "SPDmgV":dmgnumber.toString().trim(),
          "SPType":SpellType.toString().trim(),
          "SPEffect":SpellEffect.toString().trim()
        })
      }; 
      console.log("bis hier")
      const d = await fetch('http://192.168.2.44/datenbankapi/MagicStuff/indexmagic.php', request);
      let e = await d.json();
      console.log(e)
       if(e.ergebnis==true){
         Alert.alert('Erfolg','Sie haben erfolgreich einen Zauber erstellt',
           [
             {
               text:'Crafting beenden',
               onPress: ()=>navigation.dispatch(StackActions.pop(1))
             }
           ])
  
        
       }
       else if(e.ergebnis=='DBerror'){//zeigt Datenbankfehler an keine speicherung
         console.log('no Update')
        
       }else{//Fehler bei der Eingabe füllen
        
         console.log('Fehler')
       }
    }
    catch(err){
      console.error(err)
    }}else{
      Alert.alert('Fehlerhafte Eingabe','Ihr Zauber benötigt einen Namen , außerdem müssen Sie einen Wert für Manakosten und DmgValue angeben(0 zählt auch)',
        [
          {
            text:'Erneut Versuchen',
            onPress: ()=> console.log('Try again')
          },
          {
            text:'Forge verlassen',
            onPress: ()=>navigation.dispatch(StackActions.pop(1))
          }
        ]
      )
    }
  }

  const TypeSwitch=(Type)=>{
    let key = (Type + 1)
    switch(key){
      case 1:
        setSpellType("DmgSpell")
        break;
        case 2:
        setSpellType("DefenseSpell")
        break;
        case 3:
        setSpellType("HealSpell")
        break;
        case 4:
        setSpellType("RitualSpell")
        break;
        default:
          break;
    }
  }
  const Switch=(Element)=>{
    let key = (Element + 1)
      switch (key) {
        case 1:
          setElementklasse("Air")
          break;
        case 2:
          setElementklasse("Demonic")
          break;
        case 3:
          setElementklasse("Death")
          break;
        case 4:
          setElementklasse("Earth")
          break;
        case 5:
          setElementklasse("Fire")
          break;
        case 6:
          setElementklasse("Holy")
          break;
        case 7:
          setElementklasse("Ice")
          break;
        case 8:
          setElementklasse("Lightning")
          break;
        case 9:
          setElementklasse("Nature")
          break;
        case 10:
          setElementklasse("Water")
          break;
      
        default:
          break;
      }

  }
  useEffect(()=>{
    Switch(Element)
    TypeSwitch(Type)
  },[Element,Type])

  return (
  <SafeAreaView style={styles.SAV}>
    <View style={styles.Maincontainer}>
      
      <View >
      <Text style={styles.Text2}>Spellcrafting</Text>
      </View>

      <View >        
        <Elementpicker Wert={setElement} Auswahl={Element}/>
        <View>
          <Text style={{color:'#fff',fontSize:16,marginVertical:5}}>Zaubername</Text>
        <TextInput style={styles.Input} onChangeText={setZaubername}   value={Zaubername}  />        
        </View>
        <View>
        <Text style={{color:'#fff',fontSize:16,marginVertical:5}}>Manakosten</Text>
        <TextInput style={styles.Input} onChangeText={setManakosten} value={Manakosten} keyboardType="numeric"/>
        </View>
        <View>
        <Text style={{color:'#fff',fontSize:16,marginVertical:5}}>DmgValue</Text>
        <TextInput style={styles.Input} onChangeText={setdmgNumber} value={dmgnumber} keyboardType="numeric"/>
        </View>
        <Spelltypepicker Wert={setType} Auswahl={Type}/>
        <View>
          <Text style={{color:'#fff',fontSize:16,marginVertical:5}}>Effect</Text>
        <TextInput style={styles.Input} onChangeText={setSpellEffect}   value={SpellEffect}  />        
        </View>
      </View>
      
      <View style={{flexDirection:'row'}}>
        <View style={styles.Forge}>
          <TouchableOpacity onPress={()=>craftSpell()}>
            <Text style={styles.Text}>Forge Spell</Text>
          </TouchableOpacity>
        </View>
      
    </View>
    </View>
  </SafeAreaView>
  )
}
const styles= StyleSheet.create({
  SAV:{
    flex:1,
    width:'100%',
    height:'100%',
    backgroundColor:'black',

  },
  Text:{
    color:'#fff',
    fontSize:20,
    textShadowRadius:1,
    textShadowOffset:{width:1,height:1},
    textShadowColor:'black'
  },
  Text2:{
    color:'#fff',
    fontSize:40,
    textShadowRadius:10,
    textShadowOffset:{width:2,height:2},
    textShadowColor:'#2dd4bf',
    padding:5
  },
  Maincontainer:{
    flex:1,
    borderColor:'#fff',
    borderWidth:1,
    justifyContent:'space-around',
    alignItems:'center'
  },
  Forge:{
    alignSelf:'flex-start',
    borderWidth:2,
    borderRadius:5,
    borderColor:'#fb923c',
    paddingVertical:20,
    paddingHorizontal:200,
    backgroundColor:'#be123c'
  },
  Input:{
    backgroundColor:'#a21caf',
    padding:10,
    width:500,
    borderColor:'#fff',
    borderWidth:2,
    borderRadius:3,
    color:'#fff',
    marginVertical:5

  }
})
export default Spellforge