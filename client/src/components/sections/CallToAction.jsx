import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

const CallToAction = () => {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 8, md: 10 },
                background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, #9333ea 100%)',
                color: 'white'
            }}
        >
            <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2, textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Box sx={{ mb: { xs: 3, md: 4 } }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '2rem', lg: '3rem' },
                                fontWeight: 700,
                                mb: 2
                            }}
                        >
                            Ready to transform your file management?
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '1.125rem',
                                opacity: 0.9,
                                maxWidth: '42rem',
                                mx: 'auto'
                            }}
                        >
                            Join thousands of teams who have already made the switch to smarter,
                            more secure file storage and collaboration.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 1.5, md: 2 }, justifyContent: 'center', mb: { xs: 3, md: 4 } }}>
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForward />}
                            sx={{
                                bgcolor: 'white',
                                color: 'hsl(var(--primary))',
                                px: 4,
                                py: 1.5,
                                '&:hover': {
                                    bgcolor: 'rgba(255,255,255,0.9)',
                                    transform: 'translateY(-2px)'
                                },
                                transition: 'all 0.3s'
                            }}
                        >
                            Start Free Trial
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                borderColor: 'white',
                                color: 'white',
                                px: 4,
                                py: 1.5,
                                '&:hover': {
                                    borderColor: 'white',
                                    bgcolor: 'rgba(255,255,255,0.1)'
                                }
                            }}
                        >
                            Talk to Sales
                        </Button>
                    </Box>

                    <Typography variant="body2" sx={{ opacity: 0.85 }}>
                        No credit card required • 14-day free trial • Cancel anytime
                    </Typography>
                </motion.div>
            </Box>
        </Box>
    );
};

export default CallToAction;
