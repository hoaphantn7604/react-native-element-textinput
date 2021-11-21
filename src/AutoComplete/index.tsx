import React, { useMemo, useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import { styles } from './styles';
import { CTextInput } from './type';
import { ScrollView } from 'react-native-virtualized-view';

const ic_close = require('./icon/close.png');

const defaultProps = {
  style: {},
  value: '',
  showIcon: true,
};

const AutoCompleteComponent: CTextInput = props => {
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
    data,
    onFocus,
    onBlur,
    onChangeText = (value: string) => { },
    renderLeftIcon,
    renderRightIcon,
    renderItem
  } = props;

  const [text, setText] = useState<string>('');
  const [values, setValues] = useState<string[] | null>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const onChange = (text: string) => {
    setText(text);
    onChangeText(text);
    onSearch(text);
  };

  const onSearch = (text: string) => {
    if (text.length > 0 && data) {
      const dataSearch = data.filter(e => {
        const item = e?.toLowerCase().replace(' ', '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const key = text.toLowerCase().replace(' ', '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        return item.indexOf(key) >= 0
      });
      setValues(dataSearch);
    } else {
      setValues([]);
    }
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

  const onSubmitEdit = () => {
    if (text.length > 0) {
      onChange(text);
    }
  };

  const _renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <TouchableOpacity key={index} onPress={() => { onChange(item); setValues(null); Keyboard.dismiss() }}>
        {renderItem ? renderItem(item) : <View style={styles.item}>
          <Text style={[styles.textItem, font()]}>{item}</Text>
        </View>}
      </TouchableOpacity>
    );
  };

  const _renderItemSelected = () => {
    if (values && values.length > 0) {
      return (
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.listContainer}>
            <FlatList
              keyboardShouldPersistTaps="handled"
              data={values}
              renderItem={_renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
      )
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
          style={styles.textInput}>
          {renderLeftIcon?.()}
          <View style={{ flex: 1, justifyContent: 'center' }}>
            {label ? <Text style={[styles.label, styleLable]}>{label}</Text> : null}
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

AutoCompleteComponent.defaultProps = defaultProps;

export default AutoCompleteComponent;
