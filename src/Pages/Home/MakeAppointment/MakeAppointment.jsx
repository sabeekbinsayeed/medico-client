import React from 'react';
import doctor from '../../../assets/assets/images/doctor.png'
import background from '../../../assets/assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section className='mt-20'

            style={{
                background: `url(${background})`
            }}
        >
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-32 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                        <h1 className=" text-white text-4xl font-bold">Make an appointment Today</h1>
                        <p className="text-white py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className='bg-primary'>Appointment</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;