// mui
import { Card, Grid } from "@mui/material"
// components
import Page from "@/components/Page"
import BorderCard from "@/components/BorderCard"
import Navbar from '@/components/Navbar'
import LinkCard from '@/components/LinkCard'

export default function ProjectHomepage() {
    return <Page>
        <BorderCard>
            <Navbar />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <LinkCard link="/project/python-little-game">Some little games</LinkCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <LinkCard link="/project/pygame">Pygame</LinkCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <LinkCard link="/project/selenium">Selenium</LinkCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <LinkCard link="/project/threeD">Wireframe Modeling</LinkCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <LinkCard link="/project/cs_fifty">CS50</LinkCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <LinkCard link="/project/other">Others</LinkCard>
                </Grid>
                
            </Grid>
        </BorderCard>
    </Page>
};
