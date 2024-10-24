import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles/CheckAuthcss';
import LottieView from 'lottie-react-native';
const CheckAuth = ({navigation}) => {
    const handleSignIn = () => {
        navigation.navigate('Login');
    };

    const handleSignUp = () => {
        navigation.navigate('Register');
    };

    return (
      <View style={styles.gradient}>
      <View style={styles.welcomeContainer}>
      <View>
          <LottieView
              source={require('../../Images/social_app.json')}
              autoPlay
              loop
              style={styles.icon}
          />
          <Text style={styles.welcomeText}>Welcome Back</Text>
         <View style={styles.buttonContanier}>
         <TouchableOpacity style={styles.SignButton} onPress={handleSignIn}>
         <Text style={styles.buttonText}>SIGN IN</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
         <Text style={styles.SignUpText}>SIGN UP</Text>
     </TouchableOpacity>
         </View>
      </View>
      <View>
      <Text style={styles.buttonText}>Login with Social Media</Text>
      <View style={styles.imageContanier}>
          <Image source={require('../../Images/google.jpg')} style={styles.image} />
          <Image source={require('../../Images/facebook.jpg')} style={styles.image} />
          <Image source={require('../../Images/twitter.png')} style={styles.image} />
      </View>
  </View>
  </View>
      </View>
    )
}

export default CheckAuth
