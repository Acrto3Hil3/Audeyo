import { Description, Image, MusicNote, VideoLibrary } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardContent, Chip, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
    FaFileArchive,
    FaFileAudio,
    FaFileCode,
    FaFileExcel,
    FaFileImage,
    FaFilePdf,
    FaFilePowerpoint,
    FaFileVideo,
    FaFileWord
} from "react-icons/fa";

const AdvancedFilePreview = () => {
    const fileTypes = [
        { icon: FaFilePdf, text: "PDF Documents", color: "#FF0000", count: "50+ formats" },
        { icon: FaFileWord, text: "Word Documents", color: "#2B579A", count: "15+ formats" },
        { icon: FaFileExcel, text: "Spreadsheets", color: "#217346", count: "12+ formats" },
        { icon: FaFilePowerpoint, text: "Presentations", color: "#D24726", count: "8+ formats" },
        { icon: FaFileImage, text: "Images & Photos", color: "#FF6B6B", count: "30+ formats" },
        { icon: FaFileVideo, text: "Videos", color: "#4ECDC4", count: "20+ formats" },
        { icon: FaFileAudio, text: "Audio Files", color: "#45B7D1", count: "15+ formats" },
        { icon: FaFileCode, text: "Code Files", color: "#96CEB4", count: "25+ formats" },
        { icon: FaFileArchive, text: "Archives", color: "#FFEAA7", count: "10+ formats" }
    ];

    const previewFeatures = [
        { type: "Document", count: "50+ formats", icon: Description, description: "View and edit documents" },
        { type: "Image", count: "30+ formats", icon: Image, description: "High-quality image preview" },
        { type: "Video", count: "20+ formats", icon: VideoLibrary, description: "Stream videos instantly" },
        { type: "Audio", count: "15+ formats", icon: MusicNote, description: "Play audio files" }
    ];

    return (
        <Box component="section" sx={{ py: 10, bgcolor: 'hsl(var(--muted) / 0.4)' }}>
            <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
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
                        Advanced File Preview
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
                        Preview documents, images, and videos directly in your browser.
                        No downloads required. Work with over 100+ file formats seamlessly.
                    </Typography>
                </Box>

                {/* File Type Cards */}
                <Box sx={{ bgcolor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 3, p: { xs: 2, md: 3 }, mb: 8 }}>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)'
                        },
                        gap: 3,
                        alignItems: 'stretch'
                    }}>
                        {fileTypes.map((fileType, index) => {
                            const FileIcon = fileType.icon;
                            return (
                                <Box key={index} sx={{ height: '100%' }}>
                                    <motion.div
                                        style={{ width: '100%', height: '100%', display: 'flex' }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Card sx={{
                                            p: 3,
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            bgcolor: 'hsl(var(--card))',
                                            border: '1px solid hsl(var(--border))',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                                            }
                                        }}>
                                            <CardContent sx={{ p: 0, flexGrow: 1, display: 'flex', flexDirection: 'column', '&:last-child': { pb: 0 } }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                                    <Avatar sx={{
                                                        width: 48,
                                                        height: 48,
                                                        bgcolor: fileType.color,
                                                        boxShadow: `0 4px 12px ${fileType.color}40`
                                                    }}>
                                                        <FileIcon style={{ fontSize: 24, color: 'white' }} />
                                                    </Avatar>
                                                    <Box sx={{ flex: 1 }}>
                                                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, color: 'hsl(var(--foreground))', fontSize: '1rem', lineHeight: 1.3 }}>
                                                            {fileType.text}
                                                        </Typography>
                                                        <Chip
                                                            label={fileType.count}
                                                            size="small"
                                                            sx={{
                                                                bgcolor: fileType.color + '20',
                                                                color: fileType.color,
                                                                fontSize: '0.7rem',
                                                                height: '20px'
                                                            }}
                                                        />
                                                    </Box>
                                                </Box>
                                                <Typography variant="body2" sx={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, mt: 'auto' }}>
                                                    Preview and interact with {fileType.text.toLowerCase()} without downloading.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>

                {/* Preview Features Stats */}
                <Grid container spacing={4} sx={{ mb: 8 }}>
                    {previewFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Box sx={{ textAlign: 'center', p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Avatar sx={{
                                            width: 64,
                                            height: 64,
                                            bgcolor: 'hsl(var(--primary))',
                                            mb: 2,
                                            boxShadow: '0 8px 24px hsl(var(--primary) / 0.3)'
                                        }}>
                                            <Icon sx={{ fontSize: 32 }} />
                                        </Avatar>
                                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'hsl(var(--foreground))' }}>
                                            {feature.count}
                                        </Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'hsl(var(--foreground))' }}>
                                            {feature.type}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'hsl(var(--muted-foreground))' }}>
                                            {feature.description}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Grid>
                        );
                    })}
                </Grid>

                {/* CTA Section */}
                <Box sx={{ textAlign: 'center' }}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            bgcolor: 'hsl(var(--primary))',
                            color: 'hsl(var(--primary-foreground))',
                            px: 6,
                            py: 2,
                            fontSize: '1.1rem',
                            '&:hover': {
                                bgcolor: 'hsl(var(--primary-hover))',
                                transform: 'translateY(-2px)'
                            },
                            transition: 'all 0.3s'
                        }}
                    >
                        Try Preview Now
                    </Button>
                </Box>
            </Box>
        </Box>
    );

};

export default AdvancedFilePreview;