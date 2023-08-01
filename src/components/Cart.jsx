import { useEffect, useState } from "react";

const Cart = ({state, dispatch}) => {
    const {cart} = state

    const [total, setTotal] = useState(0)

    const changeQty = (id, qty) => {
         dispatch({
            type:"CHANGE_CART_QTY",
            payload:{
                id,
                qty
            }
         })
    }

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)* curr.qty, 0))
    }, [cart])
    return ( 
        <div style={{
            display:"flex",
            flexDirection:"column",
            margin:10,
            backgroundColor:"#ececec",
            padding:10,
            width:"20%",
            height:"1000px"
        }}> 
          <b style={{fontSize: 30}}>Cart</b>
          <b>SubTotal: ${total}</b>

          {
            cart.length > 0 ? (
                cart.map(prod => (
                    <div
                    key={prod.title}
                    style={{
                        display:"flex",
                        flexDirection:"column",
                        padding:10,
                        border:"1px solid grey",
                        marginLeft:0,
                        // justifyContent:"space-between"
                    }}
                    >
                    <div style={{display:"flex", gap:10}}>
                     <img src={prod.thumbnail} alt={prod.title} 
                     style={{
                        width:60,
                        height:60,
                        objectFit:"cover"
                     }}
                     />
                     <div
                     style={{
                        display:"flex",
                        flexDirection:"column",
                        // justifyContent:"space-evenly"
                     }}
                     >
                       <span>{prod.title}</span>
                       <b>{prod.price}</b>
                     </div>
                     </div>
                     <div style={{display:"flex", alignItems:"center", gap:10}}>
                         <button
                         onClick={() => changeQty(prod.id, prod.qty - 1)}
                         >-</button>
                         <span>{prod.qty}</span>
                         <button
                         onClick={() => changeQty(prod.id, prod.qty + 1)}
                         >+</button>
                     </div>
                    </div>
                ))
            ) : (
                <span style={{padding:20}}>Cart Is Empty</span>
            )
          }
        </div>
     );
}
 
export default Cart;