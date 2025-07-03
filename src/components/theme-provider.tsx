import { createContext, useContext, useEffect, useState } from "react"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: "dark" | "light" | "system"
  storageKey?: string
}

type ThemeProviderState = {
  theme: "dark" | "light" | "system"
  setTheme: (theme: "dark" | "light" | "system") => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<"dark" | "light" | "system">(
    () => (localStorage.getItem(storageKey) as "dark" | "light" | "system") || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    
    // --- FIX STARTS HERE ---
    // The previous code had a type mismatch. This version handles the 'system'
    // case first, ensuring that `themeToApply` is always either 'dark' or 'light'.
    
    let themeToApply: "dark" | "light";

    if (theme === "system") {
      themeToApply = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    } else {
      themeToApply = theme;
    }

    root.classList.add(themeToApply)
    // --- FIX ENDS HERE ---

  }, [theme])

  const value = {
    theme,
    setTheme: (theme: "dark" | "light" | "system") => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}