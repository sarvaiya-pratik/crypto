import React from 'react'
import {Line} from "react-chartjs-2"
import {Chart as chartjs,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from "chart.js"

chartjs.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend)
const  MyChart = ({chartArr=[],chartcurrency,mydays}) => {
console.log(chartArr)
const price =[]
const date = []

console.log(mydays)
  for (let i = 0; i < chartArr.length; i++) {
  
   if (mydays==="24h")  date.push(new Date(chartArr[i][0]).toLocaleTimeString())
   else date.push(new Date(chartArr[i][0]).toLocaleDateString())
   price.push(chartArr[i][1])
  }
const data =
  {
    labels:date,
    datasets:[{
        label:`Price in ${chartcurrency}`,
        data:price,
        borderColor:"rgb(255,99,132)",
        backgroundColor:"rgb(255,99,132)",
    }]
    }


  return (
    <>
    <Line options={{responsive:true,}} 
    data={data}/>
    </>
  )
}

export default MyChart
