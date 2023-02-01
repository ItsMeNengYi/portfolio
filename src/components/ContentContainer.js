import { Container } from "@mui/material"

export default function ContentContainer(props) {
    const { children, sx, } = props

    return <Container
        maxWidth="lg">
        {children}
    </Container>
};