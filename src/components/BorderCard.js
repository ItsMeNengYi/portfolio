import { Container } from "@mui/material"

export default function BorderCard(props) {
    const { children, sx, } = props

    return <Container
        maxWidth={false}
        sx={{
            border: '4px solid #815B5B',
            ...sx
        }}>
        {children}
    </Container>
};