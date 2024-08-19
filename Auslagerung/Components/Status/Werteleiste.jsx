import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Werteleiste = (props) => {
  console.log("Liste "+ props.Slot)
  console.log(props.Statvalue[props.Slot])
  const [Wertarr,setWertarr]=useState([true,false,false,false,false,false,false,false,false,false])
  const [Wertindex,setWertindex]=useState(props.Statvalue[props.Slot])
  const pruefanfang=()=>{
    let i=0
    let a=Wertindex
    props.Limitset(prev=>prev-(a-1))
    let arr = Wertarr
    while(i<a){
      arr[i]=true
      i++
    }
    setWertarr(arr)
  }
  const changeWert=(key)=>{    
    let newstat= props.Statvalue
    switch(key){ 
      case 1:
        if(props.Limit>0){
    if(Wertindex<10&&Wertarr[Wertindex]==false){
      let arr = Wertarr
      arr[Wertindex]=true
      setWertarr(arr)
      setWertindex(prev=>prev+1)
      props.Limitset(prev=>prev-1)
      newstat[props.Slot]=(Wertindex+1)
    }}else{
      Alert.alert('Keine Freien Attributspunkte','Sie haben alle verfügbaren Attributspunkte verteilt. Reduzieren Sie eine anderes Attribut dieses zu erhöhen.',[{text:'Ok',onPress: ()=>console.log("Alle Attributspunkte verteilt")}])
    }
    props.Statvalueset(newstat)
    break;
    case 2:
    if(Wertindex>1&&Wertarr[Wertindex-1]==true){
      let arr = Wertarr
      arr[Wertindex-1]=false
      setWertarr(arr)
      setWertindex(prev=>prev-1)
      props.Limitset(prev=>prev+1)
      newstat[props.Slot]=(Wertindex-1)
    }
    props.Statvalueset(newstat)
  break;}

  }
  
  useEffect(()=>{
    pruefanfang()
  },[])
  return (
    <>
    <View style={{justifyContent:'center',alignItems:'center'}}><Text style={styles.text}>{props.Attribut}</Text></View>
      <View style={styles.row2}>
      <TouchableOpacity onPress={()=>changeWert(2)}><View style={styles.button} ><Text style={styles.text}>-</Text></View></TouchableOpacity>
        <View style={styles.row}>
          {
            Wertarr.map((item,index)=>(
              item==true?

              <View key={"Wert: "+(index*10)+" Gained"} style={styles.Box2}></View>

              :
              
              <View key={"Wert: "+(index*10)} style={styles.Box}></View>
            ))
          }
          
        </View><TouchableOpacity onPress={()=>changeWert(1)}><View style={styles.button} ><Text style={styles.text}>+</Text></View></TouchableOpacity>
        </View>
    </>
  )
}
const styles= StyleSheet.create({

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
},row:{
  flexDirection: 'row',
  width:'80%',
  margin:5,
},
row2:{
  flexDirection: 'row',
  margin:5,
},Box:{
    
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
export default Werteleiste