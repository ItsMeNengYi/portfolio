// import { createTheme } from "@mui/system"
import { createTheme, ThemeProvider } from "@mui/material"
import RootLayout from "@/components/RootLayout"

export default function App({ Component, pageProps }) {

  const theme = createTheme({
    typography: {
      fontFamily: `Roboto, Helvetica, Arial, sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500
    }
  })

  return <RootLayout>
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
  </RootLayout>
  // return <Component {...pageProps} />
}
