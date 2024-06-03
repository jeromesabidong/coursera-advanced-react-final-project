import React, { useCallback, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    id: "mail",
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    id: "github",
    icon: faGithub,
    url: "https://github.com",
  },
  {
    id: "linkedin",
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    id: "medium",
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    id: "stackoverflow",
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const local_links = [
  {
    name: "Projects",
    local_link: "/#contact-me",
    id: "projects-section",
  },
  {
    name: "Contact Me",
    local_link: "/#projects",
    id: "contactme-section"
  }
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const boxRef = useRef();

  const handleScroll = () => {
    // @to-do
  }

  window.addEventListener('scroll', handleScroll)

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={boxRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav id="socials">
            <HStack spacing="10px" justifyContent="space-between" alignItems="center">
            {socials.map((social) => {
              return <Box w="40px" h="40px" alignItems="center" key={social.id}>
                  <a href={social.url}>
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>
                </Box>
            })}
            </HStack>
          </nav>
          <nav id="links">
            <HStack spacing={8}>
              {local_links.map((local_link) => (
                <a href="#" key={local_link.id} onClick={handleClick(local_link.link)}>
                  {local_link.name}
                </a>
              ))}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
