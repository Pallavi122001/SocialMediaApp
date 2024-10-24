import React from 'react';
import RootNavigator from './src/AppNavigator/RootNavigator';
import Toast from 'react-native-toast-message';
import firebase from '@react-native-firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyCcBRRarNbDSsoKZi98LCXqNaPV8XIMBzI",
  authDomain: "socialapp-ed26f.firebaseapp.com",
  projectId: "socialapp-ed26f",
  storageBucket: "socialapp-ed26f.appspot.com",
  messagingSenderId: "818045893354",
  appId: "1:818045893354:android:b1ac1deaf44783e5b4b593",
  databaseURL: "https://socialapp-ed26f-default-rtdb.firebaseio.com"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  return (
    <>
    <RootNavigator />
    <Toast/>
    </>
  );
};

export default App;
