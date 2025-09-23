import { CarFront, ClockAlert } from 'lucide-react'
import React from 'react'

function Usersearch() {
  return (
    <div className='flex bg-[#17213A] w-screen h-screen justify-center items-center '>
      <main className='flex flex-col bg-white w-87/100 h-83/100 rounded-2xl'>
        <header className='flex items-center mx-15 mt-12'>
                <h1 className='text-blue font-bold text-4xl '>ระบบเช็ควันหมดอายุ</h1>
                <ClockAlert size={28} color="#17213A" className='ml-2'/>
        </header>
        <div className='flex justify-center items-center flex-col gap-6 bg-[#17213A] w-3/10 h-2/10 mx-auto my-70 rounded-2xl'>
            <div className='flex items-center'>
                <h2 className='text-white text-2xl font-bold'>กรอกเลขทะเบียนรถ</h2>
                <CarFront size={24} color="#ffffff" className='ml-2'/>
            </div>
            
            <input type="text" 
            className='bg-white w-7/10 h-26/100 rounded-md'
            required
            />
        </div> 
        <footer className='text-[#476680] mt-auto ml-auto text-9xl font-bold mr-4'>
            AIM-L
        </footer>
      </main>
    </div>
  )
}

export default Usersearch
