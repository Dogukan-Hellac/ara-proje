import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../constants/Color'
// import * as Font from 'expo-font'

export default function Button({ text, onPress }) {
    // const [fontsLoaded] = Font.useFonts({
    //     'cabin_bold': require('../assets/fonts/Cabin-Bold.ttf'),
    //     'cabin_medium': require('../assets/fonts/Cabin-Medium.ttf'),
    // })

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkgray,
        alignItems: 'center',
        alignSelf: 'center',
        width: '50%',
        padding: 10,
        marginTop: 20,
        borderRadius: 5
    },
    text: {
        color: 'white',
        // fontFamily:'cabin_bold'
        fontWeight: 'bold'
    },
})