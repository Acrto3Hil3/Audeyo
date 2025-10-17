import { Avatar, Box, Button, Card, Chip, Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
    FaDownload,
    FaEdit,
    FaEye,
    FaFilter,
    FaFolder,
    FaSearch,
    FaShare,
    FaStar,
    FaTags
} from "react-icons/fa";

const FileOrganization = () => {
    const features = [
        {
            icon: FaFolder,
            title: "Smart Folders",
            description: "Automatically organize files by type, date, or custom rules",
            color: "#3b82f6",
            stats: "Auto-categorized"
        },
        {
            icon: FaSearch,
            title: "Instant Search",
            description: "Find any file in seconds with advanced search and filters",
            color: "#a855f7",
            stats: "0.2s results"
        },
        {
            icon: FaTags,
            title: "Smart Tags",
            description: "AI-powered tagging makes files discoverable instantly",
            color: "#22c55e",
            stats: "AI-powered"
        },
        {
            icon: FaFilter,
            title: "Advanced Filters",
            description: "Filter by date, size, type, or any custom criteria",
            color: "#f97316",
            stats: "10+ filters"
        }
    ];

    const fileTypes = [
        { name: "Project Assets", items: "24 items", type: "folder", color: "#3b82f6", lastModified: "2 hours ago" },
        { name: "Design Files", items: "12 items", type: "folder", color: "#8b5cf6", lastModified: "1 day ago" },
        { name: "Documents", items: "8 items", type: "folder", color: "#10b981", lastModified: "3 days ago" },
        { name: "Presentations", items: "5 items", type: "folder", color: "#f59e0b", lastModified: "1 week ago" }
    ];

    const recentFiles = [
        { name: "Q4 Report.pdf", size: "2.4 MB", type: "pdf", modified: "2 hours ago", starred: true },
        { name: "Design System.fig", size: "15.2 MB", type: "figma", modified: "4 hours ago", starred: false },
        { name: "Meeting Notes.docx", size: "1.2 MB", type: "doc", modified: "1 day ago", starred: true },
        { name: "Product Demo.mp4", size: "45.8 MB", type: "video", modified: "2 days ago", starred: false }
    ];

    return (
        <Box component="section" sx={{ py: 10, bgcolor: 'hsl(var(--muted) / 0.5)' }}>
            <Box sx={{ maxWidth: '100%', mx: 'auto', px: 0 }}>
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
                        Your files, organized and accessible
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
                        Experience the joy of finding your files instantly with smart organization and powerful search.
                    </Typography>
                </Box>

                {/* Three Column Layout: 1) All Feature Cards, 2) My Files, 3) Recent Files */}
                <Grid container spacing={3} sx={{ px: { xs: 2, md: 3 }, mb: 6 }} alignItems="stretch">
                    {/* Column 1 - Feature Cards stacked */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    viewport={{ once: true }}
                                >
                                    <Card sx={{
                                        p: 3,
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        bgcolor: 'hsl(var(--card))',
                                        border: '1px solid hsl(var(--border))',
                                        borderRadius: 3,
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-6px)',
                                            boxShadow: '0 12px 28px rgba(0,0,0,0.15)'
                                        }
                                    }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                                            <Avatar sx={{ width: 48, height: 48, bgcolor: feature.color, boxShadow: `0 4px 14px ${feature.color}50` }}>
                                                <feature.icon style={{ color: 'white', fontSize: 22 }} />
                                            </Avatar>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'hsl(var(--foreground))', fontSize: '1.05rem', lineHeight: 1.3 }}>
                                                    {feature.title}
                                                </Typography>
                                                <Chip label={feature.stats} size="small" sx={{ bgcolor: feature.color + '20', color: feature.color, fontSize: '0.7rem', fontWeight: 600, height: '22px' }} />
                                            </Box>
                                        </Box>
                                        <Typography variant="body2" sx={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.7 }}>
                                            {feature.description}
                                        </Typography>
                                    </Card>
                                </motion.div>
                            ))}
                        </Box>
                    </Grid>

                    {/* Column 2 - My Files */}
                    <Grid item xs={12} md={4}>
                        <Card sx={{ width: '100%', borderRadius: 3, border: '1px solid hsl(var(--border))', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
                            <Box sx={{ p: 3, borderBottom: '1px solid hsl(var(--border))', bgcolor: 'hsl(var(--muted) / 0.3)' }}>
                                <Typography variant="h6" sx={{ fontWeight: 700, color: 'hsl(var(--foreground))', mb: 2, fontSize: '1.15rem' }}>
                                    My Files
                                </Typography>
                                <Paper elevation={0} sx={{ p: 2, bgcolor: 'hsl(var(--background))', display: 'flex', alignItems: 'center', gap: 2, border: '1px solid hsl(var(--border))', borderRadius: 2 }}>
                                    <FaSearch style={{ fontSize: 16, color: 'hsl(var(--muted-foreground))' }} />
                                    <Typography variant="body2" sx={{ color: 'hsl(var(--muted-foreground))' }}>
                                        Search files...
                                    </Typography>
                                </Paper>
                            </Box>
                            <Box sx={{ p: 2.5 }}>
                                <Typography variant="subtitle2" sx={{ mb: 2, color: 'hsl(var(--muted-foreground))', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                                    Folders
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                    {fileTypes.map((file, index) => (
                                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, borderRadius: 2, bgcolor: 'hsl(var(--muted) / 0.3)', border: '1px solid transparent', transition: 'all 0.25s ease', cursor: 'pointer', '&:hover': { bgcolor: 'hsl(var(--muted) / 0.5)', borderColor: file.color } }}>
                                            <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: file.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <FaFolder style={{ fontSize: 20, color: file.color }} />
                                            </Box>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography variant="body2" sx={{ fontWeight: 600, color: 'hsl(var(--foreground))', mb: 0.5 }}>
                                                    {file.name}
                                                </Typography>
                                                <Typography variant="caption" sx={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.75rem' }}>
                                                    {file.items} • {file.lastModified}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', gap: 1.5, opacity: 0.6, '&:hover': { opacity: 1 }, transition: 'opacity 0.2s' }}>
                                                <FaEye style={{ fontSize: 14, color: 'hsl(var(--muted-foreground))' }} />
                                                <FaShare style={{ fontSize: 14, color: 'hsl(var(--muted-foreground))' }} />
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Card>
                    </Grid>

                    {/* Column 3 - Recent Files */}
                    <Grid item xs={12} md={4}>
                        <Card sx={{ width: '100%', borderRadius: 3, border: '1px solid hsl(var(--border))', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
                            <Box sx={{ p: 3, borderBottom: '1px solid hsl(var(--border))', bgcolor: 'hsl(var(--muted) / 0.3)' }}>
                                <Typography variant="h6" sx={{ fontWeight: 700, color: 'hsl(var(--foreground))', fontSize: '1.15rem' }}>
                                    Recent Files
                                </Typography>
                            </Box>
                            <Box sx={{ p: 2.5 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                    {recentFiles.map((file, index) => (
                                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, borderRadius: 2, bgcolor: 'hsl(var(--muted) / 0.3)', border: '1px solid transparent', transition: 'all 0.25s ease', cursor: 'pointer', '&:hover': { bgcolor: 'hsl(var(--muted) / 0.5)', borderColor: 'hsl(var(--border))' } }}>
                                            <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: file.type === 'pdf' ? '#ff0000' : file.type === 'figma' ? '#f24e1e' : file.type === 'doc' ? '#2b579a' : '#4ecdc4', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                                                <Typography variant="caption" sx={{ color: 'white', fontWeight: 700, fontSize: '0.7rem' }}>
                                                    {file.type.toUpperCase().slice(0, 3)}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ flex: 1 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                                                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'hsl(var(--foreground))' }}>
                                                        {file.name}
                                                    </Typography>
                                                    {file.starred && <FaStar style={{ fontSize: 13, color: '#fbbf24' }} />}
                                                </Box>
                                                <Typography variant="caption" sx={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.75rem' }}>
                                                    {file.size} • {file.modified}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', gap: 1.5, opacity: 0.6, '&:hover': { opacity: 1 }, transition: 'opacity 0.2s' }}>
                                                <FaDownload style={{ fontSize: 14, color: 'hsl(var(--muted-foreground))' }} />
                                                <FaEdit style={{ fontSize: 14, color: 'hsl(var(--muted-foreground))' }} />
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>

                {/* CTA Button - Below Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: 'hsl(var(--primary))',
                                color: 'hsl(var(--primary-foreground))',
                                px: 5,
                                py: 1.75,
                                fontSize: '1.05rem',
                                fontWeight: 600,
                                borderRadius: 9999,
                                boxShadow: '0 4px 14px hsl(var(--primary) / 0.4)',
                                '&:hover': {
                                    bgcolor: 'hsl(var(--primary-hover))',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 8px 24px hsl(var(--primary) / 0.5)'
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Explore Organization
                        </Button>
                    </Box>
                </motion.div>
            </Box>
        </Box>
    );
};

export default FileOrganization;