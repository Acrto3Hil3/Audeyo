// Replaced missing Button import with styled native button
import { Bell, ChevronDown, Cloud, Search, Settings, Upload } from "lucide-react";

const DashboardHeader = ({ searchQuery, onSearchChange }) => {
    return (
        <header className="bg-background border-b border-border sticky top-0 z-50">
            <div className="flex items-center justify-between px-6 h-[73px]">
                {/* Logo & Navigation */}
                <div className="flex items-center gap-8">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="bg-primary rounded-lg p-1.5 flex items-center justify-center">
                            <Cloud className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-foreground">Audeyo</span>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex gap-6">
                        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                            Features
                        </button>
                        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                            Pricing
                        </button>
                        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                            Enterprise
                        </button>
                        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                            Support
                        </button>
                    </nav>
                </div>

                {/* Right Side - Search & Actions */}
                <div className="flex items-center gap-3">
                    {/* Search */}
                    <div className="hidden lg:flex items-center bg-muted/50 border border-border rounded-lg px-4 py-2.5 min-w-[320px]">
                        <Search className="h-4 w-4 text-muted-foreground mr-2" />
                        <input
                            type="text"
                            placeholder="Search files..."
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="flex-1 bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground"
                        />
                    </div>

                    {/* Upload Button */}
                    <button className="bg-primary hover:bg-primary-hover text-white font-medium gap-2 inline-flex items-center rounded-md px-3 py-2 transition-colors">
                        <Upload className="h-4 w-4" />
                        Upload
                    </button>

                    {/* Notifications */}
                    <button className="relative p-2 hover:bg-muted rounded-lg transition-colors">
                        <Bell className="h-5 w-5 text-foreground" />
                    </button>

                    {/* Settings */}
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Settings className="h-5 w-5 text-foreground" />
                    </button>

                    {/* User Profile */}
                    <button className="flex items-center gap-2.5 hover:bg-muted rounded-lg pl-2 pr-3 py-1.5 transition-colors">
                        <img
                            src="/placeholder.svg"
                            alt="Alex Chen"
                            className="h-8 w-8 rounded-full object-cover bg-gradient-to-br from-primary to-accent"
                        />
                        <span className="hidden lg:block text-sm font-medium text-foreground">
                            Alex Chen
                        </span>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
