import {  StyleSheet,View,Text, Modal, Pressable,Alert } from 'react-native'
import React, { useState } from 'react'


export default function Home({navigation}) {

    const [toggle,setToggle] = useState(false)

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={toggle}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setToggle(!toggle);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setToggle(!toggle)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setToggle(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor : '#88D5F9'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 15,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#33A5FF",
      },
      buttonClose: {
        backgroundColor: "#FF8633",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
  });
