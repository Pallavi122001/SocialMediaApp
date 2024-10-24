import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Tabs/Home';
import Chats from '../Screens/Tabs/Chats';
import Profile from '../Screens/Tabs/Profile';
import Search from '../Screens/Tabs/Search';
import Add from '../Screens/Tabs/Add';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../utils/Colors';
import { SH,SW,SF } from '../utils/FontDimension';
const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          paddingBottom:SH(1),
          paddingTop:SH(1),
          marginTop: -SH(5),
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
            return <Entypo name={iconName} size={20} color={color} />;
          } else if (route.name === 'Chat') {
            iconName = 'chat';
            return <MaterialIcons name={iconName} size={20} color={color} />;
          } else if (route.name === 'Add') {
            iconName = 'plus-circle';
            return <FontAwesome name={iconName} size={20} color={color} />;
          } else if (route.name === 'Profile') {
            iconName = 'user';
            return <FontAwesome name={iconName} size={20} color={color} />;
          } else if (route.name === 'Search') {
            iconName = 'search';
            return <FontAwesome name={iconName} size={20} color={color} />;
          }
        },
        tabBarLabelStyle: {
          fontSize: SF(3),
          paddingBottom:SH(0),
        },
        tabBarActiveTintColor:Colors.themeColor,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chats} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default AppTabNavigator;
