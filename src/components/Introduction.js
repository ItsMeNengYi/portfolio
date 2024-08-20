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
import AssignmentIcon from '@mui/icons-material/Assignment'
import { isMobile } from "react-device-detect"

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
                    left:isMobile?"-20vw":"-6vw"}}>
                <Typography width="100%" noWrap="true" variant="h3" sx={{display:"inline"}}style={{
                    fontFamily:"Cormorant"}}>
                    Hi, Im Ren Yick
                </Typography>
            </Card>
            
            <Typography variant="h6" 
                sx={{ 
                    fontFamily:"Cormorant",
                    color: 'text.secondary', paddingTop:"30px"}}>
                Undergraduate Computer Science student in NUS
            </Typography>
            <ThemeProvider theme={theme}>
                <Stack sx={{paddingTop:"40px",maxHeight:"50px"}}direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                    <Button  href='https://drive.google.com/file/d/1sIqRAVJQP-qfM66NUh9qMz4hDmcO-eWf/view?usp=sharing' variant="outlined" startIcon={<AccountCircleIcon/>}>Resume</Button>
                    <Button  href='/aboutMe' variant="outlined" startIcon={<AccountCircleIcon/>}>About me</Button>
                    <Button href='/aboutWebsite' variant="outlined" startIcon={<LanguageIcon/>}>About this Website</Button>
                    <Button href='/project' variant="outlined" startIcon={<AssignmentIcon/>}>My Projects</Button>
                </Stack>
            </ThemeProvider>
        </Grid>
        
        <Grid item xs={2}>
            <Card sx={{ 
                backgroundColor:"#F8EDE3",
                width:isMobile?"200px":"300px",
                position:"relative", 
                top:isMobile?"110%":"60%",
                p:2
                }}>
            <Image src='/aboutMe/portrait.jfif'/>
            </Card>  
        </Grid>
    </Grid>
};
