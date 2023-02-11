import { Container, Box } from '@mui/material'
import Navbar from './Navbar'
import RootLayout from './RootLayout'
import {Analytics} from '@vercel/analytics'

export default function Page(props) {
    const { children, sx } = props

    return <RootLayout>   
    <Container
        maxWidth="100vw"
        height= '100vw'
        sx={{
            ...sx,
            p: 10
        }}>
        <Analytics/>
        {children}
    </Container >
    </RootLayout>
}