import Link from 'next/link'
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar(props) {
    const { sx } = props
    return <Box
        display="flex"
        justifyContent="center"
        sx={{
            bgcolor: "#F8EDE3",
            boxShadow: 'none',
            position: 'absolute',
            top: -30,
            ...sx
        }}
    >
        <Typography
            variant="h4"
            sx={{

                bgcolor: "#F8EDE3"
            }}
        >
            <Link href="/" style={{ textDecoration: 'none', color: 'black', marginLeft: "20px", marginRight: "20px" }}>Home</Link>
        </Typography>
        <Typography
            variant="h4"
            sx={{

                bgcolor: "#F8EDE3"
            }}
        >
            <Link href="/project" style={{ textDecoration: 'none', color: 'black', marginRight: "20px" }}>Project</Link>
        </Typography>
    </Box>
};
