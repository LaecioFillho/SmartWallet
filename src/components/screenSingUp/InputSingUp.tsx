import { TextInput, TextInputProps } from "react-native";

function InputSingUp({ ...rest }: TextInputProps) {
  return (
      <TextInput
        style={{
          height: 54,
          borderWidth: 1,
          borderRadius: 15,
          borderColor: "#162E25",
          paddingHorizontal: 16,
          fontSize: 18,
          color: '#162E25',
        }}
        {...rest}
      />
  )
}

export default InputSingUp;
