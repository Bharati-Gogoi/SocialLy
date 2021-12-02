import React, { useState } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import auth from '@react-native-firebase/auth'
import st from '../styles/FormFields.component'
import styles from '../styles/Register.component'

const Register=({navigation})=>{
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [errorMsg, setErrorMsg]=useState('')
    const [successMsg, setSuccessMsg]=useState('')

    function clearForm(){
        setEmail('')
        setPassword('')
        setErrorMsg('')
        setSuccessMsg('')
    }
    function validatEmail(emailid){
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(emailid) === false) {
            // console.log("email format error!")
            return false
        }else{
            // console.log("EMail format is corrct!")
            return true
        }
    }
    function registerUser(){
        var validEmail=validatEmail(email)
        if(validEmail){
            createUser()
        }else{
            setErrorMsg(<Text style={st.errorMessage}>Email is not valid</Text>)
            setSuccessMsg('')
        }
    }
	const createUser = async () => {
        if(email==""||password==""){
            setErrorMsg(<Text style={st.errorMessage}>Fields are empty!</Text>)
        }else{
            try {
                let response = await auth()
                .createUserWithEmailAndPassword(email, password)
                if (response) {
                    setErrorMsg('')
                    setSuccessMsg(<Text 
                        style={st.successMessage}>
                            User created Successfully!
                        </Text>)
                    setEmail('')
                    setPassword('')
                }
            } catch (e) {
                setErrorMsg(<Text style={st.errorMessage}>Oops! {e.message}</Text>)
                setSuccessMsg('')
            }
        }
	}
    const gotoLogin=()=>{
        navigation.navigate('Login')
    }
    return(
        <View style={styles.r_root}>
            <View style={styles.form}>
                <Text style={styles.rtext}> Registration</Text>
                <Text>{errorMsg}{successMsg}</Text>
                <TextInput
                    onChangeText={setEmail}
                    value={email}
                    autoComplete='email'
                    placeholder="Enter Email Address"
                    placeholderTextColor="#9499b7"
                    style={st.inputs}
                />
                <TextInput
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    value={password}
                    placeholder="Enter Password"
                    placeholderTextColor="#9499b7"
                    style={st.inputs}
                />
                <View style={st.buttons}>
                    <TouchableOpacity
                    onPress={registerUser}
                    style={[st.btnStyles, st.btn_color_save]}>
                        <Text style={{color: '#fff'}}>Save</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                    onPress={clearForm}
                    style={[st.btnStyles, st.btn_color_clear]}>
                        <Text style={{color: '#fff'}}>Clear</Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity onPress={gotoLogin}>
                    <Text style={st.links}>
                        Already Registered? 
                        Login here.
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Register