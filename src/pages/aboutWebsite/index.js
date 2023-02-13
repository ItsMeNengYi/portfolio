import { Typography } from "@mui/material"
import BorderCard from "@/components/BorderCard"
import Page from "@/components/Page"
import Navbar from "@/components/Navbar"
import ContentContainer from "@/components/ContentContainer"

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
                <Typography>
                    This is my first time using nextjs to build a website. I learnt basic of html,js and css before but never build a website myself. With some aid of my brother, Im able to learn basic syntax of nextjs, use mui library to make my progress faster.
                </Typography>
            </BorderCard>
        </ContentContainer>
    </Page>
};
