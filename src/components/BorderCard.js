import { Container } from "@mui/material"

export default function BorderCard(props) {
    const { children, sx, } = props

    return <Container
        maxWidth={false}
        sx={{
            border: '4px solid #815B5B',
            position: "relative",
            height: "50vh",
            width: "60vw",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...sx
        }}>
        {children}
    </Container>
};