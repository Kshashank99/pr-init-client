import React from "react";
import { Box, Flex, HStack, VStack, Link } from "@chakra-ui/layout";
import { MoonIcon as IoMoon } from "../icons/moon-icon";
import { SunIcon as IoSunnyOutline } from "../icons/sun-icon";
// import { MenuIcon } from "../icons/menu-icon";
import { IconButton } from "@chakra-ui/button";
import { useToggle } from "../../hooks/useToggle";
import { useColorModeSwitcher } from "../../hooks/useColorModeSwitcher";
import { useColorMode } from "@chakra-ui/color-mode";
import { StyledLink } from "../styled-link/styled-link";
import { CodeIcon } from "../icons/code-icon";

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
          {/* <Item href="/" variant="noStyle">
            Home
          </Item> */}
          <Item href="/projects" variant="noStyle">
            Discover
          </Item>
          <Item href="/blog" variant="noStyle">
            Product
          </Item>
          <Item href="/about" variant="noStyle">
            Resources
          </Item>
          <Item href="/login" variant="noStyle">
            Log In
          </Item>
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
        <Item href="/" spacing={4} variant="large">
          Home
        </Item>
        <Item href="/about" spacing={4} variant="large">
          About
        </Item>
        <Item href="/projects" spacing={4} variant="large">
          Projects
        </Item>
        <Item href="/blog" spacing={4} variant="large">
          Blog
        </Item>
      </VStack>
      <VStack as="ul" my={8} p={4} spacing={8} w="100%">
        <Item href="/newsletter" variant="large">
          Newsletter
        </Item>
        <Item href="/community" variant="large">
          Community
        </Item>
        <Item href="/uses" variant="large">
          Uses
        </Item>
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

function Item({ children, href, ...props }) {
  const { colorGrey } = useColorModeSwitcher();
  //const [isLarge] = useMediaQuery('(min-width: 992px)');
  return (
    <VStack
      align="start"
      as="li"
      borderBottom={{ base: "1px solid", lg: "none" }}
      borderColor={colorGrey}
      listStyleType="none"
      pb={{ base: 4, lg: 0 }}
      w="100%"
    >
      <StyledLink {...props} href={href}>
        {children}
      </StyledLink>
    </VStack>
  );
}

export { Navbar };
