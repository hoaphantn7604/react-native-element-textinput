import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import Example1 from './textinput/example1';
import Example2 from './textinput/example2';
import Example3 from './textinput/example3';
import Example4 from './textinput/example4';
import Example5 from './textinput/example5';
import Example6 from './textinput/example6';

const TextInputScreen = _props => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
        <Example5 />
        <Example6 />
      </ScrollView>
    </View>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
