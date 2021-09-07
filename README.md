## react-native-element-textinput
`react-native-element-textinput` A react-native TextInput component easy to customize for both iOS and Android.
## Getting started
```js
    npm install react-native-element-textinput --save
```
or

```js
    yarn add react-native-element-textinput
```

### Demo
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/textinput/demo.png)

#### Props
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
| hashtagValue       | String[]             | No        |                  |
| hashtagStyle       | ViewStyle            | No        |                  |
| hashtagTextStyle   | TextStyle            | No        |                  |
| onChangeHashtag    | (string[]) => void   | No        |                  |
| renderLeftIcon     | () => JSX.Element    | No        |                  |
| renderRightIcon    | () => JSX.Element    | No        |                  |

## Usage
```javascript
    import React from 'react';
    import {StyleSheet, View, SafeAreaView} from 'react-native';
    import {TextInput} from 'react-native-element-textinput';

    const TextInputScreen = _props => {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <TextInput
                        style={{marginTop: 20}}
                        containerStyle={styles.textinput}
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
                        style={{marginTop: 20}}
                        containerStyle={styles.textinput}
                        label="Normal"
                        placeholder="Placeholder"
                        placeholderTextColor="gray"
                        secureTextEntry
                        onChangeText={text => {
                            console.log(text);
                        }}
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
            borderBottomWidth: 0.5,
            borderBottomColor: 'gray',
        },
    });
```

### Suggested Packages
- [react-native-utils-scale](https://www.npmjs.com/package/react-native-utils-scale) Provide solutions to make your app flexible for different screen sizes, different devices.
- [react-native-element-dropdown](https://www.npmjs.com/package/react-native-element-dropdown) A react-native dropdown component easy to customize for both iOS and Android.
- [react-native-element-image](https://www.npmjs.com/package/react-native-element-image) Automatically calculate width or height based on input Image component for React Native.
- [react-native-element-timer](https://www.npmjs.com/package/react-native-element-timer) React Native Timer Countdown.
- [react-native-vertical-swipe-view](https://www.npmjs.com/package/react-native-vertical-swipe-view) React Native Vertical Swipe View.
- [react-native-checkbox-tree](https://www.npmjs.com/package/react-native-checkbox-tree) A simple and elegant checkbox tree for React Native.
- [react-native-curved-bottom-bar](https://www.npmjs.com/package/react-native-curved-bottom-bar) A high performance, beautiful and fully customizable curved bottom navigation bar for React Native.
- [react-native-webrtc-simple](https://www.npmjs.com/package/react-native-webrtc-simple) A simple and easy to use module that help in making video call for React Native.