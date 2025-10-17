import { UserButton, useUser } from "@clerk/clerk-react";
import { Cloud, Menu as MenuIcon } from "@mui/icons-material";
import { Button, Container, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { isSignedIn, user } = useUser();
    const navigate = useNavigate();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navLinks = [

        { label: "Features", href: "#features", onClick: () => scrollToSection('features') },
        { label: "Pricing", href: "#pricing", onClick: () => scrollToSection('pricing') },
        { label: "About", href: "#about", onClick: () => scrollToSection('about') },
        { label: "Support", href: "#support", onClick: () => scrollToSection('support') }
    ];

    const authNavLinks = [
        { label: "Dashboard", href: "/dashboard", onClick: () => navigate('/dashboard') },
        { label: "Features", href: "#features", onClick: () => scrollToSection('features') },
        { label: "Pricing", href: "#pricing", onClick: () => scrollToSection('pricing') },
        { label: "About", href: "#about", onClick: () => scrollToSection('about') }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
            <Container maxWidth="lg">
                <div className="flex items-center justify-between h-16 px-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 flex-1">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                            <Cloud className="text-white" style={{ fontSize: 20 }} />
                        </div>
                        <span className="text-xl font-bold text-foreground">Audeyo</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-6 mx-8">
                        {(isSignedIn ? authNavLinks : navLinks).map((link) => (
                            <button
                                key={link.label}
                                onClick={link.onClick}
                                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <IconButton onClick={handleMenu} className="text-foreground">
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {(isSignedIn ? authNavLinks : navLinks).map((link) => (
                                <MenuItem
                                    key={link.label}
                                    onClick={() => {
                                        link.onClick();
                                        handleClose();
                                    }}
                                >
                                    {link.label}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3">
                        {isSignedIn ? (
                            <div className="flex items-center gap-3">
                                <span className="hidden sm:inline text-sm text-muted-foreground">
                                    Welcome, {user?.firstName || user?.emailAddresses[0]?.emailAddress}
                                </span>
                                <UserButton
                                    afterSignOutUrl="/"
                                    appearance={{
                                        elements: {
                                            avatarBox: "w-8 h-8"
                                        }
                                    }}
                                />
                            </div>
                        ) : (
                            <>
                                <Link to="/auth">
                                    <Button className="hidden sm:inline-flex text-foreground">
                                        Sign In
                                    </Button>
                                </Link>
                                <Link to="/auth">
                                    <Button
                                        variant="contained"
                                        className="bg-primary hover:bg-primary-hover text-primary-foreground"
                                    >
                                        Get Started Free
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
