/* eslint-disable no-shadow */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Image,
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import type { HashtagProps } from './model';

const ic_close = require('./icon/close.png');

const defaultProps = {
  style: {},
  value: '',
  showIcon: true,
};

const HashtagInputComponent: HashtagProps = (props) => {
  const {
    fontFamily,
    style,
    inputStyle,
    iconStyle,
    labelStyle,
    placeholderStyle = {},
    textErrorStyle,
    label,
    placeholderTextColor = '#000',
    placeholder = '',
    showIcon,
    textError,
    focusColor,
    data = [],
    hashtagStyle,
    hashtagTextStyle,
    onFocus,
    onBlur,
    onChangeText = (_value: string) => {},
    renderLeftIcon,
    renderRightIcon,
    onChangeValue = (_value: string[]) => {},
    renderHashtagItem,
  } = props;

  const [text, setText] = useState<string>('');
  const [hashtag, setHashtag] = useState<string[] | null>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const onChange = (text: string) => {
    setText(text);
    onChangeText(text);
  };

  const _renderRightIcon = () => {
    if (showIcon) {
      if (renderRightIcon) {
        return renderRightIcon();
      }
      if (text.length > 0) {
        return (
          <TouchableOpacity onPress={() => onChange('')}>
            <Image source={ic_close} style={[styles.icon, iconStyle]} />
          </TouchableOpacity>
        );
      } else {
        return null;
      }
    }
    return null;
  };

  const font = useCallback(() => {
    if (fontFamily) {
      return {
        fontFamily: fontFamily,
      };
    } else {
      return {};
    }
  }, [fontFamily]);

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

  const onRemoveItem = useCallback(
    (index: number) => {
      if (hashtag) {
        if (props.editable === undefined || props.editable) {
          var array = [...hashtag];
          array.splice(index, 1);
          setHashtag(array);
          onChangeValue(array);
        }
      }
    },
    [hashtag, onChangeValue, props.editable]
  );

  useEffect(() => {
    if (data) {
      setHashtag(data);
    } else {
      setHashtag(null);
    }
  }, [data]);

  const onSubmitEdit = () => {
    if (hashtag && text.length > 0) {
      hashtag.push(text);
      setText('');
      onChangeValue(hashtag);
    }
  };

  const _renderItemSelected = useCallback(() => {
    if (hashtag && hashtag.length > 0) {
      return (
        <View style={styles.wrapSelectItem}>
          {hashtag.map((e, index) => {
            if (renderHashtagItem) {
              return (
                <TouchableOpacity key={index}>
                  {renderHashtagItem(e, () => {
                    onRemoveItem(index);
                  })}
                </TouchableOpacity>
              );
            }
            return (
              <TouchableOpacity
                key={index}
                style={[styles.selectedItem, hashtagStyle]}
                onPress={() => {
                  onRemoveItem(index);
                }}
              >
                <Text
                  style={[styles.selectedTextItem, hashtagTextStyle, font()]}
                >
                  {e}
                </Text>
                <Text
                  style={[styles.selectedTextItem, hashtagTextStyle, font()]}
                >
                  ⓧ
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
    }
    return null;
  }, [
    font,
    hashtag,
    hashtagStyle,
    hashtagTextStyle,
    onRemoveItem,
    renderHashtagItem,
  ]);

  const colorFocus = useMemo(() => {
    if (isFocus && focusColor) {
      return {
        borderBottomColor: focusColor,
        borderTopColor: focusColor,
        borderLeftColor: focusColor,
        borderRightColor: focusColor,
      };
    } else {
      return {};
    }
  }, [focusColor, isFocus]);

  const styleLable: StyleProp<TextStyle> = useMemo(() => {
    if (isFocus || (text.length > 0 && label)) {
      const style: any = labelStyle;
      return {
        top: 5,
        color: isFocus ? focusColor : null,
        ...style,
      };
    } else {
      const style: any = placeholderStyle;
      return {
        position: 'absolute',
        ...style,
      };
    }
  }, [isFocus, text.length, label, focusColor, labelStyle, placeholderStyle]);

  return (
    <>
      <View style={[styles.container, style, colorFocus]}>
        <View style={styles.textInput}>
          {renderLeftIcon?.()}
          <View style={styles.wrapInput}>
            {label ? (
              <Text style={[styles.label, styleLable]}>{label}</Text>
            ) : null}
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

HashtagInputComponent.defaultProps = defaultProps;

export default HashtagInputComponent;
