import { Container, Box ,ThemeProvider,createTheme} from '@mui/material'
import Navbar from './Navbar'
import RootLayout from './RootLayout'

const theme = createTheme({
        typography: {
            fontSize: 17 
        },
        palette: {
            inherit:{
                dark: "#815B5B",
                light: '#594545'
            }
        }
})

export default function Page(props) {
    const { children, sx } = props

    return  <ThemeProvider theme={theme}>
        <Container
            maxWidth="100vw"
            height= '100vw'
            sx={{
                ...sx,
                p: 10
            }}>
            {children}
        </Container >
    </ThemeProvider>
}