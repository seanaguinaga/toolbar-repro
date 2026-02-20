import { router, Stack } from "expo-router";
import { Platform, Pressable, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";

export default function Sheet2() {
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
      <View style={styles.container}>
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
