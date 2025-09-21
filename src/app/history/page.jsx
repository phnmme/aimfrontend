import { CalendarDays, CarFront, ChartBarStacked } from 'lucide-react'
import React from 'react'


function History() {
  return (
    <div className='w-screen bg-[#0F172A]'>
        <div className='bg-[#121B31]  px-9 py-3'>
            <header className=' text-white text-3xl font-bold'>แดชบอร์ด</header>
            <small className=' text-white'>ผู้ดูแลบะรบบ</small>
        </div>
        <main className='px-11'>

            <header>
                <h1 className='text-white font-bold text-4xl mt-7 mb-1'>ประวัติการบันทึกข้อมูลลูกค้า</h1>
            </header>
            <section className=' overflow-x-auto rounded-lg my-10 mx-3'>
                <table className='text-white w-full text-sm text-left  dark:text-gray-400'>
                    <thead className="text-white bg-[#17213A]">
                        <tr className="font-bold text-lg">
                            <th scope="col" className="px-6 py-3">
                            <div className="flex items-center space-x-2 pl-4">
                                <CarFront size={24} className="text-white" />
                                <span>เลขทะเบียน</span>
                            </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                            <div className="flex items-center space-x-2 pl-4">
                                <ChartBarStacked size={24} className="text-white" />
                                <span>ต่ออายุ</span>
                            </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center space-x-2 pl-4">
                                    <CalendarDays size={24} className="text-white" />
                                    <span>วันที่บันทึก</span>
                                </div>
                            </th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className='font-bold text-lg border-b-1 border-[#2F374B]'>
                            <td className='px-11 py-4 '>รห 426</td>
                            <td className='px-11 py-4'>พรบ</td>
                            <td className='px-11 py-4'>29 กรกฎาคม 2568</td>
                            <td className='pl-12 py-4'><button className='bg-white text-black py-1 px-4 rounded-3xl'>เพิ่มเติม</button></td>
                        </tr>
                    </tbody>
                
                </table>

            </section>
            
        
            
        </main>
        
    </div>
  )
}

export default History
