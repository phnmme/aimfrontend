import React from 'react'

function Nav() {
  return (
    <nav className='flex flex-col  bg-[#17213A] w-3/15 h-screen px-3 py-5 '>

        <div className=' text-white'>
            <h1 className='text-4xl font-bold ml-7 mb-0'>AIM-L</h1>
            <small className='ml-24'>Admin Panel</small>
            <hr className='w-11/12 mx-auto ' />
        </div>

        <ul className='space-y-5 text-white mt-40'>
            <li > <a href="">แดชบอร์ด</a> </li>
            <li> <a href="#">จัดการรถยนต์</a> </li>
            <li> <a href="#">จัดการลูกค้า</a> </li>
            <li> <a href="#">วิเคราห์ข้อมูล</a> </li>
            <li> <a href="#">พรบ</a> </li>
            <li> <a href="#">ภาษี</a> </li>
            <li> <a href="#">ประกัน</a> </li>
            <li> <a href="#">ตั้งค่าระบบ</a> </li>
        </ul>

        <div className='text-white mt-auto'>
            <div className='flex'>
                <img src="#" alt="profile-i" />
                <div className=''>
                    <h6>Darkblue</h6>
                    <small className='ml-2'>Owner</small>
                </div>
            </div>
            <hr className='w-11/12' />
            <ul className='flex pl-5'>
                <img src="#" alt="logout-i" />
                <li className='ml-4'>ออกจากระบบ</li>
            </ul>
        </div>

        
    </nav>
  )
}

export default Nav