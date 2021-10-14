import {
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
  hashtagStyle?: StyleProp<ViewStyle>;
  hashtagTextStyle?: StyleProp<TextStyle>;
  textError?: string;
  label?: string;
  showIcon?: boolean;
  numeric?: boolean;
  focusColor?: string;
  hashtagValue?: string[];
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  renderRightIcon?: () => JSX.Element | null | undefined;
  renderLeftIcon?: () => JSX.Element | null | undefined;
  onChangeHashtag?: (value: string[]) => void
}

export type CTextInput = React.FC<Props>;
