import React from 'react'
import styles from "../styles/Home.module.css";
import Image from 'next/image';

export const Experience = () => {
    return (
        <div className={styles.bg_experience}>
            <div className='flex justify-evenly items-center text-white text-center pt-40'>
                <div>
                    <Image src="/../home/diamond.png" width={50} height={50} className='mx-auto mb-3' />
                    <p>20</p>
                    <p className='mt-3'>Years Of Experience</p>
                </div>
                <div>
                    <Image src="/../home/group.png" width={50} height={50} className='mx-auto mb-3' />
                    <p>300</p>
                    <p className='mt-3'>Experts</p>
                </div>
                <div>
                    <Image src="/../home/earth.png" width={50} height={50} className='mx-auto mb-3' />
                    <p>120</p>
                    <p className='mt-3'>Countries</p>
                </div>
            </div>
        </div>
    )
}
