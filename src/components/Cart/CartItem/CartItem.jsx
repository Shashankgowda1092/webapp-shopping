import { MdClose } from "react-icons/md";

import "./CartItem.scss";
// import { useContext } from "react";
// import { Context } from "../../../utils/context";
import prod from "../../../assets/deco-banner.png";


const CartItem = () => {
    // const { cartItems,handleCartProductQuantity,handleRemoveFromCart} = useContext(Context)
    return(
        <div className="cart-products">
                            <div className="cart-product">
                            <div className="image-container">
                                <img src={prod} alt="" />
                            </div>
                            <div className="prod-details">
                                <span className="name">title</span>
                                <MdClose className="close-btn"  />
                                <div className="quantity-buttons">
                                    <span  >-</span>
                                    <span>5</span>
                                    <span>+</span>
                                </div>
                                <div className="text">
                                    <span>4</span>
                                    <span>x</span>
                                    <span>1000</span>
                                    <span>=</span>
                                    <span className="highlight">4000</span>
                                </div>
                            </div>
                        </div>

        </div>
    );
};

export default CartItem;
