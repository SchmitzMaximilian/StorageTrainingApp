const SPES = (props) => {
  let key = (props.Wert + 1)
  console.log(key)
    switch (key) {
      case 1:
        props.E("Air")
        break;
      case 2:
        props.E("Demonic")
        break;
      case 3:
        props.E("Death")
        break;
      case 4:
        props.E("Earth")
        break;
      case 5:
        props.E("Fire")
        break;
      case 6:
        props.E("Holy")
        break;
      case 7:
        props.E("Ice")
        break;
      case 8:
        props.E("Lightning")
        break;
      case 9:
        props.E("Nature")
        break;
      case 10:
        props.E("Water")
        break;
    
      default:
        break;
    }
}

export default SPES