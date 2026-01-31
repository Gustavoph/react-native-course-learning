import { COLORS } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.accent.brand,
    height: 48,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: COLORS.background.elevated,
    fontSize: 14,
    fontWeight: 600,
  },
})