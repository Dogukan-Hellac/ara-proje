import React from "react"
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native"
import Carousel from "../components/Carousel"
import categoriData from '../category.json'
import CategoryCard from "../components/CategoryCard"
import colors from "../constants/Color"
// import * as Font from 'expo-font'
import ToggleSearchInput from "../components/ToggleSearchInput"
import { useSelector } from 'react-redux'
import ToggleMenu from "../components/ToggleMenu"
import AccordionItem from "../components/AccordionItem"

export default function HomeScreen() {
  const searchInput = useSelector(state => state.slice.searchInput)
  const toggleMenu = useSelector(state => state.slice.toggleMenu)
  // const [fontsLoaded] = Font.useFonts({
  //   'cabin_bold': require('../assets/fonts/Cabin-Bold.ttf'),
  // })

  const renderCategoryItem = ({ item }) => {
    return (
      <View style={styles.item_container}>
        <CategoryCard title={item.DisplayName} url={item.ImageUri} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ToggleMenu
        isVisible={!toggleMenu}
        data={categoriData.Result.TreeList}
        keyExtractor={(item) => item.ID}
        renderItem={({ item }) => <AccordionItem item={item} />} />
      <FlatList
        data={categoriData.Result.TreeList}
        keyExtractor={(item) => item.ID}
        renderItem={renderCategoryItem}
        style={styles.list}
        numColumns={2}
        overScrollMode="never"
        ListHeaderComponent={
          <View>
            {!searchInput && <ToggleSearchInput placeholder={'ara...'} />}
            <Carousel />
            <View style={styles.title_container}>
              <Text style={styles.title}>Kategoriler</Text>
            </View>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  item_container: {
    flex: 1,
  },
  title_container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.darkred,
    backgroundColor: colors.white,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    fontSize: 30,
    // fontFamily: 'cabin_bold',
    fontWeight: 'bold',
    color: colors.darkred,
    alignSelf: 'center',
  },
})