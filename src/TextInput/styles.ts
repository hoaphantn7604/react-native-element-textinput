import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 45,
  },
  input: {
    fontSize: 16,
    flex: 1,
  },
  label: {
    marginBottom: 4,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
  },
  textError: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
  },
  selectedItem: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
    paddingHorizontal: 8,
    marginTop: 12,
    marginRight: 8,
    flexDirection: 'row'
  },
  selectedTextItem: {
    marginLeft: 5,
    color: 'gray',
    fontSize: 16
  },
});
