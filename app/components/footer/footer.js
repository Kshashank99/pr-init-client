import React from "react";
import NextLink from "next/link";
import { Icon } from "@chakra-ui/icons";
import { useToggle } from "../../hooks/useToggle";
import { Link, HStack, VStack, Center } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import VisuallyHidden from "@chakra-ui/visually-hidden";
import { github, discord } from "../../content/socials";

const Footer = ({ customBgColor }) => {
  const [isLarge] = useMediaQuery("(min-width: 992px)");
  return (
    <VStack
      backgroundColor={customBgColor}
      // marginTop={0}
      borderTop="1px solid"
      borderColor="neutral.300"
      py="32px"
      w="100%"
      spacing={{ base: "16px", lg: "64px" }}
      as="footer"
    >
      {isLarge ? <Full /> : <Condensed />}
      <Link href={github.href} isExternal variant="noStyle" align="center">
        © All rights are reserved Project Init
      </Link>
    </VStack>
  );
};

const Condensed = () => {
  return (
    <HStack as="ul">
      <SocialLink
        color={github.color}
        icon={github.icon}
        href={github.href}
        name={github.name}
      />
      <SocialLink
        color={discord.color}
        icon={discord.icon}
        href={discord.href}
        name={discord.name}
      />
    </HStack>
  );
};

const Full = () => {
  return (
    <HStack align="start" spacing="16rem">
      <MainRoutes />
      <SubRoutes />
      <Socials />
    </HStack>
  );
};

const MainRoutes = () => {
  return (
    <VStack h="100%" align="start">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/projects">Projects</NavLink>
    </VStack>
  );
};

const SubRoutes = () => {
  return (
    <VStack h="100%" align="start">
      <NavLink href="/newsletter">Newsletter</NavLink>
      <NavLink href="/community">Community</NavLink>
      <NavLink href="/uses">Uses</NavLink>
    </VStack>
  );
};

const Socials = () => {
  return (
    <VStack spacing={0.25} h="100%" as="ul">
      <SocialLink
        color={github.color}
        icon={github.icon}
        href={github.href}
        name={github.name}
      >
        Github
      </SocialLink>
      <SocialLink
        color={discord.color}
        icon={discord.icon}
        href={discord.href}
        name={discord.name}
      >
        Discord
      </SocialLink>
    </VStack>
  );
};

const SocialLink = ({ children, color, icon, href, name }) => {
  const [hover, toggleHover] = useToggle();
  const [isLarge] = useMediaQuery("(min-width: 992px)");
  return (
    <Center
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      as="li"
      listStyleType="none"
    >
      <Link
        variant="subtle"
        display="flex"
        alignItems="center"
        p={2}
        href={href}
        isExternal
      >
        <Icon
          transform={hover ? "translateY(-4px)" : "none"}
          transitionDuration="500ms"
          fill={hover && color}
          // fill="roseRed.900"
          mr={{ lg: "0.25rem" }}
          boxSize={{ base: "0.5rem", lg: "1rem" }}
          aria-hidden={true}
          as={icon}
        />
        {children}
        {!isLarge && <VisuallyHidden>{name}</VisuallyHidden>}
      </Link>
    </Center>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <Link variant="subtle">{children}</Link>
    </NextLink>
  );
};

export { Footer };
