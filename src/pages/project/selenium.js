import { Typography, Stack } from "@mui/material"
import Image from "@/components/Image"
import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Link from 'next/link'
import YoutubeVideo from "@/components/Youtube"
import Page from "@/components/Page"
import ContentContainer from "@/components/ContentContainer"
import Navbar from "@/components/Navbar"
import BorderCard from "@/components/BorderCard"

const title={
    position: 'relative',
    top: -40,
    backgroundColor: "#F8EDE3",
    maxWidth: "28%",
    alignItem:"center",
    px:2,
    color:"#815B5B",
    fontFamily:"Arial"
}

export default function Selenium(params) {
        return <div>
            <Page>
                <ContentContainer>
                    <Navbar sx={{top:20}}/>
                    <Stack spacing={5}>

                    <BorderCard>
                        <Typography sx={title} variant="h4">Spam Bot ver1</Typography>
                        <YoutubeVideo name="selenium first ver"src="Uywk9PQqmw8"/>
                        <Typography>
                            This project is to imitate sending message action using selenium. Video above show the first version which user is selected using xpath. But then I quickly realise that you need to scroll down to be able to select the unloaded user.
                        </Typography>
                    </BorderCard>
                    <BorderCard>
                        <Typography sx={[title,{maxWidth: "35%"}]} variant="h4">Spam Bot final ver</Typography>
                        <YoutubeVideo name="selenium send file"src="ChaI6lvdbQM"/>
                        <a href="https://github.com/ItsMeFaquu/FacebookSpamBot" target="_blank"
            rel="noopener noreferrer">github code link</a>
                    </BorderCard>

                    <BorderCard>
                    <Typography sx={title} variant="h4">Some Details</Typography>

                    <Carousel 
                        autoPlay={true}
                        interval={0.5}
                        infiniteLoop={true }
                    >
                        <div>
                        <Image src='/selenium/txtfile.png'/>
                        </div>
                        <div >
                        <Image src='/selenium/readfile.png'/>
                        </div>   
                    </Carousel>
                    <Typography>
                        My second approach(which is last version) is to select users using search bar and name. I wrote a function to read .txt file into an array and loop through the array. But then I encountered more obstacles. 
                    </Typography>

                    <Typography>
                        First, the program can be inconsistent sometimes, so I created a "Finished.txt" to prevent sending message to peaple more than once when rerunning the program.
                        Seconly, the user might already block you. I wrote a function to detect if the user has blocked you(which is to check if the textbox is available)
                    </Typography>

                    <Image src='/selenium/entername.png'/>
                    <Typography>
                        Furthurmore, I encountered a tideous bug which the user is exist but if you paste the name directly in the search box, the name cant be searched. You need to type the user name one character by one character
                        in order to search the user. So I created another file "ProblemList.txt" to note down those user's name and I wrote a function to enter name one by one at first and gradually increase it speed(which is decrease the time.sleep() parameter). So what my bot do is everytime it enter the user name, if the user can be search, the bot will check if the user has blocked you, if the user profile doesnt appear, it will put the name into "ProblemList.txt" file and reenter the name one character by one character, if the user profile appear to be found then the code will keep going and the bot will write its name in "Failed.txt" if its not and keep goin to the next customer. 
                    </Typography>

                    <YoutubeVideo name="selenium send file"src="sJ254k8dQqA"/>
                    <Typography>
                        Then I added more function such as send file(video and pictures to be specific)which consist of file explorer control action, so I import and use autoit to make the job done.
                    </Typography>
 
                    <Typography>
                        A lot more features and details are not listed here but in the code itself. Unfortunatelly the code is quite troublesome to run cause you need to setup the environtment such as download the chromedriver and create multiple file. And the code itself is specifically for sending message in business account which is the intention to spam advertisements to customers. Instead, I alter the code a bit and make it a facebook spam bot and the video above shows how it works. 
                    </Typography>
                    </BorderCard>
                    </Stack>
            </ContentContainer>         
        </Page>
    </div> 
};
