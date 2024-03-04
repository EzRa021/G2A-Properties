import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import './App.css'
import PropertiesPage from './pages/LandingPages/PropertiesPage'
import AboutUs from './pages/LandingPages/AboutUs'
import ContactUsPage from "./pages/LandingPages/ContactUsPage";
import SignUpPage from "./pages/RealtorPages/SignUpPage";
import PropertiesDetailsPage from "./pages/LandingPages/PropertiesDetailsPage";
import BlogPage from "./pages/LandingPages/BlogPage";
import FaqPage from "./pages/LandingPages/FaqPage";
import AmbassadorTeamPage from "./pages/LandingPages/AmbassadorTeamPage";
import Home from "./pages/LandingPages/Home";
import Dashboard from "./pages/AdminPages/Dashboard/Dashboard";
import Loader from './common/Loader';
import PageTitle from './Components/Admin/PageTitle';
import FilesPage from './pages/AdminPages/Files/FilesPage';
import AddPropertiesPage from './pages/AdminPages/AddProperties/AddPropertiesPage';
import AllRealtorPage from './pages/AdminPages/Allreators/AllRealtorsPage';
// import RealtorSinglePage from './pages/AdminPages/RealtorSinglePage.jsx/RealtorSinglePage';
import AddRealtorsPage from './pages/AdminPages/AddRealtorsPage/AddRealtorsPage';
import AllPropertiesPage from './pages/AdminPages/AllPropertiesPage/AllPropertiesPage';
import InspectPage from "./pages/LandingPages/InspectPage";
import InspectionsPage from "./pages/AdminPages/InspectionsPage/InspectionPage";
import RealtorFilesPage from "./pages/RealtorPages/Files/RealtorFilesPage";
import RealtorAddPropertiesPage from "./pages/RealtorPages/AddProperties/RealtorAddPropertiesPage";
import RealtorDashboard from "./pages/RealtorPages/Dashboard/RealtorDashboard";
import RealtorAllPropertiesPage from "./pages/RealtorPages/AllPropertiesPage/RealtorAllPropertiesPage";



function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Properties" element={<PropertiesPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUsPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Propertiesdetails" element={<PropertiesDetailsPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Faq" element={<FaqPage />} />
        <Route path="/AmbassadorTeam" element={<AmbassadorTeamPage />} />
        <Route path="/InspectPage" element={<InspectPage />} />

        <Route
          path="/admin"
          element={

            <Dashboard />
          }
        />
        <Route
          path="/admin/files"
          element={

            <FilesPage />
          }
        />
        <Route
          path="/admin/addproperties"
          element={

            <AddPropertiesPage />

          }
        />
        <Route
          path="/admin/inspections"
          element={
            <InspectionsPage />
          }
        />
        <Route
          path="/admin/addrealtor"
          element={

            <AddRealtorsPage />

          }
        />
        <Route
          path="/admin/allrealtors"
          element={

            <AllRealtorPage />
          }
        />
        <Route
          path="/admin/allproperties"
          element={

            <AllPropertiesPage />

          }
        />
        <Route
          path="/admin/realtor"
          element={
            <PageTitle title="Realtor" />

          }
        />
        <Route
          path="/realtor"
          element={
            <RealtorDashboard />
          }
        />
        <Route
          path="/realtor/files"
          element={
            <RealtorFilesPage />
          }
        />
        <Route
          path="/realtor/addproperties"
          element={
            <RealtorAddPropertiesPage />
          }
        />
        <Route
          path="/realtor/allproperties"
          element={
            <RealtorAllPropertiesPage />
          }
        />

      </Routes>
    // </BrowserRouter>
  )
}

export default App
