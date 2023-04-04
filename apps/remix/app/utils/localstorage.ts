import { useState } from "react"
import { isBrowser, parseStorage } from "."

type getItemReturn = string | boolean | undefined

const getItem = (key: string): getItemReturn => {
  console.log('isBrowser', isBrowser)
  // undefined if render is on Server
  if (!isBrowser) {
    return
  }
  // null if not has the key
  const item = localStorage.getItem(key)
  // if not has key, localStorage returns null, but this function return 'undefined'
  if (item === null) {
    return
  }
  return parseStorage(item)
}

const setItem = (key: string, item: string) => {
  if (!isBrowser) {
    return
  }
  // // if is theme, than record changes to set the cookie before
  // if (key === Form.DataTheme || key === Form.Dark) {
  //   themeChange({ [key]: item })
  //   console.log('setItem():ThemeCookieName', item)
  // }
  localStorage.setItem(key, item);
}
// stateful
export const useLocalStorage = (key: string): [getItemReturn, Function] => {
  const [state, setState] = useState(getItem(key));
  const setStorage = (item: string) => {
    setItem(key, item)
    setState(item);
  }
  return [state, setStorage];
}

