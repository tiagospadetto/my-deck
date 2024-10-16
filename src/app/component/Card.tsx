import React from 'react';

interface CardProps {
    name: string;
    description: string;
    usage: string;
    image: string;
}

const Card: React.FC<CardProps> = ({ name, description, usage, image }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src={image} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="text-sm text-gray-600">{usage}</span>
            </div>
        </div>
    );
};

export default Card;
