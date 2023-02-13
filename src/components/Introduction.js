import { Grid, Stack, Box, Typography } from "@mui/material"
import Card from "./Card"
import Grow from '@mui/material/Grow'
import Link from "next/link"
import LanguageIcon from '@mui/icons-material/Language'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Button from '@mui/material/Button'
import * as React from 'react'
import {ThemeProvider,createTheme} from '@mui/material'
import BorderCard from "./BorderCard"
import Image from "./Image"


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
    return <Grid container >

        <Grid item xs={10} position="relative" >
            <Card sx={{
                    position:"relative", 
                    left:"-6vw"}}>
                <Typography variant="h3" style={{
                    fontFamily:"Cormorant"}}>
                    Hi, Im Ren Yick
                </Typography>
            </Card>
            
            <Typography variant="h6" 
                        sx={{ 
                            fontFamily:"Cormorant",
                            color: 'text.secondary', paddingTop:"30px"}}>
                A graduated Foon Yew High School student who is interested in programming and physics
            </Typography>
            <ThemeProvider theme={theme}>
                <Stack sx={{paddingTop:"40px"}}direction="row" spacing={1}>
                    <Button  href='/aboutMe' variant="outlined" startIcon={<AccountCircleIcon/>}>About me</Button>
                    <Button href='/aboutWebsite' variant="outlined" startIcon={<LanguageIcon/>}>About this Website</Button>
                </Stack>
            </ThemeProvider>
        </Grid>

        <Grid item xs={2}>
            <Card sx={{ 
                backgroundColor:"#F8EDE3",
                width:"300px", 
                position:"relative", 
                right:"-40%",
                top:"40%",
                p:2
                }}>
            <Image src='/aboutMe/portrait.jfif'/>
            </Card>  
        </Grid>
    </Grid>
};
