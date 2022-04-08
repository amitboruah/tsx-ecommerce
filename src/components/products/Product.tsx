import { useContext } from "react";
import { Auth0ContextInterface, useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CountContext } from "../../context/CountContext";
import { addToCart, removeToCart } from "../../redux/product/action";
import "./product.scss";

export default function Product() {
  const dispatch = useDispatch();
  const cartData = useSelector((state: any) => state.prodlist.productData);
  const { product, setProduct, setPrice } = useContext(CountContext);
  const { isAuthenticated }: Auth0ContextInterface = useAuth0();

  const { id }: any = useParams();

  console.log(id, " id from product");

  const prodData = useSelector((state: any) => state.prodlist.productData);
  const productData = prodData.filter((e: any) => e.id === parseInt(id));

  // console.log(productData);

  const handleAdd = (id: any) => {
    dispatch(addToCart(id));
    setProduct(updatedCart());
  };
  const handleRemove = (data: number) => {
    if (productData[0].qty > 0) {
      dispatch(removeToCart(data));
      addToTheCart();
    }
  };
  const addToTheCart = () => {
    setProduct(updatedCart());
    total();
  };

  const updatedCart = () => {
    const newCart = cartData.filter((e: any) => e.qty > 0);
    return newCart;
  };

  let sum = 0;
  const total = () => {
    product
      .map((data: any) => data.qty * data.price)
      .map((e: any) => {
       return(
        sum = sum + e,
        setPrice(sum)
       )
      });
  };

  return (
    <>
      <div className="products row">
        <div className="left col">
          <img src={`../${productData[0].img}`} alt="img" />
        </div>
        <div className="right col ">
          <h2 className="title">{productData[0].name}</h2>
          <div className="container">
            <p className="description">{productData[0].desc}</p>

            <h4 className="price">
              price <span>$ {productData[0].price}</span>
            </h4>
            {isAuthenticated && (
              <div className="addContainer">
                <button onClick={() => handleAdd(productData[0].id)}>
                  Add to Cart
                </button>
                <span className="quantityBar">{productData[0].qty}</span>
                <button onClick={() => handleRemove(productData[0].id)}>
                  Remove from Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
