import { COLORS } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.primary,
    alignItems: 'center',
    paddingTop: 62
  },
  logo: {
    height: 34,
    width: 134,
  },
  form: {
    width: '100%',
    paddingHorizontal: 16,
    gap: 7,
    marginTop: 42,
  },
  content: {
    width: '100%',
    marginTop: 24,
    height: '100%',
    backgroundColor: COLORS.background.elevated,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingVertical: 32,
    paddingHorizontal: 24
  }
});
