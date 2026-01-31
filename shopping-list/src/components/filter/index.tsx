import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { StatusIcon } from "../status-icon";
import { Status } from "@/types/status";

type Props = TouchableOpacityProps & {
  status: Status;
  isActive: boolean;
};

export function Filter({ status, isActive, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, { opacity: isActive ? 1 : 0.5 }]}
      activeOpacity={0.8}
      {...rest}
    >
      <StatusIcon status={status} />
      <Text style={styles.title}>
        {status === Status.DONE ? "Comprados" : "Pendentes"}
      </Text>
    </TouchableOpacity>
  );
}
