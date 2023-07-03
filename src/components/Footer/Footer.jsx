import React from "react";
import "./Footer.scss";
import Payment from "../../assets/payments.png"
import { FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non maiores accusantium molestiae necessitatibus. 
                At excepturi minima, repudiandae veniam ea eos dolor ex tempore nam vel maiores exercitationem deleniti.
                 Magni.   </div>
            </div>

            <div className="col">
            <div className="title">Contact</div>
            <div className="c-item"><FaLocationArrow/></div>
            <div className="text">Bangalore Nagarbhavi  </div>

            <div className="c-item"><FaMobileAlt/></div>
            <div className="text">Phone : 6360838948/9110852277  </div>

            <div className="c-item"><FaEnvelope/></div>
            <div className="text">Email : happifyevents@gmail.com </div>
            </div>


            <div className="col">
            <div className="title">Categories</div>
            <span className="text">Headphones</span>
            <span className="text">Smart Watches</span>
            <span className="text">Bluetooth Speakers</span>
            <span className="text">Wireless Earbuds</span>
            <span className="text">Home Theatre</span>
            <span className="text">Projectors</span>
            </div>

            <div className="col">
            <div className="title">Pages</div>
            <div className="text">Home</div>
            <span className="text">About</span>
            <span className="text">Privacy Policy</span>
            <span className="text">Returns</span>
            <span className="text">Terms & Conditions</span>
            <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                Happify Events created by Bhoomika & Shashank
                </div>
                <img src={Payment}/>
            </div>
        </div>
        
    </footer>;
    
};

export default Footer;
