import {createContext, useState} from "react"


const Context = createContext()

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
   
    console.log(cart)

    const addItem = (product, quantity) => {
        const objItemCart = {
            ...product, 
            quantity
        }
        setCart([...cart, objItemCart ])

        //comprobar stock. 
        
    }

    const removeItem = (id) => {
        let newArray = cart.filter(prod => id !== prod.id)
        setCart(newArray)
    }

    const clear = () => {
        setCart([]);

    }

    const isInCart = (id) => {

        if (cart.find( element => element.id === id )){
            return true
        } else return false;

    }

    const getItemInCart = (id) => {

        const result = cart.find( element => element.id === id );

        return result;
    }

    const getQuantity = () => {
        let count = 0;
        cart.forEach(prod => {
            count = count + prod.quantity
        })

        return count;

    }

    return (
        <Context.Provider value={{cart, 
        addItem, 
        clear, 
        getQuantity, 
        isInCart, 
        removeItem,
        getItemInCart
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context;