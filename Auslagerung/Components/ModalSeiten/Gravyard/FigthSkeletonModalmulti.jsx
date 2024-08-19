
import React, { useEffect, useRef, useState } from 'react'
import { Alert, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const FigthSkeletonModalmulti = (props) => {
  
  const [maxHP,setmaxHP]=useState()
  const [currentHP,setcurrentHP]=useState() 
  const [EnemyHPArray,setEnemyHPArray]=useState([])
  const [EnemycurrentHPArray,setEnemycurrentHPArray]=useState([])
  const [maxMP,setmaxMP]=useState()
  const [currentMP,setcurrentMP]=useState()
  const [EnemyMPArray,setEnemyMPArray]=useState([])
  const [EnemycurrentMPArray,setEnemycurrentMPArray]=useState([])
  const [Phase,setPhase]=useState(0)
  const [Targetarr,setTargetarr]=useState([])
  const [Target,setTarget]=useState()
  const [Enemysdead,setEnemysdead]=useState(0)
  const interval = useRef(null)
  console.log(Enemysdead)
  const loadstats=()=>{ 
    
    let AvatarHp = props.AvatarStats[0]
    let AvatarMp = props.AvatarStats[1]
    setmaxHP(AvatarHp)
    setmaxMP(AvatarMp)
    setcurrentHP(AvatarHp)
    setcurrentMP(AvatarMp)			//--> AvatarStats werden Ausgelesen und den zuständigen useStates zugeteilt
    if(props.MV==true){
    let ESA = props.Array 
    let Hparr=[]
    let Mparr=[]
    ESA.forEach(e=>{
     Hparr.push(e[0])  
     Mparr.push(e[1])
    })
      setEnemyHPArray(Hparr)
      setEnemycurrentHPArray(Hparr)
      setEnemyMPArray(Mparr)
      setEnemycurrentMPArray(Mparr)		//--> GegnerStats werden ausgelsenen und den zuständigen useStates zugeteilt
  
      if(Targetarr.length!=props.Array?.length){
        props.Array.forEach(e=>{
          Targetarr.push(["Target",true])
        })					//-->Für jeden Gegner wird eine Zielauswahloption erstellt
      }}
   }
   if(props.MV==true){
    console.log(props.Dead[props.Thisone][2])
   if(props.Dead[props.Thisone][2]==true){
    if(Enemysdead==props.Array?.length&&props.Array?.length>0){
      Alert.alert("Lok'tar","You have succeeded in killing all Enemies",[{text:"Loot",onPress: ()=>(Victory())}])
      
    }}						//-->Prüft ob alle Gegner besiegt wurden
  }
    const Victory=()=>{
      setEnemysdead(0)				//-->Reseted den Killcount
  
      let Tarr=Targetarr
      console.log(Tarr)
      props.Array.forEach(e=>{
        Tarr.pop()
      })
      setTargetarr(Tarr)				//-->Resetted die Gegnerauswahl Optionen
  
      let arr = props.Dead
      arr[props.Thisone][2]=false
      props.Groupkilled(arr)				//-->Setzt den Gegnergruppenstatus auf besiegt
      props.MVset(false)				//-->Schließt das Modal
  
    }

    const selectTarget=(index)=>{
      setTarget(index)
      setPhase(1)
    }						//-->Gegnerauswahl
    
    const dmgcalc=(key)=>{
      let ELP = EnemycurrentHPArray
      let alive=Targetarr
      let index= Target
      switch(key){					//-->Welche Aktion wird ausgeführt
        case 1:					
          ELP[index] = (ELP[index]-80)
          console.log(ELP)
          if(ELP[index]<=0){
            alive[index][1]=false
            setEnemysdead(prev=>prev+1)
            setTargetarr(alive)
            
          }
          setEnemycurrentHPArray(ELP)
          setcurrentMP(prev=>prev - 50)
          setPhase(0)
          break;					//-->SingelTarget Dmg
        case 2:
          let Harr=[]
          ELP.forEach(e=>{
            if(e>0){
              e=(e-30)
            }
            Harr.push(e)
    
          })
          ELP=Harr
          let i=0
          while(i<ELP.length){
            if(ELP[i]<=0){
              if(alive[i][1]!=false){
              alive[i][1]=false
              setEnemysdead(prev=>prev+1)
              setTargetarr(alive)}
            }
            i++
          }
          setEnemycurrentHPArray(ELP)
          setcurrentMP(prev=>prev - 60)
          setPhase(0)   
          break;					//-->AOE Dmg
    
      }
      
    
    }
  useEffect(()=>{
      loadstats()
    },[props])					//-->sorgt dafür das, wenn das Modal auf true gestellt wird, die weitergegebenen Daten verarbeitet werden
  
  
  return (
    <Modal
    animationType="slide"      
    visible={props.MV}    
    >
      <SafeAreaView style={styles.SAV}>
        <View style={styles.Maincontainer}>          
        <View style={styles.Topcontainer}>
          {props.Array?.length>0?
            <View style={styles.StatsEnemy}>
             {props.Array?.length>0&&props.Array.map((item,index)=>(<>
                
            <><View><Text style={styles.text}>HP: {EnemycurrentHPArray[index]}/{item[0]}</Text></View><>
            { 
              (item[0])>400?              
              <View style={{flexDirection:'row',borderColor:'#dc2626',borderWidth:1,backgroundColor:'grey',width:((item[0])/2)}}><View style={{backgroundColor:'red',width:EnemycurrentHPArray[index]/2,height:20}}></View></View>
              :
              <View style={{flexDirection:'row',borderColor:'#dc2626',borderWidth:1,backgroundColor:'grey',width:(item[0])}}><View style={{backgroundColor:'red',width:EnemycurrentHPArray[index],height:20}}></View></View>
          }</></>           
            <><View><Text style={styles.text}>MP: {EnemycurrentMPArray[index]}/{item[1]}</Text></View><>
            {
              (item[1])>400?
              <View style={{flexDirection:'row',borderColor:'#2563eb',borderWidth:1,backgroundColor:'grey',width:((item[1])/2)}}><View style={{backgroundColor:'blue',width:EnemycurrentMPArray[index]/2,height:20}}></View></View>
              :
            <View style={{flexDirection:'row',borderColor:'#2563eb',borderWidth:1,backgroundColor:'grey',width:(item[1])}}><View style={{backgroundColor:'blue',width:EnemycurrentMPArray[index],height:20}}></View></View>
            }</></>
              </>))
        }
        </View>
        :
        ""
        }
          </View>
          <View style={styles.Midcontainer}>
          {props.Array?.length>0?
            <View style={styles.StatsSelf}>
              <View><Text style={styles.text}>HP: {currentHP}/{maxHP}</Text></View>
              {
                maxHP>400?
                <View style={{flexDirection:'row',borderColor:'#16a34a',borderWidth:1,backgroundColor:'grey',width:maxHP/2}}><View style={{backgroundColor:'green',width:currentHP/2,height:20}}></View></View>
                :
                <View style={{flexDirection:'row',borderColor:'#16a34a',borderWidth:1,backgroundColor:'grey',width:maxHP}}><View style={{backgroundColor:'green',width:currentHP,height:20}}></View></View>
              }
              
              <View><Text style={styles.text}>MP: {currentMP}/{maxMP}</Text></View>
              {
                maxMP>400?
                <View style={{flexDirection:'row',borderColor:'#2563eb',borderWidth:1,backgroundColor:'grey',width:maxMP/2}}><View style={{backgroundColor:'blue',width:currentMP/2,height:20}}></View></View>
                :
              <View style={{flexDirection:'row',borderColor:'#2563eb',borderWidth:1,backgroundColor:'grey',width:maxMP}}><View style={{backgroundColor:'blue',width:currentMP,height:20}}></View></View>
            }
            </View>
            :
            ""
            }
          </View>
          <View style={styles.Botcontainer}>
          <View style={styles.Aktionsleiste}>
            {
              Phase==0?
              <>
              {
                Targetarr?.map((item,index)=>(<>{
                  item[1]?
                  <TouchableOpacity onPress={()=>selectTarget(index)}>
                    <Text key={"asfe" + index} style={styles.text}>{item[0]}{index}</Text>
                  </TouchableOpacity>
                  :
                  ""
                  }</>
                ))
              }
              </>
              :
              ""
            }
            {Phase==1?
             <>
            
            <TouchableOpacity onPress={()=>(dmgcalc(1))}>
              <Text style={styles.text}>Demonblitz</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>(dmgcalc(2))}>
              <Text style={styles.text}>Feuernova</Text>
            </TouchableOpacity>           
            </>
            :
            ""
            }
            {
              Phase==2?
              <>
              
              </>
              :
              ""
            }
            </View>
            </View>            
            <TouchableOpacity onPress={()=>(props.MVset(false))}>
              <Text style={styles.text}>Modalschließen</Text>
            </TouchableOpacity>
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
    text:{
      color:'#fff'
    },
    Maincontainer:{
      flex:5,
      justifyContent:'space-around',
      alignItems:'center',
      borderColor:'#fff',
      borderWidth:1,
      width:'100%',
      height:'100%'
    },
    Aktionsleiste:{
      padding:5,
      flexDirection:'column',
      flexWrap:'wrap',
      height:'auto'
    },
    Displayleiste:{},
    hprow:{
      flexDirection:'row',
      borderColor:'#16a34a',
      borderWidth:1,
      backgroundColor:'grey'
    },
    StatsEnemy:{
      padding:5,
      width:'100%',
      height:100
    },
    StatsSelf:{
      margin:5,
      width:'100%',
      height:100,
    },
    Enemybild:{},
    BildYou:{},
    Topcontainer:{
      flex:2,
      borderColor:'#fff',
      borderWidth:1,
      width:'100%',
      flexDirection:'column',
    },
    Midcontainer:{
      flex:2,
      borderColor:'#fff',
      borderWidth:1,
      justifyContent:'flex-end',
      width:'100%'
      },
    Botcontainer:{
      flex:1,
      borderColor:'#fff',
      borderWidth:1,
      width:'100%'
    },  })
export default FigthSkeletonModalmulti