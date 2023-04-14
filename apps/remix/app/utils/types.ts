import { ChangeEvent, ChangeEventHandler } from "react"

export interface Loader {
  dataTheme: string,
  isDark: boolean
}

export interface Theme {
  setTheme: (e: ChangeEvent<HTMLSelectElement>) => void,
  toggleDark: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface ThemeContext extends Loader, Theme {
}

