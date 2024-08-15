import { StyleSheet, View } from 'react-native'
import React from 'react'
import colors from '../constants/Color'

export default function CustomBackground() {
  return (
      <View style={styles.background}></View> 
  )
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    backgroundColor: colors.darkred,
    width: '100%',
    height: '200%',
    zIndex: -1,
    transform: [{ rotate: '45deg' }]
  }
})