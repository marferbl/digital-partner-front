import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import App from "../App";
import RegisterPage from "../pages/start/register-page";
import LoginPage from "../pages/start/login-page";
import PrivateRoute from "./privateRoute";
import Dashboard from "../components/dashboard/dashboard";
import { ProfilePage } from "../pages/profile/profile";
import LandingPage from "../pages/landing/landing";
import { MarketplacePage } from "../pages/maketplace/marketplace";
import SearcherPage from "../pages/searcher/SearcherPage";
import { ProfileCorporatePage } from "../pages/admin/profile/index";
import { SolutionsCorporatePage } from "../pages/admin/solutions";
import { SolutionDetailPage } from "../pages/admin/solutions/solution-detail";
import { ServicePage } from "../pages/admin/service";
import ServiceDetailsPage from "../pages/admin/service/service-details";
import AboutPage from "../pages/landing/about";
import FaqsPage from "../pages/landing/faqs";
import FalseLanding from "../pages/landing/false-landing";
import FavoritePage from "../pages/favorite/FavoritePage";
import DigitalProfilePage from "../pages/user/digital-profile.js"
import { DemoPage } from "../pages/landing/demo";
import ConfirmEmailPage from "../pages/start/confirm-email";
import ConditionsUserPage from "../pages/landing/conditions-user";
import { EventsPage } from "../pages/admin/event";
import EventDetailsPage from "../pages/admin/event/event-details";
import BlogEditor from "../pages/blog/blog-editor";
import BlogList from "../pages/blog/blog-list";
import BlogDetail from "../pages/blog/blog-detail";
import PublicRoute from "./publicRoute";
import DigitalProfileDetailsPage from "../pages/digital-profile/digital-profile-details";
import ReferenceForm from "../pages/admin/references/referenceform";
import ReferenceAdmin from "../pages/admin/references/reference-admin";
import ReferenceAnswers from "../pages/admin/references/reference-answer";

export const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<PublicRoute />}>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/start"} element={<App />} />
          <Route path={"/start/a"} element={<App />} />
          <Route path={"/marketplace"} element={<MarketplacePage />} />
          <Route path={"search/:term"} element={<SearcherPage />} />
          <Route path={"search"} element={<SearcherPage />} />
          <Route path={"favorites"} element={<FavoritePage />} />
          <Route path={'solution/:id'} element={<SolutionDetailPage />} />
          <Route path={'service/:id'} element={<ServiceDetailsPage />} />
          <Route path={'event/:id'} element={<EventDetailsPage />} />
          <Route path={"talent/:id"} element={<DigitalProfileDetailsPage />} />
          <Route path={'about'} element={<AboutPage />} />
          <Route path={'faqs'} element={<FaqsPage />} />
          <Route path={'demo'} element={<DemoPage />} />
          <Route path={'digital-profile'} element={<DigitalProfilePage />} />
          <Route path={'confirm/email/:id'} element={<ConfirmEmailPage />} />
          <Route path={'blog-creation'} element={<BlogEditor />} />
          <Route path={'blog-list'} element={<BlogList />} />
          <Route path={'blog/:id'} element={<BlogDetail />} />
          <Route path={'reference-answer/:id'} element={<ReferenceForm />} />
        </Route>

        <Route path={"private"} element={<PrivateRoute />}>
          <Route path={"dashboard"} element={<Dashboard />} />
          <Route path={"profile"} element={<ProfilePage />} />
          <Route path={"corporate/profile"} element={<ProfileCorporatePage />} />
          <Route path={"search/:term"} element={<SearcherPage />} />
          <Route path={"search"} element={<SearcherPage />} />
          <Route path={"favorites"} element={<FavoritePage />} />
          <Route path={'corporate/solutions'} element={<SolutionsCorporatePage />} />
          <Route path={'digital-profile'} element={<DigitalProfilePage />} />
          <Route path={'solution/:id'} element={<SolutionDetailPage />} />
          <Route path={'corporate/service'} element={<ServicePage />} />
          <Route path={'service/:id'} element={<ServiceDetailsPage />} />
          <Route path={'corporate/events'} element={<EventsPage />} />
          <Route path={'event/:id'} element={<EventDetailsPage />} />
          <Route path={'corporate/references'} element={<ReferenceAdmin />} />
          <Route path={'reference-answer'} element={<ReferenceAnswers />} />

        </Route>
      </Routes>
    </Router>
  );
};
