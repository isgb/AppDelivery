import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import useViewModel from './ViewModel';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';

// interface Props extends StackScreenProps<RootStackParamList> { };

export const ProfileInfoScreen = () => {//{ navigation, route }: Props

    const navigation = useNavigation<StackScreenProps<RootStackParamList>>();
    const { removeSession, user } = useViewModel();

    return (
        <View style={styles.container}>
           
            <View style={styles.container}>
                <Image
                    source={require('../../../../../assets/chef.jpg')}
                    style={styles.imageBackground}
                />

                <View style={styles.logoContainer}>
                    <Image
                        // source={require('../../../../../assets/logo.png')}
                        source={{ uri: user?.user?.image }}
                        style={styles.logoImage}
                    />

                </View>

                <View style={styles.form}>
                    <View>
                        <Image
                            source={require('../../../../../assets/user.png')}
                            style={styles.formImage}
                        />
                    </View>
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