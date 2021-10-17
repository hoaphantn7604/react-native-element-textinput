## react-native-element-textinput
A react-native TextInput component easy to customize for both iOS and Android.

## Getting started
```js
    npm install react-native-element-textinput --save
```
or

```js
    yarn add react-native-element-textinput
```

#### Source code demo
- [react-native-template-components](https://github.com/hoaphantn7604/react-native-template-components) A beautiful template for React Native.

### Demo
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/textinput/demo.gif)
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/textinput/demo.png)

#### TextInput extends TextInputProps
| Props              | Params               | isRequire | default          |
| ------------------ | -------------------- | --------- | ---------------- |
| style              | ViewStyle            | No        |                  |
| label              | String               | No        |                  |
| labelStyle         | TextStyle            | No        |                  |
| inputStyle         | TextStyle            | No        |                  |
| textError          | String               | No        |                  |
| textErrorStyle     | TextStyle            | No        |                  |
| showIcon           | Boolean              | No        |                  |
| iconStyle          | ImageStyle           | No        |                  |
| numeric            | Boolean              | No        |                  |
| focusColor         | String               | No        |                  |
| fontFamily         | String               | No        |                  |
| renderLeftIcon     | () => JSX.Element    | No        |                  |
| renderRightIcon    | () => JSX.Element    | No        |                  |

#### HashtagInput extends TextInputProps
| Props              | Params               | isRequire | default          |
| ------------------ | -------------------- | --------- | ---------------- |
| style              | ViewStyle            | No        |                  |
| label              | String               | No        |                  |
| labelStyle         | TextStyle            | No        |                  |
| inputStyle         | TextStyle            | No        |                  |
| textError          | String               | No        |                  |
| textErrorStyle     | TextStyle            | No        |                  |
| showIcon           | Boolean              | No        |                  |
| iconStyle          | ImageStyle           | No        |                  |
| focusColor         | String               | No        |                  |
| fontFamily         | String               | No        |                  |
| hashtagValue       | String[]             | No        |                  |
| hashtagStyle       | ViewStyle            | No        |                  |
| hashtagTextStyle   | TextStyle            | No        |                  |
| onChangeHashtag    | (string[]) => void   | No        |                  |
| renderLeftIcon     | () => JSX.Element    | No        |                  |
| renderRightIcon    | () => JSX.Element    | No        |                  |

#### AutoComplete extends TextInputProps
| Props              | Params                       | isRequire | default          |
| ------------------ | ---------------------------- | --------- | ---------------- |
| style              | ViewStyle                    | No        |                  |
| data               | String[]                     | No        |                  |
| label              | String                       | No        |                  |
| labelStyle         | TextStyle                    | No        |                  |
| inputStyle         | TextStyle                    | No        |                  |
| textError          | String                       | No        |                  |
| textErrorStyle     | TextStyle                    | No        |                  |
| showIcon           | Boolean                      | No        |                  |
| iconStyle          | ImageStyle                   | No        |                  |
| numeric            | Boolean                      | No        |                  |
| focusColor         | String                       | No        |                  |
| fontFamily         | String                       | No        |                  |
| hashtagValue       | String[]                     | No        |                  |
| renderLeftIcon     | () => JSX.Element            | No        |                  |
| renderRightIcon    | () => JSX.Element            | No        |                  |
| renderItem         | (item:string) => JSX.Element | No        |                  |

## Usage
```javascript
import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {
  TextInput,
  HashtagInput,
  AutoComplete,
} from 'react-native-element-textinput';

const TextInputScreen = _props => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [hashtag, setHashtag] = useState([]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          value={value1}
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          textErrorStyle={styles.textErrorStyle}
          label="Normal"
          placeholder="Placeholder"
          placeholderTextColor="gray"
          onChangeText={text => {
            setValue1(text);
          }}
          focusColor="red"
          textError={value1.length === 0 ? 'Please enter' : ''}
        />

        <TextInput
          value={value2}
          style={styles.input1}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          textErrorStyle={styles.textErrorStyle}
          placeholder="Placeholder"
          placeholderTextColor="gray"
          onChangeText={text => {
            setValue2(text);
          }}
          focusColor="red"
          textError={value2.length === 0 ? 'Please enter' : ''}
        />

        <TextInput
          value={value3}
          style={styles.input2}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          textErrorStyle={styles.textErrorStyle}
          label="Password"
          placeholder="Placeholder"
          placeholderTextColor="gray"
          secureTextEntry
          focusColor="red"
          onChangeText={text => {
            setValue3(text);
          }}
        />

        <HashtagInput
          style={styles.input3}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          textErrorStyle={styles.textErrorStyle}
          data={hashtag}
          onChangeValue={e => {
            setHashtag(e);
          }}
          placeholder="Hashtag..."
          autoCorrect={false}
          placeholderTextColor="gray"
          focusColor="red"
        />

        <AutoComplete
          style={styles.input3}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          textErrorStyle={styles.textErrorStyle}
          data={['hello', 'how are you', 'complete']}
          placeholder="AutoComplete..."
          autoCorrect={false}
          placeholderTextColor="gray"
          focusColor="red"
          onChangeText={e => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  input: {
    marginTop: 20,
    borderBottomWidth: 0.3,
    height: 60,
  },
  input1: {
    marginTop: 20,
    borderWidth: 0.3,
    height: 60,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  input2: {
    marginTop: 20,
    height: 60,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  input3: {
    marginTop: 20,
    height: 60,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  inputStyle: {fontSize: 16},
  labelStyle: {fontSize: 14},
  textErrorStyle: {fontSize: 16},
});
```