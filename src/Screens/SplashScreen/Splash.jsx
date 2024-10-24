import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import styles from '../styles/SplashCss';

const Splash = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('CheckAuth');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../Images/App_load.png')}
                style={styles.lottie}
            />
        </View>
    );
};

export default Splash;
