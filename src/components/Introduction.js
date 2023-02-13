import { Stack, Typography } from "@mui/material"
import Card from "./Card"
import Grow from '@mui/material/Grow'
import Link from "next/link"
import LanguageIcon from '@mui/icons-material/Language'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Button from '@mui/material/Button'
import * as React from 'react'
import {ThemeProvider,createTheme} from '@mui/material'

const theme = createTheme({
    palette: {
        primary:{
            main: "#815B5B",
            dark: "#815B5B",
            light: '#594545'
        }
    }
})

export default function Introduction() {
    return <Stack spacing={2}>

        {/* <Card 
         sx={{
            '&:hover':{
                fontSize:"70px"
            },
            fontSize:"100px",
            position: "relative",
            transition: "font-size 0.5s",
            transitionTimingFunction: "linear",
            left:"-50%"
        }}>
            <Typography sx={{fontSize:"inherit"}}>
                    Hi, Im Ren Yick
            </Typography>
            <Typography>嗨，我是能义</Typography>
        </Card>  */}

        <Typography fontSize="40px" textShadow="#FC0 1px 0 10px">
                    Hi, Im Ren Yick
            </Typography>
        {/* <Typography>嗨，我是能义</Typography> */}
        {/* <Card 
         sx={{
            '&:hover':{
            },
            position: "relative",
            top:-88,
            left:-100
        }}>
            
        </Card> */}
        
        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            A graduated Foon Yew High School student who is interested in programming and physics
        </Typography>
        <ThemeProvider theme={theme}>
            <Stack direction="row" spacing={1}>
                <Button href='/aboutMe' variant="outlined" startIcon={<AccountCircleIcon/>}>About me</Button>
                <Button href='/aboutWebsite' variant="outlined" startIcon={<LanguageIcon/>}>About this Website</Button>
            </Stack>
        </ThemeProvider>
    </Stack>
};
