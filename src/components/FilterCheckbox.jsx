import React from 'react';
import { Checkbox } from 'antd';

const FilterCheckbox = ({ children, value, imageUrl }) => {
    return (
        <div className="d-flex align-items-center justify-content-between">
            <Checkbox value={value}>{children}</Checkbox>
            {imageUrl && <img style={{ width: '35px' }} src={imageUrl} alt="" />}
        </div>
    );
};

export default FilterCheckbox;
