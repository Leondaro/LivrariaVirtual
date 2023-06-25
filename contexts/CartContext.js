import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({children}) {
    const [ cartItems, setCartItems ] = useState([]);
    const [ itemsQuantity, setItemsQuantity ] = useState(0);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        let storageItems = localStorage.getItem('cart-items');
        let storageQuantity = localStorage.getItem('cart-items-quantity');
        if (storageItems) setCartItems(JSON.parse(storageItems));
        if (storageQuantity) setItemsQuantity(Number(storageQuantity));
    }, []);

    const updateCartItems = (items) => {
        setCartItems(items);
    }
    const updateItemsQuantity = (quantity) => {
        setItemsQuantity(quantity);
    }

    return (
        <CartContext.Provider value={{ cartItems, itemsQuantity, updateCartItems, updateItemsQuantity }}>
            {children}
        </CartContext.Provider>
    );
}