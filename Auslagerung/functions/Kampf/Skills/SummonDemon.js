const SummonDemon=(props)=>{
let DemonType= props.Type
let Teamarr=([])
switch(DemonType){
  case 'Imp':
    Teamarr.push(['DI',60,100])
    break
  case 'Demoness':
    Teamarr.push(['DD',200,300])
    break
  case 'Fiend':
    Teamarr.push(['DF',350,200])
    break
  case 'Demonhound':
    break
  case 'Imp':
    break
}
props.Group.push(Teamarr)
}

export default SummonDemon