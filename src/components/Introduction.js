import { Stack, Typography } from "@mui/material"

export default function Introduction() {
    return <Stack spacing={2}>
        <Typography variant="body1">Hi, Im Ren Yick</Typography>
        <Typography variant="subtitle1">嗨，我是能义</Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            A graduated Foon Yew High School student who is interested in programming and physics
        </Typography>
    </Stack>
};