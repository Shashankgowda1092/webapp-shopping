import { useNavigate } from 'react-router-dom';

import "./Products.scss";
import Product from "./Product/Product";


            

const Products = ({ products, innerPage,headingText}) => {
    return <div className="products-container">
            <div className="sec-heading">Product page</div>
            <div className="products">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
              
            </div>
    </div>;
};

export default Products;

// {products?.data?.map(item =>(
//         <Product 
//         key={item.id}
//         id={item.id}
//         data={item.attributes}
//           />
// ))}
