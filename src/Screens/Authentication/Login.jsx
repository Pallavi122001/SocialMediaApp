import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../utils/Colors';
import styles from '../styles/loginCss';
const Login = () => {
  return (
   <View>
   <View style={styles.topContanier}>
   <Text style={styles.TopText}>Hello</Text>
   <Text style={styles.TopText}>Sign In</Text>
   </View>
    <View style={styles.loginCard}>
     <View style={styles.inputContanier}>
     <Text style={styles.text}>Gmail</Text>
     <TextInput style={styles.input}/>
     </View>
     <View style={styles.inputContanier}>
     <Text style={styles.text}>Password</Text>
     <TextInput style={styles.input}/>
     </View>
     <Text style={styles.forgot_text}>Forgot Password ? </Text>
     <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Sign In</Text>
    </TouchableOpacity>
    </View>
   </View>
  )
}

export default Login
