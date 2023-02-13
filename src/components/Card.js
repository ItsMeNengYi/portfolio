import { Container } from "@mui/material"

export default function Card(props) {
    const { children, sx,} = props

    return <Container maxWidth={false} sx={{ backgroundColor: "#F8EDE3", ...sx}}>
        {children}
    </Container>
};