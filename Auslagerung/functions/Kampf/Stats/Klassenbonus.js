

const Klassenbonus=(props)=> {
  let Klasse=props.Klasse
  switch(Klasse){
    case 'Krieger':
      props.BonusHpMin(150)
      props.BonusHPMax(300)
      props.BonusMp(100)
      break;
    case 'Magier':
      props.BonusHpMin(50)
      props.BonusHPMax(150)
      props.BonusMp(200)
      break;
    case 'Archer':
      props.BonusHpMin(50)
      props.BonusHPMax(150)
      props.BonusMp(100)
      break;
    case 'Scout':
      props.BonusHpMin(100)
      props.BonusHPMax(200)
      props.BonusMp(100)
      break;
    case 'Spearmen':
      props.BonusHpMin(100)
      props.BonusHPMax(150)
      props.BonusMp(150)
      break;
    case 'Shild Bearer':
      props.BonusHpMin(250)
      props.BonusHPMax(400)
      props.BonusMp(100)
      break;
    case 'Macefighter':
      props.BonusHpMin(100)
      props.BonusHPMax(200)
      props.BonusMp(50)
      break;
    case 'Crossbowmen':
      props.BonusHpMin(100)
      props.BonusHPMax(150)
      props.BonusMp(150)
      break;
     default:
      props.BonusHpMin(0)
      props.BonusHPMax(0)
      props.BonusMp(0)
      break;
  }
}

export default Klassenbonus