import { useState,useContext } from "react";
import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/deco-banner.png";
// import useFetch from "../../hooks/useFetch";
// import { useParams } from "react-router-dom";
// import { Context } from "../../utils/context";

const SingleProduct = () => {
     const[quantity, setQuantity] = useState(1);
    // const {id} = useParams();
    // const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    // const {handleAddtoCart} = useContext(Context);


        const increment = () => {
            setQuantity(prevState => prevState + 1);
        };
        const decrement = () => {
            setQuantity((prevState) => {
                if (prevState === 1) return 1;
                    return prevState -1;
            
            })
        };

        // if (!data) { return;}
        // const product = data.data[0].attributes
        // console.log(product);
        // const imake = product.img.data[0].attributes.url

        //console.log(product);
        //console.log(imake);
        {/*console.log(product.image.data[0].attributes.url)*/}
    return(
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
            
                        <img src={prod} alt="" />


                    </div>
                    <div className="right">
                        <span className="name">title</span>
                        <span className="price">&#8377;5999</span>
                        <span className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque aut dolores, ut veniam vel fuga ad at quaerat numquam quasi, iste pariatur asperiores libero distinctio sequi assumenda veritatis? Placeat, laudantium!</span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button className="add-to-cart-button">
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>
                        <span className="divider" />

                        <div className="info-item">
                            <span className="text-bold">
                                Category:{' '}
                                <span>prod title
                                </span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16}/>
                                    <FaTwitter size={16}/>
                                    <FaInstagram size={16}/>
                                    <FaPinterest size={16}/>
                                </span>
                            </span>
                        </div>
                         
                    </div>
                </div>
                <RelatedProducts 
                // productId={id}
                // categoryId={product.categories.data[0].id}
                 />
            </div>
        </div>
    )
};

export default SingleProduct;
