import { Typography, Box,Stack } from "@mui/material"
import YoutubeVideo from "@/components/Youtube"
import Page from "@/components/Page"
import ContentContainer from "@/components/ContentContainer"
import BorderCard from "@/components/BorderCard"
import Navbar from "@/components/Navbar"
import GitButton from "@/components/GitButton"

import Image from "@/components/Image"
import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { isMobile } from "react-device-detect"
import Link from "next/link"


const title={
    position: 'relative',
    top: -40,
    backgroundColor: "#F8EDE3",
    maxWidth: isMobile?"50%":"15%",
    alignItem:"center",
    px:2,
    color:"#815B5B",
    fontFamily:"Arial"
}

export default function Orbital() {
    return <Page>

        <ContentContainer>
            <Navbar sx={{top:10}}/>
            <Stack spacing={5}>

                <BorderCard>
                    <Typography sx={title} variant="h4">Orbital</Typography>
                    <YoutubeVideo src="5f6bV38qryU"/>
                    <GitButton url="https://github.com/ItsMeNengYi/Kiki_Delivery/"/>
                    <Typography>
                        This is the full documentation of this project
                    </Typography>
                    <Link href="https://leezehao.github.io/Kiki_Delivery_Docs/">DOCUMENTATION</Link>
                    <Typography>
                        The ground drone and user control page are done by me while my teammate did the landing page  
                    </Typography>
                    <Link href="https://a360.co/3WbbWRR">3D Model of the drone</Link>
                </BorderCard>

                </Stack>
            </ContentContainer>
        </Page>
        

};
