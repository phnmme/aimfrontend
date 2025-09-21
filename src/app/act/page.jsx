'use client'
import React from 'react'

import Nav from '../nav/page'
import { Search } from 'lucide-react'
// พรบ
function Act() {
    function test(value){
        let Bold = document.getElementById("old");
        let Bnew = document.getElementById("new");
        let search = document.getElementById("search")
        let personal = document.getElementById("personal")
        let personalinfo = document.getElementById("personalinfo-msg")
        let add = document.getElementById("add")
        let addressmsg = document.getElementById("address-msg")
        if(value=="เก่า"){
            Bold.style.backgroundColor = "white"
            Bold.style.color = "black"
            Bnew.style.backgroundColor = "#17213A"
            Bnew.style.color = "white"
            search.style.display = "block"

            personal.style.display = "none"
            personalinfo.style.display = "none"
            add.style.display = "none"
            addressmsg.style.display = "none"
        }
        else{
            Bnew.style.backgroundColor = "white"
            Bnew.style.color = "black"
            Bold.style.backgroundColor = "#17213A"
            Bold.style.color = "white"
            search.style.display = "none"

            personal.style.display = "grid"
            personalinfo.style.display = "inline"
            add.style.display = "grid"
            addressmsg.style.display = "inline"
        }
    }
  return (
    
    <div className='w-screen bg-[#0F172A]'>
        <div className='bg-[#121B31]  px-9 py-3'>
            <header className=' text-white text-3xl font-bold'>พรบ</header>
            <small className=' text-white'>ผู้ดูแลบะรบบ</small>
        </div>
        <main className='px-6'>

            <header className='mx-8'>
                <h1 className='text-white font-bold text-4xl mt-7 mb-1'>บันทึกข้อมูลต่ออายุ พรบ. ลูกค้า</h1>
            </header>
            <section className='text-white my-7 mx-8'>
                <h4 id='client'>ลูกค้า</h4>
                <button id='old' onClick={() => test("เก่า")}  className='bg-[#17213A] border-2 border-[#003D76] px-5 py-2.5 rounded-2xl '>
                    เก่า
                </button>
                <button id='new' onClick={()=>test("ใหม่")}  className='bg-[#17213A] border-2 border-[#003D76] ml-4 px-5 py-2.5 rounded-2xl '>
                    ใหม่
                </button>
                
            </section>
            <section id='search' className='hidden mt-6 mx-8 mb-5'>
                <div className='flex text-violet-400'>
                    <span className='text-white'>ค้นหา</span>
                    <Search size={20} color="#ffffff" />
                </div>
                <input 
                type="text" 
                
                className="bg-[#17213A] text-gray-400 border-solid border-2 border-[#003D76] px-4 py-2.5  rounded-2xl " 
                placeholder='กรอกข้อมูล'
                />
            </section>

            <small id='personalinfo-msg' className='text-gray-400 mx-6 hidden'>ข้อมูลส่วนตัว</small>

            <form id='personal' className='text-white grid grid-cols-4 gap-y-4 mt-2 mx-8 hidden'>
                <div className='h-21'>
                    <label className='m-2'>ประเภท</label><br />
                    <select name="kind" id="kind" 
                    className='bg-[#17213A] w-7/12 h-13 border-2 border-[#003D76] px-5 py-2.5 mt-1 rounded-2xl' 
                    required>
                        <option value="none">เลือก</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div className='h-21'>
                    <label className='m-2'>เพศ</label><br />
                    <select name="sex" id="sex" 
                    className='bg-[#17213A] w-7/12 h-13 border-2 border-[#003D76] px-5 py-2.5 mt-1 rounded-2xl' 
                    required>
                        <option value="none">เลือก</option>
                        <option value="female">หญิง</option>
                    </select>
                </div>
                
                <div className='col-span-2'></div>

                <div className='h-21'>
                    <label className='m-2'>คำนำหน้า</label><br />
                    <select name="title" id="title" 
                    className='bg-[#17213A] w-7/12 h-13 border-2 border-[#003D76] px-5 py-2.5 mt-1 rounded-2xl' 
                    required>
                        <option value="none">เลือก </option>
                        <option value="mr">นาย</option>
                        <option value="mrs">นาง</option>
                        <option value="miss">นางสาว</option>
                    </select>
                </div>

                <div className='h-21'>
                    <label className='m-2'>ชื่อ</label><br />
                    <input type='text' name="name" id="name" className='bg-[#17213A] h-13 border-2 border-[#003D76] px-5 py-2.5 mt-1 rounded-2xl' required/>
                </div>
                <div className='h-21'>
                    <label className='m-2'>นามสกุล</label><br />
                    <input type='text' name="surname" id="surname" className='bg-[#17213A] h-13 border-2 border-[#003D76] px-5 py-2.5 mt-1 rounded-2xl' 
                    required/>
                </div>
                <div className='h-21'>
                    <label className='m-3'>เลขบัตรปชช/เลขประจำตัวเสียภาษี</label>
                    <br />
                    <input type='text' name="surname" id="surname" className='bg-[#17213A] h-13 border-2 border-[#003D76] px-5 py-2.5 mt-1 rounded-2xl' 
                    required/>
                </div>
                <div className='h-21'>
                    <label className='m-3'>เบอร์โทร</label>
                    <br />
                    <input type='text' name="surname" id="surname" className='bg-[#17213A] h-13 border-2 border-[#003D76] px-5 py-2.5 mt-1 rounded-2xl' 
                    required/>
                </div>
            </form>

            <small id='address-msg' className='text-gray-400 mx-6 hidden'>ที่อยู่</small>
            
            <form id='add' className='text-white grid grid-cols-4 gap-y-4 mt-2 mx-8 hidden'>
                
                <div className='h-21'>
                    <label className='m-2'>เลขที่บ้าน</label><br />
                    <input type='text' name="addressnum" id="addnum" className='bg-[#17213A] h-13 border-2 border-[#003D76] px-5 py-2.5 mt-1 rounded-2xl' 
                    required/>
                </div>
                <div className='h-21'>
                    <label className='m-2'>หมู่</label><br />
                    <input type='text' name="Moo" id="Moo" className='bg-[#17213A] h-13 border-2 border-[#003D76] px-5 py-2.5 mt-1 rounded-2xl' required/>
                </div>
                <div className='h-21'>
                    <label className='m-2'>หมู่บ้าน/อาคาร</label><br />
                    <input type='text' name="village" id="village" className='bg-[#17213A] h-13 border-2 border-[#003D76] px-5 py-2.5 mt-1 rounded-2xl' 
                    required/>
                </div>

                <div className='h-21'>
                    <label className='m-2'>ซอย</label><br />
                    <input type='text' name="soi" id="soi" className='bg-[#17213A] h-13 border-2 border-[#003D76] px-5 py-2.5 mt-1 rounded-2xl' required/>
                </div>

                <div className='h-21'>
                    <label className='m-2'>ถนน</label><br />
                    <input type='text' name="road" id="road" className='bg-[#17213A] h-13 border-2 border-[#003D76] px-5 py-2.5 mt-1 rounded-2xl' 
                    required/>
                </div>
                <div className='h-21'>
                    <label className='m-2'>รหัสไปรษณีย์</label><br />
                    <input type='text' name="Postcode" id="Postcode" className='bg-[#17213A] h-13 border-2 border-[#003D76] px-5 py-2.5 mt-1 rounded-2xl' 
                    required/>
                </div>
                <div className='h-21'>
                    <label className='m-2'>จังหวัด</label><br />
                    <input type='text' name="province" id="province" className='bg-[#17213A] h-13 border-2 border-[#003D76] px-5 py-2.5 mt-1 rounded-2xl' 
                    required/>
                </div>
                
                
                <div className='h-21'>
                    <label className='m-2'>อำเภอ</label><br />
                    <select name="district" id="district" 
                    className='bg-[#17213A] w-7/12 h-13 border-2 border-[#003D76] px-5 py-2.5 mt-1 rounded-2xl' 
                    required>
                        <option value="none">เลือก </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                
                <div className='h-21'>
                    <label className='m-2'>ตำบล</label><br />
                    <select name="sub-district" id="sub-district" 
                    className='bg-[#17213A] w-7/12 h-13 border-2 border-[#003D76] px-5 py-2.5 mt-1 rounded-2xl' 
                    required>
                        <option value="none">เลือก </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>

                
                
               
                
            </form>
            
            
            
            
        </main>
        
    </div>
    
  )
}

export default Act