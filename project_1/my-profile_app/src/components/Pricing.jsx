import { Box, Button, Flex, Heading, HStack, Text,Icon, Stack } from '@chakra-ui/react'
import React, { Children } from 'react'
import CheckIcon from '../Icon/icon'




const ListItem=(props) =>{
  const {children,...rest}=props
  return (
   <HStack as="li" spacing="20px" {...rest}>
  <Icon as={CheckIcon} w="22px" h="22px"/>
  <Text>{children}</Text>
   </HStack>
  )
}


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
        <Box fontSize="18px" p="60px">
          <Text>Access these features when you get this pricing package for your business.</Text>
        <Stack as="ul" spacing="20px" pt="24px">
        <ListItem>Additional phone numbers</ListItem>
        <ListItem>International calling and messaging API</ListItem>
        
        <ListItem>Automated messages via Zapier</ListItem>
        <ListItem>24/7 support and consulting</ListItem>
        </Stack>

        </Box>
        
    </Flex>
    </Box>
  )
}

