import { VStack,Image,Heading,Text } from '@chakra-ui/react';
import React from 'react'
import { NavLink } from 'react-router-dom';


const CoinCard = ({id,name,img,price,symbol,currencySymbol}) => {
  return (
    <NavLink to={`/coin/${id}`} target="blank">
    <VStack maxW={24} w="200px" shadow='xl' py="3" borderRadius='lg' transition={"all 0.5s"}
    m='2' css={{"&:hover":{transform:"scale(1.1)",cursor:"pointer"}}}>
    <Image src={img} alt="" w='8' h='8' objectFit='contain' />
    <Heading size='md' noOfLines={1}>{symbol}</Heading>
    <Text>{name.length>7?`${name.slice(0,7)}..`:name}</Text>
    <Text>{ price?`${currencySymbol} ${price}`:"NA" }</Text>
    </VStack>
  </NavLink>
  )
}

export default CoinCard
