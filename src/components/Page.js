import { Container, Box } from '@mui/material'
import Navbar from './Navbar'

export default function Page(props) {
    const { children, sx } = props

    return <Container
        maxWidth="100vw"
        sx={{
            ...sx,
            p: 3,
            height: '100vh',
            display: 'flex',
            alignItems: 'center'
        }}>
        {children}
    </Container >
}