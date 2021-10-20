import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"> <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                            <h3>Web Design</h3>
                            <p>I approach each projects individually and always focus on the result.</p>

                        </div>
                    </div>
                    {/* - */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"> <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                            <h3>Web Deevelopment</h3>
                            <p>I approach each projects individually and always focus on the result.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"> <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" /></div>
                            <h3>Insta Marketing</h3>
                            <p>I approach each projects individually and always focus on the result.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"> <FontAwesomeIcon className="icon" icon={faFacebook} size="2x" /></div>
                            <h3>FB Marketing</h3>
                            <p>I approach each projects individually and always focus on the result.</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Services
