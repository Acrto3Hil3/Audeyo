import { Avatar, Box, Card, CardContent, Chip, Divider, Rating, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
    FaAward,
    FaHeart,
    FaQuoteLeft,
    FaRocket,
    FaThumbsUp
} from "react-icons/fa";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Chen",
            role: "Product Manager",
            company: "TechFlow Inc.",
            content: "Audeyo has transformed how our team collaborates. The seamless file sharing and real-time editing features have increased our productivity by 40%.",
            rating: 5,
            avatar: "SC",
            color: "#3b82f6",
            verified: true,
            industry: "Technology"
        },
        {
            name: "Marcus Rodriguez",
            role: "Creative Director",
            company: "Design Studio",
            content: "The advanced file preview and organization features are game-changing. We can preview and edit large design files without downloading them.",
            rating: 5,
            avatar: "MR",
            color: "#8b5cf6",
            verified: true,
            industry: "Design"
        },
        {
            name: "Emily Watson",
            role: "Operations Lead",
            company: "Global Enterprises",
            content: "Security and compliance features give us peace of mind. The granular permissions and audit logs are exactly what we needed for enterprise use.",
            rating: 5,
            avatar: "EW",
            color: "#22c55e",
            verified: true,
            industry: "Enterprise"
        },
        {
            name: "David Kim",
            role: "CTO",
            company: "StartupXYZ",
            content: "The API integration was seamless. We built our entire workflow around Audeyo and it just works. Customer support is phenomenal.",
            rating: 5,
            avatar: "DK",
            color: "#f59e0b",
            verified: true,
            industry: "Startup"
        },
        {
            name: "Lisa Thompson",
            role: "Marketing Director",
            company: "Creative Agency",
            content: "File organization and sharing capabilities are outstanding. Our team can now collaborate on campaigns more efficiently than ever before.",
            rating: 5,
            avatar: "LT",
            color: "#ef4444",
            verified: true,
            industry: "Marketing"
        },
        {
            name: "James Wilson",
            role: "IT Director",
            company: "Healthcare Corp",
            content: "Compliance and security features are exactly what we needed. HIPAA compliance and audit trails give us confidence in our data security.",
            rating: 5,
            avatar: "JW",
            color: "#06b6d4",
            verified: true,
            industry: "Healthcare"
        }
    ];

    const stats = [
        { value: "50M+", label: "Files Stored", icon: FaRocket, color: "#3b82f6" },
        { value: "10K+", label: "Teams", icon: FaHeart, color: "#ef4444" },
        { value: "99.9%", label: "Satisfaction", icon: FaThumbsUp, color: "#22c55e" },
        { value: "24/7", label: "Support", icon: FaAward, color: "#f59e0b" }
    ];

    return (
        <Box component="section" sx={{ py: 10, bgcolor: 'hsl(var(--muted) / 0.4)' }}>
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
                        Loved by teams worldwide
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
                        Join thousands of teams who trust Audeyo for their file storage and collaboration needs.
                    </Typography>
                </Box>

                {/* Featured Testimonials - One per row, full width */}
                <Box sx={{
                    bgcolor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: 3,
                    p: { xs: 2, md: 3 },
                    mb: 6
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {testimonials.slice(0, 3).map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card sx={{
                                    p: { xs: 2.5, md: 4 },
                                    width: '100%',
                                    position: 'relative',
                                    bgcolor: 'hsl(var(--card))',
                                    border: '1px solid hsl(var(--border))',
                                    borderRadius: 2,
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 12px 28px rgba(0,0,0,0.15)',
                                        borderColor: testimonial.color
                                    }
                                }}>
                                    {/* Quote Icon */}
                                    <Box sx={{
                                        position: 'absolute',
                                        top: { xs: 16, md: 24 },
                                        right: { xs: 16, md: 24 },
                                        width: { xs: 40, md: 50 },
                                        height: { xs: 40, md: 50 },
                                        borderRadius: 2,
                                        bgcolor: testimonial.color + '15',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <FaQuoteLeft style={{ fontSize: 22, color: testimonial.color }} />
                                    </Box>

                                    <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                                        {/* Rating and Verified Badge */}
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                                            <Rating value={testimonial.rating} readOnly size="medium" sx={{ color: '#fbbf24' }} />
                                            {testimonial.verified && (
                                                <Chip
                                                    label="Verified Customer"
                                                    size="small"
                                                    sx={{
                                                        bgcolor: '#22c55e20',
                                                        color: '#22c55e',
                                                        fontSize: '0.75rem',
                                                        fontWeight: 600,
                                                        height: '24px'
                                                    }}
                                                />
                                            )}
                                            <Chip
                                                label={testimonial.industry}
                                                size="small"
                                                sx={{
                                                    bgcolor: testimonial.color + '20',
                                                    color: testimonial.color,
                                                    fontSize: '0.75rem',
                                                    fontWeight: 600,
                                                    height: '24px'
                                                }}
                                            />
                                        </Box>

                                        {/* Content */}
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'hsl(var(--foreground))',
                                                mb: 3,
                                                lineHeight: 1.8,
                                                fontSize: { xs: '1rem', md: '1.125rem' },
                                                pr: { xs: 0, md: 8 }
                                            }}
                                        >
                                            "{testimonial.content}"
                                        </Typography>

                                        <Divider sx={{ my: 3 }} />

                                        {/* Author Info */}
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                                            <Avatar
                                                sx={{
                                                    width: { xs: 56, md: 64 },
                                                    height: { xs: 56, md: 64 },
                                                    bgcolor: testimonial.color,
                                                    fontWeight: 700,
                                                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                                                    boxShadow: `0 4px 14px ${testimonial.color}50`
                                                }}
                                            >
                                                {testimonial.avatar}
                                            </Avatar>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography variant="h6" sx={{
                                                    fontWeight: 700,
                                                    color: 'hsl(var(--foreground))',
                                                    mb: 0.5,
                                                    fontSize: { xs: '1rem', md: '1.15rem' }
                                                }}>
                                                    {testimonial.name}
                                                </Typography>
                                                <Typography variant="body2" sx={{
                                                    color: 'hsl(var(--muted-foreground))',
                                                    mb: 0.5,
                                                    fontSize: { xs: '0.875rem', md: '0.95rem' }
                                                }}>
                                                    {testimonial.role}
                                                </Typography>
                                                <Typography variant="body2" sx={{
                                                    color: 'hsl(var(--muted-foreground))',
                                                    fontWeight: 600,
                                                    fontSize: { xs: '0.85rem', md: '0.9rem' }
                                                }}>
                                                    {testimonial.company}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </Box>
                </Box>

                {/* Additional Testimonials - One per row, full width */}
                <Box sx={{
                    bgcolor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: 3,
                    p: { xs: 2, md: 3 },
                    mb: 6
                }}>
                    <Typography variant="h5" sx={{
                        fontWeight: 700,
                        mb: 4,
                        textAlign: 'center',
                        color: 'hsl(var(--foreground))',
                        fontSize: { xs: '1.25rem', md: '1.5rem' }
                    }}>
                        More Customer Stories
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {testimonials.slice(3).map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card sx={{
                                    p: { xs: 2.5, md: 3.5 },
                                    width: '100%',
                                    bgcolor: 'hsl(var(--card))',
                                    border: '1px solid hsl(var(--border))',
                                    borderRadius: 2,
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'visible',
                                    '&:hover': {
                                        transform: 'translateX(6px)',
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                        borderColor: testimonial.color
                                    },
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '4px',
                                        bgcolor: testimonial.color,
                                        borderRadius: '2px 0 0 2px',
                                        transition: 'width 0.3s ease'
                                    },
                                    '&:hover::before': {
                                        width: '6px'
                                    }
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', md: 'row' },
                                        gap: { xs: 2.5, md: 3 },
                                        alignItems: { xs: 'flex-start', md: 'center' },
                                        width: '100%'
                                    }}>
                                        {/* Left Side - Avatar and Author Info */}
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 2,
                                            minWidth: { xs: '100%', md: '300px' },
                                            width: { xs: '100%', md: 'auto' }
                                        }}>
                                            <Avatar sx={{
                                                width: { xs: 60, md: 70 },
                                                height: { xs: 60, md: 70 },
                                                bgcolor: testimonial.color,
                                                fontSize: { xs: '1.1rem', md: '1.3rem' },
                                                fontWeight: 700,
                                                boxShadow: `0 4px 14px ${testimonial.color}50`,
                                                flexShrink: 0
                                            }}>
                                                {testimonial.avatar}
                                            </Avatar>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography variant="h6" sx={{
                                                    fontWeight: 700,
                                                    color: 'hsl(var(--foreground))',
                                                    mb: 0.5,
                                                    fontSize: { xs: '1.05rem', md: '1.15rem' }
                                                }}>
                                                    {testimonial.name}
                                                </Typography>
                                                <Typography variant="body2" sx={{
                                                    color: 'hsl(var(--muted-foreground))',
                                                    fontSize: { xs: '0.875rem', md: '0.95rem' },
                                                    mb: 0.5
                                                }}>
                                                    {testimonial.role}
                                                </Typography>
                                                <Typography variant="body2" sx={{
                                                    color: 'hsl(var(--muted-foreground))',
                                                    fontWeight: 600,
                                                    fontSize: { xs: '0.85rem', md: '0.9rem' }
                                                }}>
                                                    {testimonial.company}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Center - Content */}
                                        <Box sx={{ flex: 1, width: { xs: '100%', md: 'auto' } }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, flexWrap: 'wrap' }}>
                                                <Rating value={testimonial.rating} readOnly size="small" sx={{ color: '#fbbf24' }} />
                                                {testimonial.verified && (
                                                    <Chip
                                                        label="Verified"
                                                        size="small"
                                                        sx={{
                                                            bgcolor: '#22c55e20',
                                                            color: '#22c55e',
                                                            fontSize: '0.7rem',
                                                            fontWeight: 600,
                                                            height: '22px'
                                                        }}
                                                    />
                                                )}
                                                <Chip
                                                    label={testimonial.industry}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: testimonial.color + '20',
                                                        color: testimonial.color,
                                                        fontSize: '0.7rem',
                                                        fontWeight: 600,
                                                        height: '22px'
                                                    }}
                                                />
                                            </Box>
                                            <Typography variant="body1" sx={{
                                                color: 'hsl(var(--foreground))',
                                                fontSize: { xs: '0.95rem', md: '1.05rem' },
                                                lineHeight: 1.7
                                            }}>
                                                "{testimonial.content}"
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Card>
                            </motion.div>
                        ))}
                    </Box>
                </Box>

                {/* Stats - 4 per row, full width coverage */}
                <Box sx={{
                    bgcolor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: 3,
                    p: { xs: 2, md: 3 },
                    display: 'flex',
                    gap: 3
                }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ flex: 1, display: 'flex' }}
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
                                minHeight: { xs: '160px', md: '180px' },
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-6px)',
                                    boxShadow: `0 12px 28px ${stat.color}40`,
                                    borderColor: stat.color
                                }
                            }}>
                                <Box sx={{
                                    width: { xs: 64, md: 72 },
                                    height: { xs: 64, md: 72 },
                                    borderRadius: '50%',
                                    bgcolor: stat.color + '20',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 2.5,
                                    boxShadow: `0 6px 16px ${stat.color}35`
                                }}>
                                    <stat.icon style={{ fontSize: 28, color: stat.color }} />
                                </Box>
                                <Typography variant="h3" sx={{
                                    fontWeight: 700,
                                    color: stat.color,
                                    mb: 1,
                                    fontSize: { xs: '2rem', md: '2.5rem' }
                                }}>
                                    {stat.value}
                                </Typography>
                                <Typography variant="body1" sx={{
                                    color: 'hsl(var(--muted-foreground))',
                                    fontWeight: 600,
                                    fontSize: { xs: '0.9rem', md: '1.05rem' }
                                }}>
                                    {stat.label}
                                </Typography>
                            </Box>
                        </motion.div>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Testimonials;