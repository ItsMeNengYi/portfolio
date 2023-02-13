import { Typography } from "@mui/material"
import BorderCard from "@/components/BorderCard"
import Page from "@/components/Page"
import Navbar from "@/components/Navbar"

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
        <Navbar sx={{top:"0"}}/>
        <BorderCard>
        <Typography sx={title} variant="h4">About this Website</Typography>
            <Typography>
        
            </Typography>
        </BorderCard>
    </Page>
};
