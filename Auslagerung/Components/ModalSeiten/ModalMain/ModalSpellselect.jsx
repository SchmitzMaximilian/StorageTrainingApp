import React, { useEffect, useState } from 'react'
import { Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Elementpicker from '../../../functions/Gadgets/Elementpicker'
import SpellselectBox from '../../../functions/Gadgets/SpellselectBox'
const ModalSpellselect = (props) => {
  const [Spelllist,setSpelllist]=useState(0)
  const [Elementklasse,setElementklasse]=useState("Air")
  const [SpellArray,setSpellArray]=useState([])
  const getSpells=async()=>{
    console.log("got in")
    try{
    const request ={
      method: 'POST',
      headers: { 'Content-Type' : 'application/json'},
      body: JSON.stringify({"query": 2})
    }
      const d = await fetch('http://192.168.2.44/datenbankapi/MagicStuff/indexmagic.php', request);      
      let e =await d.json()
      let b = JSON.stringify(e)
      setSpellArray(JSON.parse(b))
      
      
    }catch(err){
      console.error(err)
    }
  }

  const compareNumbers=(a,b)=>{
    return a[2] - b[2]
  }
  
  SpellArray.sort(compareNumbers)
  let Anzeigearray=SpellArray.filter((e)=>e[0]==Elementklasse)

  const Switch=(Spelllist)=>{
    let key = (Spelllist + 1)
    console.log(key)
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
    getSpells()
    Switch(Spelllist)
  },[Spelllist])
  return (
  <Modal
    animationType="slide"      
    visible={props.MV}
    
    >
      <SafeAreaView style={styles.SAV}>
        <View style={{justifyContent:'space-around',alignContent:'center',flex:1}}>
          <Text style={styles.headline}>Wähle deine Zauber</Text>

          <Elementpicker Wert={setSpelllist} Auswahl={Spelllist}/>
          {
            Elementklasse?
            <>
            <View style={{borderColor:'#fff',borderWidth:2,marginVertical:20,justifyContent:'flex-end'}}> 
            {Anzeigearray.length>0&&Anzeigearray.map((item,index)=>(
              <SpellselectBox key={"Spellnummer " + item[0]+ " " + index}SPA={item} MSBA={props.MSBA} LS={props.LS}/>
              ))}
              
              </View>     
            </>
            :
            ""
          }



        <TouchableOpacity onPress={()=>props.MVset(false)}>
        <View style={{alignSelf:'flex-end',borderWidth:1,borderColor:'#fff',backgroundColor:'blue',padding:5}}>
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
  Maincontainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#fff',
    borderWidth:1
    

  },
  headline:{
    color:'#fff',
    alignSelf:'center',
    fontSize:30,
    textShadowColor:'red',
    textShadowRadius:3,
    textShadowOffset:{width:2,height:1}
  }
})
export default ModalSpellselect