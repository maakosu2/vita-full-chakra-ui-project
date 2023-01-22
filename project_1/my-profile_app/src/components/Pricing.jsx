import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'



export default function Pricing() {
  return (
    <Box>
    <Flex>
        <Box bg="#F0EAFB" p="60px" textAlign="center">
            <Text font-weight="800" font-size="24px">Premium PRO</Text>
            <Heading  as="h3" font-size="60px" mt="16px">$329</Heading>
            <Text color="#171923" font-size="18px" font-weight="500" mt="8px">billed just once</Text>
            <Button bg="#805AD5" border-radius="8px" size="lg" width="282px" mt="24px">Get Started</Button>
        </Box>
    </Flex>
    </Box>
  )
}
/* 
<Flex>
    <Box as="section" w="240px">
        <Text font-weight="800" font-size="24px">Premium PRO</Text>
        <Headings as="h3" font-size="60px">$329</Headings>
        <Text  color="#171923" font-size="18px" font-weight="500">billed just once</Text>
        <Button >Get Started</Button>
    </Box>
    </Flex> */