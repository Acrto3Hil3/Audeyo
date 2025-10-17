import { Avatar, Box, Card, CardContent, Chip, Grid, LinearProgress, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
    FaCheckCircle,
    FaDatabase,
    FaEye,
    FaFingerprint,
    FaLock,
    FaShieldAlt
} from "react-icons/fa";
const SecuritySection = () => {
    const securityFeatures = [
        {
            icon: FaShieldAlt,
            title: "End-to-End Encryption",
            description: "Your files are encrypted before they leave your device and remain encrypted at rest.",
            color: "#3b82f6",
            level: "Enterprise"
        },
        {
            icon: FaLock,
            title: "Zero-Knowledge Architecture",
            description: "We can't see your files. Only you have access to your encryption keys.",
            color: "#a855f7",
            level: "Advanced"
        },
        {
            icon: FaEye,
            title: "Granular Permissions",
            description: "Control exactly who can view, edit, or share each file and folder.",
            color: "#22c55e",
            level: "Standard"
        },
        {
            icon: FaCheckCircle,
            title: "Compliance Ready",
            description: "GDPR, HIPAA, and SOC 2 compliant infrastructure and processes.",
            color: "#f97316",
            level: "Certified"
        },
        {
            icon: FaFingerprint,
            title: "Biometric Authentication",
            description: "Secure access with fingerprint and face recognition on supported devices.",
            color: "#8b5cf6",
            level: "Premium"
        },
        {
            icon: FaDatabase,
            title: "Data Residency",
            description: "Choose where your data is stored with regional data centers worldwide.",
            color: "#06b6d4",
            level: "Global"
        }
    ];

    const stats = [
        { value: "99.99%", label: "Uptime SLA", color: "#22c55e" },
        { value: "AES-256", label: "Encryption Standard", color: "#3b82f6" },
        { value: "24/7", label: "Security Monitoring", color: "#f97316" },
        { value: "SOC 2", label: "Compliance", color: "#8b5cf6" }
    ];

    const certifications = [
        { name: "SOC 2 Type II", status: "Certified", progress: 100 },
        { name: "ISO 27001", status: "Certified", progress: 100 },
        { name: "GDPR", status: "Compliant", progress: 100 },
        { name: "HIPAA", status: "Compliant", progress: 95 }
    ];

    return (
        <Box component="section" sx={{ py: 10, bgcolor: 'hsl(var(--muted) / 0.35)' }}>
            <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
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
                        Security you can trust
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
                        Your data is protected by industry-leading security measures and compliance standards.
                    </Typography>
                </Box>

                {/* Security Features Grid: 2 cards per row on md+ */}
                <Grid container spacing={3} sx={{ mb: 8 }} alignItems="stretch">
                    {securityFeatures.map((feature, index) => (
                        <Grid item xs={12} md={6} key={index} sx={{ display: 'flex' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{ width: '100%' }}
                            >
                                <Card sx={{
                                    p: 3,
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    border: '1px solid hsl(var(--border))',
                                    borderRadius: 3,
                                    boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 16px 32px rgba(0,0,0,0.12)'
                                    }
                                }}>
                                    <CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                            <Avatar
                                                sx={{
                                                    width: 48,
                                                    height: 48,
                                                    bgcolor: feature.color,
                                                    boxShadow: `0 4px 12px ${feature.color}40`
                                                }}
                                            >
                                                <feature.icon style={{ color: 'white', fontSize: 24 }} />
                                            </Avatar>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, color: 'hsl(var(--foreground))' }}>
                                                    {feature.title}
                                                </Typography>
                                                <Chip
                                                    label={feature.level}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: feature.color + '20',
                                                        color: feature.color,
                                                        fontSize: '0.7rem'
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                        <Typography variant="body2" sx={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.5 }}>
                                            {feature.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* Security Stats: single row on md+ */}
                <Grid container spacing={4} sx={{ mb: 8 }} alignItems="stretch">
                    {stats.map((stat, index) => (
                        <Grid item xs={6} md={3} key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Box sx={{ textAlign: 'center', p: { xs: 2, md: 3 }, border: '1px solid hsl(var(--border))', borderRadius: 2, height: '100%', bgcolor: 'hsl(var(--background))' }}>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontWeight: 700,
                                            color: stat.color,
                                            mb: 1
                                        }}
                                    >
                                        {stat.value}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'hsl(var(--muted-foreground))' }}>
                                        {stat.label}
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* Certifications: single row on md+ */}
                <Box sx={{
                    bgcolor: 'hsl(var(--muted) / 0.3)',
                    borderRadius: 3,
                    p: { xs: 3, md: 4 },
                    mb: 6
                }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, textAlign: 'center', color: 'hsl(var(--foreground))' }}>
                        Security Certifications & Compliance
                    </Typography>
                    <Grid container spacing={3} alignItems="stretch">
                        {certifications.map((cert, index) => (
                            <Grid item xs={12} md={3} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        p: 2,
                                        height: '100%',
                                        bgcolor: 'hsl(var(--background))',
                                        borderRadius: 2,
                                        border: '1px solid hsl(var(--border))',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                        '&:hover': {
                                            transform: 'translateY(-3px)',
                                            boxShadow: '0 12px 24px rgba(0,0,0,0.12)'
                                        }
                                    }}>
                                        <FaCheckCircle style={{ fontSize: 20, color: '#22c55e' }} />
                                        <Box sx={{ flex: 1 }}>
                                            <Typography variant="body1" sx={{ fontWeight: 500, color: 'hsl(var(--foreground))' }}>
                                                {cert.name}
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: 'hsl(var(--muted-foreground))' }}>
                                                {cert.status}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ width: 60 }}>
                                            <LinearProgress
                                                variant="determinate"
                                                value={cert.progress}
                                                sx={{
                                                    height: 6,
                                                    borderRadius: 3,
                                                    bgcolor: 'hsl(var(--muted))',
                                                    '& .MuiLinearProgress-bar': {
                                                        bgcolor: '#22c55e'
                                                    }
                                                }}
                                            />
                                        </Box>
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

export default SecuritySection;
