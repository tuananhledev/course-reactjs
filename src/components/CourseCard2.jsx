import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { BsStarFill, BsStarHalf, BsStar, BsCalendar3 } from 'react-icons/bs';
import { Button } from 'antd';
import '../Css/coursecard2.css'
const modeImage = {
    easy: 'images/icon-title-course.png',
    medium: 'images/icon-title-course-2.png',
    hard: 'images/icon-title-course-3.png',
    expert: 'images/icon-title-course-4.png',
    hot: 'https://bsmart.edu.vn/assets/images/captoc.webp',
};

const CourseCard2 = ({ courseData }) => {
    const getStars = (star) => {
        let rating = Math.round(star * 2) / 2;
        let output = [];

        for (var i = rating; i >= 1; i--)
            output.push(<BsStarFill className="mr-2" />);

        if (i === 0.5) output.push(<BsStarHalf className="mr-2" />);

        for (let i = 5 - rating; i >= 1; i--)
            output.push(<BsStar className="mr-2" />);

        return output;
    };

    getStars(courseData.star);

    return (
        <div className="card card-course" style={{ height: '100%' }}>
            <img
                src={courseData.banner}
                className="card-img-top"
                alt="..."
                style={{ height: '150px' }}
            />
            <div className="card-body p-3 position-relative d-flex flex-column">
                <div className="mentor-image">
                    <img src={courseData.mentorAvatar} alt="" />
                </div>
                <div className="mode-image">
                    <img src={modeImage[courseData.level]} alt="" />
                </div>

                <h5 className="card-title mt-3" style={{ flex: 1 }}>
                    {courseData.name}
                </h5>
                <div className="font-weight-bold" style={{ color: '#b4adb4' }}>
                    Mentor{' '}
                    <span style={{ color: '#fe6a54' }}>{courseData.mentor}</span>
                </div>
                <span className="font-weight-bold d-flex align-items-center">
                    <FaUserAlt className="mr-1" /> {courseData.students} Học viên
                </span>
                <p className="card-text text-truncate-3 mb-">
                    {courseData.description}
                </p>
                <div
                    className="d-flex align-items-center mb-2"
                    style={{ color: '#fe6a54' }}
                >
                    {getStars(courseData.star).map((item, index) => (
                        <React.Fragment key={index}>{item}</React.Fragment>
                    ))}
                </div>
                <div className="d-flex align-items-center font-weight-bold mb-2">
                    <span className="mr-2" style={{ color: 'red' }}>
                        {new Intl.NumberFormat('en-US').format(courseData.price)} VND
                    </span>
                    <div>
                        <BsCalendar3 className="mr-1" />
                        {courseData.lessons} Buổi
                    </div>
                </div>
                <hr className="my-2" />
                <Button
                    type="primary"
                    block
                    className="mt-1 text-uppercase font-weight-bold"
                    style={{ background: '#ff630e' }}
                >
                    Xem chi tiết
                </Button>
            </div>
        </div>
    );
};

export default CourseCard2;
