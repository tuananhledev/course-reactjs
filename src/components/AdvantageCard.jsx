import React from 'react';

const AdvantageCard = ({ title, content, icon }) => {
    return (
        <div className="advantage-card col-md-4">
            <h4 className="advantage-title ">
                <span className="mr-2 d-flex justify-content-center align-items-center">
                    {icon}
                </span>{' '}
                {title}
            </h4>
            <p className="text-justify" style={{ fontWeight: 'bold' }}>
                {content}
            </p>
        </div>
    );
};

export default AdvantageCard;
