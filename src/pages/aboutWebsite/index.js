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
            <GitButton url="https://github.com/ItsMeNengYi/portfolio"/>
                <Typography paragraph="true">
                    This website showcases all of my projects, starting from secondary school. My coding journey began with writing simple Python code.
                </Typography>
            </BorderCard>
        </ContentContainer>
    </Page>
};
