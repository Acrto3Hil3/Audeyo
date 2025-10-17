import { Button, Box, Typography, Container } from "@mui/material";
import { PlayArrow, CheckCircle } from "@mui/icons-material";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative bg-background py-16 lg:py-24 overflow-hidden">
            <Container maxWidth="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Hero Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                                Store, Share, and
                                <br />
                                Collaborate with{" "}
                                <span className="text-primary">Confidence</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                                Secure cloud storage that grows with your team. Upload,
                                organize, and share files with enterprise-grade security and
                                seamless collaboration tools.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="contained"
                                size="large"
                                className="bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-8 py-3"
                            >
                                Get Started
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={<PlayArrow />}
                                className="border-border text-foreground hover:border-primary text-lg px-8 py-3"
                            >
                                Watch Demo
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            <div className="text-center sm:text-left">
                                <div className="text-3xl md:text-4xl font-bold text-foreground">99.9%</div>
                                <div className="text-sm text-muted-foreground mt-1">Uptime</div>
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="text-3xl md:text-4xl font-bold text-foreground">256-bit</div>
                                <div className="text-sm text-muted-foreground mt-1">Encryption</div>
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="text-3xl md:text-4xl font-bold text-foreground">50M+</div>
                                <div className="text-sm text-muted-foreground mt-1">Files Stored</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 shadow-large">
                            <img
                                src={dashboardMockup}
                                alt="Audeyo dashboard interface showing file management and collaboration tools"
                                className="w-full h-auto rounded-lg shadow-medium"
                            />

                            {/* Upload Complete Notification */}
                            <div className="absolute top-4 right-4 bg-card shadow-medium rounded-lg p-3 flex items-center gap-3 max-w-xs">
                                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="text-white" style={{ fontSize: 16 }} />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-sm font-medium text-foreground truncate">Upload Complete</div>
                                    <div className="text-xs text-muted-foreground">5 files uploaded</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;