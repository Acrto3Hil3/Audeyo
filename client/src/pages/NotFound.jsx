import { Link } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";

const NotFound = () => {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', mb: 2 }}>
                    404
                </Typography>
                <Typography variant="h4" sx={{ mb: 1 }}>
                    Page Not Found
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    The page you're looking for doesn't exist or has been moved.
                </Typography>
                <Button component={Link} to="/" variant="contained" size="large">
                    Go back home
                </Button>
            </Box>
        </Box>
    );
};

export default NotFound;