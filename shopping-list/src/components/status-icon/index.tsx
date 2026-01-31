import { COLORS } from "@/styles/colors";
import { Status } from "@/types/status";
import { CircleCheck, CircleDashed } from "lucide-react-native";

interface StatusIconProps {
  status: Status;
}

export function StatusIcon({ status }: StatusIconProps) {
  return status === Status.DONE ? (
    <CircleCheck size={18} color={COLORS.accent.brand} />
  ) : (
    <CircleDashed size={18} color={COLORS.text.content} />
  );
}
