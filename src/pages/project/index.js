// mui
import { Card, Box, Grid, Typography } from "@mui/material"
// components
import Page from "@/components/Page"
import BorderCard from "@/components/BorderCard"
import Navbar from '@/components/Navbar'
import LinkCard from '@/components/LinkCard'
import Image from "next/legacy/image"
import { shadows } from '@mui/system'


const props = {
    "&:hover": {
        boxShadow: 3
    },
    boxShadow: 'none',
    position: 'relative',
    overflow: 'hidden',
    "&:hover > #Image": {
        opacity:'0.5'
    }
}

const descrip = {
    "&:hover": {
        textShadow: "#815B5B 15px 0 10px"
    },
    textShadow: 'none',
}

const imageHover = {
    "&:hover": {
        opacity:'0.5'
    },
    transition: "opacity 0.5s",
    transitionTimingFunction: "linear",
    opacity:'0.1'
}

export default function ProjectHomepage() {
    return <Page>
        <BorderCard sx={{ width: "80%" }}>
            <Navbar sx={{ top: 50 }} />
            <Grid container spacing={2} >
                <Grid item xs={12} md={6}  >
                    <LinkCard id="container" sx={props} height="100%" link="/project/python-little-game">
                        <Image style={imageHover} objectFit='contain' layout="fill" src="/projectImg/littleGame.png" />
                        <Box
                            sx={{
                                width: '100%',
                                height: 400,
                                position: 'relative',
                                zIndex: 100,
                            }}
                        >
                            Some little games
                            <Typography sx={descrip} variant="subtitle1" >
                                Games can be played on terminal
                            </Typography>
                        </Box>

                    </LinkCard>
                </Grid>
                <Grid item xs={12} md={6} >
                    <LinkCard sx={props} height="100%" link="/project/pygame">
                    <Image style={imageHover} objectFit='contain' layout="fill" src="/projectImg/pygameLogo.gif" />
                        <Box
                            sx={{
                                width: '100%',
                                height: 400,
                                position: 'relative',
                                zIndex: 100,
                            }}
                        >
                        Pygame
                        <Typography sx={descrip} variant="subtitle1" >
                            Little shooting made using pygame
                        </Typography>
                        </Box>
                    </LinkCard>

                </Grid>
                <Grid item xs={12} md={6} >
                    <LinkCard sx={props} link="/project/selenium">
                    <Image style={imageHover} objectFit='contain' layout="fill" src="/projectImg/seleniumIcon.png" />
                        <Box
                            sx={{
                                width: '100%',
                                height: 400,
                                position: 'relative',
                                zIndex: 100,
                            }}
                        >
                        Selenium
                        <Typography variant="subtitle1" >
                            Facebook spam bot
                        </Typography>
                        </Box>
                    </LinkCard>

                </Grid>
                <Grid item xs={12} md={6} >
                    <LinkCard sx={props} link="/project/threeD">
                    <Image style={imageHover} objectFit='contain' layout="fill" src="/projectImg/modelingIcon.png" />
                        <Box
                            sx={{
                                width: '100%',
                                height: 400,
                                position: 'relative',
                                zIndex: 100,
                            }}
                        >
                        Wireframe Modeling
                        <Typography variant="subtitle1" >
                            explore 3d modeling
                        </Typography>
                        </Box>
                    </LinkCard>

                </Grid>
                <Grid item xs={12} md={6} >
                    <LinkCard sx={props} link="/project/cs_fifty">
                    <Image style={imageHover} objectFit='contain' layout="fill" src="/projectImg/CS50Icon.png" />
                        <Box
                            sx={{
                                width: '100%',
                                height: 400,
                                position: 'relative',
                                zIndex: 100,
                            }}
                        >
                        CS50
                        <Typography variant="subtitle1" >
                            learning basic computer science
                        </Typography>
                        </Box>
                    </LinkCard>

                </Grid>
                <Grid item xs={12} md={6} >
                    <LinkCard sx={props} link="/project/other">
                    <Image style={imageHover} objectFit='contain' layout="fill" src="/projectImg/otherIcon.png" />
                        <Box
                            sx={{
                                width: '100%',
                                height: 400,
                                position: 'relative',
                                zIndex: 100,
                            }}
                        >
                        Others
                        <Typography variant="subtitle1" >
                            things I also learned
                        </Typography>
                        </Box>
                    </LinkCard>

                </Grid>

            </Grid>
        </BorderCard>
    </Page>
};
