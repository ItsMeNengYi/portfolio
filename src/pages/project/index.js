// mui
import { Box, Grid, Typography, dividerClasses } from "@mui/material"
// components
import Page from "@/components/Page"
import BorderCard from "@/components/BorderCard"
import Navbar from '@/components/Navbar'
import LinkCard from '@/components/LinkCard'
import Image from "next/legacy/image"
import { shadows } from '@mui/system'
import {Container} from "@mui/material"
import { isMobile } from "react-device-detect"

const props = {
    "&:hover": {
        boxShadow: 3,
        "& .description": {
            opacity: '1',
            bottom:"0px",
            transition: "bottom 0.25s , opacity 0.25s",
            
            transitionTimingFunction: "linear",
        },
        "& .projectImage": {
            opacity:'0.5',
            transition: "opacity 0.25s",
            transitionTimingFunction: "linear",
        }
    },
    boxShadow: 'none',
    position: 'relative',
    overflow: 'hidden'
    
}

const descrip = {
    
    textShadow: 'none',
    opacity: '0',
    position:"relative",
    bottom:"-20px"
}

export default function ProjectHomepage() {
    return <Page>
        <BorderCard >
            <Navbar sx={{ top: isMobile?40:50 }} />
            <Grid container spacing={2} >
                <Grid item xs={12} md={6}  >
                    <LinkCard  sx={props} height="100%" link="/project/python-little-game">
                        <Image className="projectImage" style={{opacity:'0.1'}} objectFit='contain' layout="fill" src="/projectImg/littleGame.png" />
                        <Box
                            sx={{
                                width: '100%',
                                height: 400,
                                position: 'relative',
                                zIndex: 100,
                            }}
                        >
                            Some little games
                            <Typography className="description" sx={descrip}  variant="subtitle1" >
                                Games can be played on terminal
                            </Typography>
                            
                        </Box>

                    </LinkCard>
                </Grid>

                <Grid item xs={12} md={6} >
                    <LinkCard sx={props} height="100%" link="/project/pygame">
                    <Image style={{opacity:'0.1'}} objectFit='contain' layout="fill" src="/projectImg/pygameLogo.gif" />
                        <Box
                            sx={{
                                width: '100%',
                                height: 400,
                                position: 'relative',
                                zIndex: 100,
                            }}
                        >
                        Pygame
                        <Typography sx={descrip} className="description"  variant="subtitle1" >
                            Little shooting made using pygame
                        </Typography>
                        </Box>
                    </LinkCard>

                </Grid>
                
                <Grid item xs={12} md={6}  >
                    <LinkCard  sx={props} height="100%" link="/project/arduino">
                        <Image className="projectImage" style={{opacity:'0.1'}} objectFit='contain' layout="fill" src="/projectImg/Arduino.png" />
                        <Box
                            sx={{
                                width: '100%',
                                height: 400,
                                position: 'relative',
                                zIndex: 100,
                            }}
                        >
                            Arduino
                            <Typography className="description" sx={descrip}  variant="subtitle1" >
                                Control spotify via hand movement and wirelessly
                            </Typography>
                            
                        </Box>

                    </LinkCard>
                </Grid>

                <Grid item xs={12} md={6} >
                    <LinkCard sx={props} link="/project/selenium">
                    <Image style={{opacity:'0.1'}} objectFit='contain' layout="fill" src="/projectImg/seleniumIcon.png" />
                        <Box
                            sx={{
                                width: '100%',
                                height: 400,
                                position: 'relative',
                                zIndex: 100,
                            }}
                        >
                        Selenium
                        <Typography className="description" sx={descrip} variant="subtitle1" >
                            Facebook spam bot
                        </Typography>
                        </Box>
                    </LinkCard>

                </Grid>
                <Grid item xs={12} md={6} >
                    <LinkCard sx={props} link="/project/threeD">
                    <Image style={{opacity:'0.1'}} objectFit='contain' layout="fill" src="/projectImg/modelingIcon.png" />
                        <Box
                            sx={{
                                width: '100%',
                                height: 400,
                                position: 'relative',
                                zIndex: 100,
                            }}
                        >
                        Wireframe Modeling
                        <Typography className="description" sx={descrip} variant="subtitle1" >
                            explore 3d modeling
                        </Typography>
                        </Box>
                    </LinkCard>

                </Grid>
                <Grid item xs={12} md={6} >
                    <LinkCard sx={props} link="/project/cs_fifty">
                    <Image style={{opacity:'0.1'}} objectFit='contain' layout="fill" src="/projectImg/CS50Icon.png" />
                        <Box
                            sx={{
                                width: '100%',
                                height: 400,
                                position: 'relative',
                                zIndex: 100,
                            }}
                        >
                        CS50
                        <Typography className="description" sx={descrip} variant="subtitle1" >
                            learning basic computer science
                        </Typography>
                        </Box>
                    </LinkCard>

                </Grid>
                <Grid item xs={12} md={6} >
                    <LinkCard sx={props} link="/project/other">
                    <Image style={{opacity:'0.1'}} objectFit='contain' layout="fill" src="/projectImg/otherIcon.png" />
                        <Box
                            sx={{
                                width: '100%',
                                height: 400,
                                position: 'relative',
                                zIndex: 100,
                            }}
                        >
                        Others
                        <Typography className="description" sx={descrip} variant="subtitle1" >
                            things I also learned
                        </Typography>
                        </Box>
                    </LinkCard>

                </Grid>
            </Grid>
        </BorderCard>
    </Page>
};
