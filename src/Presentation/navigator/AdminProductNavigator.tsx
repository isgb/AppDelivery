import React from "react";
import { AdminProductListScreen } from "../views/admin/product/list/ProductList";
import { Category } from "../../Domain/entities/Category";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackScreenProps } from "@react-navigation/stack";
import { CategoryStackParamList } from "./AdminCategoryNavigator";
import { AdminProductCreateScreen } from "../views/admin/product/create/ProductCreate";
import { Image, TouchableOpacity } from "react-native";
import { ProductProvider } from "../context/ProductContext";

export type ProductStackParamList = {
  AdminProductListScreen: { category: Category };
  AdminProductCreateScreen: { category: Category };
};

const Stack = createNativeStackNavigator<ProductStackParamList>();
interface Props
  extends StackScreenProps<CategoryStackParamList, "AdminProductNavigator"> {}

export const AdminProductNavigator = ({ navigation, route }: Props) => {
  return (
    <ProductProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="AdminProductListScreen"
          component={AdminProductListScreen}
          initialParams={{ category: route.params.category }}
          options={({ route, navigation }) => ({
            headerShown: true,
            title: "Productos",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("AdminProductCreateScreen")}
              >
                <Image
                  source={require("../../../assets/add.png")}
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="AdminProductCreateScreen"
          component={AdminProductCreateScreen}
          initialParams={{ category: route.params.category }}
          options={{
            title: "Nuevo producto",
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </ProductProvider>
  );
};

const ProductState = ({ children }: any) => {
  return <ProductProvider>{children}</ProductProvider>;
};
