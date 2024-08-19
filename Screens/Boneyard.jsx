import React, { useEffect, useState, useRef } from 'react'
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Movment from '../Auslagerung/Components/Knöpfe/Movment'
import { StackActions } from '@react-navigation/native';
/*
const raiseundead = ()=>{
  
  let arr1 = Necroarmy1
  let arr2 = Necroarmy2
  let arr3 = Necroarmy3
  let index = troopindex
  let key = army
  switch(key){
    case 0:

    while(arr1[index]==true&& index<9){
      index=index+1
    }
      if(arr1[index]!=true){
      arr1[index][2]=true
      setNecroarmy1(arr1)
      console.log(arr1)
    }
    console.log("Ressurected Group " + troopindex + " from Army " + army)
      break;
    case 1:
      while(arr2[index]==true && index<9){
        index=index+1
      }
        if(arr2[index]!=true ){
        arr2[index][2]=true
        setNecroarmy2(arr2)
      }
      console.log("Ressurected Group " + troopindex + " from Army " + army)
      break;
    case 2:
      while(arr3[index]==true&& index<9){
        index=index+1
      }
        if(arr3[index]!=true){
        arr3[index][2]=true
        setNecroarmy3(arr3)
      }
      console.log("Ressurected Group " + troopindex + " from Army " + army)
      break;
  } 
  
}




*/

const Boneyard = ({navigation}) => {
  const [horival,sethorival]=useState(10)
  const [vertival,setvertival]=useState(10)
  const [traderhorival,settraderhorival]=useState(55)
  const [Necroarmy1,setNecroarmy1]=useState([[795,35,false],[795,115,false],[795,195,false],[795,275,false],[795,355,false],[795,435,false],[795,515,false],[795,595,false],[795,675,false],[795,755,false]])
  const [Necroarmy2,setNecroarmy2]=useState([[875,75,false],[875,155,false],[875,235,false],[875,315,false],[875,395,false],[875,475,false],[875,555,false],[875,635,false],[875,715,false],[715,395,false]])
  const [Necroarmy3,setNecroarmy3]=useState([[955,35,false],[955,115,false],[955,195,false],[955,275,false],[955,355,false],[955,435,false],[955,515,false],[955,595,false],[955,675,false],[955,755,false]])
  const [Guardarmy1,setGuardarmy1]=useState([[155,35,true],[155,115,true],[155,195,true],[155,275,true],[155,355,true],[155,435,true],[155,515,true],[155,595,true],[155,675,true],[155,755,true],[155,75,true],[155,155,true],[155,235,true],[155,315,true],[155,395,true],[155,475,true],[155,555,true],[155,635,true],[155,715,true]])
  const [Guardarmy2,setGuardarmy2]=useState([[195,35,true],[195,115,true],[195,195,true],[195,275,true],[195,355,true],[195,435,true],[195,515,true],[195,595,true],[195,675,true],[195,755,true],[195,75,true],[195,155,true],[195,235,true],[195,315,true],[195,395,true],[195,475,true],[195,555,true],[195,635,true],[195,715,true]])
  const [rolled,setrolled]=useState(0)
  const [army1full,setarmy1full]=useState(false)
  const [army2full,setarmy2full]=useState(false)
  const [army3full,setarmy3full]=useState(false)
  const [troopindex,settroopindex]=useState()
  const [army,setarmy]=useState()
  const [Resurrected1,setResurrected1]=useState(false)
  const [Resurrected2,setResurrected2]=useState(false)
  const [Resurrected3,setResurrected3]=useState(false)

  const interval = useRef(null)

const spawnorder=()=>{
 let x= Math.floor(Math.random()*10)
 let y= Math.floor(Math.random()*3)
 settroopindex(x)
 setarmy(y)
 setrolled(prev=>prev+1)
}
const raiseundead = ()=>{  

  let key = army
  switch(key){
    case 0:

    spawnnecarmy1()
      break;
    case 1:
      spawnnecarmy2()
      break;
    case 2:
      spawnnecarmy3()
      break;
  } 
  
}
const spawnnecarmy1=()=>{
  let index = troopindex
  let arr1 = Necroarmy1
  console.log(rolled)
  console.log("Army 1 Voll "+ army1full)
  console.log("Army 1 First index " + troopindex)
  if(army1full!=true){
    if(arr1[0][2]==true && arr1[1][2]==true && arr1[2][2]==true && arr1[3][2]==true && arr1[4][2]==true && arr1[5][2]==true && arr1[6][2]==true && arr1[7][2]==true && arr1[8][2]==true && arr1[9][2]==true){
    setarmy1full(true)
    bossspawn()   
    
  }else{
    
    if(index==9 && arr1[9][2]==true){
      index=0
      while(arr1[index][2]==true && index<9){
        index++
      }
      if(arr1[index][2]!=true ){
        arr1[index][2]=true
        setNecroarmy1(arr1)
        console.log(arr1)
      }

    }else{
      while(arr1[index][2]==true && index<9){
        index++
        if(index==9 && arr1[index][2]==true){
          index=0
        }
        console.log("mod index " + index)
      }
      console.log("did i change " + index)
      if(arr1[index][2]!=true ){
        arr1[index][2]=true
        setNecroarmy1(arr1)
        console.log(arr1)
      }}}
  console.log("Ressurected Group " + index + " from Army " + army)
}else if(army1full==true && army2full==true && army3full==true){
  attack()
}else{
  console.log("Skip to 2 " + army1full + " " + army2full + " " + army3full)
  spawnnecarmy2()
}
}
const spawnnecarmy2=()=>{
  let index = troopindex
  let arr2 = Necroarmy2
  console.log(rolled)
  console.log("Army 2 Voll "+ army2full)
  console.log("Army 2 First index " + troopindex)
  if(army2full!=true){
    if(arr2[0][2]==true && arr2[1][2]==true && arr2[2][2]==true && arr2[3][2]==true && arr2[4][2]==true && arr2[5][2]==true && arr2[6][2]==true && arr2[7][2]==true && arr2[8][2]==true && arr2[9][2]==true){
    setarmy2full(true)
    bossspawn()
  }else{
    if(index==9 && arr2[9][2]==true){
      index=0
      while(arr2[index][2]==true && index<9){
        index++
      }
      if(arr2[index][2]!=true ){
        arr2[index][2]=true
        setNecroarmy2(arr2)
        console.log(arr2)
      }

    }else {
      while(arr2[index][2]==true && index<9){
        index++
        if(index==9 && arr2[index][2]==true){
          index=0
        }
        console.log("mod index " + index)
      }
      console.log("did i change " + index)
      if(arr2[index][2]!=true ){
        arr2[index][2]=true
        setNecroarmy2(arr2)
        console.log(arr2)
      }}
  }
  console.log("Ressurected Group " + index + " from Army " + army)
}else if(army1full==true && army2full==true && army3full==true){
  attack()
}else{
  console.log("Skip to 3 " + army1full + " " + army2full + " " + army3full)
spawnnecarmy3()}
}
const spawnnecarmy3=()=>{
  let index = troopindex
  let arr3 = Necroarmy3
  console.log(rolled)
  console.log("Army 3 Voll "+ army3full)
  console.log("Army 3 First index " + troopindex)
  if(army3full!=true){
    if(arr3[0][2]==true && arr3[1][2]==true && arr3[2][2]==true && arr3[3][2]==true && arr3[4][2]==true && arr3[5][2]==true && arr3[6][2]==true && arr3[7][2]==true && arr3[8][2]==true && arr3[9][2]==true){
    setarmy3full(true)
    bossspawn()  
  }else{
    if(index==9 && arr3[9][2]==true){
      index=0
      while(arr3[index][2]==true && index<9){
        index++
      }
      if(arr3[index][2]!=true ){
        arr3[index][2]=true
        setNecroarmy3(arr3)
        console.log(arr3)
      }

    }else {
      while(arr3[index][2]==true && index<9){
        index++
        if(index==9 && arr3[index][2]==true){
          index=0
        }
        console.log("mod index " + index)
      }
      console.log("did i change " + index)
      if(arr3[index][2]!=true ){
        arr3[index][2]=true
        setNecroarmy3(arr3)
        console.log(arr3)
      }}
  }
  console.log("Ressurected Group " + index + " from Army " + army)
}else if(army1full==true && army2full==true && army3full==true){
  attack()
}else{
  console.log("Skip to 1 " + army1full + " " + army2full + " " + army3full)
spawnnecarmy1()
}
}

const bossspawn=()=>{
  if(Resurrected1==false){
    setResurrected1(true)
  }else if(Resurrected2==false){
    setResurrected2(true)
  }else{
  setResurrected3(true)
  }
  
  
  
}

const forward1 =()=>{
  let walkarr = Necroarmy1
  walkarr.forEach(e=>{
    e[0]=(e[0]-20)
  })
  setNecroarmy1(walkarr)
}
const forward2 =()=>{
  let walkarr = Necroarmy2
  walkarr.forEach(e=>{
    e[0]=(e[0]-20)
  })
  setNecroarmy2(walkarr)
}
const forward3 =()=>{
  let walkarr = Necroarmy3
  walkarr.forEach(e=>{
    e[0]=(e[0]-20)
  })
  setNecroarmy3(walkarr)
}
const attack =()=>{
  clearInterval(interval.spawn)
  console.log("cleared")
  interval.march1 = setInterval(forward1,3000)
  console.log("started 1")
  setTimeout(()=>{
    interval.march2 = setInterval(forward2,3000)
    console.log("started 2")
  },1000)
  setTimeout(()=>{
    interval.march3 = setInterval(forward3,3000)
    console.log("started 3")
  },2000)
  setTimeout(()=>{
    clearInterval(interval.march1)
    clearInterval(interval.march2)
    clearInterval(interval.march3)
    console.log("cleared all")
  },23100)
}

const trademove =()=>{
  settraderhorival(prev=>prev+20)
}
if(traderhorival==735){
  clearInterval(interval.trade)
  settraderhorival(715)
  setTimeout(()=>{
    interval.back = setInterval(backmove,1000)
  },5000)
}
const backmove=()=>{
  settraderhorival(prev=>prev-20)
}
if(traderhorival==35){
  clearInterval(interval.back)
  settraderhorival(55)
  setTimeout(()=>{
    interval.trade = setInterval(trademove,1000)
  },5000)
}
useEffect(()=>{
  raiseundead()
},[rolled])
  useEffect(()=>{
    interval.spawn = setInterval(spawnorder,3000)
    interval.trade = setInterval(trademove,1000)
    
    return ()=>{
      clearInterval(interval.spawn)
      clearInterval(interval.trade)
      clearInterval(interval.back)
    }
  },[])
  //<Spawnorder A1={Necroarmy} A2={Necroarmy2} A3={Necroarmy3} setA1={setNecroarmy} setA2={setNecroarmy2} setA3={setNecroarmy3} />
  /*
  
  
  */
  return (
    <SafeAreaView style={styles.SAV}>
      <TouchableOpacity onPress={()=>navigation.dispatch(StackActions.pop(1))}>
      <Text style={styles.text}>Training</Text></TouchableOpacity>
      <View style={styles.BigBox}>

        <View style={{position:'absolute',zIndex:10,borderColor:'#fff',borderWidth:1,width:30,height:30,marginLeft:horival,marginTop:vertival,backgroundColor:'black'}}></View>
        <View style={styles.Town}><Text style={{color:'#fff',alignSelf:'center'}}>Town</Text></View>
        <View style={styles.Town2}><Text style={{color:'#fff',alignSelf:'center'}}>Town</Text></View>
        <View style={styles.EnemyBase}><Text style={{color:'#fff',alignSelf:'center'}}>Ziggurat</Text></View>

        <View style={{position:'absolute',marginLeft:390,marginTop:1010}}><View style={styles.Lich}><Text style={{color:'#fff',alingSelf:'center'}}></Text></View></View>
        <View style={{position:'absolute',marginLeft:traderhorival,marginTop:35}}><View style={styles.Trader}><Text style={{color:'#fff',alingSelf:'center'}}></Text></View></View>
        {
          Resurrected1?
        <View style={{position:'absolute',marginLeft:230,marginTop:910}}><View style={styles.Lich}><Text style={{color:'#fff',alingSelf:'center'}}></Text></View></View>
        :
        ""
      }
        {
          Resurrected2?
        <View style={{position:'absolute',marginLeft:550,marginTop:910}}><View style={styles.Lich}><Text style={{color:'#fff',alingSelf:'center'}}></Text></View></View>
        :
        ""
        }
        {
          Resurrected3?
        <View style={{position:'absolute',marginLeft:390,marginTop:910}}><View style={styles.Lich}><Text style={{color:'#fff',alingSelf:'center'}}></Text></View></View>
        :
        ""
        }
        {  
          Guardarmy1.map((item,index)=>(            
              item[2]?
              <View key={"Vanguard" + index} style={{position:'absolute',marginLeft:item[1],marginTop:item[0]}}><View style={styles.Guard}><Text style={{color:'#fff',alingSelf:'center'}}></Text></View></View>
              :
              ""
            )
            )
            
        }
        { 
          Guardarmy2.map((item,index)=>(            
              item[2]?
              <View key={"Guard" + index} style={{position:'absolute',marginLeft:item[1],marginTop:item[0]}}><View style={styles.Guard}><Text style={{color:'#fff',alingSelf:'center'}}></Text></View></View>
              :
              ""
            )
            )
            
        }

        {  
          Necroarmy1.map((item,index)=>(            
              item[2]?
              <View key={"Raider1" + index} style={{position:'absolute',marginLeft:item[1],marginTop:item[0]}}><View style={styles.RedBox}><Text style={{color:'#fff',alingSelf:'center'}}></Text></View></View>
              :
              ""
            )
            )
            
        }
        { 
          Necroarmy2.map((item,index)=>(            
              item[2]?
              <View key={"Raider2" + index} style={{position:'absolute',marginLeft:item[1],marginTop:item[0]}}><View style={styles.RedBox}><Text style={{color:'#fff',alingSelf:'center'}}></Text></View></View>
              :
              ""
            )
            )
            
        }
        { 
          Necroarmy3.map((item,index)=>(            
              item[2]?
              <View key={"Raider3" + index} style={{position:'absolute',marginLeft:item[1],marginTop:item[0]}}><View style={styles.RedBox}><Text style={{color:'#fff',alingSelf:'center'}}></Text></View></View>
              :
              ""
            )
            )
            
        }

        </View>
        <View style={{alignSelf:'center',marginVertical:15}}>
        <Movment  verti={vertival} SV={setvertival} hori={horival} SH={sethorival}/></View>
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
    marginLeft:10,
    alignSelf:'center',
    marginVertical:15
  },
 
  BigBox:{
    flex:1,
    borderColor:'#fff',
    borderWidth:2,
    backgroundColor:'grey'
  },
  PlayerBox:{
    borderColor:'#fff',
    borderWidth:1,
    width:30,
    height:30,
    
  },
  Town:{
    position:'absolute',
    borderColor:'#fff',
    borderWidth:2,
    width:100,
    height:100,
    backgroundColor:'#9333ea',
    justifyContent:'center'
    
  },
  Town2:{
    position:'absolute',
    borderColor:'#fff',
    borderWidth:2,
    width:100,
    height:100,
    backgroundColor:'#2563eb',
    justifyContent:'center',
    alignSelf:'flex-end'
    
  },
  Village:{
    position:'absolute',
    borderColor:'#fff',
    borderWidth:2,
    width:100,
    height:100,
    backgroundColor:'#a16207',
    justifyContent:'center',
    marginTop: 300,
    marginLeft: 600
    
  },
  EnemyBase:{
    position:'absolute',
    borderColor:'#fff',
    borderWidth:2,
    width:100,
    height:100,
    backgroundColor:'#10b981',
    justifyContent:'center',
    marginTop: 1010,
    marginLeft: 350
    
  },
  RedBox:{
    
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    backgroundColor:'#dc2626'
  },
  Lich:{
    
    borderColor:'#dc2626',
    borderWidth:1,
    width:30,
    height:30,
    backgroundColor:'black'
  },
  Guard:{
    
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    backgroundColor:'#22d3ee'
  },
  Trader:{
    
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    backgroundColor:'yellow'
  },
  Loot:{
    
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    backgroundColor:'#6d28d9'
  },
  
})
export default Boneyard