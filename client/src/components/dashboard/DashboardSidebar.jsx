// Replaced missing Button import with native button element styled via classes
import { Clock, Folder, Home, Plus, Share2, Star, Trash2 } from "lucide-react";

const DashboardSidebar = ({ currentPath, onNavigate }) => {
    const navItems = [
        { label: "My Drive", icon: Home, path: ["My Drive"] },
        { label: "Shared with me", icon: Share2, path: ["Shared with me"] },
        { label: "Recent", icon: Clock, path: ["Recent"] },
        { label: "Starred", icon: Star, path: ["Starred"] },
        { label: "Trash", icon: Trash2, path: ["Trash"] },
    ];

    const quickAccess = [
        { label: "Project Documents", icon: Folder },
        { label: "Team Resources", icon: Folder },
        { label: "Marketing Assets", icon: Folder },
    ];

    const isActive = (path) => currentPath[0] === path[0];

    return (
        <aside className="w-60 bg-background border-r border-border min-h-[calc(100vh-73px)] flex flex-col">
            {/* New Folder Button */}
            <div className="p-4">
                <button className="w-full bg-primary hover:bg-primary-hover text-white font-medium justify-center gap-2 inline-flex items-center rounded-md px-3 py-2 transition-colors">
                    <Plus className="h-4 w-4" />
                    New Folder
                </button>
            </div>

            {/* Main Navigation */}
            <nav className="flex-1 px-3">
                <ul className="space-y-0.5">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.path);

                        return (
                            <li key={item.label}>
                                <button
                                    onClick={() => onNavigate(item.path)}
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${active
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                        }`}
                                >
                                    <Icon className="h-5 w-5" />
                                    <span className="text-sm">{item.label}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>

                {/* Quick Access */}
                <div className="mt-6">
                    <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Quick Access
                    </h3>
                    <ul className="space-y-0.5">
                        {quickAccess.map((item) => {
                            const Icon = item.icon;

                            return (
                                <li key={item.label}>
                                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                                        <Icon className="h-5 w-5" />
                                        <span className="text-sm">{item.label}</span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>

            {/* Storage */}
            <div className="p-4 border-t border-border bg-muted/30">
                <div className="space-y-2.5">
                    <div className="flex justify-between text-xs">
                        <span className="font-medium text-muted-foreground">Storage</span>
                        <span className="text-muted-foreground">2.4 GB of 5 GB</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                            className="bg-primary h-full rounded-full transition-all"
                            style={{ width: '48%' }}
                        ></div>
                    </div>
                    <button className="text-xs text-primary hover:underline font-medium">
                        Upgrade Storage
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default DashboardSidebar;
