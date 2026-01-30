import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style";

interface ButtonProps {
   title: string
}

export function Button({title}: ButtonProps) {
  return (
    <TouchableOpacity style={styles}>
      <Text>
        {title}
      </Text>
    </TouchableOpacity>
  )
}