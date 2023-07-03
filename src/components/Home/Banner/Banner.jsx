import React from "react";
//import { useNavigate } from "react-router-dom";
import "./Banner.scss";
import BannerImg from "../../../assets/deco-banner.png";
 
const Banner = () => {
    //const navigate =useNavigate();
    return (
      
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">

                    <h1>HAPPIFY EVENTS</h1>
                    <p>
                       Unleash Sonic Bliss: Discover Premium Headphones, 
                       Earphones & Speakers. Elevate Your Audio Experience Today!
                    </p>
                    {/* <div className="ctas">
                        <div className="banner-cta" onClick={() => {navigate('/about')}}>Read More</div>
                        <div className="banner-cta v2" onClick={() => {navigate('/category/1')}}>Shop Now</div>
                    </div> */}
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;