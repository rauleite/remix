import { Cookie, CookieOptions, createCookie } from "@remix-run/cloudflare"

import { isBrowser } from "..";

// These cookie functions is stateless

// Testing enum as if they were separated -- -- -- -- -- -- 
export enum ThemeCookieName {
  PartnerTheme = "partner-theme",
}
enum TestCookieName {
  Test = "test"
}
export type CookieNamesType = ThemeCookieName | TestCookieName
export const CookieNames = { ...ThemeCookieName, ...TestCookieName }
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

type Created = {
  [key in CookieNamesType]: {
    // has: boolean,
    instance: Cookie
  }
}

const created: Created = {
  // [CookieNames.PartnerTheme]: {
  [CookieNames.PartnerTheme]: {
    // has: false,
    instance: null as unknown as Cookie
  },
  [CookieNames.Test]: {
    // has: false,
    instance: null as unknown as Cookie
  }
}

const createCookieName = (key: CookieNamesType): Cookie => {
  let cookie = created[key]

  // if (!cookie.has) {
  if (!cookie.instance) {
    console.log('if !cookie.instance')
    cookie.instance = createCookie(key)
    // cookie.has = true
  }
  return cookie.instance
}

export const getCookie = async (key: CookieNamesType) => {
  if (!isBrowser) {
    return null
  }
  const cookie = createCookieName(key)
  return (await cookie.parse(document.cookie)) || {};
}

export const setCookie = async <T,>(key: CookieNamesType, item: T, cookieOpt?: CookieOptions) => {
  if (!isBrowser) {
    return null
  }
  const cookie = createCookieName(key)
  // const serialized = (await cookie.serialize(item, cookieOpt)) || {};
  const serialized = await cookie.serialize(item, cookieOpt)
  document.cookie = serialized ?? {}
}

// export const useCookie = (key: CookieNames, cookieOpt?: CookieOptions) => {
//   const [state, setState] = useState(getCookieItem(key, cookieOpt));
//   const setCookie = (item: SetStateAction<Promise<{} | null>>) => {
//     setCookieItem(key, item)
//     setState(item)
//   }
//   return [state, setCookie];
// }

// const partnerThemeCookie = createCookie("partner-theme", {
//
// type PartnerThemeCookieType = {
//   dataTheme: string
//   dark: string
// }

//   maxAge: 20 * Age.DayInSec,
// })

// const cookie = createCookie(key, partnerThemeCookie)
// const parsed = await cookie.parse(document.cookie[key])

// await partnerThemeCookie.serialize(
//   document.cookie[key] = item
// )

