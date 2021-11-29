import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
    tagsStyle,
    tagsTextStyle,
    onFocus,
    onBlur,
    onChangeText = (value: string) => { },
    onChangeValue = (value: string[]) => { },
    renderTagsItem
  } = props;

  const [text, setText] = useState<string>('');
  const [hashtag, setHashtag] = useState<string[] | null>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);

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
        var array = [...hashtag];
        array.splice(index, 1);
        setHashtag(array);
        onChangeValue(array);
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
    }
  };

  const onBackspace = () => {
    if (text.length === 0 && hashtag) {
      var array = [...hashtag];
      array.pop();
      setHashtag(array);
      onChangeValue(array);
    }
  }

  const _renderTags = useCallback(() => {
    if (hashtag) {
      return hashtag.map((e, index) => {
        if (renderTagsItem) {
          return <TouchableOpacity
            key={index}
          >
            {renderTagsItem(e, () => { onRemoveItem(index) })}
          </TouchableOpacity>
        }
        return (
          <TouchableOpacity
            key={index}
            style={[styles.selectedItem, tagsStyle]}
            onPress={() => { onRemoveItem(index) }}
          >
            <Text style={[styles.selectedTextItem, tagsTextStyle, font()]}>{e}</Text>
            <Text style={[styles.selectedTextItem, tagsTextStyle, font()]}>ⓧ</Text>
          </TouchableOpacity>
        )
      })
    }
    return null;
  }, [hashtag]);

  const _renderItemSelected = () => {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingVertical: 8 }}>
        {_renderTags()}
        <TextInput
          {...props}
          style={[styles.input, inputStyle, font()]}
          value={text}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onChangeText={onChange}
          onFocus={onFocusCustom}
          onBlur={onBlurCustom}
          onSubmitEditing={onSubmitEdit}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              onBackspace();
            }
          }}
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
    if (isFocus || hashtag && hashtag.length > 0 && label) {
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
  }, [isFocus, hashtag, placeholderStyle, labelStyle]);

  return (
    <>
      <View style={[styles.container, style, colorFocus]}>
        <View
          style={styles.textInput}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            {label ? <Text style={[styles.label, styleLable]}>{label}</Text> : null}
            {_renderItemSelected()}
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
