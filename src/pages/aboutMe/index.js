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
                <Typography paragraph={true}>    
                    My name is Gan Ren Yick. When I was a kid, I always hate studying, the only subject I like is math since I love solving math questions and didn't need to study much to have good grades in math. I always used my time at home playing games, playing piano and drawing. After I enter senior science class, I discovered that physics and chemistry (excluding inorganic and organic chemistry) give me the same vibe as math. I started to enjoy the feeling when solving a hard physics problem, the more complex the question is, the more I'm into it. Since then, I started watching science video on youtube such as Veritasium, NileRed, Stuff Made Here and many others. I'm obsessed with the crafting and programming abilities of StuffMadeHere. There are many hard puzzles on 3Blue 1Brown channels and I found it interesting to follow his mindset in solving those puzzles. I learn a lot of things watching youtube and sometimes I'll asked my physics teacher if I'm confused by the ideas from youtubers. I love teaching others as well, it helps me to understand the concept more when I'm trying to explain it to others. Most of the time I didn't even study for my physics and math exam, I prepared my exam by teaching my friends either they didn't understand the concepts or unable to solve a problem.       
                </Typography>
                <Typography paragraph={true}>
                    During the pandemic, I have a lot of free time after finishing my homework and that is when I started learning programming. Although I've learned simple C programming at school, Im still doubtful at how printing pattern at terminal can be useful. This idea quickly disappeared after I exposed to various libraries in python. I started learning python by making some simple game showing in terminal. Then I started playing with libraries such as pygame, selenium, opencv and others. During the learning process, I followed a funny youtuber called JomaTech. I found the most appealing of his video is the acsii spinning donuts. I finally realized that I'm not that interested in using libraries, functions written by others but being able to understand how everything fundamentally works, how a complex command can be converted into binary and be executed, how maths in used in 3d redering. I explore a lot of stuff during the pandemic and I'm glad that found out what I'm really interested. I'm not really interested in unreal engine course I took because I had been using others function throughout the course. Generally speaking, I like doing anything “from scratch”. But still I did finish the course. I wrote a website about the self-learning process and showcase for my projects. I'm looking forward to exploring more either about computer or physics.
                </Typography>
            </Typography>

            
        </BorderCard>
    </ContentContainer>
    </Page>
}
