import { HStack,Icon,Text,Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { HassleFreeIcon, MoneyBackGuaranteeIcon, MonthlySubscriptionIcon } from '../Icon/icon'


export const Feature = (props) => {
    const {icon,children,...rest}=props
  return (
   <HStack  {...rest} spacing="6">
    <Icon as={icon} boxSize="12"/>
    <Text textAlign="left" fontSize="lg" fontWeight="bold">
       {children}
    </Text>
   </HStack>
  )
}

  
function Features() {
  return (
   <Box maxW="1024px" m="auto" pt="60px" pb="8">
    
      <Stack   px="12" spacing="5" direction={["column","column","row"]}>
    <Feature icon={MoneyBackGuaranteeIcon}>30 days money back Guarantee</Feature>
    <Feature icon={HassleFreeIcon}>No setup fees
       100% hassle-free</Feature>
     <Feature icon={MonthlySubscriptionIcon}>No monthly subscription
Pay once and for all</Feature>
</Stack>
    
    </Box>
  )
}

export default Features