import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { FlatList, Text, ToastAndroid, View } from 'react-native'
import { ProductStackParamList } from '../../../../navigator/AdminProductNavigator'
import useViewModel from './ViewModel'
import { AdminProductListItem } from './Item'

interface Props extends StackScreenProps<ProductStackParamList, 'AdminProductListScreen'>{};

export const AdminProductListScreen = ({navigation, route}: Props) => {

  const {category} = route.params
  const {products, getProducts, responseMessage, deleteProduct} = useViewModel();
  console.log('PRODUCT: ' + JSON.stringify(category));

  useEffect(() => {
    if(category.id !== undefined){
      getProducts(category.id!);
    }
  }, [])

  useEffect(() => {
   if(responseMessage !== ''){
    ToastAndroid.show(responseMessage, ToastAndroid.LONG)
   }
  }, [responseMessage])
  
  

  return (
    <View style={{backgroundColor: 'white'}}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id!}
        renderItem={({item}) => <AdminProductListItem product={item} remove={deleteProduct} category={category}/>}
      />
    </View>
  )
}
