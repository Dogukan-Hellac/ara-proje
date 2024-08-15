import * as Yup from 'yup';

export const Schema = Yup.object().shape({
  email: Yup.string()
    .email('Geçersiz e-posta adresi')
    .required('E-posta zorunludur'),
  password: Yup.string()
    .min(6, 'Çok kısa!')
    .required('Şifre zorunlu'),
  name: Yup.string()
    .required('Ad zorunlu'),
  surname: Yup.string()
    .required('Soyad zorunlu'),
  phone: Yup.string()
    .min(11, 'Geçersiz Telefon')
    .required('Telefon zorunlu')
})