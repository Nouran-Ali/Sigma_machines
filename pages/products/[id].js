import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import styles from "../../styles/Product.module.css";

const Product = () => {

    const router = useRouter();

    const { id } = router.query;

    const products = [
        { id: 1, name: 'User 1 details' },
        { id: 2, name: 'User 2 details' },
        { id: 3, name: 'User 3 details' },
    ]

    return (
        <>
            <div className={styles.bg_products}>
                <p className='text-center text-3xl text-white font-semibold pt-40'>Sigma Machines Products</p>
                <p className='text-center text-lg text-[#a9a9a9] mt-3'>HIGH SPEED, HIGH ACCURACY, HIGH EFFICIENCY</p>
            </div>

            <div>
                pppp
            </div>
        </>
    )
}

export default Product
