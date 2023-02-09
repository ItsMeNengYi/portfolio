// mui
import { Card, Grid } from "@mui/material"
// components
import Page from "@/components/Page"
import BorderCard from "@/components/BorderCard"
import Navbar from '@/components/Navbar'
import LinkCard from '@/components/LinkCard'
import Image from "next/image"

const props = {
    height: 300,
}

export default function ProjectHomepage() {
    return <Page>
        <BorderCard sx={{width:"80%"}}>
            <Navbar sx={{top: 50}} />
            <Grid container spacing={2} >
                <Grid item xs={6} md={6} sx={props} >
                    <LinkCard link="/project/python-little-game">
                        Some little games
                        {/* <Image fill object-fit="contain" src='/projectImg/littleGame.png'/> */}
                    </LinkCard>
                    
                </Grid>
                <Grid item xs={12} md={6} sx={props}>
                    <LinkCard link="/project/pygame">Pygame</LinkCard>
                </Grid>
                <Grid item xs={12} md={6} sx={props}>
                    <LinkCard link="/project/selenium">Selenium</LinkCard>
                </Grid>
                <Grid item xs={12} md={6} sx={props}>
                    <LinkCard link="/project/threeD">Wireframe Modeling</LinkCard>
                </Grid>
                <Grid item xs={12} md={6} sx={props}>
                    <LinkCard link="/project/cs_fifty">CS50</LinkCard>
                </Grid>
                <Grid item xs={12} md={6} sx={props}>
                    <LinkCard link="/project/other">Others</LinkCard>
                </Grid>
                
            </Grid>
        </BorderCard>
    </Page>
};
