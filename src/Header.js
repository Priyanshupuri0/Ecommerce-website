import React from 'react';
import Button from 'react-bootstrap/Button'
import styles from './Header.css';
import header_image from './Utilities/header_image.png'
import { Link } from 'react-router-dom';
import FirstComponent from './FirstComponent';


const header = () => {
    return (
        <>
            <div className='container-fluid headerContent' id="header">
                <div className="row">
                    <div className="col-md-6 left-side">
                        <h1>Infographic Design</h1>
                        <h6>Work with world-class designer to create infographics that stand out.
                            We make it fast, easy, and affordable.
                        </h6>
                        <Link to="/Admin" className='d-inline-block' style={{width: "15%"}}>
                            <Button variant="primary" size="lg">Sign In</Button>
                        </Link>
                    </div>
                    <div className="col-md-6 d-flex justify-content-start">
                        <img src={header_image} alt = "header_image" className='img header-image' />
                    </div>
                </div>
            </div>
            <FirstComponent />
        </>
    );
}

export default header;