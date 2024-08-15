import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../constants/Color'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome from '@expo/vector-icons/FontAwesome'
// import * as Font from 'expo-font'

export default function Input({ placeholder, value, onChangeText, icon, isSecure = false, isNumber = false }) {
    // const [fontsLoaded] = Font.useFonts({
    //     'cabin_bold': require('../assets/fonts/Cabin-Bold.ttf'),
    //     'cabin_medium': require('../assets/fonts/Cabin-Medium.ttf'),
    // })
    const [eye, setEye] = useState(false)
    const [secureTextEntry, setSecureTextEntry] = useState(isSecure)

    return (
        <View style={styles.container}>
            <AntDesign style={styles.icon} name={icon} size={20} color={colors.gray} />
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={colors.gray}
                secureTextEntry={secureTextEntry}
                keyboardType={isNumber ? 'numeric' : undefined}
                maxLength={isNumber ? 11 : undefined}
            />
            {isSecure && <FontAwesome
                style={styles.icon}
                name={eye ? 'eye' : 'eye-slash'}
                size={20}
                color={colors.gray}
                onPress={() => {
                    setEye(!eye)
                    setSecureTextEntry(!secureTextEntry)
                }}
            />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginHorizontal: 20,
        padding: 5,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 5, height: -5 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 15,
    },
    input: {
        flex: 1,
        color: colors.darkgray,
        // fontFamily: 'cabin_medium'
    },
    icon: {
        marginStart: 3,
        marginRight: 6
    }
})