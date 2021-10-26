import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//avatars
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
    return (
        <Carousel showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        >
            <>
                <img src={avatar1} alt="john dow1" />
                <div className="myCarousel">
                    <h3>John Dow 1</h3>
                    <p>Define the aria-label attribute for the root carousel element. The default is undefined, skipping the attribute from markup.</p>
                </div>


            </>

            <>
                <img src={avatar2} alt="john dow2" />
                <div className="myCarousel">
                    <h3>John Dow 2</h3>
                    <p>Define the aria-label attribute for the root carousel element. The default is undefined, skipping the attribute from markup.</p>

                </div>

            </>

            <>
                <img src={avatar3} alt="john dow1" />
                <div className="myCarousel">
                    <h3>John Dow 1</h3>
                    <p>Define the aria-label attribute for the root carousel element. The default is undefined, skipping the attribute from markup.</p>
                </div>


            </>

            <>
                <img src={avatar4} alt="john dow1" />
                <div className="myCarousel">
                    <h3>John Dow 1</h3>
                    <p>Define the aria-label attribute for the root carousel element. The default is undefined, skipping the attribute from markup.</p>

                </div>

            </>
        </Carousel>
    )
}

export default TestimonialsCarousel;
    