import React from 'react'
import { Button, Text, View } from 'react-native'
import useViewModel from './ViewModel'; 
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import styles from './Styles';

interface Props extends StackScreenProps<RootStackParamList>{};

export const ProfileInfoScreen = ({navigation, route} : Props) => {

    const { removeSession } = useViewModel();

    return (
        <View style={styles.container}>
            <Button
                onPress={() =>{
                    removeSession();
                    navigation.navigate('HomeScreen');
                }}
                title='Cerrar Sesión'
            />
        </View>
    )
}
