import React from 'react';
import { HiArrowTrendingUp, HiMiniUsers } from "react-icons/hi2";
import { FcNightPortrait } from "react-icons/fc";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { BsCartPlus } from "react-icons/bs";
import CountUp from "react-countup"
import {
 Card,
 CardBody,
 CardFooter,
 Typography,
 Button,
} from "@material-tailwind/react";

const BookWeights = () => {
 return (
  <div className="flex justify-between ">
   <Card className="mt-6 w-52 shadow-2xl ">
    <CardBody>
     <Typography variant="h5" color="blue-gray" className="mb-2 text-red-900">
      <div className="flex items-center ">
       <HiArrowTrendingUp style={{ fontSize: '1.5em', color: 'green' }} />
       <h2 className='ml-2 text-xl'>Monthly visitors</h2>
      </div>



     </Typography>
     <span className='ml-14 text-2xl text-red-900'>
      <CountUp start={8800} end={9000} duration={4} />
      <span>+</span>
     </span>
     <h3 className=''>
      Empowering the strength of Monthly Visitors Daily.
     </h3>
    </CardBody>
   </Card>

   <Card className="mt-6 w-60 shadow-2xl">
    <CardBody>
     <div className='flex item-center'>
     <BsCartPlus style={{ fontSize: '1.5em', color: '#2E4053', marginLeft: '2em' }}/>
      <h2 className='ml-2 text-xl font-bold'>Sales</h2>

     </div>
     <span className='ml-12 text-2xl text-gray-600'>
      <CountUp start={18800} end={60000} duration={4} />
      <span>+</span>
     </span>
     <h3>Commuting and updating multiple owners and writer daily to update their Books.</h3>
     <Typography style={{ fontSize: '3em', color: '#2E4053' }}>
      
     </Typography>
    </CardBody>
    <CardFooter className="pt-0">
    </CardFooter>
   </Card>

   <Card className="mt-6 w-60 shadow-2xl">
    <CardBody>
     <div className='flex items-center'>

     <HiMiniUsers style = {{ fontSize: '1.5em', color: 'blue' }}/>
     <h2 className='ml-2 text-xl font-bold'>Active Users</h2>
     </div>
     <span className='ml-12 text-2xl text-blue-600'>
      <CountUp start={800} end={889} duration={4} />
      <span>+</span>
     </span>
     <h3>Average users are active every Seconds. searching books and buying books everyDay.</h3>
    </CardBody>
    <CardFooter className="pt-0">

    </CardFooter>
   </Card>
   <Card className="mt-6 w-60 shadow-2xl">
    <CardBody>
      <div className='flex item-center'>
      <BiSolidBadgeDollar style ={{fontSize: '1.5em', color: 'green'}}/>
       <h2 className='ml-2 text-xl font-bold'>Total Revenue</h2>
      </div>
      <span className='ml-12 text-2xl text-bold text-green-700'>
      <CountUp start={18800} end={60000} duration={4} />
      <span>+</span>
     </span>
     <h3>Total Revanue Earned after selling the multiple product at different plateform and shops</h3>
    
     <Typography style={{ fontSize: '3em', color: 'green' }}>
      


     </Typography>
    </CardBody>
    <CardFooter className="pt-0">

    </CardFooter>
   </Card>
  </div>
 );
};

export default BookWeights;
