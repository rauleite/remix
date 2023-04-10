import { LoaderArgs, createCookie, json } from '@remix-run/cloudflare'
import { useBeforeUnload, useLoaderData } from "@remix-run/react";
import { useState } from 'react';
import { Age, isBrowser } from '~/utils';
import { CookieNames, getCookie, setCookie } from '~/utils/cookie';

// Define your custom metrics

// const httpRequestDurationMicroseconds = new prometheus.Histogram({
//   name: 'http_request_duration_ms',
//   help: 'Duration of HTTP requests in ms',
//   labelNames: ['method', 'code'],
//   buckets: [0.1, 5, 15, 50, 100, 500]
// });

// Register the metrics with the Prometheus registry
// prometheus.collectDefaultMetrics();

const getCookies = async (request: Request) => {
  const cookieHeader = request.headers.get("Cookie");
  console.log("cookieHeader", cookieHeader)
  // const cookie = await partnerThemeCookie.parse(cookieHeader);
  const partnerThemeCookie = createCookie(CookieNames.PartnerTheme)
  const cookie = await partnerThemeCookie.parse(cookieHeader);
  return cookie
}

// enum Form {
//   DataTheme = "data-theme",
//   IsDark = "isDark"
// }

type Loader = {
  dataTheme: string,
  isDark: boolean
}

export async function loader({ request }: LoaderArgs) {
  // const end = httpRequestDurationMicroseconds.startTimer();
  console.log("loader()")
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

// const partnerThemeCookie = { maxAge: 20 * Age.DayInSec }

export default function Index() {
  const { dataTheme: dataThemeLoader, isDark: isDarkLoader } = useLoaderData<typeof loader>();
  const [dataTheme, setDataTheme] = useState(dataThemeLoader)
  const [isDark, setIsDark] = useState(isDarkLoader)

  if (isBrowser) {

    console.log('globalthis', globalThis)
    // console.log('p', performance)

  }
  useBeforeUnload(
    async () => {
      console.log('### useBeforeUnload() ###')
      await setCookie(
        CookieNames.PartnerTheme,
        { dataTheme, isDark },
        { maxAge: (1 * Age.YearInSec) }
      )
    })

  // log({ isDark })
  // log({ dataTheme })

  // Log.info(isDark)
  // log({ dataTheme })

  const handleChange = (e) => {
    setDataTheme(e.target.value)
  }
  const handleIsDark = (e) => {
    setIsDark(e.target.checked)
  }

  const darkClass = isDark ? 'dark' : ''
  return (
    <>
      <div className={darkClass} data-theme={dataTheme || 'red'}>
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
                value={dataTheme}
                // defaultValue={dataTheme}
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
