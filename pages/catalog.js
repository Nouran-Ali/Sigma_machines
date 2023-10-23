import React from 'react'
import styles from "../styles/Resources.module.css";
import { Button } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import html2canvas from 'html2canvas';
import DownloadPDFButton from '../comps/DownloadPDFButton';


const Catalog = () => {

    return (
        <>
            <div className={`${styles.bg_resources} mobile_d_none`}>
                <h1 className='text-white text-5xl text-center pt-24'>Catalog</h1>
                <h1 className='text-[#bfbfbf] text-2xl text-center pt-5'>Resources</h1>
            </div>

            <div className='px-28 max-xl:px-10 mt-12 mb-12'>
                <h1 className='text-[#7153d9] text-2xl font-medium tracking-widest'>Manual of Controller</h1>
                <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-5'>
                    <div className='flex justify-between'>
                        <div>
                            <h3 className='text-xl font-medium tracking-widest'>A11Manual for DSP handle controller</h3>
                            <p className='text-[#54545f] text-lg tracking-widest'>3.07MB</p>
                        </div>
                        <div className='mr-5'>
                            <DownloadPDFButton />
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <div>
                            <h3 className='text-xl font-medium tracking-widest'>DSP handle controller A18 Manual</h3>
                            <p className='text-[#54545f] text-lg tracking-widest'>3.62MB</p>
                        </div>
                        <div className='mr-5'>
                            <DownloadPDFButton />
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <div>
                            <h3 className='text-xl font-medium tracking-widest'>NC studio Gen6A manual V8-R6</h3>
                            <p className='text-[#54545f] text-lg tracking-widest'>2.31MB</p>
                        </div>
                        <div className='mr-5'>
                            <DownloadPDFButton />
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <div>
                            <h3 className='text-xl font-medium tracking-widest'>CNC Router manual-Mach3 USB</h3>
                            <p className='text-[#54545f] text-lg tracking-widest'>24.74MB</p>
                        </div>
                        <div className='mr-5'>
                            <DownloadPDFButton />
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <div>
                            <h3 className='text-xl font-medium tracking-widest'>Three-spindle CNC router manual</h3>
                            <p className='text-[#54545f] text-lg tracking-widest'>4.56MB</p>
                        </div>
                        <div className='mr-5'>
                            <DownloadPDFButton />
                        </div>
                    </div>

                </div>

                <div className='mt-10'>
                    <h1 className='text-[#7153d9] text-2xl font-medium tracking-widest'>Manual for Machine Parts</h1>
                    <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-5'>
                        <div className='flex justify-between'>
                            <div>
                                <h3 className='text-xl font-medium tracking-widest'>Fuling Inverter Manual</h3>
                                <p className='text-[#54545f] text-lg tracking-widest'>0.98MB</p>
                            </div>
                            <div className='mr-5'>
                                <DownloadPDFButton />
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div>
                                <h3 className='text-xl font-medium tracking-widest'>Taiwan DELTA VFD-B Manual_En</h3>
                                <p className='text-[#54545f] text-lg tracking-widest'>5.18MB</p>
                            </div>
                            <div className='mr-5'>
                                <DownloadPDFButton />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog
