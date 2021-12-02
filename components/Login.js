import React, {useState, useEffect} from "react"
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import auth from '@react-native-firebase/auth';
import Dashboard from "./Dashboard";
import st from '../styles/FormFields.component'
import styles from '../styles/Login.component'
const Login=({navigation})=>{
    const [user, setUser] = useState();
    const [email, setEmail]=useState('')
    const [pass, setPass]=useState('')
    const [err, setErr]=useState('')

    function onAuthStateChanged(user) {
        setUser(user);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; 
    }, []);

    const gotoRegister=()=>{
        navigation.navigate('Register')
    }

    const clearLoginForm=()=>{
        setEmail('')
        setPass('')
        setErr('')
    }

    const loginUser=()=>{
        if(email=="" || pass==""){
            setErr(<Text style={st.errorMessage}>Fields are empty!</Text>)
        }else{
            auth()
            .signInWithEmailAndPassword(email, pass)
            .then((response)=>{
                setErr(<Text style={st.successMessage}>
                    Login Successful
                </Text>)
            }).catch(e=>{
                setErr(<Text style={st.errorMessage}>
                    {e.message}
                </Text>)
            })
        }
    }

    if (!user) {
        return (
            <View style={styles.login_root}>
                <View style={styles.form}>
                    <Text style={styles.heading}>Login</Text>
                    <Text>{err}</Text>
                    <TextInput
                        onChangeText={setEmail}
                        value={email}
                        autoComplete='email'
                        placeholder="Enter Email Address"
                        placeholderTextColor="#9499b7"
                        style={st.inputs}
                    />
                    <TextInput
                        onChangeText={setPass}
                        secureTextEntry={true}
                        value={pass}
                        placeholder="Enter Password"
                        placeholderTextColor="#9499b7"
                        style={st.inputs}
                    />
                    <View style={st.buttons}>
                        <TouchableOpacity
                        onPress={loginUser}
                        style={[st.btnStyles, st.btn_color_save]}>
                            <Text style={{color: '#fff'}}>Login</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                        onPress={clearLoginForm}
                        style={[st.btnStyles, st.btn_color_clear]}>
                            <Text style={{color: '#fff'}}>Reset</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={gotoRegister}>
                        <Text style={st.links}>
                        New user? Register here.
                        </Text>
                    </TouchableOpacity>
                </View>
          </View>
        );
    }else{
        return (
            <View style={styles.l_root}>
                <Dashboard/>      
            </View>
        )
    }
}
export default Login