import React, {useState} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';

import {useTailwind} from 'tailwind-rn';

export const Test = (): JSX.Element => {
  const tailwind = useTailwind();

  const [click, setClick] = useState<number>(0);

  return (
    <ScrollView style={tailwind('')}>
      <Text style={tailwind('text-blue-800 bg-yellow-700 text-[30px]')}>
        Hello World
      </Text>

      <View>
        <Text>Button clicked {click} times</Text>

        <Button
          onPress={(): void => {
            setClick(click + 1);
          }}
          title="Click Me"
        />
      </View>
    </ScrollView>
  );
};

export default Test;
