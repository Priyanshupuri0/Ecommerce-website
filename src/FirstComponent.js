import React from 'react';
import styles from './FirstComponent.css';
const FirstComponent = () => {
    return (
        <>
            <div className="container-fluid content">
                <h2 className='text text-center'>High-quality infographics.<br />On budget and on time.</h2>
            </div>
            <div className='container-fluid content1' id = "content1">
                <div className='first'>
                    <span className="pencil material-symbols-outlined">design_services</span>
                    <br />
                    <h6>TOP TALENT</h6>
                    <p> We’ll match you with carefully vetted designers, journalists, and creative directors to help you create infographics that make an impression.</p>
                </div>
                <div className="second">
                    <span className="notification material-symbols-outlined">
                        notification_multiple
                    </span><br />
                    <h6>QUICK TURNAROUND</h6>
                    <p>Our powerful collaboration platform keeps you in direct contact with your creative team, streamlining the production of your infographics. A dedicated rep is there to help. Normal delivery time is 16 days.</p>
                </div>
                <div className="third">
                    <span className="calculator material-symbols-outlined">
                        calculate
                    </span>
                    <h6>COST EFFECTIVE</h6>
                    <p>From brief to final approval, we offer the most cost-effective way to make high-quality infographics.</p>
                </div>
            </div>
        </>
    )
};

export default FirstComponent;