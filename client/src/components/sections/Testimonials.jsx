import { Avatar, Box, Card, CardContent, Chip, Divider, Grid, Rating, Typography } from "@mui/material";
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
            <Box sx={{ maxWidth: '100%', mx: 'auto', px: 2 }}>
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
                            mx: 'auto'
                        }}
                    >
                        Join thousands of teams who trust Audeyo for their file storage and collaboration needs.
                    </Typography>
                </Box>

                {/* Featured Testimonials */}
                <Grid container spacing={0} sx={{ mb: 8 }}>
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                        <Grid item xs={12} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card sx={{
                                    p: 3,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    border: '1px solid hsl(var(--border))',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                                    }
                                }}>
                                    {/* Quote Icon */}
                                    <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                                        <FaQuoteLeft style={{ fontSize: 24, color: testimonial.color, opacity: 0.3 }} />
                                    </Box>

                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                        {/* Rating */}
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                            <Rating value={testimonial.rating} readOnly size="small" />
                                            {testimonial.verified && (
                                                <Chip
                                                    label="Verified"
                                                    size="small"
                                                    sx={{
                                                        bgcolor: '#22c55e20',
                                                        color: '#22c55e',
                                                        fontSize: '0.7rem'
                                                    }}
                                                />
                                            )}
                                        </Box>

                                        {/* Content */}
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'hsl(var(--muted-foreground))',
                                                fontStyle: 'italic',
                                                mb: 2.5,
                                                lineHeight: 1.6,
                                                position: 'relative'
                                            }}
                                        >
                                            "{testimonial.content}"
                                        </Typography>

                                        <Divider sx={{ my: 2 }} />

                                        {/* Author */}
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 'auto' }}>
                                            <Avatar
                                                sx={{
                                                    width: 48,
                                                    height: 48,
                                                    bgcolor: testimonial.color,
                                                    fontWeight: 600,
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                {testimonial.avatar}
                                            </Avatar>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography variant="body1" sx={{ fontWeight: 600, color: 'hsl(var(--foreground))' }}>
                                                    {testimonial.name}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'hsl(var(--muted-foreground))', mb: 0.5 }}>
                                                    {testimonial.role} at {testimonial.company}
                                                </Typography>
                                                <Chip
                                                    label={testimonial.industry}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: testimonial.color + '20',
                                                        color: testimonial.color,
                                                        fontSize: '0.7rem'
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* Additional Testimonials */}
                <Box sx={{ mb: 8 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, textAlign: 'center', color: 'hsl(var(--foreground))' }}>
                        More Customer Stories
                    </Typography>
                    <Grid container spacing={3}>
                        {testimonials.slice(3).map((testimonial, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card sx={{
                                        p: 2,
                                        height: '100%',
                                        border: '1px solid hsl(var(--border))',
                                        transition: 'all 0.2s',
                                        '&:hover': {
                                            bgcolor: 'hsl(var(--muted) / 0.3)'
                                        }
                                    }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                            <Avatar sx={{
                                                width: 32,
                                                height: 32,
                                                bgcolor: testimonial.color,
                                                fontSize: '0.8rem'
                                            }}>
                                                {testimonial.avatar}
                                            </Avatar>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography variant="body2" sx={{ fontWeight: 600, color: 'hsl(var(--foreground))' }}>
                                                    {testimonial.name}
                                                </Typography>
                                                <Typography variant="caption" sx={{ color: 'hsl(var(--muted-foreground))' }}>
                                                    {testimonial.role}
                                                </Typography>
                                            </Box>
                                            <Rating value={testimonial.rating} readOnly size="small" />
                                        </Box>
                                        <Typography variant="body2" sx={{
                                            color: 'hsl(var(--muted-foreground))',
                                            fontStyle: 'italic',
                                            fontSize: '0.875rem'
                                        }}>
                                            "{testimonial.content.slice(0, 100)}..."
                                        </Typography>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Stats */}
                <Grid container spacing={4} sx={{ textAlign: 'center' }}>
                    {stats.map((stat, index) => (
                        <Grid item xs={6} md={3} key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Box sx={{ p: 3, border: '1px solid hsl(var(--border))', borderRadius: 2 }}>
                                    <Box sx={{
                                        width: 64,
                                        height: 64,
                                        borderRadius: '50%',
                                        bgcolor: stat.color + '20',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                        mb: 2
                                    }}>
                                        <stat.icon style={{ fontSize: 24, color: stat.color }} />
                                    </Box>
                                    <Typography variant="h3" sx={{ fontWeight: 700, color: stat.color, mb: 1 }}>
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
            </Box>
        </Box>
    );
};

export default Testimonials;
