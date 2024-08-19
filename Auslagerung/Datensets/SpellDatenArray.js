//["Type","Name","Kosten","DMG","Spelltype","Effect"],
export function Spelldataset(){
  let SpellData
  SpellData={
    "Spells":{
    "SpellElementtypes":["Air","Demonic","Death","Earth","Fire","Holy","Ice","Lightning","Nature","Water"],
    "SpellType":["DmgSpell","DefenseSpell","HealSpell","RitualSpell"],
    "SpellArrayList" :[
    ["Ice","Blizzard","100","70","DmgSpell","decrease Movement by 50%"],
    ["Air","Windblade","10","15","DmgSpell","none"],
    ["Demonic","Demonbolt","10","20","DmgSpell","none"],
    ["Fire","Fire Nova","50","35","DmgSpell","none"],
    ["Death","Bilght","60","40","DmgSpell","50% Heal reduction"],
    ["Air","Wind Barrier","20","0","DefenseSpell","Deflects Ranged attacks"],
    ["Lightning","Thunder Storm","120","60","DmgSpell","Strikes all and lasts for 2 Turns"],
    ["Fire","Firebolt","15","20","DmgSpell","none"],
    ["Ice","Icebolt","15","10","DmgSpell","decrease Movement by 50%"],
    ["Holy","Heal","20","30","HealSpell","none"],
    ["Holy","Sanctury","100","0","HealSpell","Protects from all dmg"],
    ["Holy","Holy Nova","40","25","HealSpell","none"],
    ["Nature","Regrowth","20","10","HealSpell","Lasts 3 turns"],
    ["Lightning","Zap","5","-10Hp","DmgSpell","none"],
    ["Ice","Frostnova","50","20","DmgSpell","Stops movement for 1 turn"],
    ["Earth","Stone Skin","30","0","DefenseSpell","reduces dmg taken by 50%"],
    ["Water","Water Blade","20","20","DmgSpell","none"],
    ["Water","Water Shild","30","0","DefenseSpell","Blocks 2 Attacks/Spells"],
    ["Death","Rise Skeleton","100","0","RitualSpell","Summons a random Skeleton"],
    ["Holy","Revive","200","0","RitualSpell","Revives a Target"],
    ["Demonic","Summon Demon","100","0","RitualSpell","Summons a Demon"],
    ["Fire","Fire Breath","50","35","DmgSpell","none"],
    ["Earth","Stone Spike","50","30","DmgSpell","none"],
    ["Nature","Entagle","40","10","DmgSpell","Roots enemys in an area for 2 Turns"],
    ["Death","Necroticbolt","25","15","DmgSpell","decreases healing by 50%"],
    ["Demonic","Sacrifice Imp","5","0","RitualSPell","Kill an Imp to restore 50Mp"],
    ["Air","Tornado","70","40","DmgSpell","Aoe Dmg"],
    ["Air","Whirlwind Step","40","0","DefenseSpell","Teleport"],
    ]
  }} 

  

return SpellData;
 
}