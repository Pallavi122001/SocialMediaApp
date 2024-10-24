import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import styles from '../styles/loginCss';
import { Colors } from '../../utils/Colors';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';
import { SF } from '../../utils/FontDimension';
const Login = ({navigation}) => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const Login = () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'All fields are required',
        text2: 'Please enter both email and password',
        textStyle: { fontSize: 16, color: "red" }
      });
      return;
    }
    firestore()
      .collection('Users')
      .where('email', '==', email) // for filter the data 
      .get()
      .then(querySnapshot => {
        if (!querySnapshot.empty) {
          querySnapshot.forEach(documentSnapshot => {
            const userData = documentSnapshot.data();
            console.log('User data: ', userData);
            if (userData.password === password) {
              console.log('Login successful');
              Toast.show({
                type: 'success',
                text1: 'Login successful',
                text2: 'Welcome back!',
                textStyle: { fontSize: SF(10), color: "green" }
              });
              navigation.navigate('Main');
            } else {
              Toast.show({
                type: 'error',
                text1: "Incorrect password",
                text2: "Please check your password",
                textStyle: { fontSize: 16, color: "red" }
              });
              console.log('Incorrect password');
            }
          });
        } else {
          Toast.show({
            type: 'error',
            text1: 'User not found',
            text2: 'No account associated with this email',
            textStyle: { fontSize: 16, color: "red" }
          });
          console.log('User not found');
        }
      })
      .catch(error => {
        console.error('Error logging in: ', error);
        Toast.show({
          type: 'error',
          text1: 'Login failed',
          text2: 'Something went wrong. Please try again.',
          textStyle: { fontSize: 16, color: "red" }
        });
      });
  };
  
  return (
   <View style={styles.loginContanier}>
   <Entypo name={'dots-three-vertical'} color={Colors.light} size={27} style={styles.icon}/>
   <View style={styles.topContanier}>
   <Text style={styles.TopText}>Hello</Text>
   <Text style={styles.TopText}>Sign In</Text>
   </View>
    <View style={styles.loginCard}>
     <View style={styles.inputContanier}>
     <Text style={styles.text}>Gmail</Text>
     <TextInput style={styles.input} value={email} onChangeText={(text)=>setEmail(text)}/>
     </View>
     <View style={styles.inputContanier}>
     <Text style={styles.text}>Password</Text>
     <TextInput style={styles.input} value={password} 
     keyboardType='numeric' 
     onChangeText={(text)=>setPassword(text)}/>
     </View>
     <Text style={styles.forgot_text}>Forgot Password ? </Text>
     <TouchableOpacity style={styles.button} onPress={()=>Login()}>
    <Text style={styles.buttonText}>Sign In</Text>
    </TouchableOpacity>
    </View>
   </View>
  )
}

export default Login
