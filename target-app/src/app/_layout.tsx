import {
	useFonts,
	Inter_400Regular,
	Inter_500Medium,
	Inter_700Bold,
} from "@expo-google-fonts/inter";
import { colors } from "@/theme/colors";
import { Stack } from "expo-router";
import { Loading } from "@/components/loading";

export default function MainLayout() {
	const [isFontLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Inter_700Bold,
	});

	if (!isFontLoaded) {
		return <Loading />;
	}

	return (
		<Stack
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: colors.white,
				},
			}}
		/>
	);
}
