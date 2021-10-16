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
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/textinput/demo.png)

#### TextInput extends TextInputProps
| Props              | Params               | isRequire | default          |
| ------------------ | -------------------- | --------- | ---------------- |
| containerStyle     | ViewStyle            | No        |                  |
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
| containerStyle     | ViewStyle            | No        |                  |
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
| data               | String[]                     | No        |                  |
| style              | ViewStyle                    | No        |                  |
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
import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { TextInput, HashtagInput, AutoComplete } from 'react-native-element-textinput';

const TextInputScreen = _props => {
  const [hashtag, setHashtag] = useState([]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          label="Normal"
          placeholder="Placeholder"
          placeholderTextColor="gray"
          onChangeText={text => {
            console.log(text);
          }}
          focusColor="red"
          textError="Please enter"
        />
        <TextInput
          style={styles.textinput}
          label="Password"
          placeholder="Placeholder"
          placeholderTextColor="gray"
          secureTextEntry
          onChangeText={text => {
            console.log(text);
          }}
        />

        <HashtagInput
          style={styles.textinput}
          hashtagValue={hashtag}
          onChangeHashtag={value => {
            setHashtag(value);
          }}
          label="Hashtag Input"
          placeholder="Enter hashtag..."
          placeholderTextColor="gray"
        />

        <AutoComplete
          style={styles.textinput}
          data={['Hello', 'How are you', 'Complete']}
          onChangeText={text => {
            console.log(text);
          }}
          label="AutoComplete"
          placeholder="Enter hashtag..."
          placeholderTextColor="gray"
        />
      </View>
    </SafeAreaView>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textinput: {
    marginTop: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
});

```