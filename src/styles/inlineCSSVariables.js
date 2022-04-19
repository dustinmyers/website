/*
This code comes from https://joshwcomeau.com/gatsby/dark-mode/
It uses the users' prefers-color-scheme media query to inline
CSS variables into the :root of the page before any content is 
rendered.
*/

import { COLORS, COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from '../themes/cssVariables' 

export function setColorsByTheme() {
  const colors = '🌈';
  const colorModeKey = '🔑';
  const colorModeCssProp = '⚡️';

  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const prefersDarkFromMQ = mql.matches
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = 'light';

  const hasUsedToggle = typeof persistedPreference === 'string';

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? 'dark' : 'light';
  }

  const root = document.documentElement

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--${name}`

    root.style.setProperty(cssVarName, colorByTheme[colorMode])
  })
}

export function MagicScriptTag() {
  const boundFn = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(COLORS))
    .replace('🔑', COLOR_MODE_KEY)
    .replace('⚡️', INITIAL_COLOR_MODE_CSS_PROP);

  let calledFunction = `(${boundFn})()`

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

// if user doesn't have JavaScript enabled, set variables properly in a
// head style tag anyways (light mode)
export function FallbackStyles() {
  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme.light};`
    },
    ''
  )

  const wrappedInSelector = `html { ${cssVariableString} }`

  return <style>{wrappedInSelector}</style>
}