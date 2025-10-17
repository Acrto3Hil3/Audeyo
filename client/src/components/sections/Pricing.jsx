import { Card, CardContent, Button, Container, Chip } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { motion } from "framer-motion";

const Pricing = () => {
    const plans = [
        {
            name: "Free",
            price: "$0",
            period: "forever",
            description: "Perfect for personal use",
            features: [
                "5GB storage",
                "Basic sharing",
                "Mobile apps",
                "Email support"
            ],
            buttonText: "Get Started Free",
            buttonVariant: "outlined",
            popular: false
        },
        {
            name: "Pro",
            price: "$9",
            period: "per month",
            description: "Best for small teams",
            features: [
                "1TB storage",
                "Advanced sharing",
                "Team collaboration",
                "Priority support",
                "Version control",
                "Advanced security"
            ],
            buttonText: "Start Free Trial",
            buttonVariant: "contained",
            popular: true
        },
        {
            name: "Enterprise",
            price: "$25",
            period: "per user/month",
            description: "For large organizations",
            features: [
                "Unlimited storage",
                "Custom integrations",
                "Advanced admin tools",
                "24/7 phone support",
                "SSO integration",
                "Audit logs",
                "Custom branding"
            ],
            buttonText: "Contact Sales",
            buttonVariant: "outlined",
            popular: false
        }
    ];

    return (
        <section id="pricing" className="py-16 lg:py-20">
            <Container maxWidth="lg">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                        Simple, transparent pricing
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Start free and scale as you grow. No hidden fees, no surprises.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <Card
                                className={`p-6 md:p-8 text-center relative h-full flex flex-col transition-all duration-300 hover:shadow-medium ${plan.popular
                                    ? 'border-2 border-primary shadow-large'
                                    : 'border border-border'
                                    }`}
                            >
                                {plan.popular && (
                                    <Chip
                                        label="Most Popular"
                                        className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground"
                                    />
                                )}

                                <CardContent className="flex-1 flex flex-col p-0">
                                    {/* Header */}
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-semibold mb-4 text-foreground">
                                            {plan.name}
                                        </h3>
                                        <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
                                            {plan.price}
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-2">
                                            {plan.period}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {plan.description}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div className="mb-6 flex-1 space-y-3">
                                        {plan.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center gap-3">
                                                <CheckCircle className="text-success flex-shrink-0" style={{ fontSize: 16 }} />
                                                <span className="text-sm text-left text-foreground">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <Button
                                        variant={plan.buttonVariant}
                                        size="large"
                                        fullWidth
                                        className={plan.buttonVariant === 'contained'
                                            ? 'bg-primary hover:bg-primary-hover text-primary-foreground'
                                            : 'border-border text-foreground hover:border-primary'
                                        }
                                    >
                                        {plan.buttonText}
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Pricing;
