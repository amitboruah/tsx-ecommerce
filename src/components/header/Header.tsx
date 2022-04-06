import "./header.scss";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Auth0ContextInterface, useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import React, { useContext, useEffect, useState } from "react";
import { addToCart, removeToCart } from "../../redux/action";
import { useNavigate } from "react-router-dom";
import { CountContext } from "../../context/CountContext";

export default function Header() {
  const dispatch = useDispatch();
  const cartData = useSelector((state: any) => state.prodlist.productData); 
  const navigate = useNavigate();
  const { count, product, setProduct ,price, setPrice} = useContext(CountContext);

  const { loginWithRedirect, isAuthenticated, logout ,}: Auth0ContextInterface =
    useAuth0();

  const { user }: any = useAuth0();

  const addToTheCart = () => {
    setProduct(updatedCart());
    total();
  };
  const itemAdded = (id: number) => {
    dispatch(addToCart(id));
    addToTheCart();
  };

  const handleRemove = (data: number) => {
    dispatch(removeToCart(data));
    addToTheCart();
  };

  const updatedCart = () => {
    const newCart = cartData.filter((e: any) => e.qty > 0);
    return newCart;
  };

  let sum = 0;
  const total = () => {
    product
      .map((data: any) => data.qty * data.price)
      .map((e:any) => {
        sum = sum + e;
        setPrice(sum);
      });
  };

  useEffect(() => {
    addToTheCart();
  }, [count]);

  return (
    <>
      <header id="home" className="welcome-hero">
        <div className="top-area">
          <div className="header-area">
            <nav
              className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"
              data-minus-value-desktop="70"
              data-minus-value-mobile="55"
              data-speed="1000"
            >
              <div className="top-search">
                <div className="container">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-search"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <span className="input-group-addon close-search">
                      <i className="fa fa-times"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="attr-nav">
                  <ul>
                    <li className="search">
                      <a href="#">
                        <span className="lnr lnr-magnifier"></span>
                      </a>
                    </li>

                    {/* {console.log(cartData, "from header")} */}

                    {isAuthenticated ? (
                      <>
                        <li>
                          <a href="#">
                            <p className="username">
                              Hi, &nbsp;
                              <span>
                                {user.given_name
                                  ? user.given_name
                                  : user.nickname}
                              </span>
                            </p>
                          </a>
                        </li>
                        <li className="logout icon">
                          <a href="#" onClick={() => logout()}>
                            <LogoutOutlined />
                          </a>
                          <div className="iconDetail">Logout</div>
                        </li>
                      </>
                    ) : (
                      <li className="login icon">
                        <a href="#" onClick={() => loginWithRedirect()}>
                          <UserOutlined />
                        </a>
                        <div className="iconDetail">Login</div>
                      </li>
                    )}

                    <li className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <span
                          className="lnr lnr-cart"
                          onMouseOver={() => addToTheCart()}
                        ></span>
                        <span className="badge badge-bg-1">
                          {product.length}
                        </span>
                      </a>
                      {console.log(cartData, " teststsets")}

                    {isAuthenticated && (

                      <ul
                        className="dropdown-menu cart-list s-cate"
                        onMouseOver={() => addToTheCart()}
                      >
                        {product.map((data: any, ky: number) => {
                          return (
                            <React.Fragment key={ky}>
                              <li className="single-cart-list">
                                <a className="photo">
                                  <img
                                    src={data.img}
                                    className="cart-thumb"
                                    alt="image"
                                  />
                                </a>
                                <div className="cart-list-txt">
                                  <h6>
                                    <a>{data.name}</a>
                                  </h6>
                                  <p>
                                    {data.qty} qty{" "}
                                    <span className="price">
                                      $ {data.price}
                                    </span>
                                  </p>
                                </div>
                                <div
                                  className="cart-close"
                                  style={{ marginTop: "10px" }}
                                >
                                  <span
                                    className="lnr "
                                    onClick={() => itemAdded(data.id)}
                                    style={{ fontSize: "24px" , color: "grey" }}
                                  >
                                    +
                                  </span>
                                </div>
                                <div className="cart-close"
                                  style={{ marginTop: "30px" }}
                                  >
                                  <span
                                    className="lnr"
                                    onClick={() => handleRemove(data.id)}
                                    style={{ fontSize: "40px", color: "lightGrey" }}
                                  >
                                    -
                                  </span>
                                </div>
                              </li>
                            </React.Fragment>
                          );
                        })}
                        <li className="total">
                          <span>Total: $ {price}</span>
                          <button className="btn-cart pull-right" onClick={()=>navigate("/checkout")}>
                            Checkout
                          </button>
                        </li>
                      </ul>
                        )} 
                    </li>
                  </ul>
                </div>
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                  >
                    <i className="fa fa-bars"></i>
                  </button>
                  <a className="navbar-brand" href="#home">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/34/34611.png"
                      alt=""
                    />
                    LetsBuy.
                  </a>
                </div>
                <div
                  className="collapse navbar-collapse menu-ui-design"
                  id="navbar-menu"
                >
                  <ul
                    className="nav navbar-nav navbar-center"
                    data-in="fadeInDown"
                    data-out="fadeOutUp"
                  >
                    <li className=" scroll active">
                      <a href="#home" onClick={() => navigate("/")}>
                        home
                      </a>
                    </li>
                    <li className="scroll">
                      <a href="#new-arrivals" onClick={() => navigate("/")}>
                        new arrival
                      </a>
                    </li>
                    <li className="scroll">
                      <a href="#feature" onClick={() => navigate("/")}>
                        features
                      </a>
                    </li>
                    <li className="scroll">
                      <a href="#blog" onClick={() => navigate("/")}>
                        blog
                      </a>
                    </li>
                    <li className="scroll">
                      <a href="#newsletter" onClick={() => navigate("/")}>
                        contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="clearfix"></div>
        </div>
      </header>
    </>
  );
}
