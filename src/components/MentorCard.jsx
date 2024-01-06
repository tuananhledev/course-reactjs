import React from 'react';
import { Link } from 'react-router-dom';

const MentorCard = ({ mentorData }) => {
    return (
        <div
            className="card card-course"
            style={{ height: '100%', borderRadius: '10px', overflow: 'hidden' }}
        >
            <img
                src={mentorData?.mentorAvatar}
                className="card-img-top"
                alt="..."
                style={{
                    height: '200px',
                    borderRadius: '10px',
                    objectFit: 'fill',
                }}
            />
            <div className="card-body p-0 position-relative d-flex flex-column text-center">
                <h4
                    className="card-title mt-3 mb-0"
                    style={{
                        flex: 1,
                        color: '#ff630e',
                        fontWeight: 'bold',
                        fontSize: '20px',
                    }}
                >
                    {mentorData?.mentor}
                </h4>

                <p
                    className="card-text text-truncate-5 px-3 my-3"
                    style={{
                        fontSize: '16px',
                        textAlign: 'justify',
                    }}
                >
                    {mentorData?.description}
                </p>
            </div>
        </div>
    );
};

export default MentorCard;
