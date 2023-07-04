
// import { useNavigate } from "react-router-dom";
import "./Product.scss";
import prod from "../../../assets/deco-banner.png";



const Product = ({ id, data}) => {
   
    
    return( <div className="product-card">
                <div className="thumbnail">
                    <img src={prod} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">title</span>
                    <span className="price">&#8377;5699</span>
                </div>
    </div>);
};

export default Product;

// const navigate = useNavigate();
// onClick={()=> navigate("/product/" + id)}
// data.img.data[0].attributes.url