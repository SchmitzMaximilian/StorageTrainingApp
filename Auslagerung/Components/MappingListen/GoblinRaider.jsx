import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
          
const GoblinRaider = (props) => {
  useEffect(()=>{

  },[props])
  return (<>
    { 
      
        props.Arr.map((item,index)=>(            
            item[2]?
            <View key={"Raider" + index} style={{position:'absolute',marginLeft:item[1],marginTop:item[0]}}><View style={styles.Goblin}><Text style={{color:'#fff',alingSelf:'center'}}>{index}</Text></View></View>
            :
            ""
          )
          )
          
      }
      {
        props.Rarr.length>0?
        props.Rarr.map((item,index)=>(            
          item[2]?
          <View key={"Raider" + index} style={{position:'absolute',marginLeft:item[1],marginTop:item[0]}}><View style={styles.Goblin}><Text style={{color:'#fff',alingSelf:'center'}}>R</Text></View></View>
          :
          ""
        )
        )
        :
        ""
      }</>
  )
}
const styles=StyleSheet.create({

  Goblin:{
    
    borderColor:'black',
    borderWidth:1,
    width:20,
    height:20,
    backgroundColor:'#dc2626'
  },
})
export default GoblinRaider