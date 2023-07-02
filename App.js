import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-purple-500">
      <Text>Open up App.js to start working on your app! Amazing! Ok. </Text>
      <StatusBar style="auto" />
    </View>
  );
}
