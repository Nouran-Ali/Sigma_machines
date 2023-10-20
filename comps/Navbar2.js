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
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { getCookie, setCookie } from 'cookies-next';
import { Select } from 'antd';
import { PhoneFilled } from '@ant-design/icons';

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
        ],
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
    ],
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
    title_ar: 'تواصل معنا',
    href: '/contact',
  },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [productsMenuAnchorEl, setProductsMenuAnchorEl] = React.useState(null);
  const [sublinksAnchorEl, setSublinksAnchorEl] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenProductsMenu = (event, sublinks) => {
    setProductsMenuAnchorEl(sublinks ? event.currentTarget : null);
  };

  const handleCloseProductsMenu = () => {
    setProductsMenuAnchorEl(null);
  };

  const handleOpenSublinks = (event, sublinks) => {
    setSublinksAnchorEl(sublinks ? event.currentTarget : null);
  };

  const handleCloseSublinks = () => {
    setSublinksAnchorEl(null);
  };

  const [active, setActive] = useState();
  const [scrolling, setScrolling] = useState(false);
  const router = useRouter();

  const { pathname } = router;

  const [t, i18n] = useTranslation();
  const { language, changeLanguage } = i18n;

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
    if (language == 'en') {
      changeLanguage('ar');
      setCookie('language', 'ar');
    } else {
      changeLanguage('en');
      setCookie('language', 'en');
    }
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: scrolling ? '#ffffff' : '#e9edf4',
          transition: 'background-color 0.3s ease-in-out',
          boxShadow: scrolling ? '0px 0px 5px rgba(0, 0, 0, 0.2)' : 'none',
          zIndex: 1,
        }}
        className={`navbar pr-3 ${scrolling ? 'pt-3 pb-3' : 'pt-3 pb-3'}`}
        dir={language == 'ar' ? 'rtl' : 'ltr'}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={
                language == 'ar'
                  ? {
                    mr: 15,
                    ml: 9,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }
                  : {
                    mr: 5,
                    ml: 9,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    zIndex: '10',
                  }
              }
            >
              <img src="../next.svg" width="75px" />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                alignItems: 'center',
                textAlign: 'center',
              }}
              className="ml-5"
            >
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
                {pages.map(({ title, title_ar, href, sublinks }, index) => (
                  <div key={index}>
                    {sublinks?.length > 0 ? (
                      <>
                        <Button
                          aria-controls={`menu-products-${index}`}
                          aria-haspopup="true"
                          onClick={(event) =>
                            handleOpenProductsMenu(event, sublinks)
                          }
                        >
                          {i18n.language === 'ar' ? title_ar : title}
                        </Button>
                        <Menu
                          id={`menu-products-${index}`}
                          anchorEl={productsMenuAnchorEl}
                          open={Boolean(productsMenuAnchorEl)}
                          onClose={handleCloseProductsMenu}
                        >
                          {sublinks.map((sublink, subIndex) => (
                            <MenuItem
                              key={subIndex}
                              onClick={handleCloseProductsMenu}
                            >
                              <Link href={sublink.href} className={styles.link}>
                                {i18n.language === 'ar'
                                  ? sublink.title_ar
                                  : sublink.title}
                              </Link>
                            </MenuItem>
                          ))}
                        </Menu>
                      </>
                    ) : (
                      <Link
                        href={href}
                        className={`${styles.link} ${handleActiveLink(href) ? styles.active : ''
                          } flex items-center`}
                      >
                        {i18n.language === 'ar' ? title_ar : title}
                      </Link>
                    )}
                  </div>
                ))}
                <Button
                  onClick={toggleLanguage}
                  style={{
                    color: '#304644',
                    backgroundColor: 'transparent',
                    fontWeight: '600',
                    marginLeft: '44px',
                  }}
                  className="ml-9"
                >
                  {language == 'ar' ? 'EN' : 'AR'}
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
              <img src="../next.svg" width="75px" />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              {pages.map(({ title, title_ar, href, sublinks }, index) => (
                <div key={index}>
                  {sublinks ? (
                    <>
                      <Button
                        aria-controls={`menu-products-${index}`}
                        aria-haspopup="true"
                        onClick={(event) =>
                          handleOpenProductsMenu(event, sublinks)
                        }
                        className={`${styles.link} ${styles.link_menu} ${handleActiveLink(href) ? styles.active : ''
                          } flex items-center`}
                      >
                        {i18n.language === 'ar' ? title_ar : title}
                      </Button>
                      <Menu
                        id={`menu-products-${index}`} // Unique menu ID for each submenu
                        anchorEl={productsMenuAnchorEl}
                        open={Boolean(productsMenuAnchorEl)}
                        onClose={handleCloseProductsMenu}
                      >
                        {sublinks.map((sublink, subIndex) => (
                          <div key={subIndex}>
                            {sublink.sublinkstwo && sublink.sublinkstwo.length > 0 ? (
                              // This is a nested submenu
                              <>
                                <Button
                                  aria-controls={`menu-products-${index}-${subIndex}`} // Unique submenu ID
                                  aria-haspopup="true"
                                  onClick={(event) => handleOpenSublinks(event, sublink.sublinkstwo)}
                                  className={`${styles.link} ${styles.link_menu} ${handleActiveLink(sublink.href) ? styles.active : ''
                                    } flex items-center`}
                                >
                                  {i18n.language === 'ar' ? sublink.title_ar : sublink.title}
                                </Button>
                                <Menu
                                  id={`menu-products-${index}-${subIndex}`} // Unique submenu ID
                                  anchorEl={sublinksAnchorEl}
                                  open={Boolean(sublinksAnchorEl)}
                                  onClose={handleCloseSublinks}
                                >
                                  {sublink.sublinkstwo.map((nested_sublink, nested_subIndex) => (
                                    <MenuItem key={nested_subIndex} onClick={handleCloseSublinks}>
                                      <Link href={nested_sublink.href} className={styles.link}>
                                        {i18n.language === 'ar'
                                          ? nested_sublink.title_ar
                                          : nested_sublink.title}
                                      </Link>
                                    </MenuItem>
                                  ))}
                                </Menu>
                              </>
                            ) : (
                              <Link href={sublink.href} className={styles.link}>
                                {i18n.language === 'ar' ? sublink.title_ar : sublink.title}
                              </Link>
                            )}
                          </div>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <Link
                      href={href}
                      className={`${styles.link} ${handleActiveLink(href) ? styles.active : ''
                        } flex items-center`}
                    >
                      {i18n.language === 'ar' ? title_ar : title}
                    </Link>
                  )}
                </div>
              ))}
              <Button
                onClick={toggleLanguage}
                style={{
                  color: '#304644',
                  backgroundColor: 'transparent',
                  fontWeight: '600',
                  marginRight: '10px',
                }}
              >
                {language == 'ar' ? 'EN' : 'AR'}
              </Button>
              <div className="flex items-center">
                <div className={styles.bg_icon}>
                  <PhoneFilled />
                </div>
                <div className="ml-3">
                  <p className="text-[#1c1c1c] text-left">Call Us</p>
                  <p className="text-[#54545f]">+0123 456 7894</p>
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
