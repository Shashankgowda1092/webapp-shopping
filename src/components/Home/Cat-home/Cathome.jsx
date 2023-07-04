// import { useNavigate } from "react-router-dom";
import './Cathome.scss';
import iban from "../../../assets/deco-banner.png"; 
const Cathome = ({ categories }) => {
    // const navigate = useNavigate();
    return (
        <div className="shop-by-category">
            <div className="sec-heading">events</div>
            <div className="categories">
                    <div className="category">
                        <img src={iban} alt="banner" />
                    </div>
                    <div className="category">
                        <img src={iban} alt="banner" />
                    </div>
                    <div className="category">
                        <img src={iban} alt="banner" />
                    </div>
                    <div className="category">
                        <img src={iban} alt="banner" />
                    </div>
                </div>
        </div>
    );
};

export default Cathome;

/*
 key={item.id}
                        className="category"
                        onClick={() => navigate(`/category/${item.id}`)}




*/