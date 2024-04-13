import React from "react";
import { MdAddLocation } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdCopyright } from "react-icons/md";

function Education3(){
    return(
        <div className="border border-red-500 flex flex-col gap-10">
              <div className="text-start bg-[#111111] pb-10 pt-10 flex gap-20">
        <div className="flex flex-col gap-5">
            <h1 className="text-[1.3rem] font-semibold text-[white] pl-10 border-b border-yellow-400">Find Us</h1>
            <div className="flex pl-6 gap-10">
            <div className="flex flex-col gap-5">
                <div className="flex items-center pl-1 gap-5">
                <MdAddLocation className="text-[#FFB607] text-start" />
                  <div className="">
                     <p className="font-semibold  text-[white]">6890 Blvd, The Bronx, NY 1058</p>
                     <p className="font-semibold text-[white]">New York, USA</p>
                </div>
                </div>
               
               <div className="flex items-center gap-5">
               <CgMail className="text-[#FFB607]" />
               <div className="">
                    <p className="font-semibold text-[white] hover:text-[#ffb607] cursor-pointer">hello@eduon.com</p>
                    <p className="font-semibold text-[white] hover:text-[#ffb607] cursor-pointer">public@eduon.com</p>
                </div>
               </div>
               <div className="flex items-cente gap-5">
               <BiSolidPhoneCall className="text-[#FFB607]" />
               <div className="">
                    <p className="font-semibold text-[white] hover:text-[#ffb607] cursor-pointer">+1 (514) 312-5678</p>
                    <p className="font-semibold text-[white] hover:text-[#ffb607] cursor-pointer">+1 (514) 312-6688</p>
                </div>
               </div>
            
                
            </div>
        </div>
       </div>
       <div className="flex flex-col items-center gap-3">
       <div className="text-[white] flex flex-col gap-12">
        <p className="text-[1.3rem] font-semibold border-b border-yellow-400">Useful links</p>
       </div>
       <div className="text-[white] flex flex-col gap-4">
        <p className="font-semibold hover:text-[#ffb607] cursor-pointer">All Courses</p>
        <p className="font-semibold hover:text-[#ffb607] cursor-pointer">About us</p>
        <p className="font-semibold hover:text-[#ffb607] cursor-pointer">Help (FAQ)</p>
        <p className="font-semibold hover:text-[#ffb607] cursor-pointer">Terms & Conditions</p>
        <p className="font-semibold hover:text-[#ffb607] cursor-pointer">Privacy Policy</p>
       </div>
        </div>
        <div className="flex flex-col items-center gap-3">
       <div className="text-[white]  flex flex-col gap-12">
        <p className="text-[1.3rem] font-semibold border-b border-yellow-400">Top online courses</p>
       </div>
       <div className="text-[white] flex flex-col gap-4">
        <p className="font-semibold hover:text-[#ffb607] cursor-pointer">AI for everyone</p>
        <p className="font-semibold hover:text-[#ffb607] cursor-pointer">Networks and deep learning</p>
        <p className="font-semibold hover:text-[#ffb607] cursor-pointer">Learning with python</p>
        <p className="font-semibold hover:text-[#ffb607] cursor-pointer">Financial markets</p>
        <p className="font-semibold hover:text-[#ffb607] cursor-pointer">Speak English professionally</p>
       </div>
        </div>
        <div className="flex flex-col items-center gap-3">
       <div className="text-[white]flex flex-col gap-12">
        <p className="text-[1.3rem] font-semibold text-[white] border-b border-yellow-400">Popular subjects</p>
       </div>
       <div className="text-[white] flex flex-col gap-4">
        <p className="font-semibold hover:text-[#ffb607] cursor-pointer">Data science</p>
        <p className="font-semibold hover:text-[#ffb607] cursor-pointer">Computer science</p>
        <p className="font-semibold hover:text-[#ffb607] cursor-pointer">Business and Management</p>
        <p className="font-semibold hover:text-[#ffb607] cursor-pointer">Business and Management</p>
        <p className="font-semibold hover:text-[#ffb607] cursor-pointer">Nature & Environment</p>
       </div>
        </div>
        
            </div>
            <div>
            <p>Copyright 2022 Designed By HiBootstrap.com</p>
            </div>
    
        </div>
       
           
    )
}
export default Education3