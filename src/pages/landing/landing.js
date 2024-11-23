import React from "react";

import Hero from "../../components/base/landing/hero";
import Navbar from "../../components/base/navbar";

import SecondHero from "../../components/base/landing/second-hero";
import WelcomePart from "../../components/base/landing/welcome-part";
import DiscoverLanding from "../../components/base/landing/discover";
import { Box } from "@chakra-ui/react";
import BlogListLanding from "../../components/base/landing/blog-list-landing";
import TopSolutions from "../../components/base/landing/top-solutions";
import TopServices from "../../components/base/landing/top-services";
import WhyDigitalando from "../../components/base/landing/why-digitalando";
import FeaturesDigitalando from "../../components/base/landing/features-digitalando";
import FooterLanding from "../../components/base/landing/footer";

const LandingPage = () => {
  return (
    <>
      <Box overflowX={'hidden'} position='relative' bg='black'>
        <Hero />
        <SecondHero />
        <WelcomePart />
        <DiscoverLanding />
        <BlogListLanding />
        <TopSolutions />
        <TopServices />
        <WhyDigitalando />
        <FeaturesDigitalando />

      </Box>
    </>
  );
};

export default LandingPage;
