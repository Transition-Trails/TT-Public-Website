import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Layout
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import ExplorersTrail from "./pages/ExplorersTrail";
import FoundationsTrail from "./pages/FoundationsTrail";
import GuidedTrail from "./pages/GuidedTrail";
import TrailOfMastery from "./pages/TrailOfMastery";
import DigitalCompass from "./pages/DigitalCompass";
import About from "./pages/About";
import Volunteer from "./pages/Volunteer";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Waitlist from "./pages/Waitlist";
import NonprofitAssessment from "./pages/NonprofitAssessment";
import Scholarships from "./pages/Scholarships";
import PartnersRecruiters from "./pages/PartnersRecruiters";
import PartnersEmployers from "./pages/PartnersEmployers";
import Expedition from "./pages/Expedition";
import Coaches from "./pages/Coaches";
import Coaching from "./pages/Coaching";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* Primary routes */}
      <Route path="/" component={Home} />
      <Route path="/programs" component={Programs} />
      <Route path="/programs/explorers-trail" component={ExplorersTrail} />
      <Route path="/programs/foundations-trail" component={FoundationsTrail} />
      <Route path="/programs/guided-trail" component={GuidedTrail} />
      <Route path="/programs/trail-of-mastery" component={TrailOfMastery} />
      <Route path="/programs/digital-compass" component={DigitalCompass} />
      <Route path="/about" component={About} />
      <Route path="/volunteer" component={Volunteer} />
      <Route path="/donate" component={Donate} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/waitlist" component={Waitlist} />
      <Route path="/nonprofit-assessment" component={NonprofitAssessment} />
      <Route path="/scholarships" component={Scholarships} />
      <Route path="/partners/recruiters" component={PartnersRecruiters} />
      <Route path="/partners/employers" component={PartnersEmployers} />
      <Route path="/expedition" component={Expedition} />
      <Route path="/coaches" component={Coaches} />
      <Route path="/coaching" component={Coaching} />

      {/* Alias routes */}
      <Route path="/scholarship-application">
        <Redirect to="/scholarships" />
      </Route>

      {/* Legacy URL redirects from old Salesforce Experience Cloud site */}
      <Route path="/contact-us">
        <Redirect to="/contact" />
      </Route>
      <Route path="/guided-trail">
        <Redirect to="/programs/guided-trail" />
      </Route>
      <Route path="/foundationsTrail">
        <Redirect to="/programs/foundations-trail" />
      </Route>
      <Route path="/explorersTrail">
        <Redirect to="/programs/explorers-trail" />
      </Route>

      {/* 404 catch-all */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex-1 flex flex-col">
              <Router />
            </main>
            <Footer />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
