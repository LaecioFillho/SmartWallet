import { TextInput, TextInputProps } from "react-native";

function InputBalance({ ...rest }: TextInputProps) {
  return (
      <TextInput
        style={{
          height: 50,
          borderWidth: 1,
          borderRadius: 15,
          borderColor: "white",
          paddingHorizontal: 20,
          fontSize: 18,
          color: 'white',
          textAlign: 'center',
        }}
        {...rest}
      />
  )
}

export default InputBalance;
