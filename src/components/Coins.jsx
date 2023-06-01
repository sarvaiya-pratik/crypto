import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '..'
import { Container, HStack, Button, RadioGroup, Radio} from '@chakra-ui/react';
import Loader from './Loader';
import ErrorCompo from './ErrorCompo';
import CoinCard from './CoinCard';
const Coins = () => {

const [coins,setCoins] = useState([]);
const [loading,setLoading] = useState(true);
const [err,setErr] = useState(false)
const [page,setPage] = useState(1);
const [currency,setCurrency] = useState("inr");

const currencySymbol = currency==="inr"?"₹":currency==="eur"?"€":"$"

const changePage = (p) =>{
  setPage(p)
  setLoading(true)
}

let  btns = new Array(100).fill(1);
  useEffect(()=>{
     const fetchCoins =async ()=>{

      try{


        const {data} =await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
       setCoins(data);
      
       setLoading(false)
       
      }catch(err){

        setLoading(false)
        setErr(true)

      }
    }
    fetchCoins()
  },[currency,page])

  if (err){
    return <ErrorCompo message="Error fetching while Exchange"/>
  }
  return (
   <>
    <Container maxW="container.md">
    {loading?<Loader/>:<>
    
    <RadioGroup value={currency} onChange={setCurrency}>
      <HStack gap='6'>
          <Radio value={"inr"} >INR</Radio>
          <Radio value={"eur"}>EUR</Radio>
          <Radio value={"usd"}>USD</Radio>
      </HStack>
    </RadioGroup>
    <HStack wrap='wrap' justifyContent='center' gap="4">
      {
        coins.map((d,i)=>{
        return <CoinCard
       id={d.id}
       currencySymbol={currencySymbol}
        name={d.name}
        img={d.image}
        symbol={d.symbol}
        key={d.id}
        price={d.current_price}
        />
        })
      }
    </HStack>
    <HStack overflow='auto'>
        {
          btns.map((d,i)=>{
           
          return  <Button bgColor='blackAlpha.900' color="white" onClick={()=>changePage(i+1)}>
              {i+1}
            </Button>
          })
        }
    </HStack>
    </>}
    </Container>

   </>
  );
};

export default Coins;

