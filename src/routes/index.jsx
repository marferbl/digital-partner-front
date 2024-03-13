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
import { FreelancePage } from "../pages/personal/freelance";
import { SolutionDetailPage } from "../pages/admin/solutions/solution-detail";
import { ServicePage } from "../pages/admin/service";
import ServiceDetailsPage from "../pages/admin/service/service-details";

export const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/newRouteHidden"} element={<App />} />
        <Route path={"/marketplace"} element={<MarketplacePage />} />
        <Route path={"search/:term"} element={<SearcherPage />} />
        <Route path={'solution/:id'} element={<SolutionDetailPage />} />
        <Route path={"private"} element={<PrivateRoute />}>
          <Route path={"dashboard"} element={<Dashboard />} />
          <Route path={"profile"} element={<ProfilePage />} />
          <Route path={"corporate/profile"} element={<ProfileCorporatePage />} />
          <Route path={"search/:term"} element={<SearcherPage />} />
          <Route path={"search"} element={<SearcherPage />} />
          <Route path={'corporate/solutions'} element={<SolutionsCorporatePage />} />
          <Route path={'freelance'} element={<FreelancePage />} />
          <Route path={'solution/:id'} element={<SolutionDetailPage />} />
          <Route path={'corporate/service'} element={<ServicePage />} />
          <Route path={'service/:id'} element={<ServiceDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
