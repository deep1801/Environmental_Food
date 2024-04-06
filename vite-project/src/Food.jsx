import React from "react";
import { FaMessage } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Food(){
    return(
        <div className="text-start  flex flex-col gap-6 px-10">
           <p className="text-[2rem] font-[400] text-[#BA007A]  ">Contract Manufacturing of Food Products</p>
           <div className="flex flex-col gap-2">
            <p className="text-[1.5rem] font-[400] ">Guires FRL Contract Manufacturing: Your Trusted Partner in Food Production</p>
            <p className="text-[1.1rem] font-[400] text-[#BA007A] text-start ">Are you on the quest for Finding the contract Manufacturer. Look no further than Guires Food Research Lab (FRL), we offers contract manufacturing services and also handle sourcing and production management</p>
            </div>
          <p> <span className="font-bold text-[#6A359C]">Food Contract manufacturing</span>, also known as co-packing or private label manufacturing, is a business arrangement in which a food company (often referred to as the “brand owner” or “client”) partners with a contract manufacturer (also known as a “co-packer”) to produce food products on their behalf. This allows the brand owner to focus on marketing, sales, and product development, while the co-packer handles the manufacturing process. Guires FRL Contract Manufacturing services is dedicated to crafting the highest quality food ingredients globally while safeguarding your recipes and food products with unwavering commitment to top-tier manufacturing standards, integrity, and excellence. With manufacturing partners worldwide, we tailor our services to meet your specific requirements and meticulously select vendors that align with your needs.</p>
          <p>At <span className="font-bold text-[#6A359C]">Guires FRL Contract Manufacturing,</span> our dedicated team is committed to your product’s success. We invest in training programs, documented processes, and our team’s well-being to ensure that you have full confidence in our capabilities, knowledge, and readiness. Our employees are your product’s guardians, and you will have a dedicated customer account manager as your primary point of contact from day one. We take extra measures to provide comprehensive information about your order, protect your intellectual property, and ensure an exceptional customer experience.</p>
          <p>Feel free to visit our <span className="font-bold text-[#6A359C]">Contact Us</span>  page to reach out with any inquiries or visit our facilities to witness our operations firsthand and experience the Advantages of  <span className="font-bold text-[#6A359C]"> outsourcing pilot contract manufacturing with Guires FRL</span>. We eagerly anticipate the opportunity to collaborate with you!</p>
          <div> 
           <p className="text-[1.5rem]">Key contact</p>
           <div className="flex gap-10 border-t-2 border-b-2 border-[#A22281]">
                <p className="text-[1.2rem]">For further information or prices please contact us:</p>
               <div className="flex flex-col items-center">
                <p><FaMessage className="h-6 w-6 text-[#A22281]"/> </p>
                <p className=" text-[2rem]font-[200] text-[#A22281]">info@foodresearchlab.com</p>
               </div>
               <div className="flex flex-col items-center">
                <p><FaPhoneAlt className="h-6 w-6 text-[#A22281]" /></p>
                <p className="text-[2rem]font-[200] text-[#A22281]">+91 9566299022</p>
               </div>
               <div className="flex flex-col items-center">
                <p><MdEmail className="h-8 w-8 text-[#A22281]"/></p>
                <p className="text-[6rem]font-[400] text-[#A22281]">Contact an Expert</p>
               </div>
           </div>
         </div>
            </div>
           
            
)
}
export default Food