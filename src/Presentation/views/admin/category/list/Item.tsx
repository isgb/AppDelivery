import React from 'react'
import { Category } from '../../../../../Domain/entities/Category'
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
    category : Category;
}

export const AdminCategoryListItem = ({category}:Props) => {
  return (
    <View style={styles.container}>
        <Image
            style={ styles.image }
            source={{ uri: category.image}}
        />

        <View style={styles.info}>
            <Text style={styles.title}>{category.name}</Text>
            <Text style={styles.description}>{category.description}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        height:70,
        marginHorizontal: 20,
        marginTop: 10
    },
    image:{
        width:60,
        height:60,
        borderRadius: 15
    },
    info:{
        marginLeft: 15
    },
    title:{
        color: 'black',
        fontSize: 15
    },
    description:{
        color: 'gray',
        fontSize: 12,
        marginTop:3
    }
})
