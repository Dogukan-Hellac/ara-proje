import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import colors from '../constants/Color'
// import * as Font from 'expo-font'
import CustomText from '../components/CustomText'
import CustomBackground from '../components/CustomBackground'
import CustomTextButton from '../components/CustomTextButton'
import CustomValidationText from '../components/CustomValidationText'
import { Schema } from '../validation/Schema'
import { Formik } from 'formik'

export default function CreateAccountScreen({ navigation }) {
  // const [fontsLoaded] = Font.useFonts({
  //   'cabin_bold': require('../assets/fonts/Cabin-Bold.ttf'),
  //   'cabin_medium': require('../assets/fonts/Cabin-Medium.ttf'),
  //   'cabin_bold_italic': require('../assets/fonts/Cabin-BoldItalic.ttf'),
  // })

  function handleNavigate() {
    navigation.navigate('Signup')
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        overScrollMode='never'
      >
        <View style={styles.container} >
          <View style={styles.top_container}>
            <Text style={styles.title}>Hesap Oluştur</Text>
          </View>
          <Formik
            initialValues={{ name: '', surname: '', email: '', phone: '', password: '' }}
            validationSchema={Schema}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <View style={styles.bottom_container}>
                <CustomText text="Ad" />
                <Input
                  onChangeText={handleChange('name')}
                  value={values.name}
                  placeholder={'Lütfen adınızı giriniz...'}
                  icon="user"
                />
                {errors.name && touched.name ? (
                  <CustomValidationText text={errors.name} />
                ) : null}
                <CustomText text="Soyad" />
                <Input
                  onChangeText={handleChange('surname')}
                  value={values.surname}
                  placeholder={'Lütfen soyadınızı giriniz...'}
                  icon="user"
                />
                {errors.surname && touched.surname ? (
                  <CustomValidationText text={errors.surname} />
                ) : null}
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
                <CustomText text="Telefon" />
                <Input
                  onChangeText={handleChange('phone')}
                  value={values.phone}
                  placeholder={'Lütfen telefon giriniz...'}
                  icon="phone"
                  isNumber
                />
                {errors.phone && touched.phone ? (
                  <CustomValidationText text={errors.phone} />
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
                <Button text="Kayıt Ol" onPress={handleSubmit} />
                <View style={styles.inner_container}>
                  <Text style={styles.bottom_text}>Zaten hesabınız varmı</Text>
                  <CustomTextButton text=" giriş yap" onPress={handleNavigate} />
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
    fontSize: 40,
    // fontFamily: 'cabin_bold_italic',
    fontWeight: 'bold',
    fontStyle: 'italic',
    alignSelf: 'center',
    color: colors.darkgray,
  },
  bottom_container: {
    flex: 5,
    justifyContent: 'center',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  bottom_text: {
    // fontFamily: 'cabin_medium'
  },
  inner_container: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20
  }
})