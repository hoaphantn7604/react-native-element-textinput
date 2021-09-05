import React, { useEffect, useState } from 'react';
import { Image, TextInput, TouchableOpacity, View, Text, Keyboard } from 'react-native';
import { CTextInput } from './type';
import { styles } from './styles';

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
    onFocus,
    onBlur,
    onChangeText = (value: string) => { },
    renderLeftIcon,
    renderRightIcon,
  } = props;

  const [text, setText] = useState<string>('');
  const [isFocus, setIsFocus] = useState<boolean>(false);
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
  }, []);

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

  const onFocusCustom = (e) => {
    setIsFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  }

  const ononBlurCustom = (e) => {
    setIsFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  }

  return (
    <View>
      <View style={[style]}>
        {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
        <View 
        style={[
          styles.textInput, 
          containerStyle, 
          isFocus && focusColor && {borderBottomColor: focusColor, borderTopColor: focusColor, borderLeftColor: focusColor, borderRightColor: focusColor}]
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
          />
          {_renderRightIcon()}
        </View>
      </View>
      {textError && (
        <Text style={[styles.textError, textErrorStyle]}>{textError}</Text>
      )}
    </View>
  );
};

TextInputComponent.defaultProps = defaultProps;

export default TextInputComponent;