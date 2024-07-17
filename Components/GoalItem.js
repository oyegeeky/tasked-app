import { Text,StyleSheet } from "react-native";

function goalItem(){
    i=0;
    return(
        (
            <Text style={styles.goalItems} key={i++}>
              {i}. {goal}
            </Text>
          )
    )
}

export default goalItem;

const styles = StyleSheet.create({});