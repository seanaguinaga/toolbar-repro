import { Link, router } from "expo-router";
import { Stack } from "expo-router";
import { Platform, Pressable, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Spacing } from "@/constants/theme";
import { useHeaderHeight } from "@/hooks/use-header-height";

export default function Sheet1() {
  const headerHeight = useHeaderHeight();

  return (
    <>
      <Stack.Screen
        options={{
          title: "First Sheet",
          headerShown: true,
          presentation: Platform.OS === "web" ? "modal" : "formSheet",
          sheetAllowedDetents: "fitToContents",
          sheetGrabberVisible: true,
        }}
      />
      <View
        style={[
          styles.container,
          { paddingTop: headerHeight, marginBottom: -headerHeight },
        ]}
      >
        <View style={styles.content}>
          <Link href="/sheet2" asChild>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.pressed,
              ]}
            >
              <ThemedView type="backgroundElement" style={styles.buttonInner}>
                <ThemedText type="link">Open second sheet</ThemedText>
              </ThemedView>
            </Pressable>
          </Link>
        </View>
        <View style={styles.footer}>
          <Pressable
            style={({ pressed }) => [
              styles.dismissButton,
              pressed && styles.pressed,
            ]}
            onPress={() => router.back()}
          >
            <ThemedText type="link">Dismiss</ThemedText>
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
  button: {
    alignSelf: "flex-start",
  },
  buttonInner: {
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.three,
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
