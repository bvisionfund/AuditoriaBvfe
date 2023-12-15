import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import Login from '../screens/Login';
import Home from '../screens/Home';

const screens ={
    Login:{
        screen: Login
    },
    Home:{
        screen: Home
    }
}
const Stack = createNativeStackNavigator(); 
//const Stack = createNativeStackNavigator(screens);

const AppStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name = 'Login'
                    component = {Login}/>         
                <Stack.Screen
                    name = 'Home'
                    component = {Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppStack
