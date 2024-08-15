import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../constants/Color'

export default function CustomTextButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.button}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        color: colors.pink,
        textDecorationLine: 'underline',
        // fontFamily: 'cabin_medium_italic',
        fontStyle: 'italic'
    }
})