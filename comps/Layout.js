import React from 'react'
import Navbar from './Navbar3'
import Footer from './Footer';
import Fast_contact from './Fast_contact';

const Layout = ({ children }) => {

    return (
        <div>
            <Navbar />
            <Fast_contact />
            <div className=''>
                {children}
            </div>
            <Footer />
        </div>
    )
}
export default Layout;