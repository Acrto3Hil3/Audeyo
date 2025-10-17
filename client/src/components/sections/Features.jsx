import { Card, CardContent, Container } from "@mui/material";
import { Security, People, Bolt } from "@mui/icons-material";
import { motion } from "framer-motion";

const features = [
    {
        icon: Security,
        title: "Enterprise Security",
        description: "Bank-level encryption and advanced security features to keep your data safe.",
        gradient: "from-primary to-primary/80"
    },
    {
        icon: People,
        title: "Team Collaboration",
        description: "Real-time collaboration tools that bring your team together, anywhere.",
        gradient: "from-accent to-accent/80"
    },
    {
        icon: Bolt,
        title: "Lightning Fast",
        description: "Optimized performance with global CDN for instant file access worldwide.",
        gradient: "from-primary to-primary/80"
    }
];

const Features = () => {
    return (
        <section id="features" className="py-16 lg:py-20 bg-muted/30">
            <Container maxWidth="lg">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                        Everything you need to work smarter
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        From individual productivity to enterprise collaboration, Audeyo provides the
                        tools and security you need to succeed.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-6 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                                <CardContent>
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto mb-4`}>
                                        <feature.icon className="text-white" style={{ fontSize: 24 }} />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Features;