import { Typography } from "@mui/material"
import Image from "next/image"
import Link from 'next/link'
import YoutubeVideo from "@/components/Youtube"

export default function threeD() {
    return <div>
         <Typography>
         I start this project is to have better understanding about how computer graphic works. I didnt follow any tutorial online. In this project, I met three obstacles, I almost overcome two of them and solve one of them.
         </Typography>

        ## modeling/perspective.png
        ## USU4PPZQb9A
         <Typography>
            First is the perspective problems. At first I thought it's simply solving similar triangles as in the picture. But the perspective is weird and after experimenting I found out any other value than Z, the perspective will look fine, so I kinda overcome this problems by using square root of Z.
         </Typography>

         ## rotation.png
         <Typography>
            Secondly, I implement rotating function which when my mouse click and drag, the camera rotate. But in actual the camera doesnt rotate but everthing is rotated around the camera. So I record the mouse vertical and horizontal movement and save it in a tuple.
         </Typography>
        
        ## movement.png
        ## rotationFunction.png
        ## problem.png
        ## discoverProb.png
         <Typography>
            Last, whenever the camera is rotated, movement direction has to be changedwith respect to the rotation. If the camera is rotated 90degree upward, the "W" input which is forward should go upward. I define direction as a 3d vector for instance forward is [0,0,speed] and rotate the vector if needed. Since I duno how to rotate a vector in 3 dimention, my approach is to rotate the vector 3 times which with respect to x,y and z axis each. It almost seems fine untill I tested it with 45 degree up and 45 degree right, the movement vector doesnt seems right. The forward vector should have equal magnitude in three position [6,6,6](5.77 before rounding). After long term of thinking, I found out whats the problems which is written in the picture. The only solution I think of so far is use the 3d rotation matrix on wikipedia but I dont want to use things I havent learn.
         </Typography>
    </div>

};
