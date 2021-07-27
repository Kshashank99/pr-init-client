/* eslint-disable react/no-multi-comp */
import React from "react";
import Head from "next/head";
import { useToggle } from "../hooks/useToggle";
import { Button } from "@chakra-ui/button";
import { Box, VStack } from "@chakra-ui/react";
// import { MobileNavMenu, Navbar } from "../components/navbar";
import { MobileNavMenu, Navbar } from "../components/navbar";
import { FooterSection } from "../components/sections/footer-section/index";

function Container({
  // customSpacing = { base: '8rem', lg: '10rem' },
  footerColor,
  children,
  ...customMeta
}) {
  const [isOpen, toggleIsOpen] = useToggle();

  return (
    <Box>
      <Seo {...customMeta} />
      <Box
        m="auto"
        minH="100vh"
        w={{ base: "100vw", "2xl": "80vw", "3xl": "72vw" }}
      >
        <Navbar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
        <VStack as="main" id="skip" spacing={{ base: "2rem", lg: "6rem" }}>
          {isOpen ? <MobileNavMenu /> : children}
          <FooterSection customBgColor={footerColor} />
        </VStack>
      </Box>
    </Box>
  );
}

function Seo({ ...customMeta }) {
  const meta = {
    title: "Project Init",
    description:
      "An easy way to develop your skills as a software developer, find a project and collab with th other students!",
    // image: 'https://vinclou.com/static/images/banner.png', TODO ADD BANNER
    type: "website",
    ...customMeta,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <link href="/favicon.ico" rel="icon" />
    </Head>
  );
}

function SkipButton() {
  return (
    <Button
      _focus={{ transform: "translateX(0%)" }}
      as="a"
      href="#skip"
      position="absolute"
      transform="translateX(-100%)"
      transition="transform 0.3s"
      variant="secondary"
    >
      Skip to Content
    </Button>
  );
}

export { Container };
