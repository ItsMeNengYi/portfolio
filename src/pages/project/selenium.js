import { Typography } from "@mui/material"
import Image from "next/image"
import Link from 'next/link'
import YoutubeVideo from "@/components/Youtube"


export default function Selenium(params) {
    return <div>
        <YoutubeVideo name="selenium first ver"src="Uywk9PQqmw8"/>
        <Typography>
            This project is to imitate sending message action using selenium. Video above show the first version which user is selected using xpath. But then I quickly realise that you need to scroll down to be able to select the unloaded user.
        </Typography>

        <Image width='500' height='500' src='/selenium/txtfile.png'/>
        <Image width='500' height='500' src='/selenium/readfile.png'/>
        <Typography>
            My second approach is to select users using search bar and name. I wrote a function to read .txt file into an array and loop through the array. But then I encountered more obstacles. 
        </Typography>

        <Typography>
            First, the program can be inconsistent sometimes, so I created a "finished.txt" to prevent sending message to peaple more than once when rerunning the program.
            Seconly, the user might already block you. I wrote a function to detect if the user has blocked you(which is to check if the textbox is available)
        </Typography>

        <Image width='500' height='500' src='/selenium/entername.png'/>
        <Typography>
            Furthurmore, I encountered a tideous bug which the user is exist but if you paste the name directly it cant be searched. You need to type the user name one by one in order to search the user. So I created another file "ProblemList.txt" to note down those user's name and I wrote a function to enter name one by one at first and gradually increase it speed(which is decrease the time.sleep() parameter)
        </Typography>

        <YoutubeVideo name="selenium send file"src="sJ254k8dQqA"/>
        <Typography>
            Then I added more function such as send file(video and pictures to be specific)which consist of file explorer control action, so I import and use autoit to make the job done.
        </Typography>

        <YoutubeVideo name="selenium send file"src="ChaI6lvdbQM"/>
        <Typography>
            A lot more features and details are not listed here but in the code itself. Unfortunatelly the code is quite troublesome to run cause you need to setup the environtment such as download the chromedriver and create multiple file. And the code itself is specifically for sending message in business account which is the intention to spam advertisements to customers. Instead, I alter the code a bit and make it a facebook spam bot and the video above shows how it works. This altered version of code doesnt use some of the features so I will provide both business and facebook version of code.
        </Typography>
        <Typography>
            ##TODO upload github link of code
        </Typography>

    </div> 
};
