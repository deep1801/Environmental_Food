import React from "react";
import Food from "./Food";
import logo1 from "./assets/img/logo1.png"
import logo2 from "./assets/img/logo2.png"
import logo3 from "./assets/img/logo3.png"
import logo4 from "./assets/img/logo4.png"
import logo5 from "./assets/img/logo5.png"
import logo6 from "./assets/img/logo6.png"
import logo7 from "./assets/img/logo7.png"
import logo8 from "./assets/img/logo8.png"
function Food4(){
    return(
        <div className="flex flex-col items-center gap-4">
            <div>
                <h1 className="text-[2rem] font-bold text-[#A9338B]">Food Certifications</h1>
                <p className="text-[1rem]">We help you to comply with guidelines and attain certifications that you need.</p>
            </div>
            <div className="flex flex-col gap-8">

            <div className="flex gap-4">
                <div className="p-2 px-[3rem] shadow-xl h-fit">
                    <img src={logo1} alt="" className="w-[6rem]" />
                </div>
                <div className=" p-2 px-[3rem] shadow-xl h-fit">
                    <img src={logo2} alt="" className="w-[6rem]" />
                </div>
                <div className=" p-2 px-[3rem] shadow-xl h-fit">
                    <img src={logo3} alt=""  className="w-[6rem]"/>
                </div>
                <div className="p-2 px-[3rem] shadow-xl h-fit">
                    <img src={logo4} alt=""  className="w-[6rem]"/>
                </div>
             </div>   
             <div className="flex gap-4">
                <div className="p-2 px-[3rem] shadow-xl h-fit">
                    <img src={logo5} alt="" className="w-[6rem]" />
                </div>
                <div className=" p-2 px-[3rem] shadow-xl h-fit">
                    <img src={logo6} alt=""  className="w-[6rem]"/>
                </div>
                <div className=" p-2 px-[3rem] shadow-xl h-fit"> 
                    <img src={logo7} alt="" className="w-[6rem]" />
                </div>
                <div className=" p-2 px-[3rem] shadow-xl h-fit">
                    <img src={logo8} alt=""  className="w-[6rem]"/>
                </div>
            </div>
            </div>
            </div>

    )
}
export default Food4