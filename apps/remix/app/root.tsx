import { LinkDescriptor, LinksFunction, LoaderArgs, json, V2_MetaFunction } from "@remix-run/cloudflare";
import { useBeforeUnload, useLoaderData } from "@remix-run/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";
import { CookieNames, getCookies, setCookie } from "./utils/cookie";
import { Loader, ThemeContext } from "./utils/types";
import { Age } from "./utils";
import { ChangeEvent, useState } from "react";

/**
 * Returns an array of link objects to be included in the HTML head element.
 * @returns An array of link objects.
 */
export const links: LinksFunction = (): LinkDescriptor[] => [
  { rel: "stylesheet", href: stylesheet },
  //   { rel: "stylesheet", href: reset },
  //   { rel: "stylesheet", href: uno },
];

/**
 * Returns an object of meta tag values to be included in the HTML head element.
 * @returns An object of meta tag values.
 */
export const meta: V2_MetaFunction = () => [
  { charset: "utf-8" },
  { title: "Raul" },
  { viewport: "width=device-width,initial-scale=1" }
]

/**
 * Handles the loading of data for this page.
 * @param {LoaderArgs} param - An object containing information about the request.
 */
export async function loader({ request }: LoaderArgs) {
  console.log("index::loader()")
  const cookie = await getCookies(request)
  console.log("cookie", cookie)
  const theme: Loader = { dataTheme: cookie?.dataTheme, isDark: cookie?.isDark }
  const jsonTest = json(theme)
  // console.log("jsonTest", jsonTest)
  // end({
  //   code: '200',
  //   method: request.method,
  //   // route: request.r
  // });
  return jsonTest;
}

/**
 * The default export for the index page.
 */
export default function Root() {
  const { dataTheme: dataThemeLoader, isDark: isDarkLoader } = useLoaderData<typeof loader>();
  const [dataTheme, setDataTheme] = useState<string>(dataThemeLoader)
  const [isDark, toggleDarkCheck] = useState<boolean>(isDarkLoader)

  /**
  * Executes before the page is left.
  * Save the theme-related on cookie
  */
  useBeforeUnload(
    async () => {
      await setCookie(
        CookieNames.PartnerTheme,
        { dataTheme, isDark },
        { maxAge: (1 * Age.YearInSec) }
      )
    }
  )

  /**
   * Sets the data-theme value based on the selected option in the HTMLSelectElement.
   * @param e - The ChangeEvent that contains the selected option.
   */
  const setTheme = (e: ChangeEvent<HTMLSelectElement>) => {
    setDataTheme(e.target.value)
  }

  /**
    * Toggles the dark mode based on the checked state of the HTMLInputElement.
    * @param e - The ChangeEvent that contains the checked state.
    */
  const toggleDark = (e: ChangeEvent<HTMLInputElement>) => {
    toggleDarkCheck(e.target.checked)
  }

  /**
   * A context object that contains theme-related properties and methods.
   *
   * @typedef {Object} ThemeContext
   * @property {string} dataTheme - The current theme name.
   * @property {boolean} isDark - Indicates whether the current theme is dark.
   * @property {Function} setTheme - A function that sets the current theme.
   * @property {Function} toggleDark - A function that toggles the dark mode.
   */
  const theme: ThemeContext = {
    dataTheme,
    isDark,
    setTheme,
    toggleDark,
  }

  /**
   * The CSS class for the dark mode if enabled.
   */
  const darkClass: string = isDark ? 'dark' : ''
  const dataThemeDefault = 'red'

  return (
    <html className={darkClass} data-theme={dataTheme || dataThemeDefault}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet context={theme} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html >
  );
}
