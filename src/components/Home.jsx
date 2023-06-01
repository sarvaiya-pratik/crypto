import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'


const Home = () => {
  return (
    <Box bgColor='blackAlpha.900' w='full' h="85vh">
      <Image  w="full" h="full" objectFit='contain' src={"https://freepngimg.com/thumb/bitcoin/59621-cryptocurrency-coinbase-litecoin-blockchain-bitcoin-free-download-png-hd-thumb.png"} />

      <Text color='white' marginTop="-20"  fontSize={'6xl'} textAlign='center' fontWeight='thin'>Crypto</Text>

    </Box>
  )
}

export default Home
