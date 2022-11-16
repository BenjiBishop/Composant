import { Text, View, StyleSheet, TouchableWithoutFeedback, Image, Animated, Easing, Modal, Pressable, alert } from 'react-native';
import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { set } from 'react-native-reanimated';


const Star = (props) => {
    return (
        <FontAwesome name={props.filled == true ? 'star' : 'star-o'} color='orange' size={30} style={{ marginHorizontal: 6 }} />

    )
}





export default function Note() {
    const numbStart = 5
    const [note, setNote] = useState('')
    const [toggle, setToggle] = useState(false)

    const start = []
    const [rating, setRating] = useState(1)
    const [animation, setAnimation] = useState(new Animated.Value(1))

    const animeScale = animation.interpolate({
        inputRange: [1, 1.5, 2],
        outputRange: [1, 1.4, 1]
    })
    const animationStyle = {
        transform: [{ scale: animeScale }]
    }

    const animate = () => {
        Animated.timing(animation, {
            toValue: 2,
            duration: 400,
            easing: Easing.ease,
            useNativeDriver: true
        }).start(() => {
            animation.setValue(1)
        })
    }





    for (let x = 1; x <= numbStart; x++) {

        start.push(
            <TouchableWithoutFeedback key={x} onPress={() => { setRating(x); animate() }} >
                <Animated.View style={animationStyle} >
                    <Star filled={x <= rating ? true : false} />
                </Animated.View>
            </TouchableWithoutFeedback>
        )

    }
    // console.log(rating)

    useEffect(() => {

        switch (rating) {
            case 1:
                setNote('Tres Mauvaux')
                break;
            case 2:
                setNote('Mauvaux')
                break;
            case 3:
                setNote('Pas mal')
                break;
            case 4:
                setNote('Bien')
                break;
            case 5:
                setNote('Excellent')
        }


    }, [rating])



    // console.log(note)




    return (
        <View style={styles.container} >
            <Modal
                visible={toggle}
                transparent={true}
                animationType='slide'
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >


                    <View style={[{ flexDirection: 'column' }, styles.modalView]} >
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={{ fontSize: 20, marginBottom: 20, color: 'orange' }} >{note} !!</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }} >
                            {start}
                        </View>
                        <Pressable
                            onPress={() => setToggle(false)}
                        >
                            <Text style={{ color: 'orange', fontWeight: 'bold', textAlign: 'center', marginTop: 20 }} >Valider la note</Text>

                        </Pressable>
                    </View>

                </View>
            </Modal>

            <Pressable
                onPress={() => setToggle(true)}
            >
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }} >Noter le livreur</Text>

            </Pressable>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItem: 'center'

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
    justifyContent: 'center',
    alignItems: 'center'
})