import { createContext, useContext, useEffect, useState } from "react";

const CartContext =createContext();

export function CartProvider({children}){

    const[cart,setCart]=useState(()=>{
        const savedCart = localStorage.getItem("cart");
        return savedCart? JSON.parse(savedCart):[];
    });

     function addToCart(drink) {
    setCart((prevCart) => {
        const existingDrink =prevCart.find(
            (item)=> item.idDrink === drink.idDrink
        );
        if(existingDrink){
            return prevCart.map((item) => 
                item.idDrink === drink.idDrink
            ? {...item,quantity:item.quantity+1}:item
            )
        }
         return [...prevCart, { ...drink, quantity: 1 }];
    });
  }

    function removeFromCart(id){
        setCart((prevCart)=>
    prevCart.filter((item)=>item.idDrink !==id)
    );
    }

    function increaseQuantity(id){
        setCart((prevCart)=>
            prevCart.map((item) =>
                item.idDrink === id?
        {...item,quantity:item.quantity+1}:item
            )
        );
    }
    
    function decreaseQuantity(id){
        setCart((prevCart)=>
            prevCart.map((item) =>
                item.idDrink === id?
        {...item,quantity:item.quantity-1}:item
            )
        );
    }
    
    function clearCart(){
        setCart([]);
    }

    

    useEffect(() => {
        localStorage.setItem("cart",JSON.stringify(cart));
    },[cart])

    return(
        <CartContext.Provider
        value={{
            cart,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
            clearCart,
        }}
        >
            {children}

        </CartContext.Provider>
    );

}
export function useCart(){
    return useContext(CartContext)
}