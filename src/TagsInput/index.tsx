import React, { useEffect, useMemo, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { CTextInput } from './type';


const defaultProps = {
  style: {},
  value: '',
};

const TagInputComponent: CTextInput = props => {
  const {
    fontFamily,
    style,
    inputStyle,
    labelStyle,
    placeholderStyle = {},
    textErrorStyle,
    label,
    placeholderTextColor = '#000',
    placeholder = '',
    textError,
    focusColor,
    data = [],
    hashtagStyle,
    hashtagTextStyle,
    onFocus,
    onBlur,
    onChangeText = (value: string) => { },
    onChangeValue = (value: string[]) => { }
  } = props;

  const [text, setText] = useState<string>('');
  const [hashtag, setHashtag] = useState<string[] | null>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [reload, setReload] = useState(Math.random());

  const onChange = (text: string) => {
    setText(text);
    onChangeText(text);
  };

  const font = () => {
    if (fontFamily) {
      return {
        fontFamily: fontFamily,
      };
    } else {
      return {};
    }
  };

  const onFocusCustom = (e: any) => {
    setIsFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const onBlurCustom = (e: any) => {
    setIsFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const onRemoveItem = (index: number) => {
    if (hashtag) {
      if (props.editable === undefined || props.editable) {
        hashtag?.splice(index, 1);
        onChangeValue(hashtag);
        setReload(Math.random());
      }
    }
  };

  useEffect(() => {
    if (data) {
      setHashtag(data);
    }
  }, [data]);

  const onSubmitEdit = () => {
    if (hashtag && text.length > 0) {
      hashtag.push(text);
      setText('');
      onChangeValue(hashtag);
      setReload(Math.random());
    }
  };

  const _renderItemSelected = () => {
    return (
      <View key={reload} style={{ flexDirection: 'row', flexWrap: 'wrap', paddingVertical: 8 }}>
        {hashtag && hashtag.map((e, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[styles.selectedItem, hashtagStyle]}
              onPress={() => { onRemoveItem(index) }}
            >
              <Text style={[styles.selectedTextItem, hashtagTextStyle, font()]}>{e}</Text>
              <Text style={[styles.selectedTextItem, hashtagTextStyle, font()]}>ⓧ</Text>
            </TouchableOpacity>
          )
        })}
        <TextInput
          {...props}
          style={[styles.input, inputStyle, font()]}
          value={text}
          placeholder={isFocus || !label ? placeholder : ''}
          placeholderTextColor={placeholderTextColor}
          onChangeText={onChange}
          onFocus={onFocusCustom}
          onBlur={onBlurCustom}
          onSubmitEditing={onSubmitEdit}
        />
      </View>)
  };

  const colorFocus = useMemo(() => {
    if (isFocus && focusColor) {
      return {
        borderBottomColor: focusColor,
        borderTopColor: focusColor,
        borderLeftColor: focusColor,
        borderRightColor: focusColor
      };
    } else {
      return {};
    }
  }, [isFocus]);

  const styleLable: any = useMemo(() => {
    if (isFocus || text.length > 0 && label) {
      return {
        top: 5,
        color: focusColor,
        ...labelStyle
      };
    } else {
      return {
        position: 'absolute',
        ...placeholderStyle
      }
    }
  }, [isFocus, text, placeholderStyle, labelStyle]);

  return (
    <>
      <View style={[styles.container, style, colorFocus]}>
        <View
          style={styles.textInput}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            {label ? <Text style={[styles.label, styleLable]}>{label}</Text> : null}
            <View style={{ flexDirection: 'row' }}>
              {_renderItemSelected()}
            </View>
          </View>
        </View>
      </View>
      {textError ? (
        <Text style={[styles.textError, textErrorStyle]}>{textError}</Text>
      ) : null}
    </>
  );
};

TagInputComponent.defaultProps = defaultProps;

export default TagInputComponent;
