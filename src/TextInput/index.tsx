import React, { useEffect, useMemo, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { CTextInput } from './type';

const ic_eye = require('./icon/eye.png');
const ic_uneye = require('./icon/uneye.png');
const ic_close = require('./icon/close.png');

const defaultProps = {
  style: {},
  value: '',
  showIcon: true,
  currency: false,
  numeric: false,
};

const TextInputComponent: CTextInput = props => {
  const {
    fontFamily,
    style,
    inputStyle,
    iconStyle,
    labelStyle,
    placeholderStyle = {},
    textErrorStyle,
    value,
    label,
    secureTextEntry,
    placeholderTextColor = '#000',
    placeholder = '',
    showIcon,
    numeric,
    textError,
    focusColor,
    hashtagValue,
    hashtagStyle,
    hashtagTextStyle,
    onFocus,
    onBlur,
    onChangeText = (value: string) => { },
    renderLeftIcon,
    renderRightIcon,
    onChangeHashtag = (value: string[]) => { }
  } = props;

  const [text, setText] = useState<string>('');
  const [hashtag, setHashtag] = useState<string[] | null>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [reload, setReload] = useState(Math.random());
  const [textEntry, setTextEntry] = useState<boolean>(
    secureTextEntry ? true : false,
  );

  useEffect(() => {
    if (value) {
      if (numeric) {
        setText(formatCurrency(value));
      } else {
        setText(value);
      }
    }
  }, [value]);

  const formatCurrency = (num: string) => {
    const values = num.toString().replace(/\D/g, '');
    return values.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const reConvertCurrency = (x: string) => {
    let s;
    s = x.split('.');
    s = s.join('');
    return s;
  };

  const onChange = (text: string) => {
    if (numeric) {
      setText(formatCurrency(text));
      onChangeText(reConvertCurrency(text));
    } else {
      setText(text);
      onChangeText(text);
    }
  };

  const onChangeTextEntry = () => {
    setTextEntry(!textEntry);
  };

  const _renderRightIcon = () => {
    if (showIcon) {
      if (renderRightIcon) {
        return renderRightIcon();
      }
      if (text.length > 0) {
        if (secureTextEntry) {
          return (
            <TouchableOpacity onPress={onChangeTextEntry}>
              <Image
                source={textEntry ? ic_eye : ic_uneye}
                style={[styles.icon, iconStyle]}
              />
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity onPress={() => onChange('')}>
              <Image source={ic_close} style={[styles.icon, iconStyle]} />
            </TouchableOpacity>
          );
        }
      } else {
        return null;
      }

    }
    return null;
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
        onChangeHashtag(hashtag);
        setReload(Math.random());
      }
    }
  };

  useEffect(() => {
    if (hashtagValue) {
      setHashtag(hashtagValue);
    }
  }, [hashtagValue]);

  const onSubmitEdit = () => {
    if (hashtag && text.length > 0) {
      hashtag.push(text);
      setText('');
      onChangeHashtag(hashtag);
      setReload(Math.random());
    }
  };

  const _renderItemSelected = () => {
    if (hashtag && hashtag.length > 0) {
      return (
        <View key={reload} style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {hashtag.map((e, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[styles.selectedItem, hashtagStyle]}
                onPress={() => { onRemoveItem(index) }}
              >
                <Text style={[{ fontSize: 12, color: 'gray' }, font()]}>{e}</Text>
                <Text style={[styles.selectedTextItem, hashtagTextStyle]}>ⓧ</Text>
              </TouchableOpacity>
            )
          })}
        </View>)
    }
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
        color: isFocus ? focusColor: null,
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
          style={[
            styles.textInput,
          ]
          }>
          {renderLeftIcon?.()}
          <View style={{ flex: 1, justifyContent: 'center' }}>
            {label ? <Text style={[styles.label, styleLable]}>{label}</Text> : null}
            <TextInput
              {...props}
              style={[styles.input, inputStyle, font()]}
              secureTextEntry={textEntry}
              value={text}
              placeholder={isFocus || !label ? placeholder : ''}
              placeholderTextColor={placeholderTextColor}
              onChangeText={onChange}
              onFocus={onFocusCustom}
              onBlur={onBlurCustom}
              onSubmitEditing={onSubmitEdit}
            />
          </View>
          {_renderRightIcon()}
        </View>
      </View>
      {_renderItemSelected()}
      {textError ? (
        <Text style={[styles.textError, textErrorStyle]}>{textError}</Text>
      ) : null}
    </>
  );
};

TextInputComponent.defaultProps = defaultProps;

export default TextInputComponent;
