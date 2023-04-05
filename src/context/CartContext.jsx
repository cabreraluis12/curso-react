import { createContext, useState} from "react"

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const agregarAlCarrito = (producto)=>{
        let existe = isInCart( producto.id)

        if (existe) {

            let newCart = cart.map((elemento)=>{
                if(elemento.id===producto.id){
                    return{
                        ...elemento,
                        cantidad: elemento.cantidad + producto.cantidad
                    }

                }
            })
        
        }else{
            setCart([...cart, producto])  
        }
        
    }

    const isInCart= (id) =>{
        return cart.some( elemento => elemento.id === id )
    }


    const clearCart = ()=>{
        setCart([])
    }


    const getTotalQuantity = ()=>{

        const total = cart.reduce((acc, elemento)=>{
            return acc + elemento.cantidad
        } , 0)

        return total

    }


    const getTotalPrice = ()=>{
        let precioTotal = cart.reduce((acc, elemento)=>{
            return acc + (elemento.cantidad * elemento.precio)
        } , 0)
        return precioTotal
    }


    const deleteProductById = (id) => {
        const newCart = cart.filter((elemento)=>elemento.id !== id)
        setCart(newCart)
    }

    let data = {
        cart,
        clearCart,
        setCart: setCart,
        agregarAlCarrito,
        getTotalQuantity,
        getTotalPrice,
        deleteProductById

    }

  return (
        <CartContext.Provider value={ data }>
            {children}
        </CartContext.Provider>
  )
}

export default CartContextProvider
