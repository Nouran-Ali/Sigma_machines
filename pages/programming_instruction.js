import Image from 'next/image'
import React from 'react'
import styles from "../styles/Resources.module.css";
import Link from 'next/link';

const Programming_instruction = () => {
  return (

    <>
      <div className={`${styles.bg_resources} mobile_d_none`}>
        <h1 className='text-white text-5xl text-center pt-24'>Programming instruction</h1>
        <h1 className='text-[#bfbfbf] text-2xl text-center pt-5'>Resources</h1>
      </div>

      <div className='px-28 max-xl:px-10 mt-12 mb-12'>
        <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-1'>
          <div>
            <Image src="/../program/artcam.jpg" width={230} height={50} className='mx-auto' style={{borderRadius: "19% 19% 19% 21% / 20% 18% 0% 22%"}}/>
          </div>
          <div>
            <Link href="/program" className='text-2xl font-medium tracking-widest'><span className='text-[#7153d9]'>ArtCAM </span> 2012 User Guide Download</Link>
            <p className='text-[#54545f] mt-3'>ArtCAM is a popular 2D & 3D software for sign makers, cabinet makers, door makers to design high-quality 2D or 3D products.Here we offer a document of 'ArtCAM 2012 User Guide in English Version' for your reference.ArtCAM 2012 User Guide in English Version</p>
            <Link href="/program" className='flex items-center mt-4 px-6 p-2 rounded-full w-1/3' style={{border: "1px solid #7153d9"}}>
              <span className='mr-3 font-medium tracking-widest'>Read More</span>
              <Image src="/../program/star.png" width={30} height={30} />
            </Link>
          </div>
        </div>

        <hr />

        <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-1 mt-10'>
          <div>
            <Image src="/../program/FastCAM.jpg" width={230} height={50} className='mx-auto' style={{borderRadius: "19% 19% 19% 21% / 20% 18% 0% 22%"}}/>
          </div>
          <div>
            <Link href="/" className='text-2xl font-medium tracking-widest'><span className='text-[#7153d9]'>FastCam </span> 2012 User Guide Download</Link>
            <p className='text-[#54545f] mt-3'>ArtCAM is a popular 2D & 3D software for sign makers, cabinet makers, door makers to design high-quality 2D or 3D products.Here we offer a document of 'ArtCAM 2012 User Guide in English Version' for your reference.ArtCAM 2012 User Guide in English Version</p>
            <Link href="/" className='flex items-center mt-4 px-6 p-2 rounded-full w-1/3' style={{border: "1px solid #7153d9"}}>
              <span className='mr-3 font-medium tracking-widest'>Read More</span>
              <Image src="/../program/star.png" width={30} height={30} />
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-1 mt-10'>
          <div>
            <Image src="/../program/sheetcam.jpg" width={230} height={50} className='mx-auto' style={{borderRadius: "19% 19% 19% 21% / 20% 18% 0% 22%"}}/>
          </div>
          <div>
            <Link href="/" className='text-2xl font-medium tracking-widest'><span className='text-[#7153d9]'>SheetCam </span> 2012 User Guide Download</Link>
            <p className='text-[#54545f] mt-3'>ArtCAM is a popular 2D & 3D software for sign makers, cabinet makers, door makers to design high-quality 2D or 3D products.Here we offer a document of 'ArtCAM 2012 User Guide in English Version' for your reference.ArtCAM 2012 User Guide in English Version</p>
            <Link href="/" className='flex items-center mt-4 px-6 p-2 rounded-full w-1/3' style={{border: "1px solid #7153d9"}}>
              <span className='mr-3 font-medium tracking-widest'>Read More</span>
              <Image src="/../program/star.png" width={30} height={30} />
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-1 mt-10'>
          <div>
            <Image src="/../program/CorelDraw_logo.png" width={230} height={50} className='mx-auto mt-16' style={{borderRadius: "19% 19% 19% 21% / 20% 18% 0% 22%"}}/>
          </div>
          <div>
            <Link href="/" className='text-2xl font-medium tracking-widest'><span className='text-[#7153d9]'>Corel </span> 2012 User Guide Download</Link>
            <p className='text-[#54545f] mt-3'>ArtCAM is a popular 2D & 3D software for sign makers, cabinet makers, door makers to design high-quality 2D or 3D products.Here we offer a document of 'ArtCAM 2012 User Guide in English Version' for your reference.ArtCAM 2012 User Guide in English Version</p>
            <Link href="/" className='flex items-center mt-4 px-6 p-2 rounded-full w-1/3' style={{border: "1px solid #7153d9"}}>
              <span className='mr-3 font-medium tracking-widest'>Read More</span>
              <Image src="/../program/star.png" width={30} height={30} />
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-1 mt-10'>
          <div>
            <Image src="/../program/RD.jpg" width={200} height={50} className='mx-auto' style={{borderRadius: "19% 19% 19% 21% / 20% 18% 0% 22%"}}/>
          </div>
          <div>
            <Link href="/" className='text-2xl font-medium tracking-widest'><span className='text-[#7153d9]'>Rdworks </span> 2012 User Guide Download</Link>
            <p className='text-[#54545f] mt-3'>ArtCAM is a popular 2D & 3D software for sign makers, cabinet makers, door makers to design high-quality 2D or 3D products.Here we offer a document of 'ArtCAM 2012 User Guide in English Version' for your reference.ArtCAM 2012 User Guide in English Version</p>
            <Link href="/" className='flex items-center mt-4 px-6 p-2 rounded-full w-1/3' style={{border: "1px solid #7153d9"}}>
              <span className='mr-3 font-medium tracking-widest'>Read More</span>
              <Image src="/../program/star.png" width={30} height={30} />
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-1 mt-10'>
          <div>
            <Image src="/../program/laser.svg" width={230} height={50} className='mx-auto' style={{borderRadius: "19% 19% 19% 21% / 20% 18% 0% 22%"}}/>
          </div>
          <div>
            <Link href="/" className='text-2xl font-medium tracking-widest'><span className='text-[#7153d9]'>Laser Cad </span> 2012 User Guide Download</Link>
            <p className='text-[#54545f] mt-3'>ArtCAM is a popular 2D & 3D software for sign makers, cabinet makers, door makers to design high-quality 2D or 3D products.Here we offer a document of 'ArtCAM 2012 User Guide in English Version' for your reference.ArtCAM 2012 User Guide in English Version</p>
            <Link href="/" className='flex items-center mt-4 px-6 p-2 rounded-full w-1/3' style={{border: "1px solid #7153d9"}}>
              <span className='mr-3 font-medium tracking-widest'>Read More</span>
              <Image src="/../program/star.png" width={30} height={30} />
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-1 mt-10'>
          <div>
            <Image src="/../program/2.png" width={230} height={50} className='mx-auto' style={{borderRadius: "19% 19% 19% 21% / 20% 18% 0% 22%"}}/>
          </div>
          <div>
            <Link href="/" className='text-2xl font-medium tracking-widest'><span className='text-[#7153d9]'>Nestudio </span> 2012 User Guide Download</Link>
            <p className='text-[#54545f] mt-3'>ArtCAM is a popular 2D & 3D software for sign makers, cabinet makers, door makers to design high-quality 2D or 3D products.Here we offer a document of 'ArtCAM 2012 User Guide in English Version' for your reference.ArtCAM 2012 User Guide in English Version</p>
            <Link href="/" className='flex items-center mt-4 px-6 p-2 rounded-full w-1/3' style={{border: "1px solid #7153d9"}}>
              <span className='mr-3 font-medium tracking-widest'>Read More</span>
              <Image src="/../program/star.png" width={30} height={30} />
            </Link>
          </div>
        </div>
        
        
      </div>
    </>
  )
}

export default Programming_instruction
