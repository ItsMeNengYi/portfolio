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

export default function Arduino() {
    return <Page>

        <ContentContainer>
            <Navbar sx={{top:10}}/>
            <Stack spacing={5}>

                <BorderCard>
                    <Typography sx={title} variant="h4">Arduino</Typography>
                    <YoutubeVideo src="P_-oD3pWcM0"/>
                    <GitButton url="https://github.com/ItsMeNengYi/Arduino/tree/main/Bluetooth"/>
                    <Typography>
                    This was my first Arduino project, where I created a system to control track skipping and volume settings using hand movements. The idea came to me while experimenting with a sensor I had, which could detect the distance between itself and an object. I quickly realized that this sensor had numerous potential applications, one of which led to this project. I’m pleased that the C++ programming skills I gained while learning Unreal Engine proved useful here.
                    </Typography>
                </BorderCard>
                <BorderCard>
                    <Typography sx={title} variant="h4">Features</Typography>
                        <YoutubeVideo src="5J5vVBvigks"/>
                        <Typography>
                            Led mini display can display current playing track
                        </Typography>
                        <YoutubeVideo src="yJG7V-F544M"/>
                        <Typography>
                            Set the range which will trigger the sensor to start analyze hand movement
                        </Typography>
                        <YoutubeVideo src="9DSLJD7zf4k"/>
                        <Typography>
                            After detecting object appear in the range, sensor will record the movement of object, if the object is moving toward right, it will consider as "skip next", "previous " if moving toward left
                            
                        </Typography>
                        <YoutubeVideo src="uIiBFEPjcSo"/>
                        <Typography>
                            If the object is holding, it will turn setting volume mode which will increace volume if move right and decrease if move left
                        </Typography>
                </BorderCard>
                <BorderCard>
                    <Typography sx={title} variant="h4">Display</Typography>
                        <YoutubeVideo src="P_-oD3pWcM0"/>
                        <GitButton url="https://github.com/ItsMeNengYi/Arduino/blob/main/Bluetooth/Main/Display.cpp"/>
                        <Typography>
                            I use row-column scan method to decrease the pin needed to control the leds, the led will display row by row. I wrote a function "stringToArray" which take in a string and return a 2D array of boolean which 1 is on and 0 is off, eg: the return value of HI will be 
                            <Typography>
                                1 0 0 0 1 0 0 1 1 1 0 0
                            </Typography>
                            <Typography>
                                1 0 0 0 1 0 0 0 1 0 0 0
                            </Typography>
                            <Typography>
                                1 1 1 1 1 0 0 0 1 0 0 0
                            </Typography>
                            <Typography>
                                1 0 0 0 1 0 0 0 1 0 0 0
                            </Typography>
                            <Typography>
                                1 0 0 0 1 0 0 1 1 1 0 0
                            </Typography>
                            <Typography>          ~~~~~~~~~^~~~~~~~~~spacing
                            </Typography>
                            between alphabets theres a column of "spacing" which is set to 1 by default
                        </Typography>
                </BorderCard>
                <BorderCard>
                    <Typography sx={title} variant="h4">Ultrasonic Sensor</Typography>
                    <YoutubeVideo src="P_-oD3pWcM0"/>
                    <GitButton url="https://github.com/ItsMeNengYi/Arduino/blob/main/Bluetooth/Main/Ultrasound.cpp"/>
                    <Typography>
                        This ultrasonic sensor can determind the distance of the object in front of it by emmiting an ultrasonic wave which will be reflected by the object and received by the sensor. With the approx speed of sound in air(speed of air molecule) and the time taken for the wave to echo back, I can calculate the distance and speed of the object moving.I used the calculated speed to determine if the object(hand) movement. 
                    </Typography>
                </BorderCard>
                <BorderCard>
                    <Typography sx={title} variant="h4">Bluetooth Module</Typography>
                    <YoutubeVideo src="P_-oD3pWcM0"/>
                    <GitButton url="https://github.com/ItsMeNengYi/Arduino/blob/main/Bluetooth/Main/Bluetooth.cpp"/>
                    <Typography>
                        I use HC-05 to send character to computer which is running python script which each character indicates an unique command.
                    </Typography>
                </BorderCard>
                <BorderCard>
                    <Typography sx={title} variant="h4">Python</Typography>
                    <GitButton url="https://github.com/ItsMeNengYi/Arduino/blob/main/Bluetooth/Main/spotipy"/>
                    <Typography>
                        I use pyserial to access paired devices(HC-05) and establish serial communication(connect to HC-05), both computer will send character with utf-8 encode. The name of current track is send one char by one char, so it will send an initiator "[" which indicate the start of song name and "]" indicate the end of the name.
                    </Typography>
                    <Typography>
                        I use spotify api to control the spotify. If the serial port receive valid character, the spotify bot I wrote will execute the correspond command.
                    </Typography>
                </BorderCard>

                </Stack>
            </ContentContainer>
        </Page>
        

};
