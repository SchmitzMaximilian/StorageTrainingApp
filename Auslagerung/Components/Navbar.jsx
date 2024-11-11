import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../../Screens/Main";
import Test1 from "../../Screens/Test1";
import Spellforge from "../../Screens/Spellforge";
import AvatarSelect from "../../Screens/AvatarSelect";
import Spielwiese from "../../Screens/Spielwiese";
import IntervalTraining from "../../Screens/IntervalTraining";
import Goblinforest from "../../Screens/Goblinforest";
import Boneyard from "../../Screens/Boneyard";
import Spielwiese2 from "../../Screens/Spielwiese2";
import Graveyard from "../../Screens/Graveyard";
import Graveyard2 from "../../Screens/Graveyard2";
import DefendFogTown from "../../Screens/DefendFogTown";
import Attributvergabe from "../../Screens/Attributvergabe";
import BossfightCombatSeite from "../../Screens/BossfightCombatSeite";
import Necropolis from "../../Screens/Necropolis";
import Combat from "./ModalSeiten/ModalNecropolis/Combat";
import TestMe from "../../Screens/TestMe";
import AvatarCreation from "../../Screens/AvatarCreation";
import AvatarSummery from "../../Screens/AvatarSummery";
import AdventureStart from "../../Screens/AdventureStart";
import SelectGame from "../../Screens/SelectGame";
import TurnBasedTest from "../../Screens/TurnBasedTest";
//options={{headerShown:false}}
const Navbar = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectGame">
        <Stack.Screen
          name="SelectGame"
          component={SelectGame}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdventureStart"
          component={AdventureStart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Test1"
          component={Test1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Spellforge"
          component={Spellforge}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AvatarSelect"
          component={AvatarSelect}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Spielwiese"
          component={Spielwiese}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Spielwiese2"
          component={Spielwiese2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IntervalTraining"
          component={IntervalTraining}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Goblinforest"
          component={Goblinforest}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Boneyard"
          component={Boneyard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Graveyard"
          component={Graveyard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Graveyard2"
          component={Graveyard2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DefendFogTown"
          component={DefendFogTown}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Attributvergabe"
          component={Attributvergabe}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BossfightCombatSeite"
          component={BossfightCombatSeite}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Necropolis"
          component={Necropolis}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Combat"
          component={Combat}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TestMe"
          component={TestMe}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AvatarCreation"
          component={AvatarCreation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AvatarSummery"
          component={AvatarSummery}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TurnBasedTest"
          component={TurnBasedTest}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navbar;
