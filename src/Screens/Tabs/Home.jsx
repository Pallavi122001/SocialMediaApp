import { Text, View, Image, PermissionsAndroid, Platform } from 'react-native';
import React, { useState } from 'react';
import styles from '../styles/HomeStyle';
import { launchCamera } from 'react-native-image-picker';
// import Video from 'react-native-video'; // Make sure to import this for video playback

const Home = () => {
  const [media, setMedia] = useState(null); // To store image/video data

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs access to your camera to take photos.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Camera permission granted');
          openCamera();
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      openCamera(); // For iOS, directly open the camera
    }
  };

  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'mixed', // Allows capturing both images and videos
      saveToPhotos: true,
    });

    if (result.assets && result.assets.length > 0) {
      setMedia(result.assets[0]); // Store the media data (image or video)
    }
  };

  return (
    <View style={styles.HomeContainer}>
      <Text style={styles.camera} onPress={requestCameraPermission}>
        Open Camera
      </Text>

      {/* Display the captured or selected media */}
      {media !== null && (
        <>
          {media.type === 'image' ? (
            <Image
              source={{ uri: media.uri }}
              style={{ width: 300, height: 300, marginTop: 20 }}
            />
          ) : media.type === 'video' ? (
            <Video
              source={{ uri: media.uri }} // The uri of the video
              style={{ width: 300, height: 300, marginTop: 20 }} // Adjust size as needed
              resizeMode="contain"
              repeat
              controls // This will add play/pause controls to the video
            />
          ) : null}
        </>
      )}
    </View>
  );
};

export default Home;
