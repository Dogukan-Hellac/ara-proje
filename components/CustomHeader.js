import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CustomHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <Image
                source={require('../assets/images/vestel-kirmizi.png')}
                style={styles.headerImage}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
    },
    headerImage: {
        width: 100,
        height: 50,
        resizeMode: 'contain'
    },
})

export default CustomHeader
