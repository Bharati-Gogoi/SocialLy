import { StyleSheet } from "react-native"
export default StyleSheet.create({
    m_root:{
        flex:1,
        backgroundColor: 'whitesmoke'
    },
    sview:{
        backgroundColor: '#fff',
        margin:20,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#efd5f7'
    },
    m_view:{
        borderBottomWidth: 0.3,
        margin: 10
    },
    m_heading:{
        color: '#000',
        fontSize: 20,
        paddingTop: 20,
        paddingLeft: 20
    },
    title:{
        color: '#000', 
        padding: 10,
        fontSize: 20
    },
    m_post:{
        color: '#000', 
        padding: 10,
        paddingBottom: 30,
        borderBottomWidth: 0.3,
        borderColor: '#efd5f7'
    },
    m_time:{
        color: '#000',
        fontSize: 10,
        paddingLeft: 10,
        textAlign: 'right',
        flexShrink: 1,
    }
})