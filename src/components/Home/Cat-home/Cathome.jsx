// import { useNavigate } from "react-router-dom";
import './Cathome.scss';

const Cathome = ({ categories,headingText }) => {
    // const navigate = useNavigate();
    return (
        <div className="shop-by-category">
            <div className="sec-heading">events</div>
            <div className="categories">
                {/* {categories?.data?.map((item) => {
                    console.log(item);
                    return (
                    <div
                        key={item.id}
                        className="category"
                        onClick={() => navigate(`/category/${item.id}`)}
                    >
                        <img
                            src={
                            
                                item.attributes.img.data.attributes.url
                            }
                        />
                    </div>
                )})} */}
            </div>
        </div>
    );
};

export default Cathome;