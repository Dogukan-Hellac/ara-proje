import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import * as Font from 'expo-font'
import colors from '../constants/Color'

export default function CustomText({ text }) {
  // const [fontsLoaded] = Font.useFonts({
  //     'cabin_bold': require('../assets/fonts/Cabin-Bold.ttf'),
  //     'cabin_medium_italic': require('../assets/fonts/Cabin-MediumItalic.ttf'),
  //   })

  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: colors.gray,
    // fontFamily: 'cabin_medium_italic',
    fontStyle: 'italic',
    marginHorizontal: 25
  },
})