import { ArrowForward } from "@mui/icons-material";
import { Avatar, Box, Button, Card, Chip, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
    FaChartLine,
    FaLock,
    FaShareAlt,
    FaSync,
    FaUpload,
    FaUsers
} from "react-icons/fa";

const HowItWorks = () => {
    const steps = [
        {
            icon: FaUpload,
            title: "Upload & Organize",
            description: "Drag and drop files or folders. Our smart organization system automatically categorizes your content.",
            color: "#3b82f6",
            features: ["Smart categorization", "Bulk upload", "Auto-tagging"],
            step: "01"
        },
        {
            icon: FaShareAlt,
            title: "Share & Collaborate",
            description: "Invite team members, set permissions, and collaborate in real-time on any device, anywhere.",
            color: "#a855f7",
            features: ["Real-time sync", "Permission controls", "Team workspaces"],
            step: "02"
        },
        {
            icon: FaChartLine,
            title: "Monitor & Manage",
            description: "Track file activity, manage versions, and maintain complete control over your digital workspace.",
            color: "#22c55e",
            features: ["Activity tracking", "Version control", "Analytics"],
            step: "03"
        }
    ];

    const additionalFeatures = [
        { icon: FaUsers, text: "Team Collaboration" },
        { icon: FaLock, text: "Enterprise Security" },
        { icon: FaSync, text: "Real-time Sync" }
    ];

    return (
        <Box component="section" sx={{ py: 10, bgcolor: 'hsl(var(--muted) / 0.35)' }}>
            <Box sx={{ maxWidth: '100%', mx: 'auto', px: 0 }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', lg: '3rem' },
                            fontWeight: 700,
                            mb: 2,
                            color: 'hsl(var(--foreground))'
                        }}
                    >
                        How Audeyo Works
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.125rem',
                            color: 'hsl(var(--muted-foreground))',
                            maxWidth: '42rem',
                            mx: 'auto'
                        }}
                    >
                        Get started in minutes with our intuitive three-step process
                    </Typography>
                </Box>

                {/* Steps */}
                <Grid container spacing={0} sx={{ mb: 8 }}>
                    {steps.map((step, index) => (
                        <Grid item xs={12} key={index} sx={{ p: 3, width: '100%' }}>
                            <motion.div
                                style={{ width: '100%' }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card sx={{
                                    p: { xs: 3, md: 4 },
                                    width: '100%',
                                    height: '100%',
                                    boxSizing: 'border-box',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: 0,
                                    bgcolor: 'hsl(var(--background))',
                                    border: '1px solid hsl(var(--border))',
                                    boxShadow: 'inset 0 -1px 0 hsl(var(--border)), 0 8px 24px rgba(0,0,0,0.06)',
                                    backgroundImage: `linear-gradient(135deg, ${step.color}0f 0%, transparent 50%)`,
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                                        borderColor: step.color,
                                        backgroundImage: `linear-gradient(135deg, ${step.color}18 0%, transparent 60%)`
                                    },
                                    transition: 'all 0.3s ease'
                                }}>
                                    {/* Step Number */}
                                    <Box sx={{
                                        position: 'absolute',
                                        top: 20,
                                        right: 20,
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        bgcolor: step.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        boxShadow: `0 4px 12px ${step.color}40`
                                    }}>
                                        {step.step}
                                    </Box>

                                    {/* Icon */}
                                    <Avatar
                                        sx={{
                                            width: 88,
                                            height: 88,
                                            bgcolor: step.color,
                                            alignSelf: { xs: 'flex-start', md: 'flex-start' },
                                            mb: 2,
                                            boxShadow: `0 12px 32px ${step.color}40`
                                        }}
                                    >
                                        <step.icon style={{ fontSize: 48, color: 'white' }} />
                                    </Avatar>

                                    {/* Content */}
                                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 1.5, color: 'hsl(var(--foreground))', lineHeight: 1.2 }}>
                                        {step.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'hsl(var(--muted-foreground))', mb: 3, lineHeight: 1.8, fontSize: '1.05rem', maxWidth: '100%' }}>
                                        {step.description}
                                    </Typography>

                                    {/* Features */}
                                    <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
                                        {step.features.map((feature, featureIndex) => (
                                            <Chip
                                                key={featureIndex}
                                                label={feature}
                                                size="small"
                                                sx={{
                                                    bgcolor: step.color + '15',
                                                    color: step.color,
                                                    fontSize: '0.8rem',
                                                    fontWeight: 500,
                                                    border: `1px solid ${step.color}30`
                                                }}
                                            />
                                        ))}
                                    </Box>

                                    {/* Action Button */}
                                    <Button
                                        variant="contained"
                                        size="large"
                                        endIcon={<ArrowForward sx={{ fontSize: 18 }} />}
                                        sx={{
                                            bgcolor: step.color,
                                            color: 'white',
                                            px: 4,
                                            py: 1.5,
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            '&:hover': {
                                                bgcolor: step.color,
                                                transform: 'translateY(-2px)',
                                                boxShadow: `0 8px 20px ${step.color}40`
                                            },
                                            transition: 'all 0.3s',
                                            alignSelf: 'center',
                                            mt: 'auto'
                                        }}
                                    >
                                        Learn More
                                    </Button>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* Additional Features */}
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: 'hsl(var(--foreground))' }}>
                        Plus much more
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        {additionalFeatures.map((feature, index) => (
                            <Grid item xs={6} sm={4} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        p: 2,
                                        borderRadius: 2,
                                        bgcolor: 'hsl(var(--background))',
                                        border: '1px solid hsl(var(--border))',
                                        transition: 'all 0.2s',
                                        '&:hover': {
                                            bgcolor: 'hsl(var(--muted) / 0.3)',
                                            transform: 'translateY(-2px)'
                                        }
                                    }}>
                                        <feature.icon style={{ fontSize: '20px', color: 'hsl(var(--primary))' }} />
                                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                            {feature.text}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default HowItWorks;
