import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from "./Screens/HomeScreen.js"
import ServiceScreen from "./Screens/ServiceScreen.js"
import CameraScreen from './Screens/CameraScreen.js';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer'
import SettingScreen from './Screens/SettingScreen.js';
import MessageScreeen from './Screens/MessageScreeen.js';
import Customdrawer from './components/Customdrawer.js';
import  Ionicons from '@expo/vector-icons/Ionicons';


const Drawer = createDrawerNavigator()





export default function App() {
  // const tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      {/* <tab.Navigator
        screenOptions={{
          tabBarShowLabel : false,
          tabBarStyle: { 
            position: 'absolute' ,
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#fff',
            borderRadius: 15,
            height: 90,
            ...styles.shadow
          },
        }}
      >
        <tab.Screen name='home' component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style ={{alignItems:'center', justifyContent: 'center', top:10}} >
                <FontAwesome name="home" size={24} color={focused ? '#5D6262' : '#2815A2'} resizeMode='contain' />
                <Text style={{color : focused ? '#5D6262' : '#2815A2'  }} >Home</Text>
              </View>
            )
          }}
        ></tab.Screen>
        <tab.Screen name='services' component={ServiceScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style ={{alignItems:'center', justifyContent: 'center', top:10}} >
              <FontAwesome5 name="tools" size={24} color={focused ? '#5D6262' : '#2815A2'} resizeMode='contain' />
              <Text style={{color : focused ? '#5D6262' : '#2815A2'  }} >Tools</Text>
            </View>
          )
        }}
         ></tab.Screen>
        <tab.Screen name='camera' component={CameraScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style ={{alignItems:'center', justifyContent: 'center', top:10}} >
              <FontAwesome name="camera" size={24} color={focused ? '#5D6262' : '#2815A2'} resizeMode='contain' />
              <Text style={{color : focused ? '#5D6262' : '#2815A2'  }} >Camera</Text>
            </View>
          )
        }}
        ></tab.Screen>
      </tab.Navigator> */}

      <Drawer.Navigator drawerContent={props => <Customdrawer {...props} />} screenOptions={{ headerShown: false, drawerActiveTintColor:'#230981' ,
      drawerInactiveBackgroundColor:'#fff', drawerLabelStyle:{marginLeft:-20}
    }}
       initialRouteName='Home' 
    
      >
       
        <Drawer.Screen name='Home' component={HomeScreen}
          options={{ drawerIcon: (color) => (<Ionicons name='home-outline' size={22} color={color} />) }}></Drawer.Screen>

        <Drawer.Screen name='Services' component={ServiceScreen}
          options={{ drawerIcon: (color) => (<Ionicons name='boat-outline' size={22} color={color} />) }}></Drawer.Screen>

        <Drawer.Screen name='Camera' component={CameraScreen}
          options={{ drawerIcon: (color) => (<Ionicons name='camera-outline' size={22} color={color} />) }}></Drawer.Screen>

        <Drawer.Screen name='Message' component={MessageScreeen}
          options={{ drawerIcon: (color) => (<Ionicons name='chatbox-ellipses-outline' size={22} color={color} />) }}></Drawer.Screen>

        <Drawer.Screen name='Setting' component={SettingScreen}
          options={{ drawerIcon: (color) => (<Ionicons name='settings-outline' size={22} color={color} />) }}></Drawer.Screen>


      </Drawer.Navigator>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#DADFFC',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5

  }

});

