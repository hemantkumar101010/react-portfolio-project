import React from 'react';
import {Link} from "react-scroll";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
    RedditIcon


} from "react-share";

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="container">
                <div className="row">
                    <div className=" col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Srinagar Garhwal Uttarakhand India</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:7351595713">+91 7351595713</a>

                        </div>
                        {/* <div className="d-flex">
                            <p>Srinagar Garhwal Uttarakhand India</p>
                        </div> */}
                    </div>



                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" className="footer-nav" offset={-110} >Home</Link>
                                <br />
                                <Link smooth={true} to="about" className="footer-nav" offset={-110} >About me</Link>
                                <br />
                                <Link smooth={true} to="services" className="footer-nav" offset={-110} >Services</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="experience" className="footer-nav" offset={-110} >Experience</Link>
                                <br />
                                <Link smooth={true} to="portfolio" className="footer-nav" offset={-110} >Portfolio</Link>
                                <br />
                                <Link smooth={true} to="contacts" className="footer-nav" offset={-110} >Contacts</Link>
                            </div>
                        </div>
                    </div>
                    
                        <div className="col-lg-5 col-md-5 col-sm-6 align-item-center">
                            <div className="d-flex justify-content-center">
                                <FacebookShareButton url={"https://www.instagram.com/3coder/"}
                                    quote={"Coding Memes Community"}
                                    hashtag="#codingmemes"
                                >
                                    <FacebookIcon className="mx-3 " size={32} />
                                </FacebookShareButton>

                                <TwitterShareButton url={"https://www.instagram.com/3coder/"}
                                    quote={"Coding Memes Community"}
                                    hashtag="#codingmemes"
                                >
                                    <TwitterIcon className="mx-3 " size={32} />
                                </TwitterShareButton>

                                <LinkedinShareButton url={"https://www.instagram.com/3coder/"}
                                    quote={"Coding Memes Community"}
                                    hashtag="#codingmemes"
                                >
                                    <LinkedinIcon className="mx-3 " size={32} />
                                </LinkedinShareButton>

                                <RedditShareButton url={"https://www.instagram.com/3coder/"}
                                    quote={"Coding Memes Community"}
                                    hashtag="#codingmemes"
                                >
                                    <RedditIcon className="mx-3 " size={32} />
                                </RedditShareButton>
                            </div>

                            <p className="pt-3 text-center">
                                Copyright&copy;
                                {new Date().getFullYear()}&nbsp;Teen Coder | All Rights Rederved
                            </p>
                        </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Footer;

