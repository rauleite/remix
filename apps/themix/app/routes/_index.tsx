import { useOutletContext } from "@remix-run/react";
import type { ThemeContext } from "~/utils/types";

// <div className="themed-background bg-token-primary-50 mx-auto max-w-[50rem] rounded-xl  shadow-md">
// <div className="themed-background bg-skin-fill dark:bg-skin-fillb mx-auto max-w-[50rem] rounded-xl  shadow-md">
// bg-[#ff0000]/100

// <div className="">
// <div className="bg-surface bg-zustom-surface dark:bg-dark-surface dark:bg-zustom-dark-surface-800">
export default function Card() {
  const { dataTheme, setTheme, isDark, toggleDark } =
    useOutletContext<ThemeContext>();
  return (
    <div className="wrapper mt-16 px-8">
      <div className="bg-surface dark:bg-dark-surface bg-zustom-surface dark:bg-zustom-dark-surface-800">
        <div className="px-4 pt-4">
          <h1>Welcome</h1>
          <label
            htmlFor="themes"
            // className="mb-2 block dark:text-base text-center text-sm font-medium "
            // className={`mb-2 block text-${isDark ? 'dark' : 'base'} text-center font-medium`}
            className={`text-base-custom dark:text-base-custom mb-2 block text-center font-medium text-base dark:text-dark`}
          >
            CHOOSE A THEME
          </label>
          <select
            id="themes"
            className="block w-full cursor-pointer rounded-lg border p-2.5 text-sm outline-transparent"
            value={dataTheme}
            // defaultValue={dataTheme}
            onChange={setTheme}
          >
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="purple">Purple</option>
            <option value="gold-nouveau">gold-nouveau</option>
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
            onChange={toggleDark}
          />
        </div>
        <div className="relative mx-auto max-w-4xl overflow-hidden sm:rounded-2xl">
          <div className="relative mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
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
                className="themed-button bg-skin-button text-skin-inverted flex items-center justify-center rounded-md border border-transparent px-4 py-3 font-medium shadow-sm  text-base sm:px-8"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
