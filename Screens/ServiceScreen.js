import { View,Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import CameraScreen from './CameraScreen'

export default function ServiceScreen({navigation}) {
    const [Photog,setPhotog] = useState(false)

  return (
    <View style={styles.container} >
         <Text style={styles.text} >welcome to your services view</Text> 
    </View>

  )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#88D5F9',
        text : {
            fontWeight : 'bold',
            fontSize : 1,
            color : '#f1f1f1',
            marginLeft : 10 
    
        }
    


    }

})