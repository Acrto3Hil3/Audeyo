import { Box, Card, CardContent, Chip, Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
    FaDropbox,
    FaFigma,
    FaGithub,
    FaGoogle,
    FaMicrosoft,
    FaSlack,
    FaTrello
} from "react-icons/fa";
import {
    SiAdobe,
    SiConfluence,
    SiJira,
    SiNotion,
    SiZoom
} from "react-icons/si";
const Integrations = () => {
    const integrations = [
        {
            name: "Slack",
            icon: FaSlack,
            description: "Share files directly in Slack channels",
            color: "#4A154B",
            category: "Communication"
        },
        {
            name: "Google Workspace",
            icon: FaGoogle,
            description: "Sync with Google Drive, Docs, and Sheets",
            color: "#4285F4",
            category: "Productivity"
        },
        {
            name: "Microsoft 365",
            icon: FaMicrosoft,
            description: "Connect with Office apps and OneDrive",
            color: "#00BCF2",
            category: "Productivity"
        },
        {
            name: "Zoom",
            icon: SiZoom,
            description: "Share files during video calls",
            color: "#2D8CFF",
            category: "Communication"
        },
        {
            name: "Trello",
            icon: FaTrello,
            description: "Attach files to Trello cards",
            color: "#0079BF",
            category: "Project Management"
        },
        {
            name: "Adobe Creative",
            icon: SiAdobe,
            description: "Edit and sync Creative Cloud files",
            color: "#FF0000",
            category: "Design"
        },
        {
            name: "Figma",
            icon: FaFigma,
            description: "Sync design files and prototypes",
            color: "#F24E1E",
            category: "Design"
        },
        {
            name: "GitHub",
            icon: FaGithub,
            description: "Store and version code repositories",
            color: "#333333",
            category: "Development"
        },
        {
            name: "Dropbox",
            icon: FaDropbox,
            description: "Sync files across all your devices",
            color: "#0061FF",
            category: "Storage"
        },
        {
            name: "Notion",
            icon: SiNotion,
            description: "Organize knowledge and documents",
            color: "#000000",
            category: "Productivity"
        },
        {
            name: "Jira",
            icon: SiJira,
            description: "Track issues and manage projects",
            color: "#0052CC",
            category: "Project Management"
        },
        {
            name: "Confluence",
            icon: SiConfluence,
            description: "Create and share team documentation",
            color: "#172B4D",
            category: "Documentation"
        }
    ];

    return (
        <Box component="section" sx={{ py: 10 }}>
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
                        Integrates with your workflow
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
                        Connect Audeyo with the tools you already use. Seamless integration with 100+ apps and platforms.
                    </Typography>
                </Box>

                <Grid container spacing={3} sx={{ mb: 8 }}>
                    {integrations.map((integration, index) => (
                        <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <Card
                                    sx={{
                                        p: 2,
                                        height: '100%',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        border: '1px solid hsl(var(--border))',
                                        '&:hover': {
                                            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                                            transform: 'translateY(-2px)'
                                        }
                                    }}
                                >
                                    <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
                                        {/* Icon */}
                                        <Box
                                            sx={{
                                                width: 48,
                                                height: 48,
                                                borderRadius: 2,
                                                bgcolor: integration.color,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mb: 2,
                                                boxShadow: `0 4px 12px ${integration.color}30`
                                            }}
                                        >
                                            <integration.icon
                                                style={{
                                                    fontSize: '24px',
                                                    color: 'white'
                                                }}
                                            />
                                        </Box>

                                        {/* Name */}
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                fontWeight: 600,
                                                mb: 1,
                                                color: 'hsl(var(--foreground))',
                                                fontSize: '0.9rem',
                                                lineHeight: 1.2
                                            }}
                                        >
                                            {integration.name}
                                        </Typography>

                                        {/* Category */}
                                        <Chip
                                            label={integration.category}
                                            size="small"
                                            sx={{
                                                mb: 1,
                                                fontSize: '0.7rem',
                                                height: '20px',
                                                bgcolor: 'hsl(var(--muted))',
                                                color: 'hsl(var(--muted-foreground))'
                                            }}
                                        />

                                        {/* Description */}
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: 'hsl(var(--muted-foreground))',
                                                fontSize: '0.75rem',
                                                lineHeight: 1.4,
                                                textAlign: 'center'
                                            }}
                                        >
                                            {integration.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* API Section */}
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: 'hsl(var(--foreground))' }}>
                        Don't see your tool? Use our API
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'hsl(var(--muted-foreground))',
                            maxWidth: '36rem',
                            mx: 'auto',
                            mb: 3
                        }}
                    >
                        Build custom integrations with our developer-friendly REST API and comprehensive documentation.
                    </Typography>
                    <Paper
                        sx={{
                            p: 2,
                            bgcolor: 'hsl(var(--muted))',
                            display: 'inline-block'
                        }}
                    >
                        <Typography
                            component="code"
                            sx={{
                                fontSize: '0.875rem',
                                color: 'hsl(var(--foreground))',
                                fontFamily: 'monospace'
                            }}
                        >
                            curl -X GET https://api.audeyo.com/files
                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
};

export default Integrations;
