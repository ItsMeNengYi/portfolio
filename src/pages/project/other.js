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
import NoteButton from "@/components/NoteButton"

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

export default function other() {
    return <Page>
        <ContentContainer>
            <Navbar sx={{top:10}}/>
            <Stack spacing={5}>
            <BorderCard>
                <Typography sx={title} variant="h4">Unreal Engine 4</Typography>
                <Stack direction="row" spacing={2}>
                    <YoutubeVideo src="8tRyHP2RDWA"/>
                    <div style={{width:"200px",height:"220px"}}>
                    <Image src='/other/udemy.png'/>
                    </div>
                </Stack>
                    I follow a course in udemy and learnt how to use unreal engine4. Throughout this learning, I learn(most of them on youtube): 
                    <ul>
                        <li>C++ syntax,</li>
                        <li>Unreal engine hierarchy system(Object-{'>'}actor-{'>'}pawn-{'>'}character), </li>
                        <li>sophisticated object oriented programming throughout the course, </li>
                        <li>header file for declaring functions and variables and cpp file for implementing,</li>
                        <li>why pointer is heavily used in game programming(to save memory by using same adderess), </li>
                        <li>how to save every little memory usage(use unsigned int,use CONST,pointer...)</li>
                        <li>how to "communicate" between classes(getter and setter), </li>
                        <li>difference between struct and class(class is private by default while struct is public), </li>
                        <li>three stages of C++ (Preprocessing stage, Compiling stage, Linking stage)</li>
                        <li>Preprocessor directive(get replace by code in proprocessing stage),</li>
                        <li>Define (macro name will be replace by replacement text),</li>
                        <li>unreal engine 4 system(components, functions, user interface, I actually wrote dozens of notes about this)</li>
                        
                    </ul>
                        Things I want to learn:
                    <ul>
                        <li>How inverse kinematic works</li>
                        <li>How this insane game engine is written</li>
                        <li>How object is rendered</li>
                        <li>How animation blending works</li>
                    </ul>
                    <Typography>Part of notes I wrote following the course:</Typography>
                    <Stack direction="row" spacing={2}>
                    <NoteButton url="../../../other/UE4note1.pdf">UE4 Note1</NoteButton>   
                    <NoteButton url="../../../other/UE4note2.pdf">UE4 Note2</NoteButton>
                    </Stack>
         </BorderCard>

         <BorderCard>
            <Typography sx={[title,{maxWidth: "15%"}]} variant="h4">Blender</Typography>
            <YoutubeVideo src="FEe7hHzBhQI"/>
            <Image src='/other/blender.png'/>
            <Typography>
                I learn blender following Blender Guru donut, chair and couch tutorial and I learn:
                -How to use blender
                I tried to make a ikea shark model, I encountered many annoying problems such as unknown vertices protruding, uneven mesh. I cant solve those problems and since I already saved changes, only solution for me is to redo the project and I gave up eventually for multiple tries. The video shown is the almost succeed version. I learn to backup the previous version.
            </Typography>
         </BorderCard>

         <BorderCard>
            <Typography sx={title} variant="h4">Network hacking</Typography>
            <div style={{width:"200px",height:"220px"}}>
            <Image src='/other/network.png'/>
            </div>
            
                I follow a network hacking course in udemy. I learn:
                <ul>
                    <li> Using terminal instead of graphic interface</li>
                    <li> WEP cracking(useless, no one use WEP nowadays)</li>
                    <li> WPA/WPA2 cracking (almost useless, I need a password to decode the package and only ways is brute force)</li>
                    <li> create wordlist for password brute forcing(almost useless)</li>
                    <li> MITM attack (useless unless some dumbass use HTTP instead of HTTPS and HSTS)</li>
                    <li> idea of bypassing HTTP (downgrade to HTTP and I didnt success)</li>
                    <li> disconnect others wifi connection by deauthentication attack (spamming deauthentication message to router,fun and useful)</li>
                    <li> Basic idea of networking</li>
                </ul>
                <Typography>Note I wrote following this course:</Typography>
                <NoteButton url="../../../other/hacking.pdf">Network_Hacking </NoteButton>   
                  
         </BorderCard>
         </Stack>
         </ContentContainer>
    </Page>

};
