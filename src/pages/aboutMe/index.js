import { Typography } from "@mui/material"
import BorderCard from "@/components/BorderCard"
import Page from "@/components/Page"
import Navbar from "@/components/Navbar"
import ContentContainer from "@/components/ContentContainer"

const title={
    position: 'relative',
    top: -40,
    backgroundColor: "#F8EDE3",
    maxWidth: "30%",
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
            <Typography sx={title} variant="h4">About Me</Typography>
            <Typography paragraph={true}>
                I am currently a second-year undergraduate Computer Science student at NUS, with a strong interest in robotics and programming. My passion for technology has driven me to explore various aspects of these fields, and I have undertaken numerous projects to deepen my knowledge and skills. As I continue my academic journey, I am eager to further develop my expertise and contribute to innovative solutions in the tech industry.
            </Typography>
        </BorderCard>
    </ContentContainer>
    </Page>
}
