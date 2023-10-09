import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhatWeOffer = () => {
    return (
        <div className='px-24 max-xl:px-10 mt-24 mb-24'>
            <h1 className='text-center text-3xl text-[#1c1c1c] font-semibold'>WHAT WE OFFER</h1>
            <div className='grid grid-cols-4 max-xl:grid-cols-1 gap-4 mt-12'>
                <Link href="/" className='flex items-center'>
                    <div className='bg-[#f2f5fb] p-6 rounded-full mr-5'>
                        <Image src="/../home/laser-cutting-machine.png" width={50} height={90} />
                    </div>
                    <div>
                        <h3 className='text-xl text-[#54545f]'>Fiber laser cutting machine</h3>
                    </div>
                </Link>
                <Link href="/" className='flex items-center'>
                    <div className='bg-[#f2f5fb] p-6 rounded-full mr-5'>
                        <Image src="/../home/CO2.png" width={70} height={90} />
                    </div>
                    <div>
                        <h3 className='text-xl text-[#54545f]'>CO2 laser cutting & engraving machine</h3>
                    </div>
                </Link>
                <Link href="/" className='flex items-center'>
                    <div className='bg-[#f2f5fb] p-6 rounded-full mr-5'>
                        <Image src="/../home/cnc.png" width={35} height={90} />
                    </div>
                    <div>
                        <h3 className='text-xl text-[#54545f]'>Cnc router</h3>
                    </div>
                </Link>
                <Link href="/" className='flex items-center'>
                    <div className='bg-[#f2f5fb] p-6 rounded-full mr-5'>
                        <Image src="/../home/Welding_machine.png" width={50} height={90} />
                    </div>
                    <div>
                        <h3 className='text-xl text-[#54545f]'>Bending / Welding machine</h3>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default WhatWeOffer
