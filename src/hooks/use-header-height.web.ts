import { useHeaderHeight as useRNHeaderHeight } from "@react-navigation/elements";

/**
 * Web fallback when no header context is available.
 */
export function useHeaderHeight(fallbackHeight = 0) {
  try {
    return useRNHeaderHeight();
  } catch {
    return fallbackHeight;
  }
}
