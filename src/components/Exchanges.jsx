import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '..'
import { Container, HStack, VStack,Image, Heading,Text} from '@chakra-ui/react';
import Loader from './Loader';
import ErrorCompo from './ErrorCompo';

const Exchanges = () => {

const [exchanges,setExchanges] = useState([]);
const [loading,setLoading] = useState(true);
const [err,setErr] = useState(false)

  useEffect(()=>{
     const fetchExchanges =async ()=>{

      try{


        const {data} =await axios.get(`${server}/exchanges`)
       setExchanges(data);
       console.log(data)
       setLoading(false)
       console.log(data)
      }catch(err){

        setLoading(false)
        setErr(true)

      }
    }
    fetchExchanges()
  },[])

  if (err){
    return <ErrorCompo message="Error fetching while Exchange"/>
  }
  return (
   <>
    <Container maxW={["100vw","80vw"]}>
    {loading?<Loader/>:<>
    
    <HStack wrap='wrap' justifyContent='center' gap="4">
      {
        exchanges.map((d,i)=>{
        return <ExchangeCard
        url={d.url}
        name={d.name}
        img={d.image}
        rank={d.trust_score_rank}
        key={d.id}
        />
        })
      }
    </HStack>
    </>}
    </Container>

   </>
  );
};

const ExchangeCard = ({name,img,url,rank}) =>{
  return(<>
    <a href={url} target="blank">
      <VStack maxW={24}   shadow='xl' p='8' borderRadius='lg' transition={"all 0.5s"}
      m='2' css={{"&:hover":{transform:"scale(1.1)",cursor:"pointer"}}}>
      <Image src={img} alt="" w='8' h='8' objectFit='contain' />
      <Heading size='md' noOfLines={1}>{rank}</Heading>
      <Text>{name}</Text>
      </VStack>
    </a>
  </>)
}
export default Exchanges
