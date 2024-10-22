import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import styles from '../styles/SplashCss';
import LottieView from 'lottie-react-native';
const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('CheckAuth');
        },3000)
    },[])
  return (
    <View style={styles.contanier}>
    <LottieView
    source={require('../../Images/socialapp.json')}
    autoPlay
    loop
    style={styles.lottie}
  />
    </View>
  )
}

export default Splash;