import React, {useState} from 'react'
import {View, Text, ScrollView, TouchableOpacity, TextInput, Button} from 'react-native'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import Footer from './Footer'
import { useNavigation } from '@react-navigation/core'
import st from '../styles/FormFields.component'
import styles from '../styles/Write.component'

const Write=()=>{
    const navigation=useNavigation()
    const date=new Date()
    const emailId=auth().currentUser.email
    const [err, setErr]=useState('')
    const [name, setName]=useState('')
    const [title, setTitle]=useState('')
    const [postBody, setPostBody]=useState('')

    const clearForm=()=>{
        setErr('')
        setName('')
        setTitle('')
        setPostBody('')
    }

    const savePost=()=>{
        if(name=="" || title=="" || postBody==""){
            setErr(<Text style={st.errorMessage}>All fields are mandetory!</Text>)
        }else{
            firestore()
            .collection('demoColl')
            .doc(emailId)
            .set({
                email: emailId,
                name: name
            })
            .then(() => {
                console.log('Data added to firestore collection!');
                saveMessage()
            }).catch((e)=>{
                setErr(<Text style={st.errorMessage}>{e}</Text>)
                console.log("error adding data ",e)
            })
        }
    }
    const saveMessage=()=>{
        console.log("Saving message... into ", emailId)
        firestore()
        .collection('demoColl').doc(emailId)
        .collection('messages').doc()
        .set({
            title: title,
            body: postBody,
            date_time: date
        }).then(()=>{
            console.log('Message saved!')
            setErr(<Text style={st.successMessage}>Post Added!</Text>)
            navigation.navigate('Login')
        }).catch((e)=>{
            setErr(<Text style={st.errorMessage}>{e}</Text>)
            console.log("error saving msg = ",e)
        })
    }

    return(
        <View style={styles.wroot}>
            <ScrollView style={styles.scView}>
                <Text style={styles.wtext}>Add new post</Text>
                <Text>{err}</Text>
                <TextInput
                    onChangeText={setName}
                    value={name}
                    placeholder={"Enter your name as you want\nto be displayed on Dashboard"}
                    placeholderTextColor="#9499b7"
                    style={[st.inputs, styles.inputName]}
                />

                <TextInput
                    onChangeText={setTitle}
                    value={title}
                    placeholder="Enter Post Title"
                    placeholderTextColor="#9499b7"
                    style={st.inputs}
                />
                <TextInput
                    onChangeText={setPostBody}
                    value={postBody}
                    multiline={true}
                    numberOfLines={4}
                    placeholder="Enter Post Body"
                    placeholderTextColor="#9499b7"
                    style={[st.inputs, styles.body]}
                />
                <View style={st.buttons}>
                    <TouchableOpacity
                    onPress={savePost}
                    style={[st.btnStyles, st.btn_color_save]}>
                        <Text style={{color: '#fff'}}>Add Post</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                    onPress={clearForm}
                    style={[st.btnStyles, st.btn_color_clear]}>
                        <Text style={{color: '#fff'}}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View><Footer/></View>
        </View>
    )
}
export default Write