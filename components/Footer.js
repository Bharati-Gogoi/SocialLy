import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import styles from '../styles/Footer.component'
const Footer=()=>{
    const navigation=useNavigation()
    const gotoYourProfile=()=>{
        navigation.navigate('YourProfile')
    }
    const gotoROOT=()=>{
        navigation.navigate('Login')
    }
    const gotoWrite=()=>{
        navigation.navigate('Write')
    }
    return(
        <View style={styles.froot}>
            <TouchableOpacity onPress={gotoROOT}>
                <Text style={styles.ftext}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={gotoWrite}>
                <Text style={styles.ftext}>Write</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={gotoYourProfile}>
                <Text style={styles.ftext}>Your Profile</Text>
            </TouchableOpacity>
            
        </View>
    )
}
export default Footer