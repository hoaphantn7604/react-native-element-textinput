import type React from 'react';
import type {
  ImageStyle,
  NativeSyntheticEvent,
  StyleProp,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface Props extends TextInputProps {
  fontFamily?: string;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  textErrorStyle?: StyleProp<TextStyle>;
  textError?: string;
  label?: string;
  showIcon?: boolean;
  numeric?: boolean;
  focusColor?: string;
  selectionColor?: string;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  renderRightIcon?: () => JSX.Element | null | undefined;
  renderLeftIcon?: () => JSX.Element | null | undefined;
}

export type InputProps = React.FC<Props>;
