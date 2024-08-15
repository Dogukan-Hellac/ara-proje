import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons';
import CustomHeader from './components/CustomHeader';
import CustomLoadingScreen from './screens/CustomLoadingScreen';

import HomeScreen from './screens/HomeScreen';
import DealsScreen from './screens/DealsScreen';
import CartScreen from './screens/CartScreen';
import SignupScreen from './screens/SignupScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import colors from './constants/Color';
import { useDispatch } from 'react-redux';
import { setToggleInput, setToggleMenu } from './store/reducer';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [categoryMenuActive, setCategoryMenuActive] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000);

    return () => clearTimeout(timer)
  }, []);

  if (isLoading) {
    return <CustomLoadingScreen />
  }

  function StackScreen() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Deals') {
            iconName = focused ? 'pricetag' : 'pricetag-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'MyAccount') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.darkred,
        tabBarInactiveTintColor: colors.gray,
        headerTitleAlign: 'center',
        headerTitle: () => (
          <CustomHeader />
        ),
        headerRight: () => (
          <Ionicons
            name="search"
            size={24}
            color={colors.darkgray}
            style={{ marginRight: 15 }}
            onPress={() => dispatch(setToggleInput())}
          />
        ),
        headerLeft: () => (
          <Ionicons
            name={categoryMenuActive ? 'menu' : 'close'}
            size={24}
            color={colors.darkgray}
            style={{ marginLeft: 15 }}
            onPress={() => (
              setCategoryMenuActive(!categoryMenuActive),
              dispatch(setToggleMenu(!categoryMenuActive))
            )
            }
          />
        )
      })}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Ana Sayfa' }} />
        <Tab.Screen name="Deals" component={DealsScreen} options={{ title: 'Kampanyalar' }} />
        <Tab.Screen name="Cart" component={CartScreen} options={{ title: 'Sepet' }} />
        <Tab.Screen name="MyAccount" component={StackScreen} options={{ title: 'Hesabım' }} />
      </Tab.Navigator>
    </NavigationContainer >
  )
}

