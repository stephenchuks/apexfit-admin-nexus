
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Layout
import AdminLayout from "@/components/layout/AdminLayout";

// Pages
import LandingPage from "@/pages/LandingPage";
import SuperAdminDashboard from "@/pages/SuperAdminDashboard";
import BranchAdminDashboard from "@/pages/BranchAdminDashboard";
import StaffDashboard from "@/pages/StaffDashboard";
import TrainerDashboard from "@/pages/TrainerDashboard";
import NotFoundPage from "@/pages/NotFoundPage";

// Super Admin Pages
import BranchesPage from "@/pages/super-admin/BranchesPage";
import BranchViewPage from "@/pages/super-admin/BranchViewPage";
import BranchEditPage from "@/pages/super-admin/BranchEditPage";
import BranchCreatePage from "@/pages/super-admin/BranchCreatePage";
import GlobalReportsPage from "@/pages/super-admin/GlobalReportsPage";
import GlobalMembersPage from "@/pages/super-admin/GlobalMembersPage";
import MemberViewPage from "@/pages/super-admin/MemberViewPage";
import GettingStartedPage from "@/pages/super-admin/GettingStartedPage";

// Branch Admin Pages
import BranchRevenuePage from "@/pages/branch-admin/BranchRevenuePage";
import RevenueBreakdownPage from "@/pages/branch-admin/RevenueBreakdownPage";
import BranchMembersPage from "@/pages/branch-admin/BranchMembersPage";
import BranchMemberViewPage from "@/pages/branch-admin/BranchMemberViewPage";
import RecentMembersPage from "@/pages/branch-admin/RecentMembersPage";

// Staff Pages
import CheckInsPage from "@/pages/staff/CheckInsPage";
import QuickActionsPage from "@/pages/staff/QuickActionsPage";
import RegisterGuestPage from "@/pages/staff/RegisterGuestPage";
import ManualCheckinPage from "@/pages/staff/ManualCheckinPage";
import ViewSchedulePage from "@/pages/staff/ViewSchedulePage";
import ContactManagerPage from "@/pages/staff/ContactManagerPage";

// Trainer Pages
import ClientListPage from "@/pages/trainer/ClientListPage";
import ClientDetailPage from "@/pages/trainer/ClientDetailPage";
import WeeklySchedulePage from "@/pages/trainer/WeeklySchedulePage";
import SessionsPage from "@/pages/trainer/SessionsPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            
            <Route element={<AdminLayout />}>
              {/* Super Admin Routes */}
              <Route path="/super-admin" element={<SuperAdminDashboard />} />
              <Route path="/super-admin/branches" element={<BranchesPage />} />
              <Route path="/super-admin/branches/new" element={<BranchCreatePage />} />
              <Route path="/super-admin/branches/:id" element={<BranchViewPage />} />
              <Route path="/super-admin/branches/:id/edit" element={<BranchEditPage />} />
              <Route path="/super-admin/reports" element={<GlobalReportsPage />} />
              <Route path="/super-admin/members" element={<GlobalMembersPage />} />
              <Route path="/super-admin/members/:id" element={<MemberViewPage />} />
              <Route path="/super-admin/start" element={<GettingStartedPage />} />
              
              {/* Branch Admin Routes */}
              <Route path="/branch-admin" element={<BranchAdminDashboard />} />
              <Route path="/branch-admin/revenue" element={<BranchRevenuePage />} />
              <Route path="/branch-admin/revenue/breakdown" element={<RevenueBreakdownPage />} />
              <Route path="/branch-admin/members" element={<BranchMembersPage />} />
              <Route path="/branch-admin/members/:id" element={<BranchMemberViewPage />} />
              <Route path="/branch-admin/recent-members" element={<RecentMembersPage />} />
              
              {/* Staff Routes */}
              <Route path="/staff" element={<StaffDashboard />} />
              <Route path="/staff/checkins" element={<CheckInsPage />} />
              <Route path="/staff/actions" element={<QuickActionsPage />} />
              <Route path="/staff/actions/register-guest" element={<RegisterGuestPage />} />
              <Route path="/staff/actions/manual-checkin" element={<ManualCheckinPage />} />
              <Route path="/staff/actions/view-schedule" element={<ViewSchedulePage />} />
              <Route path="/staff/actions/contact-manager" element={<ContactManagerPage />} />
              
              {/* Trainer Routes */}
              <Route path="/trainer" element={<TrainerDashboard />} />
              <Route path="/trainer/clients" element={<ClientListPage />} />
              <Route path="/trainer/clients/:id" element={<ClientDetailPage />} />
              <Route path="/trainer/schedule" element={<WeeklySchedulePage />} />
              <Route path="/trainer/sessions" element={<SessionsPage />} />
            </Route>
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
