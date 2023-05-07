import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div>
            <div className={`card text-white md:card-side ${bgClass} shadow-xl p-6`}>
                <figure><img src={icon} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>

                </div>
            </div>
        </div>
    );
};

export default InfoCard;