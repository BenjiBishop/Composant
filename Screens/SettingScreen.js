import React from 'react'
import { View,Text, StyleSheet, Button } from 'react-native'


export default function SettingScreen({navigation}) {
    return (
        <View style={styles.container} >
             <Text style={styles.text} >welcome to your Setting Screen</Text> 
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