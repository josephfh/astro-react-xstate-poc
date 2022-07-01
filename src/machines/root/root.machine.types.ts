import screens from '../screens.json'

export type Screen = keyof typeof screens

export type Navigation = {
  navigateInternal: (screen: Screen, parameters?: Record<string, string>) => void
  navigateExternal: (url: string) => void
}
