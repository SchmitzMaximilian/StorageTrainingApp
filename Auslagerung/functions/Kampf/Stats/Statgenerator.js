const Statgenerator=(props)=>{
  let Hp= (Math.floor(Math.random()*2)+2)*100 + (Math.floor(Math.random()*7)*10)
  console.log(Hp)
  
  //  (min,max) = (215,515)
  //  100 +( Math.floor(Math.random() * 3) +1) * 100 + Math.floor(Math.random() * 5) * 20 + 15
  //  Basestat + 100-300 + 0-80 +15


  let Basewert=100
  let Range100
  let Range10
  let Rangekonstante=15

  Range100=(Math.floor(Math.random()*4)+1)*100 // 100-400
  if(Range100!=400){
    Range10=(Math.floor(Math.random()*5)*20)  //0-80
  }else{
    Range10=0
  }

  Endwert= Basewert+Range100+Range10+Rangekonstante

  let BaseStat=props.BaseStat               //100
  let EndHPmin= props.KBmini     //200
  let EndHPmax= props.KBmax      //300
  let dif= (EndHPmax-EndHPmin)/10+1
  let EndHP= Math.floor((Math.random()*dif)*10+EndHPmin)

}
export default Statgenerator