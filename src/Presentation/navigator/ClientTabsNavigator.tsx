import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { ClientOrderListScreen } from '../views/client/order/list/OrderList';
import { ClientCategoryListScreen } from '../views/client/category/list/CategoryList';
import { AdminCategoryListScreen } from '../views/admin/category/list/CategoryList';
import { Image } from 'react-native';
import { AdminOrderListScreen } from '../views/admin/order/list/OrderList';

const Tab = createBottomTabNavigator();

export const ClientTabsNavigator = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="ClientCategoryListScreen" component={ClientCategoryListScreen} />
      <Tab.Screen name="ClientOrderListScreen" component={ClientOrderListScreen} />
      <Tab.Screen name="ProfileInfoScreen" component={ProfileInfoScreen} /> */}

      <Tab.Screen
        name="ClientCategoryListScreen"
        component={ClientCategoryListScreen}
        options={{
          title: 'Lista de Categorias',
          // headerShown: false,
          tabBarLabel: 'Categorias',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../../assets/list.png')}
              style={{ width: 25, height: 25 }}
            />
          )
        }}
      />
      <Tab.Screen
        name="ClientOrderListScreen"
        component={ClientOrderListScreen}
        options={{
          title: 'Pedidos',
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../../assets/orders.png')}
              style={{ width: 25, height: 25 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="ProfileInfoScreen"
        component={ProfileInfoScreen}
        options={{
          title: 'Perfil',
          headerShown:false,
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../../assets/user_menu.png')}
              style={{ width: 25, height: 25 }}
            />
          )
        }}
      />

    </Tab.Navigator>
  );
}