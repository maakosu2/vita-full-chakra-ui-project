import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function Element() {
  return (
    <Box as="section" pb="116px">
    <Box  color="gray.50" bg="purple.600"  pt="90px" pb="198px" px="8" textAlign={["left","left","center"]}>
  <Heading fontSize={["3xl","3xl","5xl"]}  fontWeight="extrabold" >Simple pricing for your business 
  </Heading>
  <Text fontSize={["lg","lg","2xl"]}  fontWeight="medium" pt="4">
  Plans that are carefully crafted to suit your business.
  </Text>
  </Box>
  </Box>
  )
}
