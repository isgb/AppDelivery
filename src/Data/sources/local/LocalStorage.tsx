import AsyncStorage from "@react-native-async-storage/async-storage";

export const LocalStorage = async () => {

    const save = async (key:string, value:string){
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log("ERROR EN EL LOCAL STORAGE: " + error);
        }
    }

    const getItem = async (key: string){
        try {
            const item = await AsyncStorage.getItem(key);
            return item;
        } catch (error) {
            console.log("ERROR EN EL LOCAL STORAGE: " + error);
            
        }
    }

    return {
        save,
        getItem
    }
}