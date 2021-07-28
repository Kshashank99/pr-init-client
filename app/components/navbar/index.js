/* eslint-disable react/no-multi-comp */
/**
 * TODO:
 *  1) Refactor into smaller components
 *  2) Authentication Display Logic
 *  3) Fix routes
 */
import React from "react";
import { Box, Flex, HStack, VStack, Link } from "@chakra-ui/layout";
import { MoonIcon as IoMoon } from "../icons/moon-icon";
import { SunIcon as IoSunnyOutline } from "../icons/sun-icon";
import { IconButton } from "@chakra-ui/button";
import { useToggle } from "../../hooks/useToggle";
import { useColorModeSwitcher } from "../../hooks/useColorModeSwitcher";
import { useColorMode } from "@chakra-ui/color-mode";
import { VerticalLink } from "../styled-link/vertical-link";
import { StyledLink } from "../styled-link/styled-link";
import { CodeIcon } from "../icons/code-icon";

// test hover menu
import { HoverDropDown } from "../hover-dropdown";

function Navbar({ isOpen, toggleIsOpen }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { colorDark } = useColorModeSwitcher();
  return (
    <Flex
      as="nav"
      justify="space-between"
      mb={isOpen ? { base: "1rem" } : { base: "4.5rem", lg: "3rem" }}
      p="4"
    >
      <MenuButton toggleIsOpen={toggleIsOpen} />
      <CodeIcon fill={colorDark} />
      <HStack spacing={{ base: 0, md: 8 }}>
        <Flex align="center" as="ul" display={{ base: "none", lg: "flex" }}>
          {/* Discover Our Product Routes */}
          <HoverDropDown href="/" title="Discover" variant="noStyle">
            <VerticalLink href="/projects" variant="noStyle">
              Projects
            </VerticalLink>
            <VerticalLink href="/teams" variant="noStyle">
              Teams
            </VerticalLink>
            <VerticalLink href="/about" variant="noStyle">
              About
            </VerticalLink>
            <VerticalLink href="/careers" variant="noStyle">
              Careers
            </VerticalLink>
          </HoverDropDown>
          {/* Resources Routes */}
          <HoverDropDown href="/resources" title="Resources" variant="noStyle">
            <VerticalLink href="init/guides" variant="noStyle">
              Guides
            </VerticalLink>
            <VerticalLink href="init/community" variant="noStyle">
              Community
            </VerticalLink>
            <VerticalLink href="init/newsletter" variant="noStyle">
              Newsletter
            </VerticalLink>
            <VerticalLink href="init/uses" variant="noStyle">
              Uses
            </VerticalLink>
            <VerticalLink href="/contact" variant="noStyle">
              Contact Us
            </VerticalLink>
            <VerticalLink href="init/support" variant="noStyle">
              Support
            </VerticalLink>
          </HoverDropDown>
          {/* Display Log In / Log Out based on authentication */}
          <StyledLink href="/login" type="auth" variant="noStyle" w="100%">
            Log In
          </StyledLink>
        </Flex>
        <IconButton
          aria-label={
            colorMode === "light" ? "Toggle dark mode" : "Toggle light Mode"
          }
          borderRadius="sm"
          icon={
            colorMode === "light" ? (
              <IoMoon size="1.25rem" />
            ) : (
              <IoSunnyOutline size="1.25rem" />
            )
          }
          id="toggleTheme"
          onClick={toggleColorMode}
          variant="icon"
        />
      </HStack>
    </Flex>
  );
}

export function MobileNavMenu() {
  return (
    <VStack spacing={4} w="100%">
      <VStack as="ul" my={8} p={4} spacing={8} w="100%">
        <VerticalLink href="/" spacing={4} variant="large">
          Home
        </VerticalLink>
        <VerticalLink href="/about" spacing={4} variant="large">
          About
        </VerticalLink>
        <VerticalLink href="/projects" spacing={4} variant="large">
          Projects
        </VerticalLink>
        <VerticalLink href="/blog" spacing={4} variant="large">
          Blog
        </VerticalLink>
      </VStack>
      <VStack as="ul" my={8} p={4} spacing={8} w="100%">
        <VerticalLink href="/newsletter" variant="large">
          Newsletter
        </VerticalLink>
        <VerticalLink href="/community" variant="large">
          Community
        </VerticalLink>
        <VerticalLink href="/uses" variant="large">
          Uses
        </VerticalLink>
      </VStack>
    </VStack>
  );
}

function MenuButton({ toggleIsOpen, ...props }) {
  const [clicked, toggleClicked] = useToggle();

  const handleClick = () => {
    toggleIsOpen();
    toggleClicked();
  };
  return (
    <IconButton
      _hover={{ variant: "ghost" }}
      borderRadius="sm"
      display={{ base: "block", lg: "none" }}
      h="48px"
      // eslint-disable-next-line react/jsx-no-bind
      onClick={handleClick}
      variant="ghost"
      w="48px"
      {...props}
      icon={<MenuIcon clicked={clicked} />}
    />
  );
}

function MenuIcon({ clicked }) {
  const { colorDark } = useColorModeSwitcher();
  return (
    <Box
      h="100%"
      position="relative"
      w="100%"
      // transform={"rotate(0deg)"}
      // transition={"all 0.5s ease-in-out"}
    >
      <Line
        bg={colorDark}
        left={clicked ? "8px" : "4px"}
        top={clicked ? "22px" : "16px"}
        transform={clicked ? "rotate(45deg)" : "none"}
        width={clicked ? "32px" : "40px"}
      />
      <Line
        bg={colorDark}
        bottom={clicked ? "22px" : "16px"}
        left={clicked ? "8px" : "4px"}
        transform={clicked ? "rotate(-45deg)" : "none"}
        width={clicked ? "32px" : "40px"}
      />
    </Box>
  );
}

function Line({ ...props }) {
  return (
    <Box
      {...props}
      as="span"
      borderRadius="13px"
      height="2px"
      position="absolute"
      transition="all 0.3s ease-in-out"
    />
  );
}

export { Navbar };
