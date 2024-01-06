import React, { useState } from 'react';
import '../Css/sidebarlink.css'
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrFormSubtract } from 'react-icons/gr';

const SidebarLink = ({ children, subChild = [] }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li className="sidebar-link">
            <div className="d-flex justify-content-between align-items-center">

                <a>{children}</a>

                {subChild.length > 0 && (
                    <div style={{ cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <GrFormSubtract /> : <AiOutlinePlus />}
                    </div>
                )}


            </div>

            {subChild.length > 0 && isOpen && (
                <ul className="ml-4" style={{ margin: '12px 0px -12px 0px' }}>
                    {subChild.map((item, index) => (
                        <React.Fragment key={index}>{item}</React.Fragment>
                    ))}
                </ul>
            )}

        </li>
    );
};

export default SidebarLink;
