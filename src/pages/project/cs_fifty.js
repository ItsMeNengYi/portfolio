import { Typography, Stack } from "@mui/material"
import Image from "next/image"
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
    maxWidth: "22%",
    alignItem:"center",
    px:2,
    color:"#815B5B",
    fontFamily:"Arial"
 }

export default function cs_fifty(params) {
    return <div>
        <Page>
        <ContentContainer>
        <Navbar sx={{top:10}}/>
        <Stack spacing={5}>
            <BorderCard>
                <Typography sx={title} variant="h4">CS50</Typography>
                <a href="https://github.com/code50/87684677" target="_blank"
                rel="noopener noreferrer">github code link</a>
                <Typography>
                    I learn a lot of basic knowledges about computer science in CS50 course. I really like this course because it solved a lot of my doubts and David explain everything so clearly. I would like to pick and talk about some of the interesting problems in this course.
                </Typography>
            </BorderCard>

            <BorderCard>
                <Typography sx={title} variant="h4">Filter-less</Typography>
                <a href="https://github.com/code50/87684677/blob/main/filter-less/helpers.c" target="_blank"
            rel="noopener noreferrer">github code link</a>
                <Typography>
                    The first one it the 'filter-less'. Its fun to know how those filter in photographing actually works underneath the hood. And its quite simply to implement. Unlike in the problem it take the average of rgb value in a 9*9 cube, I added a BlurFactor which indicates no of pixels around the pixel to be blured. As shown in the picture, on the left is the output of blurfactor of 10 and right is blurfactor of 1.
                </Typography>
                <Image width='500' height='500' src='/CS50/blurCode.png'/>
                <Image width='500' height='500' src='/CS50/blurFactor.png'/>
                <Image width='500' height='500' src='/CS50/blurFactorCompare.png'/>
            </BorderCard>

            <BorderCard>
                <Typography sx={title} variant="h4">Filter-more</Typography>
                <Image width='500' height='500' src='/CS50/canny.png'/>
                <a href="https://github.com/code50/87684677/blob/main/filter-more/helpers.c" target="_blank"
            rel="noopener noreferrer">github code link</a>
                <Typography>
                    Next is the edges in 'filter-more'. For my own insight, if the neighbouring pixel has drastic change in RGB value, it seems to be an edges and the array will magnified its changes by giving it different weights hence the output value of convolution will be great. If neighbouring pixels rgb value have little difference then the negative value will cancel out and give small value. The picture on the right is output of applying greyscale of the left picture and it gives similar effects as the "canny" function in opencv.
                </Typography>
            </BorderCard>

            <BorderCard>
                <Typography sx={title} variant="h4">Speller</Typography>   
                <a href="https://github.com/code50/87684677" target="_blank"
                rel="noopener noreferrer">github code link</a>
                <Typography>
                    In week5 of the course, I get to learn many "fancy" data types and searching algorithms I heard before and I learn that theres a trade-off between time and space. I can obtain higher speed if I use a correct data type. 
                    Hash table is used in this problems for word searcing in a dictionary. The hard part is the hash function. I chose to give specific index for first three alphabet and I need to come up with a equation as the pictures above. My result is slightly slower as compared to staff
                </Typography>
                <Image width='500' height='500' src='/CS50/hash.png'/>
                <Image width='500' height='500' src='/CS50/hashCode.png'/>
                <Image width='500' height='500' src='/CS50/compare.png'/>
            </BorderCard>
        </Stack>
        </ContentContainer>
        </Page>
    </div>
}