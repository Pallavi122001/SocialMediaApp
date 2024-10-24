import { TextInput, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect,useState } from 'react';
import styles from '../styles/Registerstyle';
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors } from '../../utils/Colors';
import firestore from '@react-native-firebase/firestore';
import { messaging } from '@react-native-firebase/messaging';
import Toast from 'react-native-toast-message';
import { SF } from '../../utils/FontDimension';
const token = '';
const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullname, setFullname] = useState('');

  useEffect(() => {
    getFcmToken();
  }, [])
  getFcmToken = async () => {
    token = await messaging().getToken();
    console.log(token);
  }
  
  const saveData = () => {
    if (!fullname || !email || !password || !confirmPassword) {
      Toast.show({
        type: 'error',
        text1: "Required all fields",
        text2: "Please check one time",
        textStyle: { fontSize: SF(5), color: "red" }
      });
    } else if (password !== confirmPassword) {
      Toast.show({
        type: 'error',
        text1: "Passwords do not match",
        text2: "Please check password and confirm password",
        textStyle: { fontSize: SF(5), color: "red" }
      });
    } else {
      Toast.show({
        type: 'success',
        text1: "Registered Successfully",
        text2: "Now You are able to login with the app",
        textStyle: { fontSize: SF(5), color: "#35e84a" }
      });
  
      firestore()
        .collection('Users')
        .add({
          fullname: fullname,
          email: email,
          password: password,
          confirmPassword: confirmPassword
        })
        .then(() => {
          console.log('User added!');
          setTimeout(() => {
            navigation.goBack();
          }, 2000);
        });
    }
  };

  return (
    <View style={styles.RegisterContanier}>
      <Entypo name={'dots-three-vertical'} color={Colors.light} size={27} style={styles.icon} />
      <View style={styles.topContanier}>
        <Text style={styles.TopText}>Create</Text>
        <Text style={styles.TopText}>Your Account</Text>
      </View>
      <View style={styles.RegisterCard}>
        <View style={styles.inputContanier}>
          <Text style={styles.text}>Full Name</Text>
          <TextInput style={styles.input} value={fullname} onChangeText={(text) => setFullname(text)} />
        </View>
        <View style={styles.inputContanier}>
          <Text style={styles.text}>Gmail</Text>
          <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)} />
        </View>
        <View style={styles.inputContanier}>
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          keyboardType='numeric'
        />
      </View>
      <View style={styles.inputContanier}>
        <Text style={styles.text}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          keyboardType='numeric'
          secureTextEntry={true}
        />
      </View>
        <TouchableOpacity style={styles.button} onPress={()=>{
          saveData()
        }}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register
