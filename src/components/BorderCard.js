import { Container } from "@mui/material"

export default function BorderCard(props) {
    const { children, sx } = props

    return <Container
        maxWidth="lg"
        sx={{
            border: '4px solid #815B5B', 
            px:1,
            py:2,
            ...sx
        }}>
        {children}
    </Container>
};