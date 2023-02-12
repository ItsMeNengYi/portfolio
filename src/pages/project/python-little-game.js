import { Stack, Typography, Box } from "@mui/material"
import Page from "@/components/Page"
import ContentContainer from "@/components/ContentContainer"
import BorderCard from "@/components/BorderCard"
import Navbar from "@/components/Navbar"

const title={
    position: 'relative',
    top: -30,
    backgroundColor: "#F8EDE3",
    maxWidth: "15%",
    alignItem:"center",
    px:2,
    color:"#815B5B",
    fontFamily:"Arial"
}


export default function PythonLittleGame() {
    return <Page>
        <ContentContainer>
            <Navbar sx={{top:10}}/>
            <Stack spacing={5}>
                <BorderCard>
                    <Typography sx={title} variant="h5">Tic-Tac-Toe</Typography>
                    <Typography variant="subtitle1">This is the first project I built for learning python syntax. The game can only be played within players as I cant build an ai. The game rule is simple so I hardcoded a deter() function to check if player is win after each move. Each player input number to fill the block with cross or circle
                    <Typography>1| 2 | 3</Typography>
                    <Typography>----------</Typography>
                    <Typography>4 | 5 | 6</Typography>
                    <Typography>----------</Typography>
                    <Typography>7 | 8 | 9</Typography>
                    </Typography>
                    <iframe height="400px" width="100%" src="https://replit.com/@nengYiYan/tictactoe?lite=true&outputonly=1" frameborder="no"></iframe>
                </BorderCard>
                <BorderCard>
                    <Typography sx={[title,{maxWidth: "10%",}]}  variant="h5">2048</Typography>
                    <Typography variant="subtitle1">This is the second project which at first I thought is easy to implement as the tictactoe. But then I discovered that there are a lots of rules that cant be simply implemented within lines of code. I start with an easy idea, each blocks(with number in it) will move in the direction of the input given untill it meet with another block or it reach the end. If it meets with block with number, check if both blocks contain same number, if so they simply add up together, if not the moving block will stop beside the other block. One of the problems this approach is if the line is fulled with same number such as 2|2|2|2, after a move the result will be |4|  |  |  | which I expected |2|2| | |.As I desprately wanted to finish the project, I hardcoded some of the "special cases" using if-else statement eventually and once the code works I never try to simplify it. </Typography>
                    <iframe height="400px" width="100%" src="https://replit.com/@nengYiYan/2048?lite=true&outputonly=1" frameborder="no"></iframe>
                </BorderCard>
                <BorderCard>
                    <Typography sx={title}  variant="h5">Hangman</Typography>
                    <Typography variant="subtitle1">The third project I made is the simplest and I did it quite smoothly. It's a word guessing game, everytime you answer a alphabet which is not in the word a part of a hangman will be drawn. The game end either you got the word or a full hangman is drawn.</Typography>
                    <iframe height="400px" width="100%" src="https://replit.com/@nengYiYan/hangman?lite=true&outputonly=1" frameborder="no"></iframe>
                </BorderCard>
                <BorderCard>
                    <Typography sx={title}  variant="h5">Typing Test</Typography>
                    <Typography variant="subtitle1">I played several libraries in this project. "datetime" to calculate the typing speed and "colorama" to show the typo in red color in terminal. </Typography>
                    <iframe height="400px" width="100%" src="https://replit.com/@nengYiYan/typingtest?lite=true&outputonly=1" frameborder="no"></iframe>
                </BorderCard>
            </Stack>
        </ContentContainer>    
    </Page>
};

