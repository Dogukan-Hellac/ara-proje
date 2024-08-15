import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../constants/Color'

export default function ToggleSearchInput({ placeholder }) {
    return (
        <View style={styles.container}>
            <View style={styles.outerBox}>
                <View style={styles.innerBox}>
                    <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={colors.gray} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
    },
    outerBox: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5, 
        shadowRadius: 60, 
        elevation: 5, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerBox: {
        width: '80%',
        height: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 60,
    },
    input: {
        flex: 1,
    }
})