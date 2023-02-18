import Link from 'next/link'
import { AppBar, Toolbar, IconButton, Typography, Button, Box,Grid } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Stack from '@mui/material/Stack'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import {ThemeProvider,createTheme} from '@mui/material'

const theme = createTheme({
    palette: {
        primary:{
            main: '#F8EDE3',
            dark: '#F8EDE3',
            light:"#FAF8F1"
        }
    }
})



const textDeco = { 
    // '&:hover':{
    //     textShadow:"#F8EDE3 1px 0 10px",
    // },
    // textDecoration:"none",
    // transition: "textShadow 1s",
    // transitionTimingFunction: "linear",
    // color: '#2D2424',
      
}

export default function Navbar(props) {
    const { sx } = props
    return <Box
        display="flex"
        justifyContent="center"
        sx={{
            bgcolor: "#F8EDE3",
            boxShadow: 'none',
            position: 'absolute',
            top: -30,
            ...sx
        }}
        
    >
        <Box sx={{}}>
            <Typography
                sx={textDeco}
                >  
                    <ThemeProvider theme={theme}>
                        <Button 
                            color="primary" 
                            sx={{boxShadow:"none", border:"none"}} 
                            href="/" 
                            variant="contained" 
                            startIcon={<ArrowRightIcon />}>
                            <Typography sx={{}} variant="h4" style={textDeco}>
                                Home
                            </Typography>
                        </Button>
                    </ThemeProvider>

                {/* <Link href="/" style={textDeco}>Home</Link> */}
            </Typography>
        </Box>

            <Typography
                    variant="h4"
                    sx={textDeco}
                >
                    |
            </Typography>

        <Box sx={{}}>
            <Typography
                sx={textDeco}
            >
                <ThemeProvider theme={theme}>
                        <Button 
                            color="primary" 
                            sx={{boxShadow:"none", border:"none"}} 
                            href="/project" 
                            variant="contained" 
                            startIcon={<ArrowRightIcon fontSize='large'/>}>
                            <Typography sx={{}} variant="h4" style={textDeco}>
                                Project
                            </Typography>
                        </Button>
                    </ThemeProvider>
            </Typography>
        </Box>

    </Box>
};
