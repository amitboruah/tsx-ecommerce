import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import actions from '../../redux/product/action';
import { authenticated } from '../../utility';
import './singleProduct.scss'

export default function SingleProduct() {

    const dispatch = useDispatch()
  const prodData = useSelector((state: any) => state.prodlist.singleProd);

  const { id }: any = useParams();
  const prodId={
    id:id
  }

    useEffect(()=>{
        dispatch(actions.fetchSingleProduct(prodId))
      },[])

  return (
    <>
    <div className="products row">
      <div className="left col">
        <img src={prodData.image} alt="img" />
      </div>
      <div className="right col ">
        <h2 className="title">{prodData.Product_name}</h2>
        <div className="container">
          <p className="description">{prodData.Desctiption}</p>

          <h4 className="price">
            price <span>$ {prodData.Price}</span>
          </h4>
          {authenticated && (
            <div className="addContainer">
              <button >
                Add to Cart
              </button>
              <span className="quantityBar">{prodData.qty}</span>
              <button >
                Remove from Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </>
  )
}
