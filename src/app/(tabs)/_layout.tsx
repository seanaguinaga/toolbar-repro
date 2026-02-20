import AppTabs from "@/components/app-tabs";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function TabsLayout() {
  if (Platform.OS !== "web") {
    return <AppTabs />;
  }

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="explore" options={{ title: "Explore" }} />
    </Tabs>
  );
}
