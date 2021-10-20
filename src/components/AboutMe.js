import React from "react";
import author from "../hemant.jpg";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author img" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                        Hemant Kumar, being a big knowledge seeker and a graphic designer has got a stunning About me page that immediately shows if he is ready for the new projects including web & print design, as well as branding.

                        The webpage has a pleasant color scheme: arrows and characters of orange color look cool on the lovely light gray ground, and the owl image shows his hunger for illustrations.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
