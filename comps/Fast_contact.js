import { CustomerServiceOutlined, MailOutlined, WhatsAppOutlined } from '@ant-design/icons'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'antd';
import { Input } from 'antd';

const Fast_contact = () => {

    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const { TextArea } = Input;
    const onChange = (e) => {
        console.log(e);
    };

    return (
        <>
            <div className='fixed top-44 right-2 z-50 bg-white pb-7 text-center text-sm rounded-t-full rounded-b-full shadow-lg'>
                <div className='bg-[#4d2eb8] text-white rounded-t-full pt-7 p-1 pb-2'>
                    <Link href="mailto:noranali237@gmail.com">
                        <MailOutlined className='mx-auto flex justify-center text-lg mb-2' />
                        <p>Email</p>
                    </Link>
                </div>
                {/* <div className='mt-5 p-1'>
                    <Link href="mailto:noranali237@gmail.com">
                        <MailOutlined className='mx-auto flex justify-center text-lg mb-2' />
                        <p>Email</p>
                    </Link>
                </div> */}
                <div className='mt-5 p-1'>
                    <Link
                        href="https://wa.me/+201000027240"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <WhatsAppOutlined className='mx-auto flex justify-center text-lg mb-2' />
                        <p>WhatsApp</p>
                    </Link>
                </div>
            </div>

            <Modal title="Request A Quote" open={isModalOpen} onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} className='bg-[#4d2eb8]'>
                        Submit
                    </Button>,
                ]}>
                <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-5'>
                    <Input placeholder="Name" allowClear onChange={onChange} className='rounded-full' />
                    <Input placeholder="Email" allowClear onChange={onChange} className='rounded-full' />
                    <Input placeholder="Phone" allowClear onChange={onChange} className='rounded-full' />
                </div>
                <TextArea placeholder="Write your message here" allowClear onChange={onChange} className='mt-4' style={{ borderRadius: "17px" }} />
            </Modal>
        </>
    )
}

export default Fast_contact
