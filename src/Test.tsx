import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import {useTailwind} from 'tailwind-rn';

export const Test = ({navigation}: {navigation: any}): JSX.Element => {
  const tailwind = useTailwind();

  return (
    <ScrollView style={tailwind('')}>
      <Text style={tailwind('text-blue-800 bg-yellow-700 text-[30px]')}>
        Hello World
      </Text>

      <View style={tailwind('flex-1 justify-center items-center')}>
        <View>
          <TouchableOpacity
            activeOpacity={1}
            style={tailwind('bg-white border border-black px-2')}
            onPress={(): void => {
              navigation.navigate('Best', {});
            }}>
            <Text style={tailwind('text-red-800')}>Navigate to Best</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Test;
