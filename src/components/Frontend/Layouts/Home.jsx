import React from "react";
import Banner from "../Banner/Banner";
import Hero from "../Hero/Hero";
import HeroCard from "../HeroCard/HeroCard";
import AllPackage from "../Package/AllPackage";
import ClientTesitimonial from "../Testimonial/ClientTesitimonial";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Hero></Hero>
      <HeroCard></HeroCard>
      <AllPackage></AllPackage>
      <ClientTesitimonial></ClientTesitimonial>
    </>
  );
};

export default Home;
