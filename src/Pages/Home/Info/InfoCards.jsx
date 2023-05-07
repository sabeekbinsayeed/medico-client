import React from 'react';
import phone from '../../../assets/assets/icons/phone.svg'
import marker from '../../../assets/assets/icons/marker.svg'
import clock from '../../../assets/assets/icons/clock.svg'
import InfoCard from './InfoCard';


const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: marker,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]

    return (
        <div className='grid mt-6 gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {
                cardData.map(card => <InfoCard card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;