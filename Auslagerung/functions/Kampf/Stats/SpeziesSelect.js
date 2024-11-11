const SpeziesSelect=(props)=>{
  let key=props.Rasse
  switch(key){
    case 'Human': //------Human-1
      props.BaseHp(100)
      props.BaseMp(100)
      break;
    case 'Skeleton': //------Skeleton-4
      props.BaseHp(50)
      props.BaseMp(50)
      break;
    case 'Elf': //------Elf-2
      props.BaseHp(70)
      props.BaseMp(150)
      console.log('got here')
      break;
    case 'Dwarf': //------Dwarf-3
      props.BaseHp(150)
      props.BaseMp(60)
      break;
    case 'Dark Skeleton': //------Dark Skeleton-5
      props.BaseHp(150)
      props.BaseMp(200)
      break;
    case 'Goblin': //------Goblin-6
      props.BaseHp(50)
      props.BaseMp(60)
      break;
    default:
      props.BaseHp(50)
      props.BaseMp(50)

  }

}
export default SpeziesSelect