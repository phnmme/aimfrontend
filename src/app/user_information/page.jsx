import { ArrowLeft, CarFront, ChevronLeft, MoveLeft, UserRound, Users } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <div className='flex bg-[#17213A] w-screen h-screen justify-center items-center '>
      <main className='flex flex-col bg-white w-87/100 h-83/100 rounded-2xl'>
        <button className='flex bg-[#EEEEEE] text-[#464646] font-bold w-28 py-1.5 px-2 mt-5 mx-9 rounded-4xl'><ArrowLeft color="#464646" size={21} strokeWidth={2.5} className='mr-1'/> ย้อนกลับ</button>
        <header className='flex ml-10 mt-11'>
            
            <h1 className='text-black font-bold text-4xl '>ข้อมูลของคุณ</h1>
        </header>
        <section className='ml-10 mt-8'>
            <article className='flex flex-col'>
                <div className='flex items-center text-xl font-bold ml-4 mb-1'>
                    <CarFront size={24}  color="#000000" strokeWidth={2.5} className='mr-1'/>
                    เลขทะเบียน
                </div>
                <div className='flex justify-center bg-[#17213A] text-white text-xl font-bold w-40 py-1 rounded-xl'>
                    กข 1893
                </div>
            </article>
        </section>
         <section className='ml-10 mt-8'>
            <article className='flex flex-col'>
                <div className='flex items-center text-xl font-bold ml-4 mb-1'>
                    <UserRound color="#000000" strokeWidth={2.5} className='mr-1'/>
                    ชื่อ-สกุล
                </div>
                <div className='bg-[#17213A] text-white text-xl font-bold w-fit px-4 py-1 rounded-xl'>
                    อภิวัฒน์ ทัสนานุตริยภรณ์
                </div>
            </article>
        </section>

        <section className='grid grid-cols-3 gap-15 justify-between mx-19 mt-auto mb-28'>
            <article className='flex flex-col  '>
                <div className='text-lg font-bold mr-auto ml-3'>ภาษี</div>
                {/* img */}
                <div className='bg-[#17213A] text-white px-3 py-2 text-lg font-bold rounded-xl'>
                    หมดอายุใน : 2เดือน 15วัน <br />
                    จะหมดอายุวันที่: 20 ธันวาคม 2568
                </div>
            </article>
            <article className='flex flex-col  '>
                <div className='text-lg font-bold mr-auto ml-3'>พรบ.</div>
                {/* img */}
                <div className='bg-[#17213A] text-white px-3 py-2 text-lg font-bold rounded-xl'>
                    หมดอายุใน : {/* information */} <br />
                    จะหมดอายุวันที่: {/* information */}
                </div>
            </article>
            <article className='flex flex-col  '>
                <div className='text-lg font-bold mr-auto ml-3'>ประกัน</div>
                {/* img */}
                <div className='bg-[#17213A] text-white px-3 py-2 text-lg font-bold rounded-xl'>
                    หมดอายุใน : {/* information */} <br />
                    จะหมดอายุวันที่: {/* information */}
                </div>
            </article>
        </section>
        
      </main>
    </div>
  )
}

export default page
