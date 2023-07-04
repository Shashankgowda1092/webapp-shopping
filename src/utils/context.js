import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  // const [products, setProducts] = useState();
  // const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  // const [cartSubTotal, setCartSubTotal] = useState(0);
  // const location = useLocation();


  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        // products,
        // setProducts,
        // cartItems,
        // setCartItems,
        // cartCount,
        // setCartCount,
        // cartSubTotal,
        // setCartSubTotal,
        // handleAddtoCart,
        // handleRemoveFromCart,
        // handleCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
