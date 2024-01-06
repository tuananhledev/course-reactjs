import React from 'react';
import { Button } from 'antd';
import { FaUserAlt } from 'react-icons/fa';
import { BsStarFill, BsStarHalf, BsStar, BsCalendar3 } from 'react-icons/bs';
import '../Css/coursecard.css'


const levelImages = {
    easy: 'images/icon-title-course.png',
    medium: 'images/icon-title-course-2.png',
    hard: 'images/icon-title-course-3.png',
    expert: 'images/icon-title-course-4.png',
};


const CourseCard = ({ courseData }) => {
    const getStars = (star) => {
        let rating = Math.round(star * 2) / 2;
        let output = [];
        {/*ex: 5stars */ }
        for (var i = rating; i >= 1; i--)
            output.push(<BsStarFill className="mr-1" />);
        {/*ex: 4.5stars */ }
        if (i === 0.5) output.push(<BsStarHalf className="mr-1" />);
        {/*ex: 0stars */ }
        for (let i = 5 - rating; i >= 1; i--)
            output.push(<BsStar className="mr-1" />);
        return output;
    };
    getStars(courseData.star);

    return (
        <div className="col-12 col-md-6 col-lg-4 px-2" style={{ marginBottom: '30px' }} >
            <div className="card coursecard">
                <img src={courseData.banner} className="imgcard" alt="..." />

                <div className="card-body p-3 position-relative d-flex flex-column">
                    <div className="imgmentor">
                        <img src={courseData.mentorAvatar} alt="" />
                    </div>

                    <div className="imglevel">
                        <img src={levelImages[courseData.level]} alt="" />
                    </div>

                    <h5 className="titlecard mt-3" style={{ flex: 1 }}>
                        {courseData.name}
                    </h5>

                    <div className="font-weight-bold" style={{ color: 'gray' }}>
                        Mentor{' '}
                        <span style={{ color: '#ff6400' }}>{courseData.mentor}</span>
                    </div>

                    <span className="d-flex font-weight-bold align-items-center countstudents">
                        <FaUserAlt className="mr-2" /> {courseData.students} Học viên
                    </span>

                    <p className="descriptioncard description-3 mb-2">
                        {courseData.description}
                    </p>

                    <div className="d-flex align-items-center mb-2" style={{ color: '#FF4500' }}>
                        {getStars(courseData.star).map((item, index) => (
                            <React.Fragment key={index}>{item}</React.Fragment>
                        ))}
                    </div>

                    <div className="d-flex align-items-center font-weight-bold mb-2">
                        <span className="mr-2" style={{ color: 'red' }}>
                            {new Intl.NumberFormat('en-US').format(courseData.price)}{' '}
                            VND
                        </span>
                        <div className='numberoflessons'>
                            <BsCalendar3 className="mr-1" />
                            {courseData.lessons} Buổi học
                        </div>
                    </div>

                    <hr className="my-2" />

                    <Button type="primary" block className="mt-1 text-uppercase font-weight-bold" style={{ background: '#FF4500' }}>
                        Xem chi tiết
                    </Button>

                    <br />
                </div>
            </div>
        </div >
    );
};

export default CourseCard;




