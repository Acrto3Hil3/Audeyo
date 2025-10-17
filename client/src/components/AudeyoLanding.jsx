import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AdvancedFilePreview from "@/components/sections/AdvancedFilePreview";
import CallToAction from "@/components/sections/CallToAction";
import Features from "@/components/sections/Features";
import FileOrganization from "@/components/sections/FileOrganization";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Integrations from "@/components/sections/Integrations";
import Pricing from "@/components/sections/Pricing";
import Security from "@/components/sections/Security";
import Testimonials from "@/components/sections/Testimonials";

const AudeyoLanding = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <Hero />
                <Features />
                <AdvancedFilePreview />
                <HowItWorks />
                <FileOrganization />
                <Security />
                <Testimonials />
                <Integrations />
                <Pricing />
                <CallToAction />
            </main>
            <Footer />
        </div>
    );
};

export default AudeyoLanding;