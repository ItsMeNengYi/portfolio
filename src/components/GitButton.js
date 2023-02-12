import { Button } from "@mui/material"
import * as React from 'react'
import {ThemeProvider,createTheme} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'

const theme = createTheme({
    palette: {
        primary:{
            main: "#815B5B",
            dark: "#815B5B",
            light: '#594545'
        }
    }
})



export default function GitButton(props) {
    const { children, sx, url} = props

    return <ThemeProvider theme={theme}><Button 
        href={url} 
        color="primary"
        variant="contained" 
        endIcon={<GitHubIcon/>}>
    Code Link
    {children}
  </Button></ThemeProvider>
}