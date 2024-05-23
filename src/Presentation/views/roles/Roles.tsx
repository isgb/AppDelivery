import React from 'react'
import { Dimensions, FlatList, Text, View } from 'react-native'
import useViewModel from './ViewModel';
import { RolesItem } from './Item';
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const RolesScreen = () => {

  const { user } = useViewModel();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <GestureHandlerRootView>
      <View>
        {/* <FlatList
            data={ user?.roles}
            renderItem={({item}) => <RolesItem rol={item} height={420} width={width - 100}/>}
            keyExtractor={ (item) => item.id }
        /> */}
        <Carousel
          loop={true}
          width={width}
          height={width / 2}
          autoPlay={true}
          data={user?.roles!}
          scrollAnimationDuration={5000}
          onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={({item}) => <RolesItem rol={item} height={420} width={width - 100}/>}
        />
      </View>
    </GestureHandlerRootView>
  )
}