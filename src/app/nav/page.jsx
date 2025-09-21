'use client'
import { CarFront, ChartLine, LayoutDashboard, LayoutGrid, LogOut, ScrollText, Settings, Users } from 'lucide-react'
import React from 'react'

function Nav() {
    
    
  return (
    <nav className='flex flex-col bg-[#17213A] w-3/15 h-screen px-1 py-5 '>

        <div className=' text-white ml-2'>
            <h1 className='text-4xl font-bold ml-7 mb-0'>AIM-L</h1>
            <small className='ml-24 font-bold '>Admin Panel</small>
            <hr className='w-11/12 mx-auto mt-1.5' />
        </div>

        <ul className='flex flex-col gap-2 text-white mt-30 ml-2 mr-2 font-prompt font-bold'>
            <li> 
                <a href="" id='dashboard-nav'  className='flex bg-[#00226C] border-1 border-[#3B82F6] pl-4 py-3.5 rounded-md'>
                    <LayoutGrid size={24} /> 
                    <div className='ml-5 '>แดชบอร์ด</div>
                </a>
            </li>
            <li > 
                <a href="" id='managecar-nav'  className='flex   pl-4 py-3.5 rounded-md'>
                    <CarFront size={24} color="#ffffff"/> 
                    <div className='ml-5'> จัดการรถยนต์</div>
                </a>
            </li>
            <li > 
                <a href="" id='managecus-nav'  className='flex   pl-4 py-3.5 rounded-md'>
                    <Users size={24} color="#ffffff"/>
                    <div className='ml-5'> จัดการลูกค้า</div>
                </a>
            </li>

            <li > 
                <a href="" id='analysis-nav'  className='flex   pl-4 py-3.5 rounded-md'>
                    <ChartLine size={24} color="#ffffff" />
                    <div className='ml-5'> วิเคราห์ข้อมูล</div>
                </a>
            </li>

            <li > 
                <a href="" id='act-nav'  className='flex   pl-4 py-3.5 rounded-md'>
                    <ScrollText size={24} color="#ffffff" />
                    <div className='ml-5'> พรบ</div>
                </a>
            </li>
            <li > 
                <a href="" id='tax-nav'  className='flex   pl-4 py-3.5 rounded-md'>
                    <ScrollText size={24} color="#ffffff" />
                    <div className='ml-5'> ภาษี</div>
                </a>
            </li>
            <li > 
                <a href="" id='insurant-nav'  className='flex   pl-4 py-3.5 rounded-md'>
                    <ScrollText size={24} color="#ffffff" />
                    <div className='ml-5'> ประกัน</div>
                </a>
            </li>
            <li > 
                <a href="" id='setting-nav'  className='flex   pl-4 py-3.5 rounded-md'>
                    <Settings size={24} color="#ffffff" />
                    <div className='ml-5'> ตั้งค่าระบบ</div>
                </a>
            </li>
            
            
        </ul>

        <div className='text-white mt-auto font-bold '>
            <div className='flex ml-5 my-3'>
                <img src="https://pics.craiyon.com/2023-11-12/M_7ojaHCTXmd9X5a76Nl2w.webp" alt="img" className='w-14 h-14 rounded-lg' />
                <div className=' ml-3 my-auto'>
                    <h6 className=''>Darkblue</h6>
                    <small className='ml-2 text-xs'>Owner</small>
                </div>
            </div>
            <hr className='w-11/12' />
            <ul className='flex pl-5 mt-6 mb-0.5 ml-2'>
                <LogOut size={23} color="#ffffff" />
                <li className='ml-4'>ออกจากระบบ</li>
            </ul>
        </div>

        
    </nav>
  )
}

export default Nav