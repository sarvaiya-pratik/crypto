import { Avatar, Box, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
        <Box bgColor={'blackAlpha.900'} color="white" minH={40} p="6" >
            <Stack direction={['column','row']} alignItems='center'  justifyContent='space-between'>
                <VStack p={3}>
                    <Heading alignSelf={['center','flex-start']} fontSize={30}>About Us</Heading>
                    <Text> We are the best crypto trading app, we provide out guidance to at discount price </Text>
                </VStack>
                <VStack mt={[4,""]}>
                    <Avatar/>
                    <Text>Pratik Rajput</Text>
                </VStack>
            </Stack>
        </Box>
    </>
  )
}

export default Footer
