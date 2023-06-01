import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorCompo = ({message}) => {
  return (
   <>
    <Alert status='error' >
      <AlertIcon/> {message}
    </Alert>
   </>
  )
}

export default ErrorCompo
