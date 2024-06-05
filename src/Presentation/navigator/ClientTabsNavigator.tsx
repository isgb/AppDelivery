import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { ClientOrderListScreen } from '../views/client/order/list/OrderList';
import { ClientCategoryListScreen } from '../views/client/category/list/CategoryList';

const Tab = createBottomTabNavigator();

export const ClientTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ClientCategoryListScreen" component={ClientCategoryListScreen} />
      <Tab.Screen name="ClientOrderListScreen" component={ClientOrderListScreen} />
      <Tab.Screen name="ProfileInfoScreen" component={ProfileInfoScreen} />
    </Tab.Navigator>
  );
}