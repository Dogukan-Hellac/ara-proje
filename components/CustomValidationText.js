import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/Color'

export default function CustomValidationText({ text }) {
    return (
        <View style={styles.validationContainer}>
            <View style={styles.validationTextContainer}>
                <Text style={styles.validationText}>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    validationContainer: {
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
      },
      validationTextContainer: {
        marginLeft: 25,
        padding: 3,
        borderRadius: 5,
        backgroundColor: colors.white,
        borderBottomWidth: 2,
        borderBottomColor: colors.darkred
      },
      validationText: {
        fontSize: 13,
        color: colors.darkred
      }
})