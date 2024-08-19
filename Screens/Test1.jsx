import React, { useEffect, useState } from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Werteleiste from '../Auslagerung/Components/Status/Werteleiste'
import { StackActions } from '@react-navigation/native';
/*const changeInt=(key)=>{    
    
    switch(key){ 
      case 1:
        console.log("did a thing")
    if(Intindex<9&&Intarr[Intindex]==false){
      let arr = Intarr
      arr[Intindex]=true
      setIntarr(arr)
      setIntindex(prev=>prev+1)
    }
    console.log("more")
    break;
    case 2:
    if(Intindex>1&&Intarr[Intindex-1]==true){
      let arr = Intarr
      arr[Intindex-1]=false
      setIntarr(arr)
      setIntindex(prev=>prev-1)
    }
    console.log("less")
  break;}   //---> Increase/Decrease Statwert and Anzeigeleiste für Int (1 Stat Only)

  }
  const changeStr=(key)=>{    
    
    switch(key){ 
      case 1:
        console.log("did a thing")
    if(Strindex<9&&Strarr[Strindex]==false){
      let arr = Strarr
      arr[Strindex]=true
      setStrarr(arr)
      setStrindex(prev=>prev+1)
    }
    console.log("more")
    break;
    case 2:
    if(Strindex>1&&Strarr[Strindex-1]==true){
      let arr = Strarr
      arr[Strindex-1]=false
      setStrarr(arr)
      setStrindex(prev=>prev-1)
    }
    console.log("less")
  break;}   //---> Increase/Decrease Statwert and Anzeigeleiste für STR (1 Stat Only)

  }
  <View style={{justifyContent:'center',alignItems:'center'}}><Text style={styles.text}>Intelligenz</Text></View>
        <View style={styles.row2}>
      <TouchableOpacity onPress={()=>changeInt(2)}><View style={styles.button} ><Text style={styles.text}>-</Text></View></TouchableOpacity>
        <View style={styles.row}>
          {
            Intarr.map((item,index)=>(
              item==true?

              <View key={"Int: "+(index*10)+" Gained"} style={styles.Box2}></View>

              :
              
              <View key={"Int: "+(index*10)} style={styles.Box}></View>
            ))
          }
          
        </View><TouchableOpacity onPress={()=>changeInt(1)}><View style={styles.button} ><Text style={styles.text}>+</Text></View></TouchableOpacity>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}><Text style={styles.text}>Stärke</Text></View>
        <View style={styles.row2}>
        
        <TouchableOpacity onPress={()=>changeStr(2)}><View style={styles.button} ><Text style={styles.text}>-</Text></View></TouchableOpacity>
        <View style={styles.row}>
          {
            Strarr.map((item,index)=>(
              item==true?

              <View key={"STR: "+(index*10)+" Gained"} style={styles.Box2}></View>

              :
              
              <View key={"STR: "+(index*10)} style={styles.Box}></View>
            ))
          }
          
        </View>
        <TouchableOpacity onPress={()=>changeStr(1)}><View style={styles.button} ><Text style={styles.text}>+</Text></View></TouchableOpacity>
        </View>
        const [Intarr,setIntarr]=useState([true,false,false,false,false,false,false,false,false,false])
  const [Strarr,setStrarr]=useState([true,false,false,false,false,false,false,false,false,false])
        const [Intindex,setIntindex]=useState(1)
  const [Strindex,setStrindex]=useState(1)
        {Statpointarray.length>0?
      <>
        <Werteleiste Attribut={"Konstitution"} Limit={Points} Limitset={setPoints} Statvalue={Statpointarray} Statvalueset={setStatpointarray} Slot={0}/>        
        <Werteleiste Attribut={"Stärke"}       Limit={Points} Limitset={setPoints} Statvalue={Statpointarray} Statvalueset={setStatpointarray} Slot={1}/>
        <Werteleiste Attribut={"Agilität"}     Limit={Points} Limitset={setPoints} Statvalue={Statpointarray} Statvalueset={setStatpointarray} Slot={2}/>
        <Werteleiste Attribut={"Intelligenz"}  Limit={Points} Limitset={setPoints} Statvalue={Statpointarray} Statvalueset={setStatpointarray} Slot={3}/>
        <Werteleiste Attribut={"Weisheit"}     Limit={Points} Limitset={setPoints} Statvalue={Statpointarray} Statvalueset={setStatpointarray} Slot={4}/>
        <Werteleiste Attribut={"Charisma"}     Limit={Points} Limitset={setPoints} Statvalue={Statpointarray} Statvalueset={setStatpointarray} Slot={5}/>
      </> //----> Werteleiste Display des StatBalken
      :
      ""
      }  */
const Test1 = (props) => { 
  const [Intarr,setIntarr]=useState([true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false])
  const [Statpointarray,setStatpointarray]=useState([])  
  const [Intindex,setIntindex]=useState(1)
  const [Points,setPoints]=useState(24)
  const [Strarr,setStrarr]=useState([true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false])
  
  console.log("-------------")
  
  const AvatarStatTyps= ["Konstitution","Stärke","Agilität","Intelligenz","Weisheit","Charisma"]
  const [StatArray,setStatArray]=useState([])

  const RollforStats=()=>{
    AvatarStatTyps.forEach(e=>{
      let x =(Math.floor(Math.random()*20)+1)
      StatArray.push(x)
      })
    }
  const RollforStatsAlt=()=>{
    AvatarStatTyps.forEach(e=>{
      let a =(Math.floor(Math.random()*6)+1)
      let b =(Math.floor(Math.random()*6)+1)
      let c =(Math.floor(Math.random()*6)+1)
      console.log(a + " + " + b + " + " + c)
      let x =a+b+c
      console.log("You rolled a " +x)
      StatArray.push(x)
      })
      let i=0
      AvatarStatTyps.forEach(e=>{        
        console.log("Your " + e + " Attribut is: " + StatArray[i])
        i++
      })

      let arr= Array(20).fill(0)
      console.log(arr)
    }
  

  const rollstärke=()=>{
    let x=(Math.floor(Math.random()*20)+1)
    console.log("rolled " +x)
    let arr=Strarr
    for(let i= 1;i<x;i++){
      arr[i]=true
    }
    setStrarr(arr)
  }

  const changeInt=(key)=>{    
    let max = Intarr.length
    switch(key){ 
      case 1:
        console.log("did a thing")
    if(Intindex<max&&Intarr[Intindex]==false){
      let arr = Intarr
      arr[Intindex]=true
      setIntarr(arr)
      setIntindex(prev=>prev+1)
    }
    console.log("more")
    break;
    case 2:
    if(Intindex>1&&Intarr[Intindex-1]==true){
      let arr = Intarr
      arr[Intindex-1]=false
      setIntarr(arr)
      setIntindex(prev=>prev-1)
    }
    console.log("less")
  break;}}
  const Skillcheck=()=>{
    if(Points==0){
      props.navigation.dispatch(StackActions.pop(1))
    }else{
      Alert.alert('Freie Attributspunkte','Sie haben noch nicht alle Attributspunkte verteilt, wollen Sie wirklich die Attributsverteilung verlassen?',[{text:'Ja, Verteilung abschließen', onPress: ()=>(props.navigation.dispatch(StackActions.pop(1)))},{text:'Nein, Verteilung fortsetzen'}])
    }
  }
  useEffect(()=>{
    RollforStatsAlt()
  },[])

  return (
    <SafeAreaView style={styles.SAV}>
      <View style={styles.Maincontainer}>
      <View style={styles.Grid}>
      <View style={{justifyContent:'center',alignItems:'center'}}><Text style={styles.text}>Freie Attributspunkte: {Points}</Text></View>
      <View style={{justifyContent:'center',alignItems:'center'}}><Text style={styles.text}>Intelligenz</Text></View>
        <View style={styles.row2}>
      <TouchableOpacity onPress={()=>changeInt(2)}><View style={styles.button} ><Text style={styles.text}>-</Text></View></TouchableOpacity>
        <View style={styles.row}>
          {
            Intarr.map((item,index)=>(
              item==true?

              <View key={"Int: "+(index*10)+" Gained"} style={styles.Box2}></View>

              :
              
              <View key={"Int: "+(index*10)} style={styles.Box}></View>
            ))
          }
        </View><TouchableOpacity onPress={()=>changeInt(1)}><View style={styles.button} ><Text style={styles.text}>+</Text></View></TouchableOpacity>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}><TouchableOpacity onPress={()=>rollstärke()}><Text style={styles.text}>Stärke</Text></TouchableOpacity></View>
        <View style={styles.row2}>
          <View style={{flexDirection:'column',width:'100%',borderWidth:1,borderColor:'#fff'}}>
          {
            AvatarStatTyps.map((item,index)=>(
              <View style={{borderWidth:1,borderColor:'red',alignSelf:'flex-end',margin:5,flexDirection: 'row',width:'100%'}}>
                  <View style={{borderWidth:1,borderColor:'#fff',padding:10,margin:5}}><Text style={{color:'#fff'}}>{item}</Text></View>
              <View style={{borderWidth:1,borderColor:'#fff',flexDirection:'row'}}>
              {
                Array(20).fill(0).map((_,i)=> (
                  <View key={i} style={{margin:5,borderWidth:1,borderColor:'#fff',borderColor:'#fff',borderWidth:1, width:20 ,height: 20, backgroundColor: i < StatArray[index] ? 'green' : 'black'}}></View>
                ))
              }</View>
             </View>
            ))
          }</View>
          
       </View>
      </View>
      
        <TouchableOpacity onPress={()=>Skillcheck()}>
      <Text style={{color:'#fff'}}>Test1</Text></TouchableOpacity>
      
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
    
   height:46,
    flex:1,
    borderWidth:2,
    borderColor: '#fff',
    flexDirection: 'row'
  },
  Box2:{
    height:46,
    flex:1,
    borderWidth:2,
    borderColor: '#fff',
    flexDirection: 'row',
    backgroundColor:'green'
  },
})
export default Test1