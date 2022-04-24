import React from 'react';
import {
  ImageStyle,
  NativeSyntheticEvent,
  StyleProp,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface IProps extends TextInputProps {
  fontFamily?: string;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  textErrorStyle?: StyleProp<TextStyle>;
  hashtagStyle?: StyleProp<ViewStyle>;
  hashtagTextStyle?: StyleProp<TextStyle>;
  textError?: string;
  label?: string;
  showIcon?: boolean;
  focusColor?: string;
  data?: string[];
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  renderRightIcon?: () => React.ReactNode | null | undefined;
  renderLeftIcon?: () => React.ReactNode | null | undefined;
  onChangeValue?: (value: string[]) => void
  renderHashtagItem?: (item: any, onRemove?: () => void) => React.ReactNode | null | undefined;
}

export type HashtagProps = React.FC<IProps>;
