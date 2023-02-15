import React, { Fragment } from "react";
import Clients from "../Components/Clients";
import LandingImageSection from "../Components/LandingImageSection";
import ServicesInHome from "../Components/ServicesInHome";
import VisionAndMission from "../Components/VisionAndMission";
import AboutUsComponent from "../Components/AboutUs";
import GetInTouch from "../Components/GetInTouch";
import MileStones from "../Components/MileStones";

function Home() {
  return (
    <Fragment>
      <LandingImageSection />
      <ServicesInHome />
      <AboutUsComponent />
      <VisionAndMission />
      <Clients />
      <MileStones title="Milestones" />
      <GetInTouch />
    </Fragment>
  );
}

export default Home;
