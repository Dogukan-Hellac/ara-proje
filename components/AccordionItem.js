import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Collapsible from 'react-native-collapsible'
import colors from '../constants/Color'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
// import * as Font from 'expo-font'

export default function AccordionItem({ item, isSubList = false }) {
    const [collapsed, setCollapsed] = useState(true);
    // const [fontsLoaded] = Font.useFonts({
    //     'cabin_medium': require('../assets/fonts/Cabin-Medium.ttf'),
    //   })

    return (
        <View style={[(!collapsed && item.SubCategoryList.length > 0) && styles.accordionItem, isSubList && styles.subList]}>
            <TouchableOpacity onPress={() => setCollapsed(!collapsed)}
                style={[(!collapsed && item.SubCategoryList.length > 0) ? styles.collapsedHeader : styles.header]}>
                <Text style={[(!collapsed && item.SubCategoryList.length > 0) ?
                    styles.collapsedHeaderText : styles.headerText, isSubList && styles.subListText]}>{item.DisplayName}</Text>
                {item.SubCategoryList.length > 0 &&
                    (!collapsed ? <FontAwesome6 name="minus" size={isSubList ? 10 : 15} color={colors.white} /> : <FontAwesome6 name="plus" size={isSubList ? 10 : 15} color={colors.darkgray} />)}
            </TouchableOpacity>
            <Collapsible collapsed={collapsed}>
                {item.SubCategoryList.length > 0 && (
                    <FlatList
                        data={item.SubCategoryList}
                        keyExtractor={(subItem) => subItem.ID.toString()}
                        renderItem={({ item: subItem }) => <AccordionItem item={subItem} isSubList={true} />
                        }
                    />
                )}
            </Collapsible>
        </View>
    )
}

const styles = StyleSheet.create({
    accordionItem: {
        borderBottomColor: colors.darkred,
        borderBottomWidth: 2
    },
    subList: {
        marginLeft:10
    },
    subListText: {
        fontSize: 13
    },
    header: {
        backgroundColor: colors.white,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 15,
        color: colors.darkgray,
        // fontFamily: 'cabin-medium'
    },
    collapsedHeader: {
        backgroundColor: colors.darkred,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    collapsedHeaderText: {
        fontSize: 15,
        color: colors.white,
        // fontFamily: 'cabin-medium'
    },
})