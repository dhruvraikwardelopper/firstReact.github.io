import React from 'react'
import Slider from "react-slick";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { LuChartNoAxesColumnIncreasing } from "react-icons/lu";
import { FaLocationArrow } from "react-icons/fa6";




const About = () => {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const core_values = [
    {
      "title": "Transparency",
      "icon": <FaHandshakeAngle/>,
      "description": "We ensure complete clarity in every transaction and commission."
    },
    {
      "title": "Innovation",
      "icon": <FaLightbulb/>,
      "description": "We use the latest technology to automate MLM management."
    },
    {
      "title": "Growth Mindset",
      "icon": <LuChartNoAxesColumnIncreasing/>,
      "description": "Our mission is to help every distributor achieve success."
    },
    {
      "title": "Integrity",
      "icon": <FaLocationArrow/>,
      "description": "We operate with honesty and security to build lasting trust ."
    },
    // {
    //   "title": "Collaboration",
    //   "icon": "users",
    //   "description": "We foster teamwork by empowering distributors and partners to grow together toward shared success."
    // }
  ]



  return (
    <>
    <h1 className='text-center text-5xl font-serif font-[600] pt-20'>About US</h1>
    <p className='text-center text-xl font-serif font-[400] my-10'>Empowring businesses with smart and transparent<br/>MLM Managemant</p>
      <hr className='mx-16 text-gray-400'/>
    <div className=' bg-[#fff] shadow-xl rounded-2xl mx-15 px-25 py-10'>
      <div className='flex justify-between items-center'>
      <div className='max-w-[38%]'  >
      <h1 className='text-[50px] font-[500] font-serif my-1'>Who we are</h1>
      <p className='text-[20px] font-serif font-[500]'>We are a team of passionate developers and marketing experts dedicated to building a next-generation Multi-Level Marketing (MLM) Management System. Our goal is to simplify complex MLM operations through automation, transparency, and real-time insights.</p>
       <h1 className='text-[50px] font-[500] font-serif my-1.5'>Our Mission</h1>
      <p className='text-[20px] font-serif font-[500]'>To provide every MLM organization with a secure, efficient, and scalable platform that boosts productivity and ensures fairness in commission distribution.</p>
      </div> 
      <div className='h-[60vh] max-w-[45%] my-2 w-full overflow-hidden'>
        <img className=' ' src='./img1.jpg'/>
      </div>
    </div>
             <h1 className='text-[50px] font-[500] font-serif my-1.5'>Our Vision</h1>
      <p className='text-[20px] font-serif font-[500]'>To revolutionize the MLM industry by using advanced technology to make business growth smarter and more transparent for every distributor and company.</p>

             <h1 className='text-[50px] font-[500] font-serif my-8'>Core Valuse</h1>
      
       <Slider {...settings} className='m-15 mt-5'>
        {
        core_values.map((d)=>(
          <div className='w-full flex justify-center'>
          <div className='max-w-[280px] py-10 px-5 text-center rounded-2xl bg-blue-300/20'>
            <h1 className='text-center justify-self-center text-5xl'>{d.icon}</h1>
            <h1 className='text-[28px] font-medium'>{d.title}</h1>
            <h1 className='text-[20px]' >{d.description}</h1>
          </div>
          </div>
        ))
        }
    </Slider>

    </div>

    
    </>
  )
}

export default About
