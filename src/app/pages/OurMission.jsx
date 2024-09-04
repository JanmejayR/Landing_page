import React from 'react'
import Macbook from '../components/macbook-model/Macbook'
const OurMission = () => {
  return (
    <main className='w-full   bg-[#95b0c7]'>
        <div className='w-full flex justify-between pt-32'> 
            <div className='flex flex-col border-2 border-red-500 w-2/3 h-[30rem]'>
            <h1 className='font-baskervville text-6xl text-[#101010] pl-16'>OUR MISSION</h1>

        <h2 className='text-4xl font-oswald font-bold text-[#7b2cbf] pt-8 pl-16'>ELEVATING HUMANITY THROUGH INNOVATION AND TECHNOLOGY IS OUR MISSION.</h2>

        <p className='mt-8 pl-16 text-3xl font-serif font-normal pr-16'>Our vision is to reduce the gap in harnessing technology, towards human evolution! We belief that every technological solution should be purposeful and aligned with the unique needs of the user. One-size-fits-all approaches are outdated; instead, we advocate for solutions that are tailored, intuitive, and genuinely enhance the human experience.</p>
            </div>

            <div className='w-1/3 border-2 border-pink-500'>
                <Macbook/>
            </div>
        </div>
    </main>
  )
}

export default OurMission