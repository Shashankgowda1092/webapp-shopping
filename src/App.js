import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
// import Category from "./components/Category/Category";
// import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
// import AppContext from "./utils/context";
// import Success from "./components/Success/success";
import About from "./components/About/About";


function App() {
    return (
        <BrowserRouter>
            {/* <AppContext> */}
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/about" element={<About/>} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/success" element={<Success/>} /> */}
                </Routes>
                <Newsletter />
                <Footer />
            {/* </AppContext> */}
        </BrowserRouter>
    );
}

export default App;