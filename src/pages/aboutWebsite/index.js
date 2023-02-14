import { Typography } from "@mui/material"
import BorderCard from "@/components/BorderCard"
import Page from "@/components/Page"
import Navbar from "@/components/Navbar"
import ContentContainer from "@/components/ContentContainer"
import GitButton from "@/components/GitButton"

const title={
    position: 'relative',
    top: -40,
    backgroundColor: "#F8EDE3",
    maxWidth: "35%",
    alignItem:"center",
    px:2,
    color:"#815B5B",
    fontFamily:"Arial"
 }

export default function AboutMe() {
    return <Page>
        <ContentContainer>
            <Navbar sx={{top:"0"}}/>
            <BorderCard>
            <Typography sx={title} variant="h4">About this Website</Typography>
            <GitButton url="https://github.com/ItsMeFaquu/portfolio"/>
                <Typography paragraph="true">
                    This is my first time using nextjs to build a website. I learnt basic of html,js and css before but never build a website myself. With some aid of my brother, Im able to learn basic syntax of nextjs, use mui library to make my progress faster. 
                </Typography>
                <Typography paragraph="true">
                    I spent a lot of time reading my code since all of these project are done years ago and I have to think back what obstacles I've met. Im glad that I wrote some note for some of the projects. I didnt record my projects' progression hence there's no much video.
                </Typography>
                <Typography paragraph="true">
                    !Most buttons are interactable even they dont look like they are!
                </Typography>
            </BorderCard>
        </ContentContainer>
    </Page>
};
