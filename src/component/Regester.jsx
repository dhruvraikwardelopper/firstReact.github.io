import React from 'react'

const Regester = () => {
  return (
   <>
   <div className='flex justify-center'>
    <div className= 'h-full w-[30%] bg-cover my-20 '>
   <img src='./register.jpg' className='h-full w-full rounded-2xl'/>
   </div>
    <div className='w-[40vw] justify-self-center rounded-2xl border-1 border-gray-200 my-20 p-5'>
    <h1 className='text-4xl font-serif font-[600] text-center mt-10'>MLM Registration Form</h1>

    <h1 className='pt-4 pb-2'>Full Name</h1>
    <input type='type' placeholder='Rahul Sharma' className='border-1 border-gray-300 w-full p-1 rounded-[5px]'/>
    <div className='flex gap-5'>
    <span className='w-[48%]'>
          <h1 className='pt-4 pb-2'>Email </h1>
    <input type='type' placeholder='exmple@gmail.com' className='border-1 border-gray-300 w-[100%] p-1 rounded-[5px]'/>
    </span>
     <span className='w-[48%]'>
          <h1 className='pt-4 pb-2'>Gender</h1>
    <select className='border-1 outline-0 text-gray-500 border-gray-300 w-full p-1 rounded-[5px]'>
        <option>Choose your Gender</option>
        <option>Male</option>
        <option>Female</option>
    </select>
    </span>
    </div>
     <div className='flex gap-5'>
    <span className='w-[48%]'>
          <h1 className='pt-4 pb-2'>User_name </h1>
    <input type='type' placeholder='rahul123' className='border-1 border-gray-300 w-[100%] p-1 rounded-[5px]'/>
    </span>
     <span className='w-[48%]'>
          <h1 className='pt-4 pb-2'>Phone</h1>
    <input type='tel' placeholder='+91 1800-345-569' className='border-1 border-gray-300 w-[100%] p-1 rounded-[5px]'/>
   
    </span>
    </div>
     <div className='flex gap-5'>
    <span className='w-[48%]'>
          <h1 className='pt-4 pb-2'>password </h1>
    <input type='password' placeholder='Password' className='border-1 border-gray-300 w-[100%] p-1 rounded-[5px]'/>
    </span>
     <span className='w-[48%]'>
          <h1 className='pt-4 pb-2'>Conform password</h1>
    <input type='password' placeholder='Password' className='border-1 border-gray-300 w-[100%] p-1 rounded-[5px]'/>
   
    </span>
    </div>


       <div className='flex gap-5'>
    <span className='w-[48%]'>
          <h1 className='pt-4 pb-2'>Bank Account Number </h1>
    <input type='tel' placeholder='Account' className='border-1 border-gray-300 w-[100%] p-1 rounded-[5px] '/>
    </span>
     <span className='w-[48%]'>
          <h1 className='pt-4 pb-2'>IFSC Code</h1>
    <input type='type' placeholder='IFSC code' className='border-1 border-gray-300 w-[100%] p-1 rounded-[5px]'/>
    
    </span>
    </div>
     <div className='flex gap-5'>
    <span className='w-[48%]'>
          <h1 className='pt-4 pb-2'>Bank Name </h1>
    <input type='type' placeholder='Enter your Bank name ' className='border-1 border-gray-300 w-[100%] p-1 rounded-[5px]'/>
    </span>
     <span className='w-[48%]'>
          <h1 className='pt-4 pb-2'>Account Holder  Name</h1>
    <input type='name' placeholder='Ex- Rahul Shrama' className='border-1 border-gray-300 w-[100%] p-1 rounded-[5px]'/>
   
    </span>
    </div>


     <div className='flex gap-5'>
    <span className='w-[48%]'>
          <h1 className='pt-4 pb-2'>Profile Photo </h1>
    <input type='file' placeholder='Enter your Bank name ' className='text-gray-400 border-1 border-gray-300 w-[100%] p-1 rounded-[5px]'/>
    </span>
     <span className='w-[48%]'>
          <h1 className='pt-4 pb-2'>Id Proof</h1>
    <input type='file' className='border-1 border-gray-300 w-[100%] p-1 rounded-[5px]'/>
   
    </span>
    </div>

     <div className='flex gap-5'>
    <span className='w-[48%]'>
          <h1 className='pt-4 pb-2'>Signature </h1>
    <input type='file' className='text-gray-400 border-1 border-gray-300 w-[100%] p-1 rounded-[5px]'/>
    </span>
     <span className='w-[48%]'>
          <h1 className='pt-4 pb-2'>Pincode</h1>
    <input type='tel' placeholder='Enter your pincode' className='border-1 border-gray-300 w-[100%] p-1 rounded-[5px]'/>
   
    </span>
    </div>
    <div className='flex items-center gap-2 p-3'>
    <input type='checkbox' className='border-gray-300'/>
    <h1 className='flex gap-1'>I agree to the <p className='text-blue-600'> Terms and condition </p></h1>
    </div>

    <button className='bg-blue-700 w-full py-1.5 rounded-[5px] text-white'>Register</button>




    </div>

    </div>
   </>
  )
}

export default Regester
