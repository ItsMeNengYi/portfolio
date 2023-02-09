import Link from 'next/link'
import { Card, Typography } from "@mui/material"

export default function LinkCard({ children, link }) {
    return <Card sx={{ height:230,px: 2, py: 3, backgroundColor:"#9E7676" }}>
        <Typography variant="h4">
            <Link href={link} style={{ textDecoration: 'none', color: '#FFF8EA' }}>
                {children}
            </Link>
        </Typography>
    </Card>
};
