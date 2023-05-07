import React from 'react';
import image from '../../../assets/assets/images/chair.png'
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Let's start</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;