import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems, hiddenRoutes } from "./nav-items";
import CompanyDetails from "./pages/CompanyDetails";
import { Toaster } from "./components/ui/sonner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {navItems.map(({ to, page }) => (
            <Route key={to} path={to} element={page} />
          ))}
          {hiddenRoutes.map(({ to, page }) => (
            <Route key={to} path={to} element={page} />
          ))}
          <Route path="/company/:id" element={<CompanyDetails />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;