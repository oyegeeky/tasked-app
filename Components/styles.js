import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 100,
        paddingHorizontal: 5,
        padding: 20
    },

    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    button: {
        backgroundColor: "black",
        padding: 15,
        borderRadius: 10,
        // Rounded corners
    },

    buttonText: {
        color: "white",
        fontFamily: "Poppins"
    },
  
    textInput:{
        width: '70%',
        borderRadius: 10,
        borderWidth:1,
        borderColor: "black",
        padding: 10,
        // marginRight: 19
    },

    goalsContainer:{
        paddingTop: 10,
        textAlign: "auto"
    },
    goalItems: {
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 6,
        backgroundColor: 'grey',
        padding: 10,
        color: "white"
    },

    splashBgStyle:{
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        },

    logoStyle:{
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold'
    },

    logoStyle2:{
        color: '#00FF66',
        fontSize: 50,
        fontWeight: 'bold'

    },

    placeHolderText:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'grey',
        padding: 30,
        paddingTop: 100
    },

    dummyTextStyle:{
        width: 350,
        height: 450,
        resizeMode: 'contain',
    }

    





});