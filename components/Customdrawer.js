import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'; 



export default function Customdrawer(props) {
    return (
        <View style={{flex:1, }} >
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#8200d6'}} >
            <ImageBackground
            source={require('../assets/ba.jpg')}
            style={{padding:20}}
            >
                <Image 
                source={require('../assets/user.png')}
                style={{height:80,width:80, borderRadius:40, marginBottom:40}}
                 />
                 <Text style={{color:'#fff', fontSize:18, }} >Benjamin Daly</Text>
                 <View style={{flexDirection:'row'}} >
                 <Text style={{color:'#fff',marginRight: 5}} >340 Coins</Text>
                 <FontAwesome5 name="coins" size={14} color='#fff' />
                 </View>
            </ImageBackground>

            <View style={{flex:1, backgroundColor:'#fff', paddingTop:10}} >

            <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>

        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center', borderTopWidth: 1, paddingTop:10 }} >
        <Ionicons name='share-social' size={22} style={{marginRight:10}} />
        <Text style={{fontSize:15}} >Share to your friend </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginBottom:30 }} >
        <Ionicons name='exit-outline' size={22} style={{marginRight:10, marginLeft:-70,marginTop:10}} />
        <Text style={{fontSize:15}} >Sign out </Text>
        </View>

        </View>
    )
}
