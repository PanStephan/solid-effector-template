export {};

declare global {
  interface Window {
    LiveTex?: {
      hideLabel: () => void
      hideActiveWindow: () => void
    },
    ymaps: {
      ready?: (f: () => void) => void
      Map?: any
      Placemark?: any
    }
  }
}
