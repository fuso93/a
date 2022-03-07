import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";

import Alarm from "./screens/Alarm";
import Home from "./screens/Home";
import Chat from "./screens/Chat";
import Profile from "./screens/Profile";

const Tab =createBottomTabNavigator();
const App = () => {
    return (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route})=>({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Home"){
                        iconName = focused
                            ?  "home"
                            : "home-outline"
                    } else if( route.name ==="Chat"){
                        iconName = focused
                            ?  "chatbox"
                            :  "chatbox-outline"
                    } else if( route.name === "Alarm") {
                        iconName = focused
                            ? "alarm"
                            : "alarm-outline"
                    } else{
                       iconName = focused
                        ?  "settings"
                        : "settings-outline"
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor:"purple",
                tabBarInactiveTintColor: "lightGray"
            })}
          >
              <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Alarm" component={Alarm} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        </NavigationContainer>


    );
};

export default App;