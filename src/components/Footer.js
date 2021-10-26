import React from 'react';
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
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className=" col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Srinagar Garhwal Uttarakhand India</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:7351595713">+91 7351595713</a>

                        </div>
                        <div className="d-flex">
                            <p>Srinagar Garhwal Uttarakhand India</p>
                        </div>
                    </div>



                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">About me</a>
                                <br />
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br />
                                <a className="footer-nav">Portfolio</a>
                                <br />
                                <a className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-item-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton url={"https://www.instagram.com/3coder/"}
                            quote={"Coding Memes Community"}
                            hashtag="#codingmemes"
                            >
                                <FacebookIcon className="mx-3 " size={36}/>
                            </FacebookShareButton>

                            <TwitterShareButton url={"https://www.instagram.com/3coder/"}
                            quote={"Coding Memes Community"}
                            hashtag="#codingmemes"
                            >
                                <TwitterIcon className="mx-3 " size={36}/>
                            </TwitterShareButton>

                            <LinkedinShareButton url={"https://www.instagram.com/3coder/"}
                            quote={"Coding Memes Community"}
                            hashtag="#codingmemes"
                            >
                                <LinkedinIcon className="mx-3 " size={36}/>
                            </LinkedinShareButton>

                            <RedditShareButton url={"https://www.instagram.com/3coder/"}
                            quote={"Coding Memes Community"}
                            hashtag="#codingmemes"
                            >
                                <RedditIcon className="mx-3 " size={36}/>
                            </RedditShareButton>
                        </div>

                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;New Horizon | All Rights Rederved
                        </p> 
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;
