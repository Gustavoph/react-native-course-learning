import { HomeHeader } from '@/components/home-header'
import { View } from 'react-native'

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={{ total: 'R$ 2.680,00' }} />
    </View>
  )
}
