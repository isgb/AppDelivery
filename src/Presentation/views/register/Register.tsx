import React from 'react'
import { Button, Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../components/CustomTextInput';
import { Value } from '../../../../../../curso practica/Flipper-win/resources/app.asar.unpacked/defaultPlugins/flipper-plugin-databases/TypeBasedValueRenderer';

export const RegisterScreen = () => {

    const {name,lastname,email,phone,password, confirmPassword, onChange} = useViewModel();

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

                {/* <CustomTextInput
                    placeholder='Confirmar Contraseña'
                    keyboardType='default'
                    image={require('../../../../assets/confirm_password.png')}
                    property='confirmPassword'
                    onChangeText={onChange}
                    value={confirmPassword}
                    secureTextEntry={true}
                /> */}

                <View style={styles.formInput}>
                    <Image
                        style={styles.formIcon}
                        source={require('../../../../assets/confirm_password.png')}
                    />

                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Confirmar Contraseña'
                        keyboardType='default'
                        secureTextEntry={true}
                    />
                </View>


                <View
                    style={{ marginTop: 30 }}
                >
                    <RoundedButton text='CONFIRMAR' onPress={() => ToastAndroid.show('HOLA', ToastAndroid.SHORT)} />
                </View>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%'
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 5
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15
    },
    form: {
        width: '100%',
        height: '75%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
    },
    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    formRegisterText: {
        fontStyle: 'italic',
        color: 'orange',
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
        fontWeight: 'bold',
        marginLeft: 10
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '3%',
        alignItems: 'center'
    },
    logoImage: {
        width: 100,
        height: 100
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10,
        fontWeight: 'bold'
    },
});