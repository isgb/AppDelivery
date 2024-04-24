import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../components/CustomTextInput';
import { Value } from '../../../../../../curso practica/Flipper-win/resources/app.asar.unpacked/defaultPlugins/flipper-plugin-databases/TypeBasedValueRenderer';
import styles from '../../views/register/Styles'

export const RegisterScreen = () => {

    const { name, lastname, email, phone, password, confirmPassword,errorMessage ,onChange, register, isValidForm } = useViewModel();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/chef.jpg')}
                style={styles.imageBackground}
            />

            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/user_image.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.logoText}>SELECCIONE UNA IMÁGEN</Text>
            </View>

            <View style={styles.form}>

                <ScrollView>

                    <Text style={styles.formText}>REGISTRARSE</Text>

                    <CustomTextInput
                        placeholder='Nombres'
                        keyboardType='default'
                        image={require('../../../../assets/user.png')}
                        property='name'
                        onChangeText={onChange}
                        value={name}
                    />

                    <CustomTextInput
                        placeholder='Apellidos'
                        keyboardType='default'
                        image={require('../../../../assets/my_user.png')}
                        property='lastname'
                        onChangeText={onChange}
                        value={lastname}
                    />

                    <CustomTextInput
                        placeholder='Correo electrónico'
                        keyboardType='email-address'
                        image={require('../../../../assets/email.png')}
                        property='email'
                        onChangeText={onChange}
                        value={email}
                    />

                    <CustomTextInput
                        placeholder='Teléfono'
                        keyboardType='numeric'
                        image={require('../../../../assets/phone.png')}
                        property='phone'
                        onChangeText={onChange}
                        value={phone}
                    />

                    <CustomTextInput
                        placeholder='Contraseña'
                        keyboardType='default'
                        image={require('../../../../assets/password.png')}
                        property='password'
                        onChangeText={onChange}
                        value={password}
                        secureTextEntry={true}
                    />

                    <CustomTextInput
                        placeholder='Confirmar Contraseña'
                        keyboardType='default'
                        image={require('../../../../assets/confirm_password.png')}
                        property='confirmPassword'
                        onChangeText={onChange}
                        value={confirmPassword}
                        secureTextEntry={true}
                    />

                    <View
                        style={{ marginTop: 30 }}
                    >
                        <RoundedButton text='CONFIRMAR' onPress={() => {
                            if(isValidForm()){
                                register();
                            }else{
                                ToastAndroid.show(errorMessage, ToastAndroid.LONG)
                            }
                        }} />
                    </View>

                </ScrollView>

            </View>

        </View>
    )
}

