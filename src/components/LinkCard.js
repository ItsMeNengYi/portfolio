import Link from 'next/link'
import { Card, Typography } from "@mui/material"

export default function LinkCard(props) {
    const { children, sx, link  } = props

    return <a href={link}>
        <Card sx={{ 
        "&hover":{
            boxShadow: 3
        },
        boxShadow: 'none',
        height:230,
        px: 2,
        py: 3,
        backgroundColor:"#9E7676",
        ...sx }}>
        <Typography variant="h4">
            <Link href={link} style={{ textDecoration: 'none', color: '#FFF8EA' }}>
                {children}
            </Link>
        </Typography>
    </Card>
    </a>
};
