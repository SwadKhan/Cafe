import React from 'react';

const Banner = () => {
    return (
        <div
            className='bg-cover bg-no-repeat rounded-3xl md:w-full h-full md:h-[35.5rem] mb-10' style={{backgroundImage:'url(https://i.ibb.co.com/HHB2VBf/kris-atomic-3b2t-ADGAWn-U-unsplash.jpg)'}}>
                <div className='w-9/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-6 py-4'>
                <h1 className='font-bold text-white md:text-[3.25rem] '>Discover an exceptional cooking class tailored for you!</h1>
                <p className='text-lg text-zinc-50 font-normal'>Discover an exceptional cooking class crafted just for you! Elevate your culinary skills, explore new recipes, and embark on a delicious journey with hands-on lessons designed to suit your taste and style.</p>
                <div className='flex gap-4 text-xl font-semibold'>
                <button className='btn bg-green-400 rounded-full border-none'>
                    Explore Now 

</button>
<button className='btn bg-outline text-slate-800 hover:bg-green-400 rounded-full'>
    Our feedBack

</button>
                </div>
               
                </div>
        </div>
    );
};

export default Banner;