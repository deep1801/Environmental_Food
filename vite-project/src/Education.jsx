import React from "react";

function Education (){
    return(
        <div className=" flex flex-col gap-10 bg-[#EFF0F4] pb-10 pt-10">
            <div className="">
                <p className=" text-[#FDB507] font-semibold">Our Affordable</p>
                <h1 className=" text-[2rem] font-bold">Your benefit with Eduon</h1>
            </div>
            <div className=" flex justify-center gap-10 items-center">
                <div className="gap-2 flex flex-col items-center ">
                    <img className="w-[8rem]   rounded-full h-[8rem] object-cover" src="https://images.pexels.com/photos/1438044/pexels-photo-1438044.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <p className="text-[1.3rem] font-bold">Save time & money</p>
                </div>
                <div className="flex flex-col items-center"> 
                   <img className="w-[8rem] rounded-full h-[8rem] object-cover" src="https://images.pexels.com/photos/1438044/pexels-photo-1438044.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                   <p className="text-[1.3rem] font-bold">Save and time</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-[8rem] rounded-full h-[8rem] object-cover" src="https://images.pexels.com/photos/1438044/pexels-photo-1438044.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <p className="text-[1.3rem] font-bold">Gain knowledge</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-[8rem] rounded-full h-[8rem] object-cover shadow-[3px_7px_3px_#596d91]" src="https://images.pexels.com/photos/1438044/pexels-photo-1438044.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <p className="text-[1.3rem] font-bold">Finish what you started</p>
                </div>
            </div>
        </div>
    )
}
export default Education

