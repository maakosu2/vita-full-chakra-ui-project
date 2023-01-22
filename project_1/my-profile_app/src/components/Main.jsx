import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'

const Main = () => {
  return (
    <>
    
    <SimpleGrid columns={{sm:2, md:1}} spacing="10px" minWidth="28%" className='set-container main'>
    <Box  bg="red" w="40"> Main of the mago</Box>
    <div  style={{color:"black"}}> Main of the mago</div>
    <div  style={{color:"black"}}> Main of the mago</div>
    <div  style={{color:"black"}}> Main of the mago</div>
    
    </SimpleGrid>
    </>)
}

export default Main