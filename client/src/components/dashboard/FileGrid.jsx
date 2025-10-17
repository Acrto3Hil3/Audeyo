// Replace missing shadcn Select with a minimal custom select using native <select>
import { ChevronRight, LayoutGrid, List, MoreVertical } from "lucide-react";
import FileCard from "./FileCard";

// Sample files data matching the mockup
const sampleFiles = [
    {
        id: 1,
        name: "Design Assets",
        type: "folder",
        items: 12,
        color: "bg-orange-50",
        iconColor: "text-orange-500",
    },
    {
        id: 2,
        name: "Meeting Notes",
        type: "folder",
        items: 8,
        color: "bg-blue-50",
        iconColor: "text-blue-500",
    },
    {
        id: 3,
        name: "Project Proposal....",
        type: "pdf",
        size: "2.4 MB",
        date: "Jan 15",
        color: "bg-red-50",
        iconColor: "text-red-500",
    },
    {
        id: 4,
        name: "Budget Q1 2025....",
        type: "excel",
        size: "1.8 MB",
        date: "Jan 12",
        color: "bg-green-50",
        iconColor: "text-green-600",
    },
    {
        id: 5,
        name: "team-photo.png",
        type: "image",
        size: "3.2 MB",
        date: "Jan 10",
        thumbnail: "/placeholder.svg",
    },
    {
        id: 6,
        name: "Requirements.do...",
        type: "word",
        size: "892 KB",
        date: "Jan 8",
        color: "bg-blue-50",
        iconColor: "text-blue-600",
    },
    {
        id: 7,
        name: "demo-video.mp4",
        type: "video",
        size: "45.2 MB",
        date: "Jan 5",
        thumbnail: "/placeholder.svg",
    },
    {
        id: 8,
        name: "Presentation.pptx",
        type: "powerpoint",
        size: "12.5 MB",
        date: "Jan 3",
        color: "bg-orange-50",
        iconColor: "text-orange-500",
    },
];

const FileGrid = ({
    currentPath,
    setCurrentPath,
    viewMode,
    setViewMode,
    sortBy,
    setSortBy,
    searchQuery,
}) => {
    const filteredFiles = sampleFiles.filter((file) =>
        file.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Breadcrumbs & Controls */}
            <div className="flex items-center justify-between">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm">
                    {currentPath.map((path, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <button
                                className={`transition-colors font-medium ${index === currentPath.length - 1
                                    ? "text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {path}
                            </button>
                            {index < currentPath.length - 1 && (
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            )}
                        </div>
                    ))}
                </div>

                {/* View Controls */}
                <div className="flex items-center gap-3">
                    {/* View Toggle */}
                    <div className="flex items-center gap-0.5 bg-muted/50 rounded-lg p-0.5">
                        <button
                            onClick={() => setViewMode("list")}
                            className={`p-2 rounded-md transition-colors ${viewMode === "list"
                                ? "bg-background text-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            <List className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`p-2 rounded-md transition-colors ${viewMode === "grid"
                                ? "bg-primary text-white shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            <LayoutGrid className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Sort By */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground font-medium">Sort by:</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="w-[140px] h-9 rounded-md border border-border bg-background px-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                        >
                            <option value="name">Name</option>
                            <option value="date">Date</option>
                            <option value="size">Size</option>
                            <option value="type">Type</option>
                        </select>
                    </div>

                    {/* More Options */}
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <MoreVertical className="h-5 w-5 text-muted-foreground" />
                    </button>
                </div>
            </div>

            {/* File Grid */}
            <div
                className={
                    viewMode === "grid"
                        ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4"
                        : "space-y-1"
                }
            >
                {filteredFiles.map((file) => (
                    <FileCard key={file.id} file={file} viewMode={viewMode} />
                ))}
            </div>

            {/* Empty State */}
            {filteredFiles.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-muted-foreground">No files found</p>
                </div>
            )}
        </div>
    );
};

export default FileGrid;
