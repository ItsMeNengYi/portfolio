import { Box } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function SocialMedia({ sx}) {
    return <Box
        display="flex"
        justifyContent="space-between"
        sx={{
            bgcolor: "#F8EDE3",
            boxShadow: 'none',
            position: 'absolute',
            bottom: -20,
            width: 0.2,
            ...sx
        }}
    >
        <InstagramIcon fontSize="large" sx={{ ml: 3 }}/>
        <FacebookIcon fontSize="large" />
        <GitHubIcon fontSize="large"  sx={{ mr: 3 }}/>
    </Box>
};
