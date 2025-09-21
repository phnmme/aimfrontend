'use client'
import React from 'react'

import Nav from '../nav/page'
import { BellRing, CalendarDays, CarFront, CarTaxiFront, CircleDollarSign, TriangleAlert, Users } from 'lucide-react'

function Dashboard() {
    
  return (
    

    <div className='w-screen bg-[#0F172A]'>
        <div className='bg-[#121B31]  px-9 py-3'>
            <header className=' text-white text-3xl font-bold'>แดชบอร์ด</header>
            <small className=' text-white'>ผู้ดูแลบะรบบ</small>
        </div>
        <main className='px-11'>

            <header>
                <h1 className='text-white font-bold text-4xl mt-7 mb-1'>ยินดีต้อนรับสู่หน้าแดชบอร์ด</h1>
            <small className='text-gray-400 text-gra text-base'>ภาพรวมของ AIM-L</small>
            </header>



            <div className='grid grid-cols-4 gap-8 my-7'>
                <article className=' flex flex-col bg-[#17213A]  h-38 p-5 text-white rounded-2xl'>
                    <span className='flex flex-row'>
                        <h4>ลูกค้าทั้งหมด</h4> 
                        <Users size={24} color="#ffffff" className='ml-auto'/>
                    </span>
                    <h3 className='font-bold text-2xl mt-auto'>1,200</h3>
                </article>
                <article className='flex flex-col bg-[#17213A]   p-5 text-white rounded-2xl'>
                    <span className='flex flex-row'>
                        <h4>รถยนต์ทั้งหมด</h4>
                        <CarFront size={24} color="#ffffff" className='ml-auto'/>
                    </span>
                    
                    <h3 className='font-bold text-2xl mt-auto'>543</h3>
                </article>
                <article className='flex flex-col bg-[#17213A] p-5 text-white rounded-2xl'>   
                    <span className='flex flex-row'>
                        <h4>ใกล้หมดอายุ</h4> 
                        <TriangleAlert color="#ffffff" className='ml-auto'/>
                    </span>     
                    <h3 className='font-bold text-2xl mt-auto'>10</h3>
                </article>
                <article className='flex flex-col bg-[#17213A]   p-5 text-white rounded-2xl'>  
                    <span className='flex flex-row'>
                        <h4>รายได้เดือนนี้</h4>
                        <CircleDollarSign color="#ffffff" className='ml-auto'/>
                    </span>    
                    <h3 className='font-bold text-2xl mt-auto'>10</h3>
                </article>

                {/* กิจกรรมล่าสุด */}
                <section className='col-span-2 bg-[#17213A]  p-6 rounded-2xl'>
                    <span className='flex flex-row'>
                        <BellRing color="#ffffff" />
                        <h2 className='text-white text-xl font-bold ml-3'>กิจกรรมล่าสุด</h2>
                    </span>
                    
                    <small className='text-gray-400'>กิจกรรมที่เกิดขึ้นในระบบล่าสุด</small>

                    <div className='flex justify-between items-center mt-4  pt-6 pb-3'>
                        <div>
                            <h4 className='text-white'>เพิ่มลูกค้า</h4>
                            <small className='text-gray-400' >นาย ยิ้มหวาน</small>
                        </div>
                        <small className='text-white'>10 นาทีที่แล้ว</small>
                    </div>
                </section>

                {/* ใกล้หมดอายุ */}
                <section className='col-span-2 bg-[#17213A]  items-center p-6 rounded-2xl'>
                    <span className='flex flex-row'>
                        <CalendarDays color="#ffffff" />
                        <h2 className='text-white text-xl font-bold ml-3'>ใกล้หมดอายุ</h2>
                    </span>
                    
                    <small className='text-gray-400'>บริการที่ใกล้หมดอายุในเร็วๆนี้</small>

                    <div className='flex justify-between items-center mt-4  pt-6 pb-3'>  
                        <div className='flex flex-col'>
                            <div className='flex '>
                                <h3 className='text-white font-bold'>กข 1234</h3 >
                                <small className='text-white py-0.5 border-solid border-1 border-white ml-4 px-2 rounded-xs'>พรบ</small>
                            </div>
                            
                            <small className='text-gray-400'>นาย ยิ้มหวาน</small>
                            <small className='text-gray-400'>หมดอายุ: </small>
                        </div>
                        <small className='text-white bg-[#FA4B4B] rounded-sm py-1 px-2.5'>5 วัน </small>
                    </div>
                    <input className='text-white font-bold w-11/11 py-3 border-1 mt-8 rounded-sm ' type="button" value="ดูทั้งหมด"  />
                </section>
            </div>



            
            
            
            
        </main>
        
    </div>
  )
}

export default Dashboard