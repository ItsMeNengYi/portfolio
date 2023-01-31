import { Stack, Typography } from "@mui/material"
import Card from "./Card"
import Grow from '@mui/material/Grow';

export default function Introduction() {
    return <Stack spacing={2}>

        <Card 
         sx={{
            '&:hover':{
                fontSize:100
            },
            position: "relative",
            left:"-50%"
        }}>
            <Typography sx={{fontSize:"inherit"}}>
                    Hi, Im Ren Yick
            </Typography>
        </Card>
        
        <Card 
         sx={{
            '&:hover':{
            },
            position: "relative",
            top:-88,
            left:-100
        }}>
            <Typography variant="h2">嗨，我是能义</Typography>
        </Card>
        
        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            A graduated Foon Yew High School student who is interested in programming and physics
        </Typography>
    </Stack>
};
