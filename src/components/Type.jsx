import React from 'react';

const Type = ({ icon: Icon, text }) => {
    return (
        <div className="flex items-center justify-between bg-primary h-10 w-40 rounded-sm px-2">
            <p className="text-lg font-sans font-semibold text-white">{text}</p>
            {Icon && <Icon className="text-xl text-white order-last" />}
        </div>
    );
};

export default Type;

