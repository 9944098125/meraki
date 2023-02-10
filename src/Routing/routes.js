import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import WhyChooseUs from "../Pages/WhyChooseUs";
import OurClients from "../Pages/OurClients";
import OurServices from "../Pages/OurServices";
import Careers from "../Pages/Careers";
import ContactUs from "../Pages/ContactUs";

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
        path: "/services",
        element: <OurServices />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={routes} />;
}
