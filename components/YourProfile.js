import React, {useEffect, useState} from 'react'
import {View, Text, ScrollView} from 'react-native'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import Footer from './Footer'
import styles from '../styles/YourProfile.component'

const YourProfile=()=>{
    const n="no"
    const y="yes"
    const useremail=auth().currentUser.email
    const [fetchData, setFetchData]=useState([])
    const [fetchText, setFetchText]=useState([])

    useEffect(()=>{
        fetchUser()
    },[])
    
    const fetchUser=()=>{
        const fdata = firestore()
			.collection('demoColl')
			.doc(useremail)
			.onSnapshot((querySnapshot)=>{
                if(querySnapshot.data()==undefined){
                    setFetchData(
                        [{
                            "email": auth().currentUser.email, 
                            "name": auth().currentUser.email.split("@")
                        }]
                    )
                }else{
                    setFetchData([querySnapshot.data()])
                    fetchMsg()
                }
			})
    }
    const fetchMsg=()=>{
        const msg=[]
        firestore()
        .collection('demoColl')
        .doc(useremail)
        .collection('messages')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                msg.push(documentSnapshot.data())
            });
            setFetchText(msg)
        });
    }
    return(
        <View style={styles.dis_root}>
            <ScrollView style={styles.scview}>
                <Text style={styles.heading}>Your Posts</Text>
                {
                    fetchData.map((f,i)=>(
                        <Text key={i} style={styles.email}>
                            {f.name}
                        </Text>
                    ))
                }
                {
                    fetchText.map((ft,j)=>(
                        <View key={j} style={styles.content}>
                            <Text style={styles.dis_title}>
                                {ft.title}
                            </Text>
                            <Text  style={styles.dis_time}>
                            {new Date(ft.date_time.seconds*1000).toString().split("G")[0]}
                            </Text>
                            <Text style={styles.dis_txt}>
                                {ft.body}
                            </Text>
                        </View>
                    ))
                }
            </ScrollView>
            <View><Footer/></View>
        </View>
    )
}
export default YourProfile