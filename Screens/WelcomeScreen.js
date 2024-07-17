import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen =({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../Components/assets/WS_Element.png')}
        style={styles.logo}
      />
      
      <TouchableOpacity style={styles.button} 
      onPress={() => navigation.navigate('HomeScreen')} >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 300,
    height: 350,
    resizeMode: 'contain',
  },
  button: {
    position: 'absolute',
    bottom: 65,
    backgroundColor: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 85,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: '500',
  },
});

export default WelcomeScreen;
