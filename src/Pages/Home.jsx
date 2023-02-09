import React, { Fragment } from "react";
import Clients from "../Components/Clients";
import LandingImageSection from "../Components/LandingImageSection";
import ServicesInHome from "../Components/ServicesInHome";
import VisionAndMission from "../Components/VisionAndMission";
import AboutUs from "./AboutUs";

function Home() {
  return (
    <Fragment>
      <LandingImageSection />
      <ServicesInHome />
      <AboutUs />
      <VisionAndMission />
      <Clients />
    </Fragment>
  );
}

export default Home;
