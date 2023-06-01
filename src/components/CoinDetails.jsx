import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { server } from '..'
import Loader from './Loader'
import ErrorCompo from './ErrorCompo'
import { useParams } from 'react-router-dom'
import { Badge, Box, Button, Container, HStack, Image, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react'
import MyChart from './MyChart'

const CoinDetails = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false)
  const [days, setDays] = useState("24h");
  const [chartArr,setChartArr] = useState([])
  const [currency, setCurrency] = useState("inr");

  const switchChartState = (key) =>{

    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
      case "7d":
        setDays("7d");
        setLoading(true);
        break;
      case "14d":
        setDays("14d");
        setLoading(true);
        break;
      case "30d":
        setDays("30d");
        setLoading(true);
        break;
      case "60d":
        setDays("60d");
        setLoading(true);
        break;
      case "200d":
        setDays("200d");
        setLoading(true);
        break;
      case "1y":
        setDays("1y");
        setLoading(true);
        break;
      case "max":
        setDays("max");
        setLoading(true);
        break;
    
      default:
        setDays("24h");
        setLoading(true);
        break;
    }
  }
  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"
const btns = ["24h","7d","14d","30d","60d","200d","1y","max"]
  const params = useParams()

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`)

        const { data:chartdata } = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`)

        setCoin(data);
        setChartArr(chartdata.prices)
        console.log(chartdata)
        setLoading(false)
      } catch (err) {
        setLoading(false)
        setErr(true)
      }
    }
    fetchCoin()
  }, [params.id,currency,days])


  if (err) {
    return <ErrorCompo message="Error fetching while Coins" />
  }
  return (
    <>
      <Container maxW="80vw">
        {loading ? <Loader /> : <>

          <Box>
<MyChart chartcurrency={currencySymbol} chartArr={chartArr} mydays={days}/>
          </Box>

      <HStack wrap={'wrap'} p='4'>
          {btns.map((d,i)=>{
            return <Button key={i} onClick={()=>switchChartState(d)}>{d}</Button>
          })}

      </HStack>

          <RadioGroup value={currency} onChange={setCurrency} >
            <HStack gap='6' justifyContent='center'>
              <Radio value={"inr"} >INR</Radio>
              <Radio value={"eur"}>EUR</Radio>
              <Radio value={"usd"}>USD</Radio>
            </HStack>
          </RadioGroup>


          <VStack p='5' alignItems='flex-start'   >
            <Text fontSize='small' alignSelf='center'>
              Last Updated on {Date(coin.market_data.last_updated).split("G")[0]}
            </Text>

            <Image src={coin.image.large} w='16' h='16' objectFit='contain' />

            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>{currencySymbol}{coin.market_data.current_price[currency]}</StatNumber>
              <StatHelpText>
                <StatArrow
                  type={coin.market_data.price_change_percentage_24h > 0
                    ? "increase"
                    : 'decrease'
                  } />
                {coin.market_data.price_change_percentage_24h} %
              </StatHelpText>
            </Stat>


            <Badge fontSize={['md', '3xl']}>
              {`#${coin.market_cap_rank}`}
            </Badge>

            <CustomBar
              high={`${currencySymbol} ${coin.market_data.high_24h[currency]}`}
              low={`${currencySymbol} ${coin.market_data.low_24h[currency]}`}
            />

            <Box w="full" p="6">
              <Item title={"Max Supply"} value={coin.market_data.max_supply } />
              <Item title={"circulating supply"} value={coin.market_data.circulating_supply} />
              <Item title={"Market Cap"} value={`${currencySymbol} ${coin.market_data.market_cap[currency]}`} />
              <Item title={"All Time Low"} value={`${currencySymbol}${coin.market_data.atl[currency]}`} />
              <Item title={"All time high"} value={`${currencySymbol}${coin.market_data.ath[currency]}`} />
            </Box>
          </VStack>

        </>}
      </Container>
    </>
  )
};

const Item = ({ title, value }) => {
  return (<>
    <HStack justifyContent='space-between'>
      <Text fontFamily={'Bebas Neue'} letterSpacing='wider'>{title}</Text>
      <Text>{value}</Text>
    </HStack>
  </>)
}

const CustomBar = ({ high, low }) => {
  return (<>
    <VStack w='full'>
      <Progress value={50} colorScheme="teal" w='full' />
      <HStack justifyContent='space-between' w='full'>
        <Badge children={low} colorScheme='red' />
        <Text fontSize='small'>24 Range</Text>
        <Badge children={high} colorScheme='green' />
      </HStack>

    </VStack>
  </>)
}

export default CoinDetails
