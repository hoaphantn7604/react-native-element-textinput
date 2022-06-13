import type React from 'react';
import type {
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
  textErrorStyle?: StyleProp<TextStyle>;
  tagsStyle?: StyleProp<ViewStyle>;
  tagsTextStyle?: StyleProp<TextStyle>;
  textError?: string;
  label?: string;
  focusColor?: string;
  data?: string[];
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeValue?: (value: string[]) => void;
  renderTagsItem?: (
    item: any,
    onRemove?: () => void
  ) => JSX.Element | null | undefined;
}

export type TagsInputProps = React.FC<IProps>;
