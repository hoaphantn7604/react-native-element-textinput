## react-native-element-textinput
A react-native TextInput, HashtagInput and AutoComplete component easy to customize for both iOS and Android.

## Features
* TextInput, HashtagInput and AutoComplete in one package
* Easy to use
* Consistent look and feel on iOS and Android
* Customizable font size, colors and animation duration
* Implemented with typescript

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
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/textinput/example.png)
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/textinput/example1.png)
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/textinput/example2.png)
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/textinput/example3.png)
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/textinput/example4.png)
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/textinput/example5.png)

#### TextInput extends TextInputProps
| Props              | Params               | isRequire | default                            |
| ------------------ | -------------------- | --------- | ---------------------------------- |
| style              | ViewStyle            | No        | Styling for container view         |
| label              | String               | No        | Label for textinput                |
| labelStyle         | TextStyle            | No        | Styling for label                  |
| inputStyle         | TextStyle            | No        | Styling for input view             |
| textError          | String               | No        | Text error                         |
| textErrorStyle     | TextStyle            | No        | Styling for text error             |
| showIcon           | Boolean              | No        | Show or hide icon clear text       |
| iconStyle          | ImageStyle           | No        | Styling for icon clear text        |
| numeric            | Boolean              | No        | Input value is numeric             |
| focusColor         | String               | No        | Color when focus to textinput      |
| fontFamily         | String               | No        | Customize font style               |
| renderLeftIcon     | () => JSX.Element    | No        | Customize left icon for textinput  |
| renderRightIcon    | () => JSX.Element    | No        | Customize right icon for textinput |

#### HashtagInput extends TextInputProps
| Props              | Params               | isRequire | default                            |
| ------------------ | -------------------- | --------- | ---------------------------------- |
| style              | ViewStyle            | No        | Styling for container view         |
| label              | String               | No        | Label for textinput                |
| labelStyle         | TextStyle            | No        | Styling for label                  |
| inputStyle         | TextStyle            | No        | Styling for input view             |
| textError          | String               | No        | Text error                         |
| textErrorStyle     | TextStyle            | No        | Styling for text error             |
| showIcon           | Boolean              | No        | Show or hide icon clear text       |
| iconStyle          | ImageStyle           | No        | Styling for icon clear text        |
| numeric            | Boolean              | No        | Input value is numeric             |
| focusColor         | String               | No        | Color when focus to textinput      |
| fontFamily         | String               | No        | Customize font style               |
| renderLeftIcon     | () => JSX.Element    | No        | Customize left icon for textinput  |
| renderRightIcon    | () => JSX.Element    | No        | Customize right icon for textinput |
| hashtagValue       | String[]             | No        | Data is a plain array              |
| hashtagStyle       | ViewStyle            | No        | Styling for hashtash container view|
| renderHashtagItem  | (item, unSelect?: () => void) => JSX.Element     | No        | Takes an item from data and renders it into the list selected       |
| hashtagTextStyle   | TextStyle            | No        | Styling for hashtag text           |
| onChangeHashtag    | (string[]) => void   | No        | Callback that is called when submit value |


#### AutoComplete extends TextInputProps
| Props              | Params                       | isRequire | default                            |
| ------------------ | -----------------------------| --------- | ---------------------------------- |
| data               | String[]                     | No        | Data is a plain array              |
| style              | ViewStyle                    | No        | Styling for container view         |
| label              | String                       | No        | Label for textinput                |
| labelStyle         | TextStyle                    | No        | Styling for label                  |
| inputStyle         | TextStyle                    | No        | Styling for input view             |
| textError          | String                       | No        | Text error                         |
| textErrorStyle     | TextStyle                    | No        | Styling for text error             |
| showIcon           | Boolean                      | No        | Show or hide icon clear text       |
| iconStyle          | ImageStyle                   | No        | Styling for icon clear text        |
| numeric            | Boolean                      | No        | Input value is numeric             |
| focusColor         | String                       | No        | Color when focus to textinput      |
| fontFamily         | String                       | No        | Customize font style               |
| renderLeftIcon     | () => JSX.Element            | No        | Customize left icon for textinput  |
| renderRightIcon    | () => JSX.Element            | No        | Customize right icon for textinput |
| renderItem         | (item:string) => JSX.Element | No        | Takes an item from data and renders it into the list |


### Example
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/textinput/example.png)
```js
  import React, { useState } from 'react';
  import { StyleSheet, View } from 'react-native';
  import { TextInput } from 'react-native-element-textinput';

  const TextInputComponent = props => {
    const [value, setValue] = useState('');

    return (
      <View style={styles.container}>
        <TextInput
          value={value}
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label="Username"
          placeholder="Placeholder"
          placeholderTextColor="gray"
          focusColor="blue"
          onChangeText={text => {
            setValue(text);
          }}
        />
      </View>
    );
  };

  export default TextInputComponent;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: 'white',
    },
    input: {
      marginTop: 20,
      height: 55,
      paddingLeft: 16,
      paddingRight: 10,
      borderRadius: 8,
      borderWidth: 0.5,
      borderColor: 'gray',
    },
    inputStyle: { fontSize: 16 },
    labelStyle: {
      fontSize: 16,
      position: 'absolute',
      top: -10,
      backgroundColor: 'white',
      paddingHorizontal: 4,
      marginLeft: -4,
    },
    placeholderStyle: { fontSize: 16 },
    textErrorStyle: { fontSize: 16 },
  });
```

### Example 1
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/textinput/example1.png)
```js
  import React, { useState } from 'react';
  import { StyleSheet, View } from 'react-native';
  import { TextInput } from 'react-native-element-textinput';

  const TextInputComponent = props => {
    const [value, setValue] = useState('');

    return (
      <View style={styles.container}>
        <TextInput
          value={value}
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label="Username"
          placeholder="Placeholder"
          placeholderTextColor="gray"
          onChangeText={text => {
            setValue(text);
          }}
        />
      </View>
    );
  };

  export default TextInputComponent;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
    },
    input: {
      marginTop: 20,
      height: 55,
      paddingHorizontal: 16,
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
    inputStyle: { fontSize: 16 },
    labelStyle: { fontSize: 14 },
    placeholderStyle: { fontSize: 16 },
    textErrorStyle: { fontSize: 16 },
  });
```

### Example 2
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/textinput/example2.png)
```js
  import React, { useState } from 'react';
  import { StyleSheet, View } from 'react-native';
  import { TextInput } from 'react-native-element-textinput';

  const TextInputComponent = props => {
    const [value, setValue] = useState('');

    return (
      <View style={styles.container}>
        <TextInput
          value={value}
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label="Password"
          placeholder="Placeholder"
          placeholderTextColor="gray"
          secureTextEntry
          onChangeText={text => {
            setValue(text);
          }}
        />
      </View>
    );
  };

  export default TextInputComponent;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
    },
    input: {
      marginTop: 20,
      height: 55,
      paddingHorizontal: 16,
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
    inputStyle: { fontSize: 16 },
    labelStyle: { fontSize: 14 },
    placeholderStyle: { fontSize: 16 },
    textErrorStyle: { fontSize: 16 },
  });
```

### Example 3
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/textinput/example3.png)
```js
  import React, { useState } from 'react';
  import { StyleSheet, View } from 'react-native';
  import { HashtagInput } from 'react-native-element-textinput';

  const TextInputComponent = props => {
    const [value, setValue] = useState<string[]>([]);

    return (
      <View style={styles.container}>
        <HashtagInput
          data={value}
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          hashtagStyle={styles.hashtagStyle}
          hashtagTextStyle={styles.hashtagTextStyle}
          placeholder="Hashtag..."
          placeholderTextColor="gray"
          onChangeValue={value => {
            setValue(value);
          }}
        />
      </View>
    );
  };

  export default TextInputComponent;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
    },
    input: {
      marginTop: 20,
      height: 55,
      paddingHorizontal: 16,
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
    inputStyle: { fontSize: 16 },
    labelStyle: { fontSize: 14 },
    placeholderStyle: { fontSize: 16 },
    textErrorStyle: { fontSize: 16 },
    hashtagStyle: {
      borderWidth: 0,
      borderRadius: 16,
      padding: 8,
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
    hashtagTextStyle: {
      fontSize: 16,
    },
  });
```

### Example 4
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/textinput/example4.png)
```js
  import React, { useState } from 'react';
  import { StyleSheet, View } from 'react-native';
  import { AutoComplete } from 'react-native-element-textinput';

  const TextInputComponent = props => {
    const [value, setValue] = useState('');

    return (
      <View style={styles.container}>
        <AutoComplete
          value={value}
          data={['hello', 'how are you', 'complete']}
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label="AutoComplete"
          placeholder="Placeholder..."
          placeholderTextColor="gray"
          onChangeText={e => {
            setValue(e);
          }}
        />
      </View>
    );
  };

  export default TextInputComponent;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
    },
    input: {
      marginTop: 20,
      height: 55,
      paddingHorizontal: 16,
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
    inputStyle: { fontSize: 16 },
    labelStyle: { fontSize: 14 },
    placeholderStyle: { fontSize: 16 },
    textErrorStyle: { fontSize: 16 },
    hashtagStyle: {
      borderWidth: 0,
      borderRadius: 16,
      padding: 8,
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
    hashtagTextStyle: {
      fontSize: 16,
    },
  });
```