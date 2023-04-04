// export enum ThemeName {
//   Red = 'red',
//   Blue = 'blue',
//   Purple = 'purple'
// }
// const defaultTheme = ThemeName.Red
//
// export type ThemeContext = {
//   old: { theme: ThemeName, dark: boolean }
//   current: { theme: ThemeName, dark: boolean }
// }
//
// const context: ThemeContext = {
//   old: {
//     theme: defaultTheme,
//     dark: false
//   },
//   current: {
//     theme: defaultTheme,
//     dark: false
//   }
// }
//
// export const hasChangedTheme = () =>
//   context.old.theme !== context.current.theme &&
//   context.old.dark !== context.current.dark
//
// export type ThemeChange = {
//   name?: ThemeName, dark?: boolean
// }
//
// export const themeChange = ({ name, dark }: ThemeChange) => {
//   if (name) {
//     context.old.theme = context.current.theme
//     context.current.theme = name
//   }
//   if (dark) {
//     context.old.dark = context.current.dark
//     context.current.dark = dark
//   }
//   console.log('context', context)
// } 
