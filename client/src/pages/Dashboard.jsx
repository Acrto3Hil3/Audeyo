import DashboardHeader from "@/components/dashboard/DashboardHeader";
import FileGrid from "@/components/dashboard/FileGrid";
import { useState } from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";

const Dashboard = () => {
    const [currentPath, setCurrentPath] = useState(["My Drive", "Project Documents"]);
    const [viewMode, setViewMode] = useState("grid");
    const [sortBy, setSortBy] = useState("name");
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="min-h-screen bg-background">
            <DashboardHeader
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />

            <div className="flex">
                <DashboardSidebar currentPath={currentPath} onNavigate={setCurrentPath} />

                <main className="flex-1 p-6">
                    <FileGrid
                        currentPath={currentPath}
                        setCurrentPath={setCurrentPath}
                        viewMode={viewMode}
                        setViewMode={setViewMode}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                        searchQuery={searchQuery}
                    />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
