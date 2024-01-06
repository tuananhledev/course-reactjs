import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loading = () => {
    return (
        <div className="loading-compo">
            <AiOutlineLoading3Quarters size={60} className="rotate" />
        </div>
    );
};

export default Loading;
