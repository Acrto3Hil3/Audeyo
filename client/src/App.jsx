import { ClerkProvider } from '@clerk/clerk-react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Index from "./pages/Index";
import MainDashboard from "./pages/MainDashboard";
import NotFound from "./pages/NotFound";

// You need to add your Clerk publishable key
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log(clerkPubKey);
const queryClient = new QueryClient();

const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00A8A8',
    },
  },
  typography: {
    fontFamily: 'inherit',
  },
});

const App = () => (
  <ClerkProvider publishableKey={clerkPubKey}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <ToastContainer position="top-right" autoClose={3000} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <MainDashboard />
              </ProtectedRoute>
            } />
            <Route path="/main" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </ClerkProvider>
);

export default App;