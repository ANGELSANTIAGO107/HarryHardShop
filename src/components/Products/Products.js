import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Products.css"


const Products = () => {
    const { data, buyProducts} = useContext(dataContext);

return data.map((product) => {
    return (
        <div className="card" key={product.id}>
            <img className="img-product-card" src={product.img} alt="img-product-card"/>
            <h3 className="tittle-card">{product.name}</h3>
            <h4 className="price-card">{product.price}$</h4>
            <button onClick={()=>buyProducts(product)}>Hago Un Hechizo De Compra🪄</button>
        </div>
    );
});
};

export default Products;