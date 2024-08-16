import { Box } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const hover = {
    "&:hover":{
        textShadow:"31px 1px 2px black"
    }
}


export default function SocialMedia({ sx }) {
    return <Box
        display="flex"
        justifyContent="space-between"
        sx={{
            bgcolor: "#F8EDE3",
            boxShadow: 'none',
            position: 'absolute',
            justifyContent:"center",
            bottom: -20,
            ...sx
        }}>

        <a style={{ textDecoration: "none", color: "#815B5B" }}
            href="https://www.instagram.com/renyickgan" target="_blank"
            rel="noopener noreferrer">
            <InstagramIcon fontSize="large" sx={[hover,{ ml: 3,mr:2 }]} />
        </a>

        <a style={{ textDecoration: "none", color: "#815B5B" }}
            href="https://www.facebook.com/profile.php?id=100009107746541" 
            target="_blank"
            rel="noopener noreferrer">
            <FacebookIcon fontSize="large" sx={[hover,{mr:2}]}/>
        </a>

        <a style={{ textDecoration: "none", color: "#815B5B" }}
            href="https://github.com/ItsMeNengYi" 
            target="_blank"
            rel="noopener noreferrer">
            <GitHubIcon fontSize="large" sx={[hover,{ mr: 3 }]} />
        </a>
    </Box>
};
