import { Avatar, Box, Button, Card, Chip, Paper, Typography } from "@mui/material";
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
                        Your files, organized and accessible
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
                        Experience the joy of finding your files instantly with smart organization and powerful search.
                    </Typography>
                </Box>

                {/* Main Content - Three Column Layout with Background */}
                <Box sx={{
                    bgcolor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: 3,
                    p: { xs: 2, md: 3 },
                    mb: 6
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        gap: 3,
                        alignItems: 'stretch'
                    }}>
                        {/* Column 1 - Feature Cards Stack */}
                        <Box sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2.5
                        }}>
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card sx={{
                                        p: 2.5,
                                        bgcolor: 'hsl(var(--card))',
                                        border: '1px solid hsl(var(--border))',
                                        borderRadius: 2,
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&:hover': {
                                            transform: 'translateX(6px)',
                                            boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                                            borderColor: feature.color
                                        },
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            bottom: 0,
                                            width: '3px',
                                            bgcolor: feature.color,
                                            transition: 'width 0.3s ease'
                                        },
                                        '&:hover::before': {
                                            width: '5px'
                                        }
                                    }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <Avatar sx={{
                                                width: 48,
                                                height: 48,
                                                bgcolor: feature.color,
                                                boxShadow: `0 4px 12px ${feature.color}40`
                                            }}>
                                                <feature.icon style={{ color: 'white', fontSize: 20 }} />
                                            </Avatar>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography variant="h6" sx={{
                                                    fontWeight: 600,
                                                    mb: 0.5,
                                                    color: 'hsl(var(--foreground))',
                                                    fontSize: '1rem',
                                                    lineHeight: 1.3
                                                }}>
                                                    {feature.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{
                                                    color: 'hsl(var(--muted-foreground))',
                                                    fontSize: '0.85rem',
                                                    lineHeight: 1.5,
                                                    mb: 1
                                                }}>
                                                    {feature.description}
                                                </Typography>
                                                <Chip
                                                    label={feature.stats}
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
                                    </Card>
                                </motion.div>
                            ))}
                        </Box>

                        {/* Column 2 - My Files */}
                        <Box sx={{ flex: 1 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Card sx={{
                                    height: '100%',
                                    borderRadius: 2,
                                    border: '1px solid hsl(var(--border))',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                                    }
                                }}>
                                    <Box sx={{
                                        p: 2.5,
                                        borderBottom: '1px solid hsl(var(--border))',
                                        background: 'linear-gradient(135deg, hsl(var(--muted) / 0.5) 0%, hsl(var(--muted) / 0.2) 100%)'
                                    }}>
                                        <Typography variant="h6" sx={{
                                            fontWeight: 700,
                                            color: 'hsl(var(--foreground))',
                                            mb: 2,
                                            fontSize: '1.1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1.5
                                        }}>
                                            <Box sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: '50%',
                                                bgcolor: '#3b82f6'
                                            }} />
                                            My Files
                                        </Typography>
                                        <Paper elevation={0} sx={{
                                            p: 2,
                                            bgcolor: 'hsl(var(--background))',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 2,
                                            border: '1px solid hsl(var(--border))',
                                            borderRadius: 2,
                                            transition: 'all 0.2s',
                                            cursor: 'text',
                                            '&:hover': {
                                                borderColor: '#3b82f6',
                                                boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
                                            }
                                        }}>
                                            <FaSearch style={{ fontSize: 14, color: 'hsl(var(--muted-foreground))' }} />
                                            <Typography variant="body2" sx={{ color: 'hsl(var(--muted-foreground))' }}>
                                                Search files...
                                            </Typography>
                                        </Paper>
                                    </Box>
                                    <Box sx={{ p: 2.5, flex: 1 }}>
                                        <Typography variant="subtitle2" sx={{
                                            mb: 2,
                                            color: 'hsl(var(--muted-foreground))',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            fontSize: '0.7rem',
                                            letterSpacing: '0.8px'
                                        }}>
                                            Folders
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                            {fileTypes.map((file, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <Box sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 2,
                                                        p: 1.5,
                                                        borderRadius: 2,
                                                        bgcolor: 'hsl(var(--muted) / 0.2)',
                                                        border: '1px solid transparent',
                                                        transition: 'all 0.25s ease',
                                                        cursor: 'pointer',
                                                        '&:hover': {
                                                            bgcolor: 'hsl(var(--muted) / 0.4)',
                                                            borderColor: file.color,
                                                            transform: 'translateX(4px)'
                                                        }
                                                    }}>
                                                        <Box sx={{
                                                            width: 36,
                                                            height: 36,
                                                            borderRadius: 2,
                                                            bgcolor: file.color + '20',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}>
                                                            <FaFolder style={{ fontSize: 18, color: file.color }} />
                                                        </Box>
                                                        <Box sx={{ flex: 1, minWidth: 0 }}>
                                                            <Typography variant="body2" sx={{
                                                                fontWeight: 600,
                                                                color: 'hsl(var(--foreground))',
                                                                mb: 0.25,
                                                                fontSize: '0.9rem'
                                                            }}>
                                                                {file.name}
                                                            </Typography>
                                                            <Typography variant="caption" sx={{
                                                                color: 'hsl(var(--muted-foreground))',
                                                                fontSize: '0.7rem'
                                                            }}>
                                                                {file.items} • {file.lastModified}
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{
                                                            display: 'flex',
                                                            gap: 1,
                                                            opacity: 0.5,
                                                            '&:hover': { opacity: 1 },
                                                            transition: 'opacity 0.2s'
                                                        }}>
                                                            <Box sx={{
                                                                p: 0.5,
                                                                borderRadius: 1,
                                                                '&:hover': { bgcolor: 'hsl(var(--muted) / 0.5)' }
                                                            }}>
                                                                <FaEye style={{ fontSize: 12, color: 'hsl(var(--muted-foreground))' }} />
                                                            </Box>
                                                            <Box sx={{
                                                                p: 0.5,
                                                                borderRadius: 1,
                                                                '&:hover': { bgcolor: 'hsl(var(--muted) / 0.5)' }
                                                            }}>
                                                                <FaShare style={{ fontSize: 12, color: 'hsl(var(--muted-foreground))' }} />
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </motion.div>
                                            ))}
                                        </Box>
                                    </Box>
                                </Card>
                            </motion.div>
                        </Box>

                        {/* Column 3 - Recent Files */}
                        <Box sx={{ flex: 1 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <Card sx={{
                                    height: '100%',
                                    borderRadius: 2,
                                    border: '1px solid hsl(var(--border))',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                                    }
                                }}>
                                    <Box sx={{
                                        p: 2.5,
                                        borderBottom: '1px solid hsl(var(--border))',
                                        background: 'linear-gradient(135deg, hsl(var(--muted) / 0.5) 0%, hsl(var(--muted) / 0.2) 100%)'
                                    }}>
                                        <Typography variant="h6" sx={{
                                            fontWeight: 700,
                                            color: 'hsl(var(--foreground))',
                                            fontSize: '1.1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1.5
                                        }}>
                                            <Box sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: '50%',
                                                bgcolor: '#22c55e'
                                            }} />
                                            Recent Files
                                        </Typography>
                                    </Box>
                                    <Box sx={{ p: 2.5, flex: 1 }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                            {recentFiles.map((file, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: 10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <Box sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 2,
                                                        p: 1.5,
                                                        borderRadius: 2,
                                                        bgcolor: 'hsl(var(--muted) / 0.2)',
                                                        border: '1px solid transparent',
                                                        transition: 'all 0.25s ease',
                                                        cursor: 'pointer',
                                                        '&:hover': {
                                                            bgcolor: 'hsl(var(--muted) / 0.4)',
                                                            borderColor: 'hsl(var(--border))',
                                                            transform: 'translateX(-4px)'
                                                        }
                                                    }}>
                                                        <Box sx={{
                                                            width: 36,
                                                            height: 36,
                                                            borderRadius: 2,
                                                            bgcolor: file.type === 'pdf' ? '#ff0000' : file.type === 'figma' ? '#f24e1e' : file.type === 'doc' ? '#2b579a' : '#4ecdc4',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                                                        }}>
                                                            <Typography variant="caption" sx={{
                                                                color: 'white',
                                                                fontWeight: 700,
                                                                fontSize: '0.65rem'
                                                            }}>
                                                                {file.type.toUpperCase().slice(0, 3)}
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ flex: 1, minWidth: 0 }}>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.25 }}>
                                                                <Typography variant="body2" sx={{
                                                                    fontWeight: 600,
                                                                    color: 'hsl(var(--foreground))',
                                                                    fontSize: '0.9rem',
                                                                    overflow: 'hidden',
                                                                    textOverflow: 'ellipsis',
                                                                    whiteSpace: 'nowrap'
                                                                }}>
                                                                    {file.name}
                                                                </Typography>
                                                                {file.starred && <FaStar style={{ fontSize: 11, color: '#fbbf24', flexShrink: 0 }} />}
                                                            </Box>
                                                            <Typography variant="caption" sx={{
                                                                color: 'hsl(var(--muted-foreground))',
                                                                fontSize: '0.7rem'
                                                            }}>
                                                                {file.size} • {file.modified}
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{
                                                            display: 'flex',
                                                            gap: 1,
                                                            opacity: 0.5,
                                                            '&:hover': { opacity: 1 },
                                                            transition: 'opacity 0.2s'
                                                        }}>
                                                            <Box sx={{
                                                                p: 0.5,
                                                                borderRadius: 1,
                                                                '&:hover': { bgcolor: 'hsl(var(--muted) / 0.5)' }
                                                            }}>
                                                                <FaDownload style={{ fontSize: 12, color: 'hsl(var(--muted-foreground))' }} />
                                                            </Box>
                                                            <Box sx={{
                                                                p: 0.5,
                                                                borderRadius: 1,
                                                                '&:hover': { bgcolor: 'hsl(var(--muted) / 0.5)' }
                                                            }}>
                                                                <FaEdit style={{ fontSize: 12, color: 'hsl(var(--muted-foreground))' }} />
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </motion.div>
                                            ))}
                                        </Box>
                                    </Box>
                                </Card>
                            </motion.div>
                        </Box>
                    </Box>
                </Box>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: 'hsl(var(--primary))',
                                color: 'hsl(var(--primary-foreground))',
                                px: 6,
                                py: 2,
                                fontSize: '1.05rem',
                                fontWeight: 600,
                                borderRadius: 2,
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