import { TextInput, TextInputProps } from "react-native";

function InputNewEntry({ ...rest }: TextInputProps) {
  return (
      <TextInput
        style={{
          height: 50,
          borderWidth: 1,
          borderRadius: 15,
          borderColor: "white",
          paddingHorizontal: 11,
          fontSize: 18,
          color: 'white',
          marginHorizontal: 20,
          textAlign: 'center',
        }}
        {...rest}
      />
  )
}

export default InputNewEntry;
