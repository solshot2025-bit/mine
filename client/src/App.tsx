import { Switch, Route, Redirect, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import ServicePage from "@/pages/ServicePage";
import DepositPage from "@/pages/DepositPage";
import TransactionsPage from "@/pages/TransactionsPage";
import AuthPage from "@/pages/AuthPage";
import NotFound from "@/pages/not-found";

// Protected route component
function ProtectedRoute({ component: Component }: { component: () => JSX.Element }) {
  const isAuthenticated = localStorage.getItem('agentDealsAuth') === 'true';
  
  if (!isAuthenticated) {
    return <Redirect to="/auth" />;
  }
  
  return <Component />;
}

// Auth route component (redirect to home if already logged in)
function AuthRoute() {
  const [, setLocation] = useLocation();
  const isAuthenticated = localStorage.getItem('agentDealsAuth') === 'true';
  
  if (isAuthenticated) {
    setLocation('/');
    return null;
  }
  
  return <AuthPage />;
}

function Router() {
  return (
    <Switch>
      <Route path="/auth" component={AuthRoute} />
      <Route path="/">
        <ProtectedRoute component={Home} />
      </Route>
      <Route path="/service/:provider">
        <ProtectedRoute component={ServicePage} />
      </Route>
      <Route path="/deposit">
        <ProtectedRoute component={DepositPage} />
      </Route>
      <Route path="/transactions">
        <ProtectedRoute component={TransactionsPage} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
