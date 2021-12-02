import React, {useEffect, useState} from 'react'
import {View, Text, ScrollView} from 'react-native'
import firestore from '@react-native-firebase/firestore'
import Footer from './Footer'
import styles from '../styles/UserPosts.component'

const UserPosts=({route})=>{
    const emailid = route.params.emailId
    const [data, setData]=useState([])
    useEffect(()=>{
        getData()
    },[])
    const getData=()=>{
        const snaps = firestore()
        .collection('demoColl')
        .doc(emailid)
        .collection('messages')
        .orderBy('date_time', 'desc')
        .get()
        .then((qs)=>{
            const m=[]
            qs.forEach(docsnap => {
                m.push(docsnap.data())
            });
            setData(m)
        })
    }
    return(
        <View style={styles.m_root}>
        <Text style={styles.m_heading}>Posts</Text>
            <ScrollView style={styles.sview}>
                {
                    data.map((d,i)=>(
                        <View style={styles.m_view} key={i}>
                            <Text style={styles.title}>
                                {d.title}
                            </Text>
                            <Text
                            style={styles.m_time}>
                                {new Date(d.date_time.seconds*1000).toString().split("G")[0]}
                            </Text>
                            <Text
                            style={styles.m_post}>
                                {d.body}
                            </Text>
                            
                        </View>
                    ))
                }
            </ScrollView>
            <View><Footer/></View>
        </View>
    )
}
export default UserPosts