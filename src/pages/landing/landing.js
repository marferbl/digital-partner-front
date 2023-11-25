import React from "react";
import Features from "../../components/base/landing/features";
import FooterLanding from "../../components/base/landing/footer";
import FormDemo from "../../components/base/landing/form";
import Hero from "../../components/base/landing/hero";
import Testimonials from "../../components/base/landing//testimonials";
import Navbar from "../../components/base/navbar";
import MarketplaceSection from "../../components/base/landing/marketplacesection";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MarketplaceSection />
      <FooterLanding />
    </>
  );
};

export default LandingPage;
