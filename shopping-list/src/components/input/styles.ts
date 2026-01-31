import { COLORS } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
    backgroundColor: COLORS.background.elevated,
    paddingHorizontal: 16,
    height: 48,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border.secondary
  }
})