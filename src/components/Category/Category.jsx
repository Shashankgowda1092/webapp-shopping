// import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
import "./Category.scss";
import Products from "../Products/Products";

const Category = () => {
    

    return(
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">bbbb</div>
                <Products/>
            </div>
        </div>
    )
}

export default Category;


// innerPage={true} products={data}
// data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title
// const {id}= useParams();
//     const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)