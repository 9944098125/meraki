import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import WhyChooseUs from "../Pages/WhyChooseUs";
import OurClients from "../Pages/OurClients";
import Careers from "../Pages/Careers";
import ContactUs from "../Pages/ContactUs";
import ItTraining from "../Services/ItTraining";
import PowerSkills from "../Services/PowerSkills";
import SoftSkills from "../Services/SoftSkills";
import CollegePartnerships from "../Services/CollegePartnerships";
import ItSolutions from "../Services/ItSolutions";
import StaffingServices from "../Services/StaffingServices";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/why-choose-us",
        element: <WhyChooseUs />,
      },
      {
        path: "/clients",
        element: <OurClients />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/services",
        children: [
          {
            path: "/services/it-training",
            element: <ItTraining />,
          },
          {
            path: "/services/power-skills",
            element: <PowerSkills />,
          },
          {
            path: "/services/soft-skills",
            element: <SoftSkills />,
          },
          {
            path: "/services/college-partnerships",
            element: <CollegePartnerships />,
          },
          {
            path: "/services/it-solutions",
            element: <ItSolutions />,
          },
          {
            path: "/services/staffing-services",
            element: <StaffingServices />,
          },
        ],
      },
    ],
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={routes} />;
}
