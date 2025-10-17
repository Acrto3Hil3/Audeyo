import {
    Folder,
    FileText,
    File as FileIcon,
    Image as ImageIcon,
    Video,
    MoreVertical,
    Download,
    Trash2,
    Share2,
    Edit,
    Sheet,
    FileType,
} from "lucide-react";
import { useState } from "react";

const FileCard = ({ file, viewMode }) => {
    const [showMenu, setShowMenu] = useState(false);

    const getIcon = () => {
        const iconClass = "h-12 w-12";

        switch (file.type) {
            case "folder":
                return <Folder className={`${iconClass} ${file.iconColor} fill-current`} />;
            case "pdf":
                return (
                    <div className="relative">
                        <FileText className={`${iconClass} ${file.iconColor}`} />
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-bold text-red-500">PDF</span>
                    </div>
                );
            case "excel":
                return (
                    <div className="relative">
                        <FileText className={`${iconClass} ${file.iconColor}`} />
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-bold text-green-600">XLS</span>
                    </div>
                );
            case "word":
                return (
                    <div className="relative">
                        <FileText className={`${iconClass} ${file.iconColor}`} />
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-bold text-blue-600">W</span>
                    </div>
                );
            case "powerpoint":
                return (
                    <div className="relative">
                        <FileText className={`${iconClass} ${file.iconColor}`} />
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-bold text-orange-500">PPT</span>
                    </div>
                );
            case "image":
                return <ImageIcon className={`${iconClass} text-blue-500`} />;
            case "video":
                return <Video className={`${iconClass} text-purple-500`} />;
            default:
                return <FileIcon className={`${iconClass} text-muted-foreground`} />;
        }
    };

    if (viewMode === "list") {
        return (
            <div className="flex items-center justify-between px-3 py-2.5 hover:bg-muted/50 rounded-lg transition-colors group">
                <div className="flex items-center gap-3 flex-1">
                    <div className={`${file.color || "bg-muted"} rounded-lg p-2.5 flex items-center justify-center`}>
                        {getIcon()}
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{file.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                            {file.type === "folder"
                                ? `${file.items} items`
                                : `${file.size} • ${file.date}`}
                        </p>
                    </div>
                </div>
                <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-background rounded-lg transition-all">
                    <MoreVertical className="h-4 w-4 text-muted-foreground" />
                </button>
            </div>
        );
    }

    return (
        <div className="bg-card border border-border rounded-xl p-3 hover:shadow-md hover:border-primary/20 transition-all group cursor-pointer">
            {/* File Icon/Thumbnail */}
            <div className="relative mb-3">
                {file.thumbnail ? (
                    <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                        <img
                            src={file.thumbnail}
                            alt={file.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ) : (
                    <div className={`${file.color || "bg-muted"} rounded-xl p-6 flex items-center justify-center aspect-square`}>
                        {getIcon()}
                    </div>
                )}

                {/* More Menu */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="relative">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowMenu(!showMenu);
                            }}
                            className="p-1.5 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors shadow-sm"
                        >
                            <MoreVertical className="h-4 w-4 text-foreground" />
                        </button>

                        {showMenu && (
                            <div className="absolute right-0 mt-1 w-48 bg-background border border-border rounded-lg shadow-lg py-1 z-10">
                                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors">
                                    <Edit className="h-4 w-4" />
                                    Rename
                                </button>
                                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors">
                                    <Share2 className="h-4 w-4" />
                                    Share
                                </button>
                                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors">
                                    <Download className="h-4 w-4" />
                                    Download
                                </button>
                                <div className="border-t border-border my-1"></div>
                                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-destructive hover:bg-muted transition-colors">
                                    <Trash2 className="h-4 w-4" />
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* File Info */}
            <div>
                <h3 className="text-sm font-medium text-foreground truncate mb-0.5">
                    {file.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                    {file.type === "folder"
                        ? `${file.items} items`
                        : `${file.size} • ${file.date}`}
                </p>
            </div>
        </div>
    );
};

export default FileCard;
