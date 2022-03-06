import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import {useTailwind} from 'tailwind-rn';

export const Best = (): JSX.Element => {
  const tailwind = useTailwind();

  const [click, setClick] = useState<number>(0);

  return (
    <ScrollView style={tailwind('')}>
      <Text style={tailwind('text-blue-800 bg-yellow-700 text-[30px]')}>
        Bye World
      </Text>

      <View style={tailwind('flex-1 justify-center items-center')}>
        <Text>Button clicked {click} times</Text>

        <View>
          <TouchableOpacity
            activeOpacity={1}
            style={tailwind('bg-white border border-black px-2')}
            onPress={(): void => {
              setClick(click + 1);
            }}>
            <Text style={tailwind('text-red-800')}>Click Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Best;
