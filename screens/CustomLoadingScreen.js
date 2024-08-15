import { StyleSheet, View, Image, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated'
import colors from '../constants/Color'

const { height, width } = Dimensions.get('window');

const animate = (value, toValue, duration, easing) =>
  withTiming(toValue, {
    duration,
    easing,
  });

export default function CustomLoadingScreen() {
  const translateY = useSharedValue(-height);

  const animatedStyleView = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }))

  useEffect(() => {
    translateY.value = animate(translateY.value, 0, 1500, Easing.out(Easing.ease));
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        style={styles.logo}
        source={require('../assets/images/vestel-kirmizi.png')}
      />
      <Animated.View style={[styles.whiteOverlay, animatedStyleView]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkred,
    position: 'relative',
  },
  logo: {
    width: width / 2,
    height: height / 3,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 1,
  },
  whiteOverlay: {
    backgroundColor: 'white',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width
  },
});
