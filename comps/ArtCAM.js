import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import YouTube from 'react-youtube';

const ArtCAM = () => {

    const videoUrl = 'https://www.youtube.com/watch?v=EOve_cHeEC0&t=231s';

    const urlParams = new URLSearchParams(new URL(videoUrl).search);
    const videoId = urlParams.get('v');

    return (
        <>
            <div className='ml-10'>
                <Image src="/../program/1.jpg" width={950} height={30} className='rounded-3xl ' />
                <h3 className='text-[#7153d9] text-xl font-medium tracking-widest mt-6'>ArtCAM 2012 User Guide Download</h3>
                <p className='mt-5 text-[#1c1c1c]'>ArtCAM is a popular 2D & 3D software for sign makers, cabinet makers, door makers to design high-quality 2D or 3D products.</p>
                <p className='mt-1 text-[#1c1c1c] mb-5'>Here we offer a document of 'ArtCAM 2012 User Guide in English Version' for your reference.</p>
                <Link href="/" className="bg-[#7153d9] text-white p-2">ArtCAM 2012 User Guide in English Version</Link>

                <h3 className='text-[#7153d9] text-xl font-medium tracking-widest mt-10'>How To Install ArtCAM 2012</h3>
                <p className='text-lg mt-3'>The steps are as follows:</p>
                <ol className='text-lg'>
                    <li className='mt-2'>1- Click the installation files Choose a language you need</li>
                    <li className='mt-1'>2- Choose “Millimeter” </li>
                    <li className='mt-1'>3- Click “Crack For ArtCAM” </li>
                    <li className='mt-1'>4- Copy “Exec”and “Exec64”to your ArtCAM2012 folder for replace the original file. </li>
                    <li className='mt-1'>5- If your machine is rotary device,please copy “rotaryY2A“and “rotaryY2C“to your ArtCAM2012 folder/”postp” for replace the original file too,choose one of these two post-processing（If your machine is set to the A axis, choose “rotaryY2A;If your machine is set to the C axis, choose rotaryY2C”），This only needs to replace X with Y and Y with X when correct G-Code Then you can use ArtCAM2012 as normal</li>
                </ol>
                <p className='mt-5 text-lg mb-3'>The video is as follows:</p>

                {videoId ? <YouTube videoId={videoId} /> : 'Invalid video URL'}
            </div>
        </>
    )
}

export default ArtCAM
