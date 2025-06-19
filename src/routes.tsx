import { createBrowserRouter, Outlet } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./components/homePage";

import ContactPage from "./pages/BastaTech/ContactPage";
import AboutPage from "./pages/AboutPage";

import ScrollToTop from "./components/ScrollToTop";

import SecondServicesPage from "./pages/BastaTech/SecondServicesPage";
import SecondCareerPage from "./pages/BastaTech/SecondCareerPage";
import IndustriesTemplatePage from "./pages/BastaTech/IndustriesTemplatePage";
import CareersPage from "./pages/BastaTech/CareersPage";
import ServicesPage from "./pages/BastaTech/ServicesPage";
//import CareersPage from "./pages/BastaTech/CareersPage";

// Define your routes using `createBrowserRouter`
export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <NavBar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
         path: "/careers",
        element: <CareersPage />,
      },

      {
        path: "/services",
        element: <SecondServicesPage />,
      },

      {
        path: "/services/AINative",
        element: <ServicesPage />,
      },

      {
        path: "/services/IndustrialTemplate",
        element: <IndustriesTemplatePage />,
      },


    ],
  },
]);
