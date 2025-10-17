import { Cloud } from "@mui/icons-material";
import { Container, Divider } from "@mui/material";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Security", href: "#security" },
        { name: "Integrations", href: "#integrations" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Blog", href: "https://blog.audeyo.com" },
        { name: "Careers", href: "https://audeyo.com/careers" },
        { name: "Contact", href: "mailto:support@audeyo.com" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "https://help.audeyo.com" },
        { name: "Community", href: "https://community.audeyo.com" },
        { name: "Status", href: "https://status.audeyo.com" },
        { name: "API Docs", href: "https://api.audeyo.com/docs" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "https://audeyo.com/privacy" },
        { name: "Terms", href: "https://audeyo.com/terms" },
        { name: "Security", href: "#security" },
        { name: "GDPR", href: "https://audeyo.com/gdpr" }
      ]
    }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <Container maxWidth="lg" className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <Cloud className="text-white" style={{ fontSize: 20 }} />
              </div>
              <span className="text-xl font-bold text-foreground">Audeyo</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Secure cloud storage and collaboration platform for modern teams.
            </p>
            <div className="flex gap-3">
              <a href="https://twitter.com/audeyo" target="_blank" rel="noreferrer noopener" aria-label="Audeyo on Twitter" className="text-muted-foreground hover:text-foreground transition-colors text-xl">
                <FaTwitter style={{ fontSize: 20 }} />
              </a>
              <a href="https://www.linkedin.com/company/audeyo" target="_blank" rel="noreferrer noopener" aria-label="Audeyo on LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors text-xl">
                <FaLinkedin style={{ fontSize: 20 }} />
              </a>
              <a href="https://facebook.com/audeyo" target="_blank" rel="noreferrer noopener" aria-label="Audeyo on Facebook" className="text-muted-foreground hover:text-foreground transition-colors text-xl">
                <FaFacebook style={{ fontSize: 20 }} />
              </a>
              <a href="https://github.com/audeyo" target="_blank" rel="noreferrer noopener" aria-label="Audeyo on GitHub" className="text-muted-foreground hover:text-foreground transition-colors text-xl">
                <FaGithub style={{ fontSize: 20 }} />
              </a>
              <a href="https://youtube.com/@audeyo" target="_blank" rel="noreferrer noopener" aria-label="Audeyo on YouTube" className="text-muted-foreground hover:text-foreground transition-colors text-xl">
                <FaYoutube style={{ fontSize: 20 }} />
              </a>
              <a href="https://instagram.com/audeyo" target="_blank" rel="noreferrer noopener" aria-label="Audeyo on Instagram" className="text-muted-foreground hover:text-foreground transition-colors text-xl">
                <FaInstagram style={{ fontSize: 20 }} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="font-semibold mb-3 text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <Divider className="my-8 border-border" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Audeyo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://audeyo.com/privacy" target="_blank" rel="noreferrer noopener" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="https://audeyo.com/terms" target="_blank" rel="noreferrer noopener" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="https://audeyo.com/cookies" target="_blank" rel="noreferrer noopener" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
