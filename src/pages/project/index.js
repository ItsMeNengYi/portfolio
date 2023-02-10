// mui
import { Card, Grid,Typography} from "@mui/material"
// components
import Page from "@/components/Page"
import BorderCard from "@/components/BorderCard"
import Navbar from '@/components/Navbar'
import LinkCard from '@/components/LinkCard'
import Image from "next/image"
import { shadows } from '@mui/system'

const props = {
    "&hover":{
        boxShadow: 2
    },
    boxShadow: 'none',
}

const descrip = {
    // textShadow:"#815B5B 10px 0 10px"
}

export default function ProjectHomepage() {
    return <Page>
        <BorderCard sx={{width:"80%"}}>
            <Navbar sx={{top: 50}} />
            <Grid container spacing={2} >
                <Grid item xs={12} md={6} sx={props} >
                    <LinkCard height="100%" link="/project/python-little-game">
                        Some little games
                        <Typography variant="subtitle1" >
                            Games can be played on terminal
                        </Typography>
                    </LinkCard>
                </Grid>
                <Grid item xs={12} md={6} sx={props}>
                    <LinkCard link="/project/pygame">
                        Pygame
                        <Typography variant="subtitle1" >
                            Little shooting made using pygame
                        </Typography>
                    </LinkCard>
                    
                </Grid>
                <Grid item xs={12} md={6} sx={props}>
                    <LinkCard link="/project/selenium">
                        Selenium
                        <Typography variant="subtitle1" >
                            Facebook spam bot
                        </Typography>
                    </LinkCard>
                    
                </Grid>
                <Grid item xs={12} md={6} sx={props}>
                    <LinkCard link="/project/threeD">
                        Wireframe Modeling
                        <Typography variant="subtitle1" >
                            explore 3d modeling
                        </Typography>
                    </LinkCard>
                    
                </Grid>
                <Grid item xs={12} md={6} sx={props}>
                    <LinkCard link="/project/cs_fifty">
                        CS50
                        <Typography variant="subtitle1" >
                            learning basic computer science
                        </Typography>
                    </LinkCard>
                    
                </Grid>
                <Grid item xs={12} md={6} sx={props}>
                    <LinkCard link="/project/other">
                        Others
                        <Typography variant="subtitle1" >
                            things I also learned
                        </Typography>
                    </LinkCard>
                        
                </Grid>
                
            </Grid>
        </BorderCard>
    </Page>
};
