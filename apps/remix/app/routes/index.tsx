import { useState, useEffect, useRef, useCallback } from "react";
import { ActionArgs, LoaderArgs, createCookie, json, redirect } from '@remix-run/cloudflare'
import { useBeforeUnload, useLoaderData } from "@remix-run/react";

// -- -- -- -- -- -- -- -- -- -- 
//
// const useUnload = fn => {
//   const cb = useRef(fn); // init with fn, so that type checkers won't assume that current might be undefined
//
//   useEffect(() => {
//     cb.current = fn;
//   }, [fn]);
//
//   useEffect(() => {
//     const onUnload = (...args) => cb.current?.(...args);
//
//     window.addEventListener("beforeunload", onUnload);
//
//     return () => window.removeEventListener("beforeunload", onUnload);
//   }, []);
// };

// -- -- -- -- -- -- -- -- -- -- 

const year = 365 * 24 * 60 * 60
const userPrefs = createCookie("user-prefs", {
  maxAge: 20 * year,
});

const getCookie = async (request) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie =
    (await userPrefs.parse(cookieHeader)) || {};
  return cookie
}

export async function loader({ request }: LoaderArgs) {
  // const cookieHeader = request.headers.get("Cookie");
  // const cookie =
  //   (await userPrefs.parse(cookieHeader)) || {};
  const cookie = getCookie(request)
  return json({ dataTheme: cookie.dataTheme, dark: cookie.dark });
}

export async function action({ request }: ActionArgs) {
  // const cookieHeader = request.headers.get("Cookie");
  // const cookie =
  //   (await userPrefs.parse(cookieHeader)) || {};
  const cookie = getCookie(request)
  const bodyParams = await request.formData();

  console.log('bodyParams.get("dark")', bodyParams.get("dark"))
  console.log('bodyParams.get("data-theme")', bodyParams.get("data-theme"))
  console.log('bodyParams', bodyParams)
  // if (bodyParams.get("bannerVisibility") === "hidden") {
  //   cookie.showBanner = false;
  // }

  return redirect("/", {
    headers: {
      "Set-Cookie": await userPrefs.serialize(cookie),
    },
  });
}

// -- -- -- -- -- -- -- -- -- -- 

const isBrowser = typeof document !== 'undefined' || typeof window !== 'undefined';

const parseBoolean = (value: string): string | boolean => {
  if (value === 'true') {
    return true
  }
  if (value === 'false') {
    return false
  }
  return value
}

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
  return parseBoolean(item)
}

const setItem = (key: string, item: string) => {
  if (!isBrowser) {
    return
  }
  localStorage.setItem(key, item);
}

const useLocalStorage = (key: string): [getItemReturn, Function] => {
  const [state, setState] = useState(getItem(key));
  const setStorage = (item: string) => {
    setItem(key, item)
    setState(item);
  }
  return [state, setStorage];
}

// -- -- -- -- -- -- -- -- -- -- 
export default function Index() {
  // Post
  const { dark, dataTheme } = useLoaderData<typeof loader>();

  const [selectedItem, setSelectedItem] = useLocalStorage("data-theme")
  const [isDark, setDark] = useLocalStorage("dark")

  // useUnload(e => {
  //   e.preventDefault();
  //   e.returnValue = '';
  //   console.log('exit')
  // });

  // save it off before the automatic page reload
  useBeforeUnload(
    // useCallback(async () => {
    (async () => {
      console.log('useBeforeUnload():useCallback()')
      // localStorage.stuff = state;

      // redirect("/", {
      redirect(location.pathname, {
        headers: {
          "Set-Cookie": await userPrefs.serialize({ dataTheme: selectedItem, dark: isDark }),
        },
      });

      // const response = await fetch(location.pathname, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   // body: JSON.stringify({ dados: 'aqui' }),
      // });
    }/*, [state]*/)()
  );

  // read it in when they return
  useEffect(() => {
    console.log('useEffect()')
    // if (state === null && localStorage.stuff != null) {
    //   setState(localStorage.stuff);
    // }
  }, /*[state]*/);

  console.log('dark', dark)
  console.log('dataTheme', dataTheme)
  console.log('selectedItem', selectedItem)
  console.log('isDark', isDark)

  const handleChange = (e) => {
    setSelectedItem(e.target.value)
  }
  const handleIsDark = (e) => {
    let isChecked = e.target.checked
    setDark(isChecked)
  }
  enum Theme {
    Dark = 'dark'
  }
  const darkClass = isDark ? Theme.Dark : ''

  return (
    <>
      <div className={darkClass} data-theme={selectedItem || 'red'}>
        <div className="wrapper mt-16 px-8">
          <div className="themed-background bg-skin-fill mx-auto max-w-[50rem] rounded-xl  shadow-md">
            <div className="px-4 pt-4">
              <label
                htmlFor="themes"
                className="themed-label text-skin-base mb-2 block text-center text-sm font-medium "
              >
                CHOOSE A THEME
              </label>
              <select
                id="themes"
                className="block w-full cursor-pointer rounded-lg border p-2.5 text-sm outline-transparent"
                value={selectedItem}
                // defaultValue={selectedItem}
                onChange={handleChange}
              >
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="purple">Purple</option>
              </select>
              <br />
              <label
                htmlFor="dark"
                className="themed-label text-skin-base mb-2 block text-center text-sm font-medium "
              >
                DARK
              </label>
              <input
                id="dark"
                type="checkbox"
                className="block w-full cursor-pointer rounded-lg border p-2.5 text-sm outline-transparent"
                checked={isDark}
                onChange={handleIsDark}
              />
            </div>
            <div className="relative mx-auto max-w-4xl overflow-hidden sm:rounded-2xl">
              <div className="relative mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
                <h2 className="themed-header text-skin-base text-3xl font-extrabold sm:text-4xl">
                  <span className="block">Consistency matters.</span>
                  <span className="block">Practice makes perfect.</span>
                </h2>
                <p className="themed-subheader text-skin-muted mt-4 text-lg leading-6">
                  Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                  Malesuada adipiscing sagittis vel nulla nec.
                </p>
                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  <a
                    href="#"
                    className="themed-button bg-skin-button text-skin-inverted flex items-center justify-center rounded-md border border-transparent px-4 py-3 text-base font-medium  shadow-sm sm:px-8"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
