import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
} from 'react-native-reanimated'
import colors from '../constants/Color';

const { height, width } = Dimensions.get('window');

const animate = (value, toValue, duration, easing) =>
    withTiming(toValue, {
        duration,
        easing,
    });

export default function ToggleMenu({isVisible, data, keyExtractor, renderItem}) {
    const translateX = useSharedValue(-width)
    let animationValue = isVisible ? 0 : -width

    const animatedStyleView = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }))

    useEffect(() => {
        translateX.value = animate(translateX.value, animationValue, 500, Easing.out(Easing.ease));
    }, [isVisible]);

    return (
        <Animated.View style={[styles.wrapper, animatedStyleView]}>
            <View style={styles.container}>
                <FlatList 
                data={data}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                />
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'transparent',
        position: 'absolute',
        width: width,
        height: height,
        zIndex: 1
    },
    container: {
        backgroundColor: colors.white,
        position: 'absolute',
        width: width * (3 / 4),
        height: height,
        zIndex: 1
    },
})