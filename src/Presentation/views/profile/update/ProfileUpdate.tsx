import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { RoundedButton } from '../../../../Presentation/components/RoundedButton';
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../../components/CustomTextInput';
import styles from '../../../views/profile/update/Styles'
import { ModalPickImage } from '../../../components/ModalPickImage';
import { StackScreenProps } from '@react-navigation/stack';
import { MyColors } from '../../../theme/AppTheme';
import { RootStackParamList } from '../../../navigator/MainStackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'ProfileUpdateScreen'> { };

export const ProfileUpdateScreen = ({ navigation, route }: Props) => {

    const { user } = route.params;
    const { name, lastname, image, phone, onChangeInfoUpdate , errorMessage, successMessage, onChange, pickImage, takePhoto, loading , update} = useViewModel(user);
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        if (errorMessage !== "") {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        }
    }, [errorMessage])

    useEffect(() => {
        if (successMessage !== "") {
            ToastAndroid.show(successMessage, ToastAndroid.LONG)
        }
    }, [successMessage])
     
    return (
        <View style={styles.container}>

            <Image
                source={require('../../../../../assets/city.jpg')}
                style={styles.imageBackground}
            />

            <View style={styles.logoContainer}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    {
                        image == ''
                            ? <Image
                                source={{ uri: user?.image }}
                                style={styles.logoImage}
                            />
                            : <Image
                                source={{ uri: image }}
                                style={styles.logoImage}
                            />
                    }

                </TouchableOpacity>

                <Text style={styles.logoText}>SELECCIONE UNA IMÁGEN</Text>
            </View>

            <View style={styles.form}>

                <ScrollView>

                    <Text style={styles.formText}>ACTUALIZAR</Text>

                    <CustomTextInput
                        placeholder='Nombres'
                        keyboardType='default'
                        image={require('../../../../../assets/user.png')}
                        property='name'
                        onChangeText={onChange}
                        value={name || ''}
                    />

                    <CustomTextInput
                        placeholder='Apellidos'
                        keyboardType='default'
                        image={require('../../../../../assets/my_user.png')}
                        property='lastname'
                        onChangeText={onChange}
                        value={lastname || ''}
                    />

                    <CustomTextInput
                        placeholder='Teléfono'
                        keyboardType='numeric'
                        image={require('../../../../../assets/phone.png')}
                        property='phone'
                        onChangeText={onChange}
                        value={phone || ''}
                    />

                    <View
                        style={{ marginTop: 30 }}
                    >
                        <RoundedButton text='CONFIRMAR' onPress={() => update()} />
                    </View>

                </ScrollView>

            </View>

            <ModalPickImage
                openGallery={pickImage}
                openCamera={takePhoto}
                modalUseState={modalVisible}
                setModalUseState={setModalVisible}
            />

            {
                loading &&
                <ActivityIndicator 
                    style={styles.loading} 
                    size="large" 
                    color={MyColors.primary} 
                />
            }

        </View>
    )
}

