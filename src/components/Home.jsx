import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <Box bgColor='blackAlpha.900' w='full' h="85vh">
      <motion.div 
      style={{height:"80vh",padding:"30px"}}
      animate={{
        translateY:"20px"
      }}

      transition={{
        duration:2,repeat:Infinity,repeatType:"reverse",
      }}
      
      >

      <Image  w="full" h="full" objectFit='contain' src={"https://static.currency.com/img/media/bitcoin.dd8a16.png"} />
      </motion.div>


      <Text color='white' marginTop="-10"  fontSize={'6xl'} textAlign='center' fontWeight='thin'>Crypto</Text>

    </Box>
  )
}

export default Home
