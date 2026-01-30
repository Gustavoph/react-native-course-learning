import { TextInput, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {}

export function Input({ ...rest }: InputProps) {
  return <TextInput {...rest} />;
}
