import React from 'react';
import '../Css/sidebarmobile.css'
import { CgClose } from 'react-icons/cg';
import SidebarLink from './SidebarLink';
// import Link from 'antd/es/typography/Link';
import Search from 'antd/es/input/Search';
import { Link, NavLink } from 'react-router-dom'


const SidebarMobile = ({ isShow, onToggleSidebar }) => {
    return (
        <div
            onClick={onToggleSidebar}
            className={`sidebar-mobile d-block d-md-none ${isShow && 'sidebar-mobile-active'}`}>
            <div className="sidebar-content" style={{ overflow: 'scroll' }} onClick={(e) => e.stopPropagation()}>
                <div className="sidebar-top">

                    <Link to="/" className="sidebar-logo">
                        <img src="images/icon-logo-mobile.png" alt="" />
                    </Link>

                    <button
                        onClick={onToggleSidebar}
                        className="btn justify-content-center align-items-center"
                        style={{ width: '40px', height: '40px', padding: 0 }}
                    >
                        <CgClose style={{ fontSize: 26 }} />
                    </button>
                </div>


                <div className="mt-3" style={{ marginLeft: '-12px' }}>
                    <div className="cart mt-3" counter={0}>
                        <img src="/images/icon-shopping-cart.jpg" alt="" />
                    </div>
                </div>


                <ul className="sidebar-nav mt-3">
                    <Link to="/home" className='link-items-mobile'>
                        <SidebarLink>Trang chủ</SidebarLink>
                    </Link>


                    <SidebarLink
                        subChild={[
                            <SidebarLink>QUÁ TRÌNH PHÁT TRIỂN</SidebarLink>,
                            <SidebarLink>CHỨNG CHỈ</SidebarLink>,
                        ]}
                    >
                        Về chúng tôi
                    </SidebarLink>


                    <SidebarLink>KHÓA HỌC STEM</SidebarLink>



                    <Link to="/course" className='link-items-mobile'>
                        <SidebarLink
                            subChild={[
                                <SidebarLink>BACK-END</SidebarLink>,
                                <SidebarLink>FRONT-END</SidebarLink>,
                                <SidebarLink>DATABASE</SidebarLink>,
                                <SidebarLink>CẤP TỐC</SidebarLink>,
                                <SidebarLink>OTHER</SidebarLink>,
                                <SidebarLink>STEM</SidebarLink>,
                            ]}
                        >
                            KHOÁ HỌC
                        </SidebarLink>
                    </Link>



                    <SidebarLink>MENTOR</SidebarLink>


                    <SidebarLink>BLOG</SidebarLink>
                </ul>


                <div>
                    <Search placeholder="Tìm kiếm khoá học" allowClear />
                </div>

            </div>
        </div>
    );
};

export default SidebarMobile;
