import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../constants/Color'
// import * as Font from 'expo-font';

export default function CategoryCard({ title, url }) {
    // const [fontsLoaded] = Font.useFonts({
    //     'cabin_bold': require('../assets/fonts/Cabin-Bold.ttf'),
    //     'cabin_medium': require('../assets/fonts/Cabin-Medium.ttf'),
    //   })

    const images = [
        require('../assets/categoryImages/beyaz_esya.png'),
        require('../assets/categoryImages/tv_ses.png'),
        require('../assets/categoryImages/kucuk_ev_aletleri.png'),
        require('../assets/categoryImages/ankastre.png'),
        require('../assets/categoryImages/isitma_sogutma.png'),
        require('../assets/categoryImages/akilli_urunler.png'),
        require('../assets/categoryImages/mobil_cihazlar.png'),
        require('../assets/categoryImages/diger_urunler.png'),
        require('../assets/categoryImages/televizyonlar.png'),
        require('../assets/categoryImages/blenderlar.png'),
    ];

    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={images[url - 1]}
                style={styles.image} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: -5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
    },
    image: {
        height: 100,
        width: 100,
        resizeMode: 'contain'
    },
    inner_container: {
        width: '100%',
        padding: 10,
        backgroundColor: colors.darkred,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    title: {
        // fontFamily:'cabin_bold',
        fontWeight: 'bold',
        color: colors.white,
    },
})