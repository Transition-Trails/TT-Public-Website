import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import ScrollToTop from "./components/ScrollToTop";

// Layout — loaded eagerly (needed on every page immediately)
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

// Pages — lazy loaded for route-level code splitting
const Home = lazy(() => import("./pages/Home"));
const Programs = lazy(() => import("./pages/Programs"));
const ExplorersTrail = lazy(() => import("./pages/ExplorersTrail"));
const FoundationsTrail = lazy(() => import("./pages/FoundationsTrail"));
const GuidedTrail = lazy(() => import("./pages/GuidedTrail"));
const TrailOfMastery = lazy(() => import("./pages/TrailOfMastery"));
const DigitalCompass = lazy(() => import("./pages/DigitalCompass"));
const About = lazy(() => import("./pages/About"));
const AboutTeam = lazy(() => import("./pages/AboutTeam"));
const Volunteer = lazy(() => import("./pages/Volunteer"));
const Board = lazy(() => import("./pages/Board"));
const BoardApplication = lazy(() => import("./pages/BoardApplication"));
const Donate = lazy(() => import("./pages/Donate"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Waitlist = lazy(() => import("./pages/Waitlist"));
const NonprofitAssessment = lazy(() => import("./pages/NonprofitAssessment"));
const Scholarships = lazy(() => import("./pages/Scholarships"));
const ScholarshipApplication = lazy(() => import("./pages/ScholarshipApplication"));
const PartnersRecruiters = lazy(() => import("./pages/PartnersRecruiters"));
const PartnersEmployers = lazy(() => import("./pages/PartnersEmployers"));
const Expedition = lazy(() => import("./pages/Expedition"));
const Coaches = lazy(() => import("./pages/Coaches"));
const Coaching = lazy(() => import("./pages/Coaching"));
const Consulting = lazy(() => import("./pages/Consulting"));
const Impact = lazy(() => import("./pages/Impact"));
const NotFound = lazy(() => import("./pages/not-found"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-2 border-[#2F6B3F] border-t-transparent rounded-full animate-spin" />
      <p className="font-['Open_Sans'] text-[14px] text-[#6B7280]">Loading…</p>
    </div>
  </div>
);

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
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
        <Route path="/about/team" component={AboutTeam} />
        <Route path="/volunteer" component={Volunteer} />
        <Route path="/board" component={Board} />
        <Route path="/board-application" component={BoardApplication} />
        <Route path="/donate" component={Donate} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog/:id" component={BlogPost} />
        <Route path="/blog" component={Blog} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/waitlist" component={Waitlist} />
        <Route path="/nonprofit-assessment" component={NonprofitAssessment} />
        <Route path="/scholarships" component={Scholarships} />
        <Route path="/scholarship-application" component={ScholarshipApplication} />
        <Route path="/partners/recruiters" component={PartnersRecruiters} />
        <Route path="/partners/employers" component={PartnersEmployers} />
        <Route path="/expedition" component={Expedition} />
        <Route path="/coaches" component={Coaches} />
        <Route path="/coaching" component={Coaching} />
        <Route path="/consulting" component={Consulting} />
        <Route path="/impact" component={Impact} />

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
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MotionConfig reducedMotion="user">
          <LazyMotion features={domAnimation}>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <ScrollToTop />
              <div className="flex flex-col min-h-screen">
                <Nav />
                <main className="flex-1 flex flex-col">
                  <Router />
                </main>
                <Footer />
              </div>
            </WouterRouter>
            <Toaster />
          </LazyMotion>
        </MotionConfig>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
