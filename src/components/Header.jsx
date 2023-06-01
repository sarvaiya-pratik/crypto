import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <HStack bgColor={'blackAlpha.800'} p='6' gap={6}>
                <NavLink to="/"> <Button variant='link' color='white'> Home</Button></NavLink>
                <NavLink to="/exchanges"> <Button  variant='link' color='white'> Exchanges</Button></NavLink>
                <NavLink to="/coins"> <Button  variant='link' color='white'> Coins</Button></NavLink>
            </HStack>
        </>
    )
}

export default Header
