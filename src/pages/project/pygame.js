import { Typography } from "@mui/material"
import Image from "next/image"
import Link from 'next/link'
import YoutubeVideo from "@/components/Youtube"

export default function Pygame() {
    return <div>
        <YoutubeVideo src="642X_Dq_1SU"/>
        This game is based on this <Link href="https://www.youtube.com/watch?v=61eX0bFAsYs&t=2384s&ab_channel=GrandmaCan-%E6%88%91%E9%98%BF%E5%AC%A4%E9%83%BD%E6%9C%83">online youtube project</Link>. But as you can see, my project and the tutorial is quite different.

        <Image width='500' height='500' src='/pygame/pic1.png'/>
        <Image width='500' height='500' src='/pygame/code1.png'/>
        <Typography>
            First of all, I add a rotating feature which player will always face in the cursor direction. I implement this feature using some math as shown in the pic1. Xc represent x-axis value of cursor while Xp represent player. As the origin of xy coordinates system in pygame is at top left and y value increase downward which is different from what Ive learnt in school. Instead of convert the coordinate system to the one I familiar with(I shouldve done that), I come up with my simple approach. Get the reference angle from the absolute value of the difference of x and y value of cursor and player. Check the direction of the cursor relative to player and determind to either add or abstract 90deg. I remember getting absurd spinning animation and multiple crash when implementing this feature such as rotating at opposite direction.
        </Typography>

        <Image width='500' height='500' src='/pygame/code2.png'/>
        <Image width='500' height='500' src='/pygame/pic3.png'/>
        <YoutubeVideo src="zBYnXNOALEU"/>
        <Typography>
            I then need to determind which direction will the bullet propagate as in the youtube tutorial the player cant be rotated. I implement this feature using similar math approach. Find the increments of x and y direction and form a vector of magnitude of self.speed which is one of the properties of Bullet class. At first I implement using tangent value as seen in the video below, I didnt figure out why the bullet speed is not consistent but I leave it first as the direction of propagation is okay, afterwards I found out that the tangential value is affecting the bullet speed.
                Other than direction of bullet, I also implemented a buffed version of shooting bullet which the bullet will be shot from three point as shown in first video.
            ** I actually has no idea what I wrote in pic3 but it genuinely is the draft I wrote to find the buffed bullets spawn coordinates  
        </Typography>
        <Typography>
            The source code and exe file can be downloaded in the github link below, The Animation, Sound and img file need to be downloaded and placed in the same directory as the pygameTest.exe file for the file to be executable.
        </Typography>
        <Typography>
            Zekai is my friend which provide the picture and sound effects used in this project.
        </Typography>
        https://github.com/ItsMeFaquu/Zekai_hit_shit
    </div>

};
