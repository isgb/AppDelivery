import React from 'react'
import { Button, Image, Text, Touchable, TouchableOpacity, View } from 'react-native'
import useViewModel from './ViewModel';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import { RoundedButton } from '../../../components/RoundedButton';

// interface Props extends StackScreenProps<RootStackParamList> { };

export const ProfileInfoScreen = () => {//{ navigation, route }: Props

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>(); // useNavigation<StackNavigationProp<{route: {} }>>()
    const { removeSession, user } = useViewModel();

    return (
        <View style={styles.container}>

            <View style={styles.container}>
                <Image
                    source={require('../../../../../assets/city.jpg')}
                    style={styles.imageBackground}
                />

                <TouchableOpacity
                    style={ styles.logout }
                    onPress={() => {
                        removeSession();
                        navigation.replace('HomeScreen');
                    }}
                >
                    <Image
                        source={require('../../../../../assets/logout.png')}
                        style={styles.logoutImage}
                    />
                </TouchableOpacity>

                <View style={styles.logoContainer}>

                    <Image
                        // source={require('../../../../../assets/logo.png')}
                        source={{ uri: user?.user?.image }}
                        style={styles.logoImage}
                    />

                </View>

                <View style={styles.form}>
                    <View style={styles.formInfo}>
                        <View>
                            <Image
                                source={require('../../../../../assets/user.png')}
                                style={styles.formImage}
                            />
                        </View>
                        <View style={styles.formContent}>
                            <Text>{user.user?.name} {user.user?.lastname}</Text>
                            <Text style={styles.formTextDescription}>Nombre del usuario</Text>
                        </View>
                    </View>
                    
                    <View style={{...styles.formInfo, marginTop: 25}}>
                        <View>
                            <Image
                                source={require('../../../../../assets/email.png')}
                                style={styles.formImage}
                            />
                        </View>
                        <View style={styles.formContent}>
                            <Text>{user.user?.email}</Text>
                            <Text style={styles.formTextDescription}>Correo electrónico</Text>
                        </View>
                    </View>
                    
                    <View style={{...styles.formInfo, marginTop: 25, marginBottom: 60}}>
                        <View>
                            <Image
                                source={require('../../../../../assets/phone.png')}
                                style={styles.formImage}
                            />
                        </View>
                        <View style={styles.formContent}>
                            <Text>{user.user?.phone}</Text>
                            <Text style={styles.formTextDescription}>Teléfono</Text>
                        </View>
                    </View>

                    <RoundedButton
                        onPress={() => {}}
                        text='ACTIALIZAR INFORMACIÓN'
                    />

                </View>
            </View>
        </View>
    )
}


{/* <Button
                onPress={() =>{
                    removeSession();
                    navigation.navigate('HomeScreen');
                }}
                title='Cerrar Sesión'
            /> */}