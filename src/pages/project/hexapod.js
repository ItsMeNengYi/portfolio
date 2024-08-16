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

export default function Hexapod() {
    return <Page>

        <ContentContainer>
            <Navbar sx={{top:10}}/>
            <Stack spacing={5}>

                <BorderCard>
                    <Typography sx={title} variant="h4">Hexapod</Typography>
                    <YoutubeVideo mute src="oiYocJaSG-k"/>
                    <GitButton url="https://github.com/ItsMeNengYi/Hexapod"/>
                    <Typography>
                        My first robotics project using 3d printing 
                    </Typography>
                    <Link href="https://a360.co/4cp9rkV">3d model of the hexapod</Link>
                </BorderCard>
                </Stack>
            </ContentContainer>
        </Page>
        

};
