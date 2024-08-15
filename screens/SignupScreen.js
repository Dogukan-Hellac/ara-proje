import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useEffect } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import colors from '../constants/Color'
// import * as Font from 'expo-font';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
import CustomBackground from '../components/CustomBackground'
import CustomText from '../components/CustomText'
import CustomTextButton from '../components/CustomTextButton'
import CustomValidationText from '../components/CustomValidationText'
import { Schema } from '../validation/Schema'
import { Formik } from 'formik'

// SplashScreen.preventAutoHideAsync();

export default function SignupScreen({ navigation }) {
  // const [loaded, error] = useFonts({
  //   'cabin_bold': require('../assets/fonts/Cabin-Bold.ttf'),
  //   'cabin_medium': require('../assets/fonts/Cabin-Medium.ttf'),
  //   'cabin_bold_italic': require('../assets/fonts/Cabin-BoldItalic.ttf'),
  // })

  // useEffect(() => {
  //   if (loaded || error) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded, error]);

  // if (!loaded && !error) {
  //   return null;
  // }

  function handleNavigate() {
    navigation.navigate('CreateAccount')
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        overScrollMode='never'
      >
        <View style={styles.container} >
          <View style={styles.top_container}>
            <Text style={styles.title}>Giriş Yap</Text>
          </View>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Schema}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <View style={styles.bottom_container}>
                <CustomText text="Email" />
                <Input
                  onChangeText={handleChange('email')}
                  value={values.email}
                  placeholder={'Lütfen email giriniz...'}
                  icon="mail"
                />
                {errors.email && touched.email ? (
                  <CustomValidationText text={errors.email} />
                ) : null}
                <CustomText text="Şifre" />
                <Input
                  onChangeText={handleChange('password')}
                  value={values.password}
                  placeholder={'Lütfen şifre giriniz...'}
                  icon="lock"
                  isSecure
                />
                {errors.password && touched.password ? (
                  <CustomValidationText text={errors.password} />
                ) : null}
                <Button text="Giriş Yap" onPress={handleSubmit} />
                <View style={styles.inner_container}>
                  <Text style={styles.bottom_text}>Henüz hesabınız yokmu?</Text>
                  <CustomTextButton text=" Hesap oluştur" onPress={handleNavigate} />
                </View>
              </View>
            )}
          </Formik>
          <CustomBackground />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.white
  },
  top_container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 45,
    // fontFamily: 'cabin_bold_italic',
    fontStyle: 'italic',
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.darkgray
  },
  bottom_container: {
    flex: 5,
    justifyContent: 'center',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  inner_container: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20
  },
  bottom_text: {
    // fontFamily: 'cabin_medium'
  },
})