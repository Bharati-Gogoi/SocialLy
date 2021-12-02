import { StyleSheet } from "react-native"
export default StyleSheet.create({
    errorMessage:{ color: 'red' },
    successMessage:{  color: 'green'  },
    links:{ 
        paddingTop: 10, 
        color: '#8e24aa', 
        textAlign: 'center' 
    },
    inputs:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        color: '#000',
        borderColor: 'silver',
        borderRadius: 5,
        padding: 10,
    },
    buttons:{
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    btnStyles:{
        padding:10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius:5
    },
    btn_color_save:{ backgroundColor: '#ab47bc'},
    btn_color_clear:{ backgroundColor: '#794f80'},
})