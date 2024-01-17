
import { Entypo, AntDesign,Ionicons  } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Pages/Home';
import Search from './src/Pages/Search';
import Profile from './src/Pages/Profile';
import Order from './src/Pages/Order';

const Tab = createBottomTabNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" options={{tabBarActiveTintColor:'black', tabBarIcon: ({focused})=>(focused)? <Entypo name="home" size={24} color="black" />: <AntDesign name="home" size={24} color="black" /> }} component={Home} />
        <Tab.Screen name="Search" options={{tabBarIcon: ()=><AntDesign name="search1" size={24} color="black" />}} component={Search} />
        <Tab.Screen name="Order" component={Order} options={{tabBarIcon: ()=><AntDesign name="profile" size={24} color="black" />}} />
        <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: ()=><Ionicons name="person-outline" size={24} color="black" />}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

