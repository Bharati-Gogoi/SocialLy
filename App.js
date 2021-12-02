import React, {useState, useEffect} from 'react'
import { View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Write from './components/Write'
import YourProfile from './components/YourProfile'
import AllProfile from './components/AllProfile'
import UserPosts from './components/UserPosts'
import Logout from './components/Logout'

const Stack = createNativeStackNavigator()
const App=() =>{
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Login" component={Login}
				options={{
					title:'Social^L̥y',
					headerTintColor: '#ede7f6',
					headerStyle: {
						backgroundColor: '#ba68c8',
						color: '#fff'
					},
					headerRight:()=>(
						<View style={{flexDirection: 'row'}}>
							<Logout/>
						</View>
					)
				}}
				/>			
				<Stack.Screen name="Register" component={Register} 
				options={{
					title:'Social^L̥y',
					headerTintColor: '#ede7f6',
					headerStyle: {
						backgroundColor: '#ba68c8',
						color: '#fff'
					},
					headerRight:()=>(
						<View style={{flexDirection: 'row'}}>
							<Logout/>
						</View>
					)
				}}
				/>
				<Stack.Screen name="Dashboard" component={Dashboard} />
				
				<Stack.Screen name="AllProfile" component={AllProfile}/>
				<Stack.Screen name="UserPosts" component={UserPosts}
				options={{
					title:'Social^L̥y',
					headerTintColor: '#ede7f6',
					headerStyle: {
						backgroundColor: '#ba68c8',
						color: '#fff'
					},
					headerRight:()=>(
						<View style={{flexDirection: 'row'}}>
							<Logout/>
						</View>
					)
				}}
				/>
				<Stack.Screen name="YourProfile" component={YourProfile}
				options={{
					title:'Your Profile',
					headerTintColor: '#ede7f6',
					headerStyle: {
						backgroundColor: '#ba68c8',
						color: '#fff'
					},
					headerRight:()=>(
						<View style={{flexDirection: 'row'}}>
							<Logout/>
						</View>
					)
				}}
				/>
				<Stack.Screen name="Write" component={Write}
				options={{
					title:'Add new post',
					headerTintColor: '#ede7f6',
					headerStyle: {
						backgroundColor: '#ba68c8',
						color: '#fff'
					},
					headerRight:()=>(
						<View style={{flexDirection: 'row'}}>
							<Logout/>
						</View>
					)
				}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
export default App