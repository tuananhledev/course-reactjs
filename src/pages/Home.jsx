import React, { useEffect, useState } from 'react';
import coursesApi from '../axios/coursesApi';
import ButtonComp from '../components/Button/ButtonComp';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaCogs, FaGripfire, FaUsers, FaQrcode, FaTrophy } from 'react-icons/fa';
import Carousel from '../components/Carousel/Carousel';
import CourseCard2 from '../components/CourseCard2';
import MentorCard from '../components/MentorCard';
import LogoCarousel from '../components/Carousel/LogoCarousel';
import '../Css/home.css'
import homeData from '../data/home'

const Home = () => {

    return (
        <div className="home">
            {/*Banner Home */}
            <section className="banner-home img-banner-home">
                <div className="container">
                    <div className="banner-content">
                        <h4>Khởi đầu sự nghiệp của bạn</h4>
                        <h2>Trở thành lập trình viên chuyên nghiệp tại BSMART</h2>
                        <p className="mb-3 mb-md-5">
                            Với đội ngũ Mentor có nhiều năm kinh nghiệm giảng dạy cùng
                            các khóa học chất lượng. BSMART sẽ giúp các bạn có định hướng
                            về nghề nghiệp và phát triển bản thân trên con đường trở thành
                            lập trình viên chuyên nghiệp
                        </p>
                        <div>
                            <button style={{ padding: '15px 20px' }} className='btn-home'>
                                Xem khoá học
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/*About Home */}
            <section className="about-section img-about-section">
                <div className="container">
                    <div className="about-content py-5">
                        <h2 className="section-header">Về chúng tôi</h2>
                        <div className="row">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <p className="text-justify title-about" style={{ fontWeight: 'bold' }}>
                                    BSMART được thành lập với mục tiêu trở thành nền tảng tin cậy
                                    về đào tạo lập trình viên, kết nối Mentor và Mentee. Với đội
                                    ngũ Mentor giàu kinh nghiệm và chuyên môn, BSMART cam kết mang
                                    đến các khóa học lập trình chất lượng nhất. Hệ thống khóa học
                                    đa dạng và linh hoạt, từ cơ bản đến nâng cao, giúp học viên có
                                    thể lựa chọn các khóa học phù hợp với nhu cầu và khả năng của mình.
                                    BSMART cập nhật và áp dụng những công nghệ mới, giúp học viên và Mentor
                                    được tiếp cận với những kiến thức và kỹ năng mới nhất trong lập trình.
                                    Bên cạnh đó, BSMART luôn đặt sự quan tâm, hỗ trợ học viên trong quá trình
                                    học tập và phát triển sự nghiệp sau khi tốt nghiệp.
                                </p>
                                <div className="d-flex justify-content-center">
                                    <button className="mx-1 btn-home" style={{ padding: '15px 20px' }}>
                                        Xem khoá học
                                    </button>
                                    <button className="mx-1 btn-home" style={{ padding: '15px 20px' }}>
                                        Hỗ trợ tư vấn
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-img">
                                    <img src='images/banner-2.jpg' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*AdvantagePoint Home */}
            <section className="advantagepoint">
                <div className="container py-3">
                    <h2 className="section-header">Điểm ưu việt tại BSmart</h2>
                    <div className="row">
                        <div className="advantage-card col-md-4">
                            <h4 className="advantage-title ">
                                <span className="mr-2 d-flex justify-content-center align-items-center">
                                    <AiOutlineCheckCircle className='iconadvantagepoint' />
                                </span>{' '}
                                Học theo lộ trình, có định hướng
                            </h4>
                            <p className="text-justify" style={{ fontWeight: 'bold' }}>
                                BSmart sẽ định hướng và đưa ra các lộ trình học lập trình
                                nhằm phát triển năng lực và niềm đam mê lập trình của bạn
                                để có việc ngay sau khi học.
                            </p>
                        </div>
                        <div className="advantage-card col-md-4">
                            <h4 className="advantage-title ">
                                <span className="mr-2 d-flex justify-content-center align-items-center">
                                    <FaCogs className='iconadvantagepoint' />
                                </span>{' '}
                                Nền tảng cốt lõi trong lập trình
                            </h4>
                            <p className="text-justify" style={{ fontWeight: 'bold' }}>
                                BSmart cung cấp những nền tảng, giá trị tư duy cốt lõi nhất
                                trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ
                                và môi trường làm việc.
                            </p>
                        </div>
                        <div className="advantage-card col-md-4">
                            <h4 className="advantage-title ">
                                <span className="mr-2 d-flex justify-content-center align-items-center">
                                    <FaGripfire className='iconadvantagepoint' />
                                </span>{' '}
                                Mài giũa bạn qua thực tế
                            </h4>
                            <p className="text-justify" style={{ fontWeight: 'bold' }}>
                                Đội ngũ Mentor là những người dày dặn kinh nghiệm qua các dự án thực
                                tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm "máu lửa" cho bạn.
                            </p>
                        </div>
                        <div className="advantage-card col-md-4">
                            <h4 className="advantage-title ">
                                <span className="mr-2 d-flex justify-content-center align-items-center">
                                    <FaUsers className='iconadvantagepoint' />
                                </span>{' '}
                                Mentor tận tâm
                            </h4>
                            <p className="text-justify" style={{ fontWeight: 'bold' }}>
                                Bạn sẽ được giao dự án và Teamwork ngay từ ngày đầu tiên.
                                Đóng vai trò một thành viên trong quy trình Scrum, Agile.
                                Được Mentor hỗ trợ tận tâm, nhiệt tình.
                            </p>
                        </div>
                        <div className="advantage-card col-md-4">
                            <h4 className="advantage-title ">
                                <span className="mr-2 d-flex justify-content-center align-items-center">
                                    <FaQrcode className='iconadvantagepoint' />
                                </span>{' '}
                                Công nghệ mới, thực tế
                            </h4>
                            <p className="text-justify" style={{ fontWeight: 'bold' }}>
                                Bạn được học và trải nghiệm các công nghệ lập trình mới nhất,
                                chuyên sâu, bám sát nhu cầu tuyển dụng thực tế từ doanh nghiệp.
                            </p>
                        </div>
                        <div className="advantage-card col-md-4">
                            <h4 className="advantage-title ">
                                <span className="mr-2 d-flex justify-content-center align-items-center">
                                    <FaTrophy className='iconadvantagepoint' />
                                </span>{' '}
                                Trao tay chìa khóa thành công
                            </h4>
                            <p className="text-justify" style={{ fontWeight: 'bold' }}>
                                Hướng dẫn viết CV, phỏng vấn. Kết nối, gặp gỡ, phỏng vấn cùng doanh nghiệp ngay sau khi tốt nghiệp.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* --- Learning --- */}
            <section className="learning">
                <div className="row mx-0">
                    <div
                        className="learning-image learning-left col-md-6"
                        style={{
                            backgroundImage: `url(${homeData?.learning?.left?.image})`,
                        }}
                    >
                        <div className="learning-content">
                            <h4>{homeData?.learning?.left?.title}</h4>
                            <p>{homeData?.learning?.left?.subTitle}</p>
                        </div>
                    </div>
                    <div
                        className="learning-image learning-right col-md-6"
                        style={{
                            backgroundImage: `url(${homeData?.learning?.right?.image})`,
                        }}
                    >
                        <div className="learning-content">
                            <h4>{homeData?.learning?.right?.title}</h4>
                            <p>{homeData?.learning?.right?.subTitle}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Course --- */}
            {homeData?.courses?.map((course, index) => (
                <section className="courses-section" key={index}>
                    <div className="container py-4">
                        <h2 className="section-header">{course?.title}</h2>
                        <Carousel>
                            {course?.items?.map((item, idx) => (
                                <div className="card-wrapper-item" key={idx}>
                                    <CourseCard2 courseData={item} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </section>
            ))}

            {/* --- Mentor --- */}
            <section className="courses-section pb-4">
                <div className="container py-4">
                    <h2 className="section-header">{homeData?.mentors?.title}</h2>
                    <Carousel>
                        {homeData?.mentors?.items.map((item, index) => (
                            <MentorCard key={index} mentorData={item} />
                        ))}
                    </Carousel>
                </div>
            </section>


            {/* --- Mentor --- */}
            <section
                className="advantages-2"
                style={{ backgroundImage: `url(${homeData?.advantages2?.image})` }}
            >
                <div className="container">
                    <div className="advantages-2-content">
                        <h4 className="text-center mb-3">
                            {homeData?.advantages2?.title}
                        </h4>
                        <h2 className="text-center mb-4">
                            {homeData?.advantages2?.caption}
                        </h2>
                        <div className="d-flex justify-content-center align-items-center">
                            <ButtonComp className="mx-2 px-3 py-2">
                                Danh sách khoá học
                            </ButtonComp>
                            <ButtonComp className="mx-2 px-3 py-2">
                                Tư vấn lộ trình
                            </ButtonComp>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- Mentor --- */}
            <section
                className="courses-section pb-4"
                style={{ backgroundColor: '#f5f7fc' }}
            >
                <div className="container py-4">
                    <h2 className="section-header">{homeData?.logos?.title}</h2>
                    <LogoCarousel>
                        {homeData?.logos?.items.map((item, index) => (
                            <div className="logo-wrapper" key={index}>
                                <img src={item} alt="" />
                            </div>
                        ))}
                    </LogoCarousel>
                </div>
            </section>
        </div>
    );
};

export default Home;
