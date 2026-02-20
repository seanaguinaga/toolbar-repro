import { router, Stack } from "expo-router";
import { Platform, Pressable, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useHeaderHeight } from "@/hooks/use-header-height";

export default function Sheet2() {
  const headerHeight = useHeaderHeight();

  return (
    <>
      <Stack.Screen
        options={{
          title: "Second Sheet",
          headerShown: true,
          presentation: Platform.OS === "web" ? "modal" : "formSheet",
          sheetAllowedDetents: "fitToContents",
          sheetGrabberVisible: true,
        }}
      />
      <Stack.Screen.Title>Second Sheet</Stack.Screen.Title>
      <Stack.Toolbar placement="left">
        <Stack.Toolbar.Button icon="0.circle" onPress={() => router.back()} />
      </Stack.Toolbar>
      <View
        style={[
          styles.container,
          { paddingTop: headerHeight, marginBottom: -headerHeight },
        ]}
      >
        <View style={styles.content}>
          <ThemedText type="subtitle">Second Sheet</ThemedText>
          <ThemedText themeColor="textSecondary" style={styles.description}>
            Opened from the first sheet. Also fit to contents.
          </ThemedText>
        </View>
        <View style={styles.footer}>
          <Pressable
            style={({ pressed }) => [
              styles.dismissButton,
              pressed && styles.pressed,
            ]}
            onPress={() => router.back()}
          >
            <ThemedText type="link">Back</ThemedText>
          </Pressable>
        </View>
      </View>
      <Stack.Toolbar placement="bottom">
        <Stack.Toolbar.Button icon="0.circle" onPress={() => router.back()} />
        <Stack.Toolbar.Button icon="0.circle" onPress={() => router.back()} />
      </Stack.Toolbar>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
  },
  content: {
    gap: Spacing.three,
    paddingBottom: Spacing.four,
  },
  description: {
    fontSize: 14,
  },
  footer: {
    paddingBottom: Spacing.four,
  },
  dismissButton: {
    alignSelf: "flex-start",
  },
  pressed: {
    opacity: 0.7,
  },
});
