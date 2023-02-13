import Link from 'next/link'
import { AppBar, Toolbar, IconButton, Typography, Button, Box,Grid } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const textDeco = {
    
    '&:hover':{
        textDecoration:"underline",
        
    },
    textShadow:"#594545 1px 0 10px",
    textDecoration:"none",
    textShadow:"none",
    transition: "textDecoration 1s",
    transitionTimingFunction: "linear",
    color: '#594545',
      
}

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
        <Box sx={{mr:"20px",ml:"20px"}}>
        <Typography
            variant="h4"
            sx={textDeco}
        >
            <Link href="/" style={textDeco}>Home</Link>
        </Typography>
        </Box>
        <Box sx={{mr:"20px"}}>
        <Typography
            variant="h4"
            sx={textDeco}
        >
            <Link href="/project" style={textDeco}>Project</Link>
        </Typography>
        </Box>
    </Box>
};
