import React from 'react'
import '../Css/header.css'
import { Layout } from 'antd';
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';


const { Header } = Layout;


const itemsHeader = [
    { name: 'Trang chủ', link: '/' },
    { name: 'Về chúng tôi', link: '/about' },
    { name: 'Khoá học STEM', link: '/coursestem' },
    { name: 'Khoá học', link: '/course' },
    { name: 'Mentor', link: '/mentor' },
    { name: 'Blog', link: '/blog' },
];


const HeaderWeb = ({ onToggleSidebar }) => {
    return (
        <Header className='headerlayout position-fixed fixed-top'>
            <div className='container d-flex justify-content-between align-items-center'>
                <Link to='/home' className='logo'>
                    <img src='logo512.png' alt='' />
                </Link>



                <div className='d-none d-md-block'>
                    {itemsHeader.map(({ name, link }) => (
                        <NavLink
                            to={link}
                            key={link}
                            className={({ isActive }) =>
                                isActive ? 'mx-2 nav-item active' : 'mx-2 nav-item'
                            }
                        >
                            {name}
                        </NavLink>
                    ))}
                </div>


                <div className='cart d-none d-md-block' counter={0}>
                    <img src="/images/icon-shopping-cart.jpg" alt="" />
                </div>


                <div className="d-block d-md-none">
                    <button className="btn" onClick={onToggleSidebar}>
                        <GiHamburgerMenu />
                    </button>
                </div>


            </div>
        </Header>
    )
}

export default HeaderWeb