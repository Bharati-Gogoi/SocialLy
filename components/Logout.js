import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/core';
const Logout=()=>{
    const navigation=useNavigation()
    function logoutUser(){
        console.log("Logging out...")
        auth()
        .signOut()
        .then(() => {
            console.log('User signed out!')
            navigation.navigate('Login')
        }).catch((e)=>
            console.log(e)
        )
    }
    return(
        <TouchableOpacity 
        onPress={logoutUser}
        style={styles.lo_root}>
            <Text style={styles.lo_text}>
                Logout
            </Text>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    lo_root:{
        padding: 5,
        paddingLeft: 10, 
        paddingRight: 10,
        backgroundColor: '#f3e5f5',
        borderRadius: 5
    },
    lo_text:{  color: '#000'  }
})
export default Logout