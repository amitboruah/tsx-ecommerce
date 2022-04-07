import { Auth0ContextInterface, useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { addToCart, fetchData } from "../../redux/action";
import "react-toastify/dist/ReactToastify.css";
import "./collection.scss";
import { useNavigate } from "react-router-dom";
import { CountContext } from "../../context/CountContext";
import { Pagination } from "antd";

export default function Collections() {
  // for pagination

  const [currentPage, setCurrentPage] = useState(2);
  const [postPerPage, setPostPerPage] = useState(7);

  const { isAuthenticated, loginWithRedirect }: Auth0ContextInterface =
    useAuth0();
  const navigate = useNavigate();

  const { count, setCount } = useContext(CountContext);

  const dispatch = useDispatch();
  const prodData = useSelector((state: any) => state.prodlist.productData);
  // console.log(prodData);

  
  const handleAddToCart = (id: number): void => {
    // console.log(id);
    isAuthenticated ? itemAdded(id) : redirectToLogin();
  };

  const itemAdded = (id: number) => {
    dispatch(addToCart(id));
    setCount(count + 1);
  };

  const redirectToLogin = (): void => {
    toast.error("Please Login First", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      loginWithRedirect();
    }, 3000);
  };

  const handleOnChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPostPerPage(pageSize);
  };
  
  
  //pagination
  
  const indexOfLastProd = currentPage * postPerPage;
  const indexOfFirstProd = indexOfLastProd - postPerPage;
  const currentProd = prodData.slice(indexOfFirstProd, indexOfLastProd);
  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch, setCurrentPage]);
  return (
    <>
      <section id="new-arrivals" className="new-arrivals">
        <div className="container">
          <div className="section-header">
            <h2>new arrivals</h2>
          </div>
          <div className="sort">
            <h3>Sort By:</h3>
            <a href="">
              High to low ↑ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a >
            <a href="">Low to high ↓ </a>
          </div>
          <div className="new-arrivals-content">
            <div className="row">
              {currentProd.map((data: any, ky: number) => {
                return (
                  <div className="col-md-3 col-sm-4" key={ky}>
                    <div className="single-new-arrival">
                      <div className="single-new-arrival-bg">
                        <img src={data.img} alt="new-arrivals images" />
                        <div className="single-new-arrival-bg-overlay"></div>
                        <div className="sale bg-1">
                          <p>sale</p>
                        </div>
                        <div className="new-arrival-cart">
                          <p>
                            <span className="lnr lnr-cart"></span>
                            {
                              isAuthenticated && (
                                <a href="" onClick={() => handleAddToCart(data.id)}>
                              add <span>to </span> cart
                            </a>
                              )
                            }
                            <ToastContainer className="tostify" />
                          </p>
                          <p className="arrival-review pull-right">
                            <span className="lnr lnr-heart"></span>
                            <span
                              className="lnr lnr-frame-expand"
                              onClick={() => navigate(`/product/${data.id}`)}
                            ></span>
                          </p>
                        </div>
                      </div>
                      <h4>
                        <a href="#dumy" onClick={() => navigate(`/product/${data.id}`)}>
                          {data.name}
                        </a>
                      </h4>
                      <p className="arrival-product-price">$ {data.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {
            <Pagination
              total={prodData.length}
              showTotal={(total) => `Total ${total} items`}
              defaultPageSize={postPerPage}
              defaultCurrent={currentPage}
              showQuickJumper
              pageSizeOptions={[4, 7, 10]}
              showSizeChanger
              onChange={handleOnChange}
            />
          }
        </div>
      </section>
    </>
  );
}
