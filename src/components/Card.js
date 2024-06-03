import { Box, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return <>
    <HStack align="left">
      <Box bg="white" color="grey" padding="10px" borderRadius="5px">
        <VStack align="left">
          <Image src={imageSrc} alt={title}/>
          <Heading as="h1">{title}</Heading>
          <Text color="black">{description}</Text>
          <Link>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Link>
        </VStack>
      </Box>
    </HStack>
  </>
};

export default Card;
