import { TextInput, TextInputProps } from "react-native"

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={{
        height: 54,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "white",
        paddingHorizontal: 16,
        color: 'white',
      }}
      {...rest}
    />
  )
}
