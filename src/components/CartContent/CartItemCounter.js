import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

const CartItemCounter = ({product}) => {
  const {  cart, setCart, buyProducts} = useContext(dataContext);


  const decrese = () =>{
    const productrepeat = cart.find((item)=> item.id === product.id);

    productrepeat.quanty !== 1 && 
      setCart(cart.map((item)=> (item.id ? {...product, quanty:
      productrepeat.quanty -1 } : item)));
  };


  return (
    < >
      <p className="counter-button" onClick={decrese}><MinusCircleOutlined/></p>
      <p className="quanty-element">{product.quanty}</p>
      <p className="counter-button" onClick={()=>buyProducts(product)}><PlusCircleOutlined/></p>
    </>
  );
}

export default CartItemCounter


