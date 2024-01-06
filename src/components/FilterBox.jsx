import React, { useState } from 'react';
import '../Css/filterbox.css'
import { Checkbox } from 'antd';
import { AiOutlineArrowDown } from 'react-icons/ai';
const FilterBox = ({
    title = '',
    children,
    isCheckboxGroup = false,
    ...args
}) => {
    const [isShow, setIsShow] = useState(true);

    let Comp = 'div';
    if (isCheckboxGroup === true) {
        Comp = Checkbox.Group;
    }



    return (
        <Comp {...args} className="filter-box mb-3" style={{ display: 'block' }}>
            <div onClick={() => setIsShow(!isShow)} className="d-flex align-items-center mb-1 user-select-none"
                style={{ cursor: 'pointer' }}>

                <span className="d-block d-md-none mr-2" style={{ fontWeight: 'bold' }}>
                    <AiOutlineArrowDown />
                </span>

                <h6 className="text-uppercase title mb-0">{title}</h6>

            </div>

            <div className={`${isShow ? 'd-block' : 'd-none'} d-md-block`}>
                {children}
            </div>
        </Comp>
    );
};

export default FilterBox;
