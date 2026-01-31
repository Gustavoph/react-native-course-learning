import { Image, Text, View } from "react-native";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { styles } from "./styles";
import { Status } from "@/types/status";
import { Filter } from "@/components/filter";

const FILTER_STATUS: Status[] = [Status.PENDING, Status.DONE];

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Adicionar" />
      </View>

      <View style={styles.content}>
        {FILTER_STATUS.map((status) => (
          <Filter key={status} status={status} isActive={false} />
        ))}
      </View>
    </View>
  );
}
