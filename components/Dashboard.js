import React from 'react'
import {View, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import AllProfile from './AllProfile'
import Footer from './Footer'
import styles from '../styles/Dashboard.component'
const Dashboard=()=>{
    const navigation=useNavigation()

    return(
        <View style={styles.droot}>
            <ScrollView style={styles.scrollview}>
                <View>
                    <AllProfile/>
                </View>
            </ScrollView>
            <View>
                <Footer/>
            </View>
        </View>
    )
}
export default Dashboard