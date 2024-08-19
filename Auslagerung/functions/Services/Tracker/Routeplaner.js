const Routeplaner = (props) => {
  goaroundTop = ()=>{
    props.setPH(prev=>prev + 20)
  }
  goaroundRight = ()=>{
    props.setPV(prev=>prev + 20)
  }
  goaroundBottom = ()=>{
    props.setPH(prev=>prev - 20)
  }
  goaroundLeft = ()=>{
    props.setPV(prev=>prev - 20)
  }
  
  
}
const checkposition =(props)=>{
  if(props.PH==props.EndH && props.PV==props.StartV){
    clearInterval(props.IV.static1)
    props.IV.static2 = setInterval(goaroundRight,props.Delay)
  }
  if(props.PV==props.EndV && props.PH==props.EndH){
    clearInterval(props.IV.static2)
    props.IV.static3 = setInterval(goaroundBottom,props.Delay)
  }
  if(props.PH==props.StartH && props.PV==props.EndV){
    clearInterval(props.IV.static3)
    props.IV.static4 = setInterval(goaroundLeft,props.Delay)
  }
  if(props.PH==props.StartH && props.PV==(props.StartV + 20)){
    clearInterval(props.IV.static4)
    setTimeout(()=>{
      props.setPV(prev=>prev - 20)
      props.IV.static1 = setInterval(goaroundTop,props.Delay)
    },props.Delay)
  }}
  export {checkposition}
export default Routeplaner