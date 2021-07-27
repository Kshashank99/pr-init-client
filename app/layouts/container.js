import React from "react";
import Head from "next/head";
import { useToggle } from "../hooks/useToggle";
import { Button } from "@chakra-ui/button";
import { Box, VStack } from "@chakra-ui/react";
// import { MobileNavMenu, Navbar } from "../components/navbar";
import { MobileNavMenu, Navbar } from "../components/navbar";
import { Footer } from "../components/footer/footer";

const Container = ({
  // customSpacing = { base: '8rem', lg: '10rem' },
  footerColor,
  children,
  ...customMeta
}) => {
  const [isOpen, toggleIsOpen] = useToggle();

  return (
    <Box>
      <Seo {...customMeta} />
      <Box
        w={{ base: "100vw", "2xl": "80vw", "3xl": "72vw" }}
        minH="100vh"
        m="auto"
      >
        <Navbar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
        <VStack id="skip" as="main" spacing={{ base: "2rem", lg: "6rem" }}>
          {isOpen ? <MobileNavMenu /> : children}
          <Footer customBgColor={footerColor} />
        </VStack>
      </Box>
    </Box>
  );
};

const Seo = ({ ...customMeta }) => {
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
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

const SkipButton = () => {
  return (
    <Button
      variant="secondary"
      as="a"
      href="#skip"
      position="absolute"
      transform="translateX(-100%)"
      transition="transform 0.3s"
      _focus={{ transform: "translateX(0%)" }}
    >
      Skip to Content
    </Button>
  );
};

export { Container };
