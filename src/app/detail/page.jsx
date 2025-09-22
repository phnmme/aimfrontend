import { Copy } from 'lucide-react'
import React from 'react'

function Detail() {
  return (
    <div className='w-screen bg-[#0F172A]'>
        <div className='bg-[#121B31]  px-9 py-3'>
            <header className=' text-white text-3xl font-bold'>แดชบอร์ด</header>
            <small className=' text-white'>ผู้ดูแลบะรบบ</small>
        </div>
        <main className='px-11'>

            <header >
                <h1 className='text-white font-bold text-4xl mt-7 mb-1'>ประวัติการบันทึกข้อมูลลูกค้า</h1>
            </header>
            <section className='ml-2'>
                <small className='text-gray-400'>ข้อมูลส่วนตัว</small>
                <article className='grid grid-rows-3 gap-y-4 w-1/2 ml-2'>
                    <div className='flex items-center text-white '>
                        <label  >ชื่อ-นามสกุล</label>
                        <div className='flex items-center ml-auto mr-27'>
                            <h4 className='bg-[#17213A] px-4 py-3 rounded-md'>นาย อภิวัฒน์ ทัสนานุตริยภรณ์</h4>  
                            <Copy size={28} color="#ffffff" className='ml-1.5'/>
                        </div>
                    </div>
                    <div className='flex items-center text-white'>
                        <label >เลขบัตรปชช/ <br />
                         เลขบัตรประจำตัวเสียภาษี</label>
                        <div className='flex items-center ml-auto mr-27'>
                            <h4 className='bg-[#17213A] px-4 py-3 rounded-md'>นาย อภิวัฒน์ ทัสนานุตริยภรณ์</h4>   
                            <Copy size={28} color="#ffffff" className='ml-1.5'/>
                        </div>
                    </div>
                    <div className='flex items-center text-white'>
                        <label >เบอร์โทร</label>
                        <div className='flex ml-auto mr-27 items-center'>
                            <h4 className='bg-[#17213A] px-4 py-3 rounded-md'>นาย อภิวัฒน์ ทัสนานุตริยภรณ์</h4>   
                            <Copy size={28} color="#ffffff" className='ml-1.5'/>
                        </div>
                    </div>
                </article>
            </section>

            <section className='mt-6 ml-2'>
                <small className='text-gray-400'>ข้อรถยนต์</small>
                <article className='grid grid-cols-2 ml-2'>
                    <div className='grid grid-rows-13 gap-y-4 '>
                        <div className='flex items-center text-white '>
                            <label  >เลขทะเบียน</label>
                            <div className='flex items-center ml-auto mr-27'>
                                <h4 className='bg-[#17213A] px-4 py-3 rounded-md'>นาย อภิวัฒน์ ทัสนานุตริยภรณ์</h4>  
                                <Copy size={28} color="#ffffff" className='ml-1.5'/>
                            </div>
                        </div>
                        <div className='flex items-center text-white'>
                            <label >กลุ่มรถ</label>
                            <div className='flex items-center ml-auto mr-27'>
                                <h4 className='bg-[#17213A] px-4 py-3 rounded-md'>นาย อภิวัฒน์ ทัสนานุตริยภรณ์</h4>   
                                <Copy size={28} color="#ffffff" className='ml-1.5'/>
                            </div>
                        </div>
                        <div className='flex items-center text-white'>
                            <label >ประเภทรถ</label>
                            <div className='flex ml-auto mr-27 items-center'>
                                <h4 className='bg-[#17213A] px-4 py-3 rounded-md'>นาย อภิวัฒน์ ทัสนานุตริยภรณ์</h4>   
                                <Copy size={28} color="#ffffff" className='ml-1.5'/>
                            </div>
                        </div>
                        <div className='flex items-center text-white '>
                            <label  >ยี่ห้อ</label>
                            <div className='flex items-center ml-auto mr-27'>
                                <h4 className='bg-[#17213A] px-4 py-3 rounded-md'>นาย อภิวัฒน์ ทัสนานุตริยภรณ์</h4>  
                                <Copy size={28} color="#ffffff" className='ml-1.5'/>
                            </div>
                        </div>
                        <div className='flex items-center text-white'>
                            <label >รุ่น</label>
                            <div className='flex items-center ml-auto mr-27'>
                                <h4 className='bg-[#17213A] px-4 py-3 rounded-md'>นาย อภิวัฒน์ ทัสนานุตริยภรณ์</h4>   
                                <Copy size={28} color="#ffffff" className='ml-1.5'/>
                            </div>
                        </div>
                        <div className='flex items-center text-white'>
                            <label >สี</label>
                            <div className='flex ml-auto mr-27 items-center'>
                                <h4 className='bg-[#17213A] px-4 py-3 rounded-md'>นาย อภิวัฒน์ ทัสนานุตริยภรณ์</h4>   
                                <Copy size={28} color="#ffffff" className='ml-1.5'/>
                            </div>
                        </div>
                        <div className='flex items-center text-white '>
                            <label  >ซีซี/CC</label>
                            <div className='flex items-center ml-auto mr-27'>
                                <h4 className='bg-[#17213A] px-4 py-3 rounded-md'>นาย อภิวัฒน์ ทัสนานุตริยภรณ์</h4>  
                                <Copy size={28} color="#ffffff" className='ml-1.5'/>
                            </div>
                        </div>
                        <div className='flex items-center text-white'>
                            <label >ที่นั่ง</label>
                            <div className='flex items-center ml-auto mr-27'>
                                <h4 className='bg-[#17213A] px-4 py-3 rounded-md'>นาย อภิวัฒน์ ทัสนานุตริยภรณ์</h4>   
                                <Copy size={28} color="#ffffff" className='ml-1.5'/>
                            </div>
                        </div>
                        <div className='flex items-center text-white'>
                            <label >น้ำหนัก</label>
                            <div className='flex ml-auto mr-27 items-center'>
                                <h4 className='bg-[#17213A] px-4 py-3 rounded-md'>นาย อภิวัฒน์ ทัสนานุตริยภรณ์</h4>   
                                <Copy size={28} color="#ffffff" className='ml-1.5'/>
                            </div>
                        </div><div className='flex items-center text-white '>
                            <label  >จังหวัด</label>
                            <div className='flex items-center ml-auto mr-27'>
                                <h4 className='bg-[#17213A] px-4 py-3 rounded-md'>นาย อภิวัฒน์ ทัสนานุตริยภรณ์</h4>  
                                <Copy size={28} color="#ffffff" className='ml-1.5'/>
                            </div>
                        </div>
                        <div className='flex items-center text-white'>
                            <label >ปีรถ</label>
                            <div className='flex items-center ml-auto mr-27'>
                                <h4 className='bg-[#17213A] px-4 py-3 rounded-md'>นาย อภิวัฒน์ ทัสนานุตริยภรณ์</h4>   
                                <Copy size={28} color="#ffffff" className='ml-1.5'/>
                            </div>
                        </div>
                        <div className='flex items-center text-white'>
                            <label >เลขตัวถัง</label>
                            <div className='flex ml-auto mr-27 items-center'>
                                <h4 className='bg-[#17213A] px-4 py-3 rounded-md'>นาย อภิวัฒน์ ทัสนานุตริยภรณ์</h4>   
                                <Copy size={28} color="#ffffff" className='ml-1.5'/>
                            </div>
                        </div>
                        <div className='flex items-center text-white'>
                            <label >เลขเครื่องยนต์</label>
                            <div className='flex ml-auto mr-27 items-center'>
                                <h4 className='bg-[#17213A] px-4 py-3 rounded-md'>นาย อภิวัฒน์ ทัสนานุตริยภรณ์</h4>   
                                <Copy size={28} color="#ffffff" className='ml-1.5'/>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-rows-13 gap-y-4 w-full'>
                        <div className='flex items-center text-white '>
                            <label  >เริ่ม</label>
                            <div className='flex items-center ml-auto mr-27'>
                                <h4 className='bg-[#17213A] px-4 py-3 rounded-md'>นาย อภิวัฒน์ ทัสนานุตริยภรณ์</h4>  
                                <Copy size={28} color="#ffffff" className='ml-1.5'/>
                            </div>
                        </div>
                        <div className='flex items-center text-white '>
                            <label  >สิ้นสุด</label>
                            <div className='flex items-center ml-auto mr-27'>
                                <h4 className='bg-[#17213A] px-4 py-3 rounded-md'>นาย อภิวัฒน์ ทัสนานุตริยภรณ์</h4>  
                                <Copy size={28} color="#ffffff" className='ml-1.5'/>
                            </div>
                        </div>
                    </div>
                    
                </article>
            </section>
            
            
        
            
        </main>
        
    </div>
  )
}

export default Detail
