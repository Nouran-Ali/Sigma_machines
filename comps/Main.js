import React from 'react'
import styles from "../styles/Home.module.css";
import Link from 'next/link';
import Image from 'next/image';

const Main = () => {
    return (
        <>
            <div>
                <div className={styles.background}>
                    <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-4 px-24 max-xl:px-10'>
                        <div className='mt-20'>
                            <p className='text-[#7153d9] text-xl tracking-widest uppercase font-medium'>Empowering laser users</p>
                            <h1 className='text-[#1c1c1c] mt-4 text-6xl font-bold'>Sigma Machines</h1>
                            <p className='text-[#54545f] text-xl mt-8 mb-12'>Simplify your processes, increase your productivity, and maximize your profitability.</p>
                            <Link href="/" className={styles.btn_more}>Read More</Link>

                            <div className={styles.half_circle}></div>
                            <div>
                                <Image src="/../home/right-arrow.png" width={40} height={40} className={styles.triangle_one} />
                                <Image src="/../home/right-arrow.png" width={20} height={20} className={styles.triangle_two} />
                                <Image src="/../home/right-arrow.png" width={30} height={30} className={styles.triangle_three} />
                                <Image src="/../home/right-arrow.png" width={30} height={30} className={styles.triangle_four} />
                                <Image src="/../home/right-arrow.png" width={20} height={20} className={styles.triangle_five} />
                            </div>
                        </div>
                        <div>
                            <div className={styles.right_circle}></div>
                            <Image src="/../home/4.png" className={` ${styles.image}`} width={600} height={550} />
                            <div className={styles.right_dots}>
                                <Image src="/../home/menu.png" width={50} height={50} />
                                <Image src="/../home/menu.png" width={50} height={50} />
                                <Image src="/../home/menu.png" width={50} height={50} />
                                <Image src="/../home/menu.png" width={50} height={50} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.white_circle}></div>
                <div className={styles.left_dots}>
                    <Image src="/../home/menu.png" width={40} height={40} />
                    <Image src="/../home/menu.png" width={40} height={40} />
                    <Image src="/../home/menu.png" width={40} height={40} />
                </div>
            </div>
        </>
    )
}

export default Main
