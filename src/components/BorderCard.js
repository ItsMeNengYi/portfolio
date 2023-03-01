import { Container } from "@mui/material"
import { isMobile } from "react-device-detect"

export default function BorderCard(props) {
    const { children, sx } = props

    return <Container
        maxWidth="lg"
        sx={[isMobile?{width:"99vw"}:{},{
            border: '4px solid #815B5B', 
            px:1,
            py:2,
            ...sx
        }]}>
        {children}
    </Container>
};