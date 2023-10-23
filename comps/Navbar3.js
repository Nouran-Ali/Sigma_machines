import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useRouter } from 'next/router';
import styles from "../styles/Navbar.module.css";
import Link from 'next/link';
import { useTranslation } from "react-i18next";
import { getCookie, setCookie } from "cookies-next";
import { Select } from 'antd';
import { PhoneFilled } from "@ant-design/icons";
import { Dropdown, Space } from 'antd';

const pages = [
    {
        title: 'Home',
        title_ar: 'الرئيسية',
        href: '/',
    },
    {
        title: 'About us',
        title_ar: 'عنا',
        href: '/about',
    },
    {
        title: 'Services',
        title_ar: 'خدماتنا',
        href: '/services',
    },
    {
        title: 'Products',
        title_ar: 'المنتجات',
        href: '/products',
        sublinks: [
            {
                title: 'Fiber Laser Cutting Machine',
                title_ar: 'منتج 1',
                href: '/product1',
                sublinkstwo: [
                    {
                        title: 'Sheet Metal Laser Cutting Machine',
                        title_ar: 'منتج 1',
                        href: '/product1',
                    },
                    {
                        title: 'Tube Metal Laser Cutting Machine',
                        title_ar: 'منتج 1',
                        href: '/product1',
                    },
                    {
                        title: 'Sheet & Tube Laser Cutting Machine',
                        title_ar: 'منتج 1',
                        href: '/product1',
                    },
                ]
            },
            {
                title: 'CO2 Laser',
                title_ar: 'منتج 2',
                href: '/product2',
            },
            {
                title: 'CNC Router',
                title_ar: 'منتج 2',
                href: '/product2',
            },
            {
                title: 'Bending',
                title_ar: 'منتج 2',
                href: '/product2',
            },
            {
                title: 'Welding',
                title_ar: 'منتج 2',
                href: '/product2',
            },
            {
                title: 'Marking Laser',
                title_ar: 'منتج 2',
                href: '/product2',
            },
            {
                title: 'CNC Plasm',
                title_ar: 'منتج 2',
                href: '/product2',
            },
        ]
    },
    {
        title: 'Resources',
        title_ar: 'المصادر',
        href: '/resources',
        // sublinks: [
        //     {
        //         title: 'Programming instruction',
        //         title_ar: 'المصادر',
        //         href: '/resources',
        //     },
        //     {
        //         title: 'Catalog',
        //         title_ar: 'المصادر',
        //         href: '/resources',
        //     },
        // ]
    },
    {
        title: 'Contact',
        title_ar: "تواصل معنا",
        href: '/contact',
    },
];

function Navbar() {

    const router = useRouter();
    const [active, setActive] = useState();
    const [scrolling, setScrolling] = useState(false);

    const [t, i18n] = useTranslation();
    const { language, changeLanguage } = i18n;

    const { pathname } = router;


    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleClose() {
        setAnchorEl(null);
    }


    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleActiveLink = (href) => {
        if (pathname == '/' && href == '/') {
            return true;
        } else if (pathname.includes(href) && href !== '/') {
            return true;
        } else {
            return false;
        }
    };

    const toggleLanguage = () => {
        if (language == "en") {
            changeLanguage("ar");
            setCookie('language', "ar");
        } else {
            changeLanguage("en");
            setCookie('language', "en");
        }
    };

    return (
        <>
            <AppBar position="sticky" sx={{
                backgroundColor: scrolling ? '#ffffff' : '#e9edf4',
                transition: 'background-color 0.3s ease-in-out',
                boxShadow: scrolling ? '0px 0px 5px rgba(0, 0, 0, 0.2)' : 'none',
                zIndex: 1,
            }} className={`navbar pr-3 ${scrolling ? "pt-3 pb-3" : "pt-3 pb-3"}`} dir={language == "ar" ? "rtl" : "ltr"}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={
                                language == "ar" ?
                                    {
                                        mr: 15,
                                        ml: 9,
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }
                                    :
                                    {
                                        mr: 5,
                                        ml: 9,
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        zIndex: "10"
                                    }
                            }
                        >
                            <img src='../next.svg' width="75px" />
                        </Typography>
                        <Box sx={{
                            flexGrow: 1, display: { xs: 'flex', md: 'none' },
                            alignItems: 'center', textAlign: 'center'
                        }} className="ml-5">
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="black"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <Link href="/" className={`${styles.link} ${handleActiveLink("/") ? styles.active : ''} flex items-center`}>
                                    {i18n.language === "ar" ? "الرئيسية" : "Home"}
                                </Link>
                                <Link href="/about" className={`${styles.link} ${handleActiveLink("/about") ? styles.active : ''} flex items-center`}>
                                    {i18n.language === "ar" ? "عنا" : "About us"}
                                </Link>
                                <Link href="/services" className={`${styles.link} ${handleActiveLink("/services") ? styles.active : ''} flex items-center`}>
                                    {i18n.language === "ar" ? "خدماتنا" : "Services"}
                                </Link>

                                <div className={`${styles.dropdown} text-start`}>
                                    <Link
                                        href="/products/1"
                                        className={`${styles.link} ${handleActiveLink("/products") ? styles.active : ''} flex items-center`}
                                    >
                                        {i18n.language === "ar" ? "المنتجات" : "Products"}
                                    </Link>
                                    <div className={styles.dropdown_content}>
                                        <div className={styles.dropdown2}>
                                            <Link
                                                href="/products/1"
                                                className={`${styles.dropbtn2} ${handleActiveLink("/products/1") ? styles.active : ''} flex items-center`}
                                            >
                                                Fiber Laser Cutting Machines
                                            </Link>
                                            <div className={styles.dropdown_content2}>
                                                <Link href="#">Sheet Metal Laser Cutting Machines</Link>
                                                <Link href="#">Tube Metal Laser Cutting Machines</Link>
                                                <Link href="#">Sheet & Tube Laser Cutting Machines</Link>
                                            </div>
                                        </div>

                                        <div className={`${styles.dropdown2} ${styles.dropdown22}`}>
                                            <Link
                                                href="/products/1"
                                                className={`${styles.dropbtn2} ${styles.dropbtn22} ${handleActiveLink("/products/1") ? styles.active : ''} flex items-center`}
                                            >
                                                CO2 Laser Cutting and Engraving Machines
                                            </Link>
                                            <div className={`${styles.dropdown_content2} ${styles.dropdown_content22}`}>
                                                <Link href="#">Non Metal Machines</Link>
                                                <Link href="#">Metal and Non metal Machines</Link>
                                                <Link href="#">CCD Laser Machines</Link>
                                            </div>
                                        </div>

                                        <div className={`${styles.dropdown2} ${styles.dropdown3}`}>
                                            <Link
                                                href="/products/1"
                                                className={`${styles.dropbtn2} ${styles.dropbtn3} ${handleActiveLink("/products/1") ? styles.active : ''} flex items-center`}
                                            >
                                                CNC Router Machines
                                            </Link>
                                            <div className={`${styles.dropdown_content2} ${styles.dropdown_content3}`}>
                                                <Link href="#">CNC Working Wood Router</Link>
                                                <Link href="#">4 Axis CNC</Link>
                                                <Link href="#">5 Axis CNC</Link>
                                                <Link href="#">Foam/EPS CNC</Link>
                                                <Link href="#">Lathe CNC</Link>
                                                <Link href="#">Multi-head CNC</Link>
                                            </div>
                                        </div>

                                        <div className={`${styles.dropdown2} ${styles.dropdown4}`}>
                                            <Link
                                                href="/products/1"
                                                className={`${styles.dropbtn2} ${styles.dropbtn4} ${handleActiveLink("/products/1") ? styles.active : ''} flex items-center`}
                                            >
                                                CNC Plasma Cutting Machines
                                            </Link>
                                            <div className={`${styles.dropdown_content2} ${styles.dropdown_content4}`}>
                                                <Link href="#">Sheet Metal</Link>
                                                <Link href="#">Sheet Metal and Rotary</Link>
                                                <Link href="#">Gantry</Link>
                                                <Link href="#">Rotary</Link>
                                                <Link href="#">Portable</Link>
                                            </div>
                                        </div>

                                        <div className={`${styles.dropdown2} ${styles.dropdown6}`}>
                                            <Link
                                                href="/products/1"
                                                className={`${styles.dropbtn2} ${styles.dropbtn6} ${handleActiveLink("/products/1") ? styles.active : ''} flex items-center`}
                                            >
                                                Bending Machines
                                            </Link>
                                            <div className={`${styles.dropdown_content2} ${styles.dropdown_content6}`}>
                                                <Link href="#">Letter Bending</Link>
                                                <Link href="#">Press Brake Bending</Link>
                                            </div>
                                        </div>

                                        <div className={`${styles.dropdown2} ${styles.dropdown6}`}>
                                            <Link
                                                href="/products/1"
                                                className={`${styles.dropbtn2} ${styles.dropbtn6} ${handleActiveLink("/products/1") ? styles.active : ''} flex items-center`}
                                            >
                                                Welding Machines
                                            </Link>
                                            <div className={`${styles.dropdown_content2} ${styles.dropdown_content6}`}>
                                                <Link href="#">Fiber Laser Welding</Link>
                                                <Link href="#">YAG Laser Welding</Link>
                                            </div>
                                        </div>

                                        <div className={`${styles.dropdown2} ${styles.dropdown7}`}>
                                            <Link
                                                href="/products/1"
                                                className={`${styles.dropbtn2} ${styles.dropbtn7} ${handleActiveLink("/products/1") ? styles.active : ''} flex items-center`}
                                            >
                                                Laser Marking Machines
                                            </Link>
                                            <div className={`${styles.dropdown_content2} ${styles.dropdown_content7}`}>
                                                <Link href="#">Fiber Laser Marking</Link>
                                                <Link href="#">CO2 Laser Marking</Link>
                                                <Link href="#">UV Laser Marking</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div><br/>

                                <div className={`${styles.dropdown} text-start`}>
                                    <Link href="/resources" className={`${styles.link} ${handleActiveLink("/resources") ? styles.active : ''} flex items-center`}>
                                        {i18n.language === "ar" ? "المصادر" : "Resources"}
                                    </Link>
                                    <div className={styles.dropdown_content}>
                                        <Link href="#">Programming instruction</Link>
                                        <Link href="#">Catalog</Link>
                                    </div>
                                </div>
                                <Link href="/contact" className={`${styles.link} ${handleActiveLink("/contact") ? styles.active : ''} flex items-center`}>
                                    {i18n.language === "ar" ? "تواصل معنا" : "Contact"}
                                </Link>
                                <Button
                                    onClick={toggleLanguage}
                                    style={{ color: "#304644", backgroundColor: 'transparent', fontWeight: "600", marginLeft: "44px" }}
                                    className='ml-9'
                                >
                                    {language == "ar" ? "EN" : "AR"}
                                </Button>
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <img src='../next.svg' width="75px" />
                        </Typography>
                        <Box sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            textAlign: 'center',
                            alignItems: "center"
                        }}>
                            <Link href="/" className={`${styles.link} ${handleActiveLink("/") ? styles.active : ''} flex items-center`}>
                                {i18n.language === "ar" ? "الرئيسية" : "Home"}
                            </Link>
                            <Link href="/about" className={`${styles.link} ${handleActiveLink("/about") ? styles.active : ''} flex items-center`}>
                                {i18n.language === "ar" ? "عنا" : "About us"}
                            </Link>
                            <Link href="/services" className={`${styles.link} ${handleActiveLink("/services") ? styles.active : ''} flex items-center`}>
                                {i18n.language === "ar" ? "خدماتنا" : "Services"}
                            </Link>

                            <div className={`${styles.dropdown} text-start`}>
                                <Link
                                    href="/products/1"
                                    className={`${styles.link} ${handleActiveLink("/products") ? styles.active : ''} flex items-center`}
                                >
                                    {i18n.language === "ar" ? "المنتجات" : "Products"}
                                </Link>
                                <div className={styles.dropdown_content}>
                                    <div className={styles.dropdown2}>
                                        <Link
                                            href="/products/1"
                                            className={`${styles.dropbtn2} ${handleActiveLink("/products/1") ? styles.active : ''} flex items-center`}
                                        >
                                            Fiber Laser Cutting Machines
                                        </Link>
                                        <div className={styles.dropdown_content2}>
                                            <Link href="#">Sheet Metal Laser Cutting Machines</Link>
                                            <Link href="#">Tube Metal Laser Cutting Machines</Link>
                                            <Link href="#">Sheet & Tube Laser Cutting Machines</Link>
                                        </div>
                                    </div>

                                    <div className={`${styles.dropdown2} ${styles.dropdown22}`}>
                                        <Link
                                            href="/products/1"
                                            className={`${styles.dropbtn2} ${styles.dropbtn22} ${handleActiveLink("/products/1") ? styles.active : ''} flex items-center`}
                                        >
                                            CO2 Laser Cutting and Engraving Machines
                                        </Link>
                                        <div className={`${styles.dropdown_content2} ${styles.dropdown_content22}`}>
                                            <Link href="#">Non Metal Machines</Link>
                                            <Link href="#">Metal and Non metal Machines</Link>
                                            <Link href="#">CCD Laser Machines</Link>
                                        </div>
                                    </div>

                                    <div className={`${styles.dropdown2} ${styles.dropdown3}`}>
                                        <Link
                                            href="/products/1"
                                            className={`${styles.dropbtn2} ${styles.dropbtn3} ${handleActiveLink("/products/1") ? styles.active : ''} flex items-center`}
                                        >
                                            CNC Router Machines
                                        </Link>
                                        <div className={`${styles.dropdown_content2} ${styles.dropdown_content3}`}>
                                            <Link href="#">CNC Working Wood Router</Link>
                                            <Link href="#">4 Axis CNC</Link>
                                            <Link href="#">5 Axis CNC</Link>
                                            <Link href="#">Foam/EPS CNC</Link>
                                            <Link href="#">Lathe CNC</Link>
                                            <Link href="#">Multi-head CNC</Link>
                                        </div>
                                    </div>

                                    <div className={`${styles.dropdown2} ${styles.dropdown4}`}>
                                        <Link
                                            href="/products/1"
                                            className={`${styles.dropbtn2} ${styles.dropbtn4} ${handleActiveLink("/products/1") ? styles.active : ''} flex items-center`}
                                        >
                                            CNC Plasma Cutting Machines
                                        </Link>
                                        <div className={`${styles.dropdown_content2} ${styles.dropdown_content4}`}>
                                            <Link href="#">Sheet Metal</Link>
                                            <Link href="#">Sheet Metal and Rotary</Link>
                                            <Link href="#">Gantry</Link>
                                            <Link href="#">Rotary</Link>
                                            <Link href="#">Portable</Link>
                                        </div>
                                    </div>

                                    <div className={`${styles.dropdown2} ${styles.dropdown6}`}>
                                        <Link
                                            href="/products/1"
                                            className={`${styles.dropbtn2} ${styles.dropbtn6} ${handleActiveLink("/products/1") ? styles.active : ''} flex items-center`}
                                        >
                                            Bending Machines
                                        </Link>
                                        <div className={`${styles.dropdown_content2} ${styles.dropdown_content6}`}>
                                            <Link href="#">Letter Bending</Link>
                                            <Link href="#">Press Brake Bending</Link>
                                        </div>
                                    </div>

                                    <div className={`${styles.dropdown2} ${styles.dropdown6}`}>
                                        <Link
                                            href="/products/1"
                                            className={`${styles.dropbtn2} ${styles.dropbtn6} ${handleActiveLink("/products/1") ? styles.active : ''} flex items-center`}
                                        >
                                            Welding Machines
                                        </Link>
                                        <div className={`${styles.dropdown_content2} ${styles.dropdown_content6}`}>
                                            <Link href="#">Fiber Laser Welding</Link>
                                            <Link href="#">YAG Laser Welding</Link>
                                        </div>
                                    </div>

                                    <div className={`${styles.dropdown2} ${styles.dropdown7}`}>
                                        <Link
                                            href="/products/1"
                                            className={`${styles.dropbtn2} ${styles.dropbtn7} ${handleActiveLink("/products/1") ? styles.active : ''} flex items-center`}
                                        >
                                            Laser Marking Machines
                                        </Link>
                                        <div className={`${styles.dropdown_content2} ${styles.dropdown_content7}`}>
                                            <Link href="#">Fiber Laser Marking</Link>
                                            <Link href="#">CO2 Laser Marking</Link>
                                            <Link href="#">UV Laser Marking</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={`${styles.dropdown} text-start`}>
                                <Link href="/resources" className={`${styles.link} ${handleActiveLink("/resources") ? styles.active : ''} flex items-center`}>
                                    {i18n.language === "ar" ? "المصادر" : "Resources"}
                                </Link>
                                <div className={styles.dropdown_content}>
                                    <Link href="/programming_instruction">Programming instruction</Link>
                                    <Link href="/catalog">Catalog</Link>
                                </div>
                            </div>
                            <Link href="/contact" className={`${styles.link} ${handleActiveLink("/contact") ? styles.active : ''} flex items-center`}>
                                {i18n.language === "ar" ? "تواصل معنا" : "Contact"}
                            </Link>
                            <Button
                                onClick={toggleLanguage}
                                style={{ color: "#304644", backgroundColor: "transparent", fontWeight: "600", marginRight: "10px" }}
                            >
                                {language == "ar" ? "EN" : "AR"}
                            </Button>
                            <div className='flex items-center'>
                                <div className={styles.bg_icon}>
                                    <PhoneFilled />
                                </div>
                                <div className='ml-3'>
                                    <p className='text-[#1c1c1c] text-left'>Call Us</p>
                                    <p className='text-[#54545f]'>+0123 456 7894</p>
                                </div>
                            </div>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default Navbar;