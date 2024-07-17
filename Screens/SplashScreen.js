import { Text, View } from "react-native"
import { styles } from "../Components/styles";
import { useEffect } from "react";

const Splash = ({navigation}) => {


    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('WelcomeScreen')
        },2000)
    },[])


    return(
        <View style={styles.splashBgStyle}>
            <Text style={styles.logoStyle}>
                tasked
            </Text>
            <Text style={styles.logoStyle2}>
            .
            </Text>
        </View>
    )
}

export default Splash ;