import React from 'react'
import '../Css/footer.css'
import { Layout } from 'antd'
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import { TfiYoutube } from 'react-icons/tfi';
import { Link, NavLink } from 'react-router-dom';


const { Footer } = Layout;

const itemsMenu = [
    { name: 'Trang Chủ', link: '/home' },
    { name: 'Về Chúng Tôi', link: '/about' },
    { name: 'Khóa Học STEM', link: '/coursestem' },
    { name: 'Khóa Học', link: '/course' },
    { name: 'Mentor', link: '/mentor' },
    { name: 'Blog', link: '/blog' },
];
const itemsRules = [
    { name: 'Chính sách bảo mật', link: '/privacypolicy' },
    { name: 'Điều khoản dịch vụ', link: '/termsofservice' },
];
const itemsCollaborators = [
    { name: 'Đăng ký Cộng tác viên', link: '/registermember' },
    { name: 'Đăng ký Mentor', link: '/registermentor' },
];


const FooterWeb = () => {
    return (
        <Footer className='footer'>
            <div className='container'>
                <div className='row'>


                    <div className='col-md-4 mb-3'>
                        <p className="logo">
                            <img src="logo192.png" alt="" />
                        </p>
                        <p>
                            Chúng tôi cung cấp các khoá học chất lượng cao để cải thiện các kỹ năng lập trình của bạn.
                            Tất cả các mentor của chúng tôi đều có nhiều kinh nghiệm trong thực tế và giảng dạy.
                        </p>
                        <div>
                            <span className="f-title-w">
                                Theo dõi chúng tôi tại:
                            </span>
                            <div>
                                <BiLogoFacebook className="f-icon" />
                                <BiLogoLinkedin className="f-icon" />
                                <TfiYoutube className="f-icon" />
                            </div>
                        </div>
                    </div>


                    <div className='col-md-2 mb-3'>
                        <div>
                            <span className="f-title">Menu</span>
                        </div>
                        <div className="f-list">
                            {itemsMenu.map(({ name, link }) => (
                                <NavLink to={link}>
                                    {name}
                                </NavLink>
                            ))}
                        </div>
                    </div>


                    <div className='col-md-2 mb-3'>
                        <div>
                            <span className="f-title">Cộng tác viên</span>
                        </div>
                        <div className="f-list">
                            {itemsCollaborators.map(({ name, link }) => (
                                <NavLink to={link}>
                                    {name}
                                </NavLink>
                            ))}
                        </div>
                        <div>
                            <span className="f-title">Điều khoản</span>
                        </div>
                        <div className="f-list">
                            {itemsRules.map(({ name, link }) => (
                                <NavLink to={link}>
                                    {name}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div className='col-md-4 mb-3'>
                        <div>
                            <span className="f-title">Liên hệ với chúng tôi</span>
                        </div>
                        <div className="f-list">
                            <Link to="/" className="contact-title">
                                <img
                                    src="images/icon-location.png"
                                    alt=""
                                    className="contact-icon"
                                />
                                Quận 9, TP. Hồ Chí Minh
                            </Link>
                            <Link to="/" className="contact-title">
                                <img
                                    src="images/icon-gmail.png"
                                    alt=""
                                    className="contact-icon"
                                />
                                frontend.dev@gmail.com
                            </Link>
                            <Link to="/" className="contact-title">
                                <img
                                    src="images/icon-phone.png"
                                    alt=""
                                    className="contact-icon"
                                />
                                123456789
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <hr style={{ borderColor: 'rgba(255, 255, 255, 0.8)' }} />
            <div className="d-flex justify-content-center">
                <span>© Bản quyền 2023 - Empowered by Dev - version 1.1.13</span>
            </div>

        </Footer>
    )
}

export default FooterWeb