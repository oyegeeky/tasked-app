import React from 'react';
import { useRef } from 'react';
import {useState, useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity, Pressable, ScrollView, Image} from 'react-native';
import { styles } from '../Components/styles';

const Home = (navigation) => {
    var i = 1;
    
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);
    const [display, setDisplay] = useState(false);
    const textInputRef = useRef(null);

    
      function goalInputHandler(enteredText) {
          setEnteredGoalText(enteredText);
      }
  
      function addGoalhandler() {
      // console.log(enteredGoalText);
      textInputRef.current.clear();
  
      setCourseGoals(currentCourseGoals => [
        ...currentCourseGoals,
        enteredGoalText,
      ]);  

      setDisplay(true);
      
      
    }
    
    function deleteGoalHandler(index){
      
      setCourseGoals(currentCourseGoals => 
      currentCourseGoals.filter((_,i) => i !==index));
      }; 
    
      
  
    return (
      
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
  
        
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Goal"
            onChangeText={goalInputHandler}
            ref={textInputRef}
          />
  
          <TouchableOpacity 
          style={styles.button} onPress={addGoalhandler}
          >
            <Text style={styles.buttonText}>Add Goal</Text>
          </TouchableOpacity>
        </View>

        
  
      <View>
      {
        display?
        <ScrollView>
        {courseGoals.map((goal,index) => (
          <TouchableOpacity
            key={index} onPress={()=>deleteGoalHandler(index)}>
            <View  style={styles.goalsContainer}>
              <Text style={styles.goalItems} >
              {index+1}. {goal}</Text>
              </View>
          </TouchableOpacity>
        ))}
        </ScrollView> : 
        <Image
        source={require('../Components/assets/dummyTextImg.png')}
        style={styles.dummyTextStyle}
        />

        
      } 
      </View>
       
      </View>
    );
  };

  export default Home;

  