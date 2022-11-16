import React from 'react'
import { StyleSheet,TouchableOpacity ,Text} from 'react-native'
import { Entypo } from '@expo/vector-icons'


export default function Button({title,onPress,icon,color}) {
  return (
<TouchableOpacity onPress={onPress} style={styles.button} >
        <Entypo name={icon} size={28} color={color ? color : '#f1f1f1'} />
        <Text style={styles.text} > {title} </Text>

    </TouchableOpacity>


  )
}

const styles = StyleSheet.create({
    button : {
        height : 40,
        flexDirection : 'row',
        alignContent : 'center',
        justifyContent : 'center'
    },
    text : {
        fontWeight : 'bold',
        fontSize : 1,
        color : '#f1f1f1',
        marginLeft : 10 

    }


}) 
