import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/core'
import styles from '../styles/AllProfile.component'

const AllProfile=()=>{
    const navigation = useNavigation()
    const [msg, setMsg]=useState([])

    useEffect(()=>{
        getAllMsg()
    },[])

    const getAllMsg=()=>{
        const snapshot = firestore()
        .collection('demoColl').get()
        .then((qs)=>{
            const m=[]
            qs.forEach(docsnap => {
                m.push(docsnap.data())
            });
            setMsg(m)
        })
    }

    const viewMessage=(emailid)=>{
        navigation.navigate('UserPosts', {emailId: emailid})
    }

    return(
        <View style={styles.msg_root}>
            <Text style={styles.msg_txt}>All Profiles</Text>
            <View>
            {
                msg.map((m,i)=>(
                    <TouchableOpacity key={i} onPress={()=>viewMessage(m.email)}>
                        <Text style={styles.msg_profile}>
                            {m.name}
                        </Text>
                    </TouchableOpacity>
                ))
            }
            </View>
        </View>
    )
}
export default AllProfile