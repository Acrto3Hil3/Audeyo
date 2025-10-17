import { Avatar, Box, Card, CardContent, Chip, LinearProgress, Typography } from "@mui/material";
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
            <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 3 }}>
                {/* Header */}
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
                            mx: 'auto',
                            lineHeight: 1.7
                        }}
                    >
                        Your data is protected by industry-leading security measures and compliance standards.
                    </Typography>
                </Box>

                {/* Security Features Grid - 2 cards per row */}
                <Box sx={{
                    bgcolor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: 3,
                    p: { xs: 2, md: 3 },
                    mb: 6
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {[0, 2, 4].map((startIndex) => (
                            <Box key={startIndex} sx={{ display: 'flex', gap: 3, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
                                {securityFeatures.slice(startIndex, startIndex + 2).map((feature, index) => (
                                    <motion.div
                                        key={startIndex + index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: (startIndex + index) * 0.1 }}
                                        viewport={{ once: true }}
                                        style={{ flex: 1, display: 'flex', minWidth: { xs: '100%', md: 0 } }}
                                    >
                                        <Card sx={{
                                            p: 3,
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            bgcolor: 'hsl(var(--card))',
                                            border: '1px solid hsl(var(--border))',
                                            borderRadius: 2,
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                                borderColor: feature.color
                                            }
                                        }}>
                                            <CardContent sx={{ p: 0, flexGrow: 1, display: 'flex', flexDirection: 'column', '&:last-child': { pb: 0 } }}>
                                                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                                                    <Avatar
                                                        sx={{
                                                            width: 48,
                                                            height: 48,
                                                            bgcolor: feature.color,
                                                            boxShadow: `0 4px 14px ${feature.color}40`
                                                        }}
                                                    >
                                                        <feature.icon style={{ color: 'white', fontSize: 22 }} />
                                                    </Avatar>
                                                    <Box sx={{ flex: 1 }}>
                                                        <Typography variant="h6" sx={{
                                                            fontWeight: 600,
                                                            mb: 1,
                                                            color: 'hsl(var(--foreground))',
                                                            fontSize: '1.05rem',
                                                            lineHeight: 1.3
                                                        }}>
                                                            {feature.title}
                                                        </Typography>
                                                        <Chip
                                                            label={feature.level}
                                                            size="small"
                                                            sx={{
                                                                bgcolor: feature.color + '20',
                                                                color: feature.color,
                                                                fontSize: '0.7rem',
                                                                fontWeight: 600,
                                                                height: '22px'
                                                            }}
                                                        />
                                                    </Box>
                                                </Box>
                                                <Typography variant="body2" sx={{
                                                    color: 'hsl(var(--muted-foreground))',
                                                    lineHeight: 1.7,
                                                    mt: 'auto'
                                                }}>
                                                    {feature.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Security Stats - 4 per row, evenly distributed */}
                <Box sx={{
                    bgcolor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: 3,
                    p: { xs: 2, md: 3 },
                    mb: 6,
                    display: 'flex',
                    gap: 3,
                    flexWrap: { xs: 'wrap', sm: 'nowrap' }
                }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ flex: 1, display: 'flex', minWidth: { xs: 'calc(50% - 12px)', sm: 0 } }}
                        >
                            <Box sx={{
                                p: { xs: 2.5, md: 3.5 },
                                width: '100%',
                                border: '1px solid hsl(var(--border))',
                                borderRadius: 2,
                                bgcolor: 'hsl(var(--card))',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: { xs: '140px', md: '160px' },
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-6px)',
                                    boxShadow: `0 12px 28px ${stat.color}40`,
                                    borderColor: stat.color
                                }
                            }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 700,
                                        color: stat.color,
                                        mb: 1,
                                        fontSize: { xs: '1.75rem', md: '2.25rem' }
                                    }}
                                >
                                    {stat.value}
                                </Typography>
                                <Typography variant="body1" sx={{
                                    color: 'hsl(var(--muted-foreground))',
                                    fontWeight: 600,
                                    fontSize: { xs: '0.85rem', md: '1rem' }
                                }}>
                                    {stat.label}
                                </Typography>
                            </Box>
                        </motion.div>
                    ))}
                </Box>

                {/* Certifications - 4 per row, evenly distributed */}
                <Box sx={{
                    bgcolor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: 3,
                    p: { xs: 2.5, md: 4 }
                }}>
                    <Typography variant="h5" sx={{
                        fontWeight: 700,
                        mb: 4,
                        textAlign: 'center',
                        color: 'hsl(var(--foreground))',
                        fontSize: { xs: '1.25rem', md: '1.5rem' }
                    }}>
                        Security Certifications & Compliance
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        gap: 3,
                        flexWrap: { xs: 'wrap', sm: 'nowrap' }
                    }}>
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{ flex: 1, display: 'flex', minWidth: { xs: 'calc(50% - 12px)', sm: 0 } }}
                            >
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                    p: 2.5,
                                    width: '100%',
                                    bgcolor: 'hsl(var(--card))',
                                    borderRadius: 2,
                                    border: '1px solid hsl(var(--border))',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 8px 20px rgba(34, 197, 94, 0.2)',
                                        borderColor: '#22c55e'
                                    }
                                }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 2,
                                            bgcolor: '#22c55e20',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <FaCheckCircle style={{ fontSize: 20, color: '#22c55e' }} />
                                        </Box>
                                        <Box sx={{ flex: 1, minWidth: 0 }}>
                                            <Typography variant="body1" sx={{
                                                fontWeight: 600,
                                                color: 'hsl(var(--foreground))',
                                                mb: 0.5,
                                                fontSize: '0.95rem'
                                            }}>
                                                {cert.name}
                                            </Typography>
                                            <Typography variant="caption" sx={{
                                                color: 'hsl(var(--muted-foreground))',
                                                fontSize: '0.75rem'
                                            }}>
                                                {cert.status}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                            <Typography variant="caption" sx={{
                                                color: 'hsl(var(--muted-foreground))',
                                                fontWeight: 600,
                                                fontSize: '0.7rem'
                                            }}>
                                                Compliance Level
                                            </Typography>
                                            <Typography variant="caption" sx={{
                                                color: '#22c55e',
                                                fontWeight: 700,
                                                fontSize: '0.7rem'
                                            }}>
                                                {cert.progress}%
                                            </Typography>
                                        </Box>
                                        <LinearProgress
                                            variant="determinate"
                                            value={cert.progress}
                                            sx={{
                                                height: 8,
                                                borderRadius: 4,
                                                bgcolor: 'hsl(var(--muted))',
                                                '& .MuiLinearProgress-bar': {
                                                    bgcolor: '#22c55e',
                                                    borderRadius: 4
                                                }
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </motion.div>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SecuritySection;