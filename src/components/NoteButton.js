import { Button } from "@mui/material"
import * as React from 'react'
import {ThemeProvider,createTheme} from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description';

const theme = createTheme({
    palette: {
        primary:{
            main: "#815B5B",
            dark: "#815B5B",
            light: '#594545'
        }
    }
})



export default function NoteButton(props) {
    const { children, sx, url} = props

    return <ThemeProvider theme={theme}><Button 
        href={url} 
        color="primary"
        variant="contained" 
        startIcon={<DescriptionIcon/>}>
    {children}
        </Button>
  </ThemeProvider>
}