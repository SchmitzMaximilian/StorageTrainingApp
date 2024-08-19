import React, { useEffect, useRef } from 'react'

const useInterval = (props) => {
  const interval = useRef(null)
  console.log("Peeked inside")
  const GP1= props.GP + "1"
  const GP2= props.GP + "2"
  const GP3= props.GP + "3"
  const GP4= props.GP + "4"
  console.log(word)
  const goaroundTop = ()=>{
    props.setPH(prev=>prev + 20)
  }
  const goaroundRight = ()=>{
    props.setPV(prev=>prev + 20)
  }
  const goaroundBottom = ()=>{
    props.setPH(prev=>prev - 20)
  }
  const goaroundLeft = ()=>{
    props.setPV(prev=>prev - 20)
  }

  const checkposition =()=>{
    if(props.PH==props.EndH && props.PV==props.StartV){
      clearInterval(interval.GP1)
      interval.GP2 = setInterval(goaroundRight,props.Delay)
    }
    if(props.PV==props.EndV && props.PH==props.EndH){
      clearInterval(interval.GP2)
      interval.GP3 = setInterval(goaroundBottom,props.Delay)
    }
    if(props.PH==props.StartH && props.PV==props.EndV){
      clearInterval(interval.GP3)
      interval.GP4 = setInterval(goaroundLeft,props.Delay)
    }
    if(props.PH==props.StartH && props.PV==(props.StartV + 20)){
      clearInterval(interval.GP4)
      setTimeout(()=>{
        props.setPV(prev=>prev - 20)
        interval.GP1 = setInterval(goaroundTop,props.Delay)
      },props.Delay)
    }}
    /* 
    useEffect(()=>{
      interval.Guardpath1 =setInterval(goaroundTop,2000)
    })*/
    useEffect(()=>{
      checkposition()
    },[props.PH,props.PV])
  
}

export default useInterval