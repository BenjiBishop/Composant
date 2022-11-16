import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '../components/Button';

export default function CameraScreen({navigation}) {
    
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  const [affichePhoto,setAffichePhoto] = useState(false)

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        alert('Picture saved! 🎉');
        setAffichePhoto(true)
        console.log('saved successfully');
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container} >

    {affichePhoto ?
        <View style={styles.conteImage} >
          <View style={styles.contenant} >
            <Button
                style={[styles.button,{flex:1}]}
                color = 'black'
                title="Re-take"
                onPress={()=> {
                    setAffichePhoto(false) 
                    setImage(null);
                }
                }
                icon="retweet"
              />
            <Image style={styles.styleImage} source={{uri:image}} ></Image>
            </View>
        </View>
        :
        <View style={styles.container}>
        {!image ? (
          <Camera
            style={styles.camera}
            type={type}
            ref={cameraRef}
            flashMode={flash}
          >
            <View
              style={styles.conte}
            >
              <Button
                title=""
                icon="retweet"
                onPress={() => {
                  setType(
                    type === CameraType.back ? CameraType.front : CameraType.back
                  );
                }}
              />
              <Button
                onPress={() =>
                  setFlash(
                    flash === Camera.Constants.FlashMode.off
                      ? Camera.Constants.FlashMode.on
                      : Camera.Constants.FlashMode.off
                  )
                }
                icon="flash"
                color={flash === Camera.Constants.FlashMode.off ? 'gray' : '#fff'}
              />
            </View>
          </Camera>
        ) : (
          <Image source={{ uri: image }} style={styles.camera} />
        )}
  
        <View style={styles.controls}>
          {image ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 50,
              }}
            >
              <Button
                title="Re-take"
                onPress={() => setImage(null)}
                icon="retweet"
              />
              <Button title="Save" onPress={savePicture} icon="check" />
            </View>
          ) : (
            <Button title="Take a picture" onPress={takePicture} icon="camera" />
          )}
        </View>
      </View>
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
    padding: 8,
    bottom : 40
  },
  controls: {
    flex: 0.5,
  },
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#E9730F',
    marginLeft: 10,
  },
  camera: {
    flex: 5,
    borderRadius: 20,
  },
  topControls: {
    flex: 1,
  },
  conte : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
    conteImage : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'white',
        

  },
  styleImage : {
    width: 200,
    height: 200,
    borderRadius : 10,
    paddingTop : 10,
    paddingBottom: 10

    
  },
  contenant : {
    width : 300,
    height : 300,
    borderWidth : 3,
    borderColor : 'black',
    padding : 2,
    alignItems : 'center',
    justifyContent : 'center',
    flexDirection : 'row-reverse',
    backgroundColor : '#E2E8E5'

    



    



  } 
});
