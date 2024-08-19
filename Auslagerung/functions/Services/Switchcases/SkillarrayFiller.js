  const skillDB=(props)=>{
    let arr= props.GroupArray
    let skillarr=[]
    arr.forEach(e=>{
      let key=e[0]
    switch(key){
    case 'W':
      skillarr.push([['Slash', 30, 10, 0],['Shieldbash', 50, 30, 0],['Throw Bone', 20, 0, 20],['Necrotic Strike', 70, 20, 30]])
      break;
    case 'S':
      skillarr.push([['Slash',30,10,0],['Stab',20,10,0],['Twinstrike',60,40],['Throw Bone',20,0,20]])
      break;
    case 'A':
      skillarr.push([['Shot',40,25,0],['Necrotic Arrow',100,50,25],['Throw Bone',20,0,20]])
      break;
    case 'G':
      skillarr.push([['Bite',40,30,-20],['Claw',20,10,0],['Necrotic Claw',60,0,30],['Devour Corpse',0,-40,-30]])
      break;
    case 'Z':
      skillarr.push([['Bite',30,15,0],['Strike',20,15,0],['Headbutt',50,30,20],['Necrotic Vomit',100,60,50]])
      break;
    case 'M':
      skillarr.push([['NecroticBolt',50,30,0],['NecroticBlast',100,40,20],['Recharge',0,-200,40]])
      break;
    case 'GSB':
      skillarr.push([['Slash', 30, 10, 0],['Shieldbash', 50, 30, 0],['1-2 Combo', 80, 50,0]])
      break;
    case 'GSM':
      skillarr.push([['Stab',40, 15,0],['Impaling Thrust',70,30,-5],['Throw Javlin',50,20,0]])  
      break;
    case 'GCM':
      skillarr.push([['Crossbowbolt',50,20,0],['Explosive Crossbowbolt',100,60,0],['Dagger Stab',20,5,0]])  
      break;
    case 'GMF':
      skillarr.push([['Smash',50,20,0],['Crushing Blow',100,40,0],['Headbutt',50,20,10]])  
      break;
    }
      })
      props.Skillset(skillarr)    
    }

export default skillDB