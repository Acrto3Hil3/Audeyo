import { useUser } from "@clerk/clerk-react";
import {
  ArrowDropDown,
  Cloud,
  Image,
  PlayArrow
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Divider,
  Drawer,
  Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography
} from "@mui/material";
import { useRef, useState } from "react";
import {
  FaBell,
  FaClock,
  FaCog,
  FaEllipsisV,
  FaFileExcel,
  FaFileImage,
  FaFilePdf,
  FaFilePowerpoint,
  FaFileVideo,
  FaFileWord,
  FaFolder,
  FaHome,
  FaList,
  FaPlus,
  FaSearch,
  FaShare,
  FaStar,
  FaTh,
  FaTrash,
  FaUpload
} from "react-icons/fa";

const MainDashboard = () => {
  const { user } = useUser();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('name');
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [contextMenu, setContextMenu] = useState(null);
  const fileInputRef = useRef(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    console.log('Files selected:', files);
    // Here you would implement actual file upload logic
  };

  const handleFileClick = (file) => {
    if (file.type === 'folder') {
      // Navigate to folder
      console.log('Opening folder:', file.name);
    } else {
      // Open file preview
      console.log('Opening file:', file.name);
    }
  };

  const handleFileRightClick = (event, file) => {
    event.preventDefault();
    setContextMenu({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
      file: file
    });
  };

  const handleContextMenuClose = () => {
    setContextMenu(null);
  };

  const handleFileAction = (action, file) => {
    console.log(`${action} file:`, file.name);
    handleContextMenuClose();
  };

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sidebarItems = [
    { icon: FaHome, label: "My Drive", active: true },
    { icon: FaShare, label: "Shared with me", active: false },
    { icon: FaClock, label: "Recent", active: false },
    { icon: FaStar, label: "Starred", active: false },
    { icon: FaTrash, label: "Trash", active: false }
  ];

  const quickAccessItems = [
    { name: "Project Documents", active: true },
    { name: "Team Resources", active: false },
    { name: "Marketing Assets", active: false }
  ];

  const files = [
    {
      name: "Design Assets",
      type: "folder",
      items: "12 items",
      color: "#ff9800",
      icon: FaFolder
    },
    {
      name: "Meeting Notes",
      type: "folder",
      items: "8 items",
      color: "#2196f3",
      icon: FaFolder
    },
    {
      name: "Project Proposal Q1 2025.pdf",
      type: "pdf",
      size: "2.4 MB",
      date: "Jan 15",
      color: "#f44336",
      icon: FaFilePdf
    },
    {
      name: "Budget Q1 2025.xlsx",
      type: "excel",
      size: "1.8 MB",
      date: "Jan 12",
      color: "#4caf50",
      icon: FaFileExcel
    },
    {
      name: "team-photo.png",
      type: "image",
      size: "3.2 MB",
      date: "Jan 10",
      color: "#9c27b0",
      icon: FaFileImage,
      thumbnail: true
    },
    {
      name: "Requirements.docx",
      type: "word",
      size: "892 KB",
      date: "Jan 8",
      color: "#2196f3",
      icon: FaFileWord
    },
    {
      name: "demo-video.mp4",
      type: "video",
      size: "45.2 MB",
      date: "Jan 5",
      color: "#ff5722",
      icon: FaFileVideo,
      thumbnail: true
    },
    {
      name: "Presentation.pptx",
      type: "powerpoint",
      size: "12.5 MB",
      date: "Jan 3",
      color: "#ff9800",
      icon: FaFilePowerpoint
    }
  ];

  const storageUsed = 2.4;
  const storageTotal = 5.0;
  const storagePercentage = (storageUsed / storageTotal) * 100;

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#f8fafc' }}>
      {/* Sidebar */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={sidebarOpen}
        sx={{
          width: 280,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
            bgcolor: '#ffffff',
            borderRight: '1px solid #e2e8f0'
          }
        }}
      >
        <Box sx={{ p: 3 }}>
          {/* New Folder Button */}
          <Button
            variant="contained"
            startIcon={<FaPlus />}
            sx={{
              width: '100%',
              mb: 3,
              bgcolor: '#3b82f6',
              '&:hover': { bgcolor: '#2563eb' }
            }}
          >
            New Folder
          </Button>

          {/* Navigation Items */}
          <List>
            {sidebarItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: 2,
                    mb: 0.5,
                    bgcolor: item.active ? '#3b82f6' : 'transparent',
                    color: item.active ? 'white' : '#64748b',
                    '&:hover': {
                      bgcolor: item.active ? '#2563eb' : '#f1f5f9'
                    }
                  }}
                >
                  <ListItemIcon sx={{ color: item.active ? 'white' : '#64748b', minWidth: 40 }}>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          {/* Quick Access */}
          <Typography variant="subtitle2" sx={{ color: '#64748b', mb: 1, fontWeight: 600 }}>
            QUICK ACCESS
          </Typography>
          <List>
            {quickAccessItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: 2,
                    mb: 0.5,
                    bgcolor: item.active ? '#3b82f6' : 'transparent',
                    color: item.active ? 'white' : '#64748b',
                    '&:hover': {
                      bgcolor: item.active ? '#2563eb' : '#f1f5f9'
                    }
                  }}
                >
                  <ListItemIcon sx={{ color: item.active ? 'white' : '#64748b', minWidth: 40 }}>
                    <FaFolder />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          {/* Storage */}
          <Box sx={{ p: 2, bgcolor: '#f8fafc', borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#64748b', mb: 1, fontWeight: 600 }}>
              Storage
            </Typography>
            <Typography variant="body2" sx={{ color: '#64748b', mb: 1 }}>
              {storageUsed} GB of {storageTotal} GB used
            </Typography>
            <LinearProgress
              variant="determinate"
              value={storagePercentage}
              sx={{
                height: 8,
                borderRadius: 4,
                bgcolor: '#e2e8f0',
                '& .MuiLinearProgress-bar': {
                  bgcolor: '#3b82f6'
                }
              }}
            />
            <Button
              size="small"
              sx={{ color: '#3b82f6', mt: 1, p: 0, textTransform: 'none' }}
            >
              Upgrade Storage
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top Navigation Bar */}
        <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: 'none', borderBottom: '1px solid #e2e8f0' }}>
          <Toolbar sx={{ px: 3 }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
              <Cloud sx={{ color: '#3b82f6', mr: 1 }} />
              <Typography variant="h6" sx={{ color: '#1e293b', fontWeight: 600 }}>
                Audeyo
              </Typography>
            </Box>

            {/* Navigation Links */}
            <Box sx={{ display: 'flex', gap: 3, mr: 4 }}>
              {['Features', 'Pricing', 'Enterprise', 'Support'].map((item) => (
                <Typography
                  key={item}
                  sx={{ color: '#64748b', cursor: 'pointer', '&:hover': { color: '#1e293b' } }}
                >
                  {item}
                </Typography>
              ))}
            </Box>

            {/* Search Bar */}
            <TextField
              placeholder="Search files..."
              size="small"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                flexGrow: 1,
                maxWidth: 400,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  bgcolor: '#f8fafc'
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaSearch style={{ color: '#64748b' }} />
                  </InputAdornment>
                )
              }}
            />

            {/* Right Side Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 3 }}>
              <Button
                variant="contained"
                startIcon={<FaUpload />}
                onClick={handleFileUpload}
                sx={{
                  bgcolor: '#3b82f6',
                  '&:hover': { bgcolor: '#2563eb' }
                }}
              >
                Upload
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                multiple
                style={{ display: 'none' }}
              />
              <IconButton>
                <FaBell style={{ color: '#64748b' }} />
              </IconButton>
              <IconButton>
                <FaCog style={{ color: '#64748b' }} />
              </IconButton>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
                <Avatar sx={{ width: 32, height: 32, bgcolor: '#3b82f6' }}>
                  {user?.firstName?.[0] || 'A'}
                </Avatar>
                <Typography variant="body2" sx={{ color: '#1e293b' }}>
                  {user?.firstName || 'Alex'} {user?.lastName || 'Chen'}
                </Typography>
                <IconButton size="small" onClick={handleMenuClick}>
                  <ArrowDropDown />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Main Content Area */}
        <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#f8fafc' }}>
          {/* Breadcrumbs and Controls */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Breadcrumbs>
              <Link href="#" sx={{ color: '#64748b', textDecoration: 'none' }}>
                My Drive
              </Link>
              <Typography sx={{ color: '#1e293b' }}>Project Documents</Typography>
            </Breadcrumbs>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  size="small"
                  onClick={() => setViewMode('list')}
                  sx={{ color: viewMode === 'list' ? '#3b82f6' : '#64748b' }}
                >
                  <FaList />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={() => setViewMode('grid')}
                  sx={{ color: viewMode === 'grid' ? '#3b82f6' : '#64748b' }}
                >
                  <FaTh />
                </IconButton>
              </Box>
              <TextField
                select
                size="small"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                sx={{ minWidth: 120 }}
              >
                <MenuItem value="name">Sort by: Name</MenuItem>
                <MenuItem value="date">Sort by: Date</MenuItem>
                <MenuItem value="size">Sort by: Size</MenuItem>
              </TextField>
              <IconButton>
                <FaEllipsisV style={{ color: '#64748b' }} />
              </IconButton>
            </Box>
          </Box>

          {/* Files Grid */}
          <Grid container spacing={2}>
            {filteredFiles.map((file, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card
                  sx={{
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {file.thumbnail ? (
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 1,
                            bgcolor: '#f1f5f9',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2
                          }}
                        >
                          {file.type === 'video' ? (
                            <PlayArrow sx={{ color: file.color }} />
                          ) : (
                            <Image sx={{ color: file.color }} />
                          )}
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 1,
                            bgcolor: file.color + '20',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2
                          }}
                        >
                          <file.icon style={{ color: file.color, fontSize: 24 }} />
                        </Box>
                      )}
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {file.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#64748b' }}>
                          {file.items || file.size} • {file.date}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default MainDashboard;
