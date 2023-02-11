import { Typography, Stack } from "@mui/material"
import Image from "@/components/Image"
import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Link from 'next/link'
import YoutubeVideo from "@/components/Youtube"
import Page from "@/components/Page"
import Navbar from "@/components/Navbar"
import ContentContainer from "@/components/ContentContainer"
import BorderCard from "@/components/BorderCard"

const title={
    position: 'relative',
    top: -40,
    backgroundColor: "#F8EDE3",
    maxWidth: "20%",
    alignItem:"center",
    px:2,
    color:"#815B5B",
    fontFamily:"Arial"
 }

export default function other() {
    return <div>
      <Page>
        <ContentContainer>
            <Navbar sx={{top:10}}/>
            <Stack spacing={5}>
            <BorderCard>
                <Typography sx={title} variant="h4">Unreal Engine 4</Typography>
                <YoutubeVideo src="8tRyHP2RDWA"/>
                ## UE4note1 and UE4note2.pdf
                <div style={{width:"200px",height:"220px"}}>
                <Image src='/other/udemy.png'/>
                </div>
                <Typography>
                    I follow a course in udemy and learnt how to use unreal engine4. Throughout this learning, I learn(most of them on youtube): 
                    C++ syntax, 
                    -Unreal engine hierarchy system(Object-{'>'}actor-{'>'}pawn-{'>'}character), 
                    -sophisticated object oriented programming throughout the course, 
                    -header file for declaring functions and variables and cpp file for implementing,
                    -why pointer is heavily used in game programming(to save memory by using same adderess), 
                    -how to save every little memory usage(use unsigned int,use CONST,pointer...)
                    -how to "communicate" between classes(getter and setter), 
                    -difference between struct and class(class is private by default while struct is public), 
                    -three stages of C++ (Preprocessing stage, Compiling stage, Linking stage)
                    -Preprocessor directive(get replace by code in proprocessing stage),
                    -Define (macro name will be replace by replacement text),
                    -unreal engine 4 system(components, functions, user interface, I actually wrote dozens of notes about this)
                    Things I want to learn:
                    -How inverse kinematic works
                    -How this insane game engine is written
                    -How object is rendered
                    -How animation blending works
                </Typography>
         </BorderCard>

         <BorderCard>
            <Typography sx={title} variant="h4">Blender</Typography>
            <YoutubeVideo src="FEe7hHzBhQI"/>
            <Image src='/other/blender.png'/>
            <Typography>
                I learn blender following Blender Guru donut, chair and couch tutorial and I learn:
                -How to use blender
                I tried to make a ikea shark model, I encountered many annoying problems such as unknown vertices protruding, uneven mesh. I cant solve those problems and since I already saved changes, only solution for me is to redo the project and I gave up eventually for multiple tries. The video shown is the almost success version. I learn to backup the previous version.
            </Typography>
         </BorderCard>

         <BorderCard>
            <Typography sx={title} variant="h4">Network hacking</Typography>
            <div style={{width:"200px",height:"220px"}}>
            <Image src='/other/network.png'/>
            </div>
            ## hacking.pdf
            <Typography>
                I follow a network hacking course in udemy. I learn:
                - Using terminal instead of graphic interface
                - WEP cracking(useless, no one use WEP nowadays)
                - WPA/WPA2 cracking (almost useless, I need a password to decode the package and only ways is brute force)
                - create wordlist for password brute forcing(almost useless)
                - MITM attack (useless unless some dumbass use HTTP instead of HTTPS and HSTS)
                - idea of bypassing HTTP (downgrade to HTTP and I didnt success)
                - disconnect others wifi connection by deauthentication attack (spamming deauthentication message to router,fun and useful)
                - Basic idea of networking
                I also wrote a note for this course.
            </Typography>
         </BorderCard>
         </Stack>
         </ContentContainer>
        </Page>
    </div>

};
