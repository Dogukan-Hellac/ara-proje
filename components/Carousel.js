import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'

export default function Carousel() {
    const flatListRef = useRef()
    const isFocused = useIsFocused();
    const [activeIndex, setActiveIndex] = useState(0)

    const { width, height } = Dimensions.get('window')

    useEffect(() => {
        let interval
        if (isFocused) {
            interval = setInterval(() => {
                if (activeIndex === carouselData.length - 1) {
                    flatListRef.current.scrollToIndex({
                        index: 0,
                        animated: true
                    })
                } else {
                    flatListRef.current.scrollToIndex({
                        index: activeIndex + 1,
                        animated: true
                    })
                }
            }, 5000)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [activeIndex, isFocused])

    const getItemLayout = (data, index) => ({
        length: width,
        offset: width * index,
        index: index,
    })

    const carouselData = [
        {
            id: "1",
            image: require("../assets/images/1.jpg")
        },
        {
            id: "2",
            image: require("../assets/images/2.jpg")
        },
        {
            id: "3",
            image: require("../assets/images/3.jpg")
        },
    ]

    const renderItem = ({ item, index }) => {
        return (
            <View>
                <Image
                    source={item.image}
                    style={{ height: height / 7, width: width }}
                />
            </View>
        )
    }

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x

        const index = Math.ceil(scrollPosition / width)
        setActiveIndex(index)
    }

    return (
        <View>
            <FlatList
                data={carouselData}
                ref={flatListRef}
                getItemLayout={getItemLayout}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                onScroll={handleScroll}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({})