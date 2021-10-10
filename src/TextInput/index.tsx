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
    containerStyle,
    inputStyle,
    iconStyle,
    labelStyle,
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

  const ononBlurCustom = (e: any) => {
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
  }, [isFocus, focusColor]);

  return (
    <View>
      <View style={[styles.container, style]}>
        {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
        <View
          style={[
            styles.textInput,
            containerStyle,
            colorFocus]
          }>
          {renderLeftIcon?.()}
          <TextInput
            {...props}
            style={[styles.input, inputStyle, font()]}
            secureTextEntry={textEntry}
            value={text}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            onChangeText={onChange}
            onFocus={onFocusCustom}
            onBlur={ononBlurCustom}
            onSubmitEditing={onSubmitEdit}
          />
          {_renderRightIcon()}
        </View>
      </View>
      {_renderItemSelected()}
      {textError && (
        <Text style={[styles.textError, textErrorStyle]}>{textError}</Text>
      )}
    </View>
  );
};

TextInputComponent.defaultProps = defaultProps;

export default TextInputComponent;
