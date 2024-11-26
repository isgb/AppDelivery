import React from 'react';
import { AdminProductListScreen } from '../views/admin/product/list/ProductList';
import { Category } from '../../Domain/entities/Category';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type ProductStackParamList = {
    AdminProductListScreen: {category: Category}
}

const Stack = createNativeStackNavigator<ProductStackParamList>();

export const AdminProductNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen
            name='AdminProductListScreen'
            component={AdminProductListScreen}
        />
    </Stack.Navigator>
  )
}
