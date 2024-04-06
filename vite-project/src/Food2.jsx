import React from "react";
import WeDo from "./WeDo";
function Food(){
    return(
        <div className="flex flex-col gap-5">
            <div className="flex">
            <div className="flex items-center gap-4">
                <img className="w-[5rem]"   src="https://www.foodresearchlab.com/wp-content/uploads/2022/05/Cereal-Milling-Baking.png" alt="" />
                <div className="flex flex-col  text-start  w-[20rem]">
                    <h1 className="text-[1.5rem] text-[#BA007A] font-semibold">Cereal Milling & Baking</h1>
                    <p className="w-[15rem]">Grains are a fundamental ingredient for bakery products. Rice and wheat are the</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <img className="w-[5rem]"   src="https://www.foodresearchlab.com/wp-content/uploads/2022/05/Snacking.png" alt="" />
                <div className="flex flex-col  text-start  w-[20rem]">
                    <h1 className="text-[1.5rem] text-[#BA007A] font-semibold">Snacking</h1>
                    <p className="w-[10rem]">Good Health & better nutrition in every bite of your tasty snack… </p>
                </div>
            </div>
            </div>
            <div className="flex">
            <div className="flex items-center gap-4">
                <img className="w-[5rem]"   src="https://www.foodresearchlab.com/wp-content/uploads/2022/05/Hot-cereals.png" alt="" />
                <div className="flex flex-col  text-start  w-[20rem]">
                    <h1 className="text-[1.5rem] text-[#BA007A] font-semibold">Hot cereals</h1>
                    <p className="w-[15rem]">Hot cereals or otherwise known as ready-to-breakfast eat cereals consumption…</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <img className="w-[5rem]"   src="https://www.foodresearchlab.com/wp-content/uploads/2022/05/Rice-Products.png" alt="" />
                <div className="flex flex-col  text-start  w-[20rem]">
                    <h1 className="text-[1.5rem] text-[#BA007A] font-semibold">Rice Products</h1>
                    <p className="w-[15rem]">Rice consumption is decreasing constantly in many Asian countries…</p>
                </div>
            </div>
            </div>
            <div className="flex">
            <div className="flex items-center gap-4">
                <img className="w-[5rem]"   src="https://www.foodresearchlab.com/wp-content/uploads/2022/05/Muesli-and-granola.png" alt="" />
                <div className="flex flex-col  text-start  w-[20rem]">
                    <h1 className="text-[1.5rem] text-[#BA007A] font-semibold">Muesli and granola</h1>
                    <p className="w-[15rem]">The dynamic pace of life of a modern consumer necessitates nutritious…</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <img className="w-[5rem]"   src="https://www.foodresearchlab.com/wp-content/uploads/2022/05/Rice-Pasta-Noodles.png" alt="" />
                <div className="flex flex-col  text-start  w-[20rem]">
                    <h1 className="text-[1.5rem] text-[#BA007A] font-semibold">Rice, Pasta & Noodles</h1>
                    <p className="w-[15rem]">Jams, Jelly, marmalades, preserves, and conserves are projected to witness growth…</p>
                </div>
            </div>
            </div>
        </div>
    )

}

export default Food