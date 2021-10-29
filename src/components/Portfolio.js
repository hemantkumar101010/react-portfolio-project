import React from 'react';
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png"
//font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//react popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
    //netflix
    const openPopupboxNetflix = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={netflix} alt="Netflex clone project" />
                <p>This package is available in NPM repository as reactjs-popup. It will work correctly with all popular bundlers.</p>
                <b>Github: </b><a className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=_D0mObrLvGg")}> https://www.youtube.com/watch?v=_D0mObrLvGg </a>

            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigNetflix = {
        titleBar: {
            enable: true,
            text: "Netflix project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    //cityguide
    const openPopupboxCityGuide = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={cityGuide} alt="city guide project" />
                <p>This package is available in NPM repository as reactjs-popup. It will work correctly with all popular bundlers.</p>
                <b>Github: </b><a className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=_D0mObrLvGg")}> https://www.youtube.com/watch?v=_D0mObrLvGg </a>

            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigCityGuide = {
        titleBar: {
            enable: true,
            text: "City Guide project"

        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //portfolio
    const openPopupboxPortfolio = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={portfolio} alt="portfolio project" />
                <p>This package is available in NPM repository as reactjs-popup. It will work correctly with all popular bundlers.</p>
                <b>Github: </b><a className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=_D0mObrLvGg")}> https://www.youtube.com/watch?v=_D0mObrLvGg </a>

            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigPortfolio = {
        titleBar: {
            enable: true,
            text: "portfolio project"

        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //Taskmanager
    const openPopupboxTaskManager = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={taskManager} alt="TS project" />
                <p>This package is available in NPM repository as reactjs-popup. It will work correctly with all popular bundlers.</p>
                <b>Github: </b><a className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=_D0mObrLvGg")}> https://www.youtube.com/watch?v=_D0mObrLvGg </a>

            </>
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfigTaskManager = {
        titleBar: {
            enable: true,
            text: "My Projects"

        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    return (
        <div id ="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box " onClick={openPopupboxNetflix}>
                        <img className="portfolio-image" src={netflix} alt="netflix portfolio" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/*--*/}
                    <div className="portfolio-image-box " onClick={openPopupboxCityGuide}>
                        <img className="portfolio-image" src={cityGuide} alt="city guide" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/*--*/}
                    <div className="portfolio-image-box " onClick={openPopupboxPortfolio}>
                        <img className="portfolio-image " src={portfolio} alt="portfolio" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/*--*/}
                    <div className="portfolio-image-box " onClick={openPopupboxTaskManager}>
                        <img className="portfolio-image" src={taskManager} alt="Task manager" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                </div>

            </div>
            <PopupboxContainer {...popupboxConfigNetflix} />
            <PopupboxContainer {...popupboxConfigCityGuide} />
            <PopupboxContainer {...popupboxConfigPortfolio} />
            <PopupboxContainer {...popupboxConfigTaskManager} />
        </div>
    )
}
export default Portfolio;