import Link from 'next/link'
import { Card, Typography } from "@mui/material"

export default function LinkCard({ children, link }) {
    return <Card sx={{ px: 2, py: 3 }}>
        <Typography variant="h4">
            <Link href={link} style={{ textDecoration: 'none', color: 'black' }}>
                {children}
            </Link>
        </Typography>
    </Card>
};
