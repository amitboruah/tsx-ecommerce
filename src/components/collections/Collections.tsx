import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import actions from "../../redux/product/action";
import "react-toastify/dist/ReactToastify.css";
import "./collection.scss";
import { useNavigate } from "react-router-dom";
import { CountContext } from "../../context/CountContext";
import { Pagination } from "antd";
import { authenticated } from "../../utility";
import { SearchOutlined } from "@ant-design/icons";

export default function Collections() {

const[searchText , setSearchText] = useState("")

  // for pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  // for loader
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const { count, setCount } = useContext(CountContext);

  const dispatch = useDispatch();
  const prodData = useSelector((state: any) => state.prodlist.productData);
  const totalProduct = useSelector((state: any) => state.prodlist.totalItem);

  console.log(prodData, "prod details");

  const handleAddToCart = (id: number): void => {
    // console.log(id);
    // authenticated ? itemAdded(id) : null;
  };

  const itemAdded = (id: number) => {
    dispatch(actions.addToCart(id));
    setCount(count + 1);
  };

  const loading = () => {
    dispatch(actions.fetchData(paginate));

    if (prodData.length > 0) {
      setLoader(false);
    }
  };

  const paginate = {
    page: currentPage,
    perpage: postPerPage,
  };

  //pagination
  const handleOnChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPostPerPage(pageSize);

    let paginate = {
      page: page,
      perpage: pageSize,
    };

    dispatch(actions.fetchData(paginate));
  };

  //sort

  const handleSort = (e: any, value: any): any => {
    e.preventDefault();
    const sort = {
      sort: value,
    };
    dispatch(actions.fetchData(sort));
  };

  //search

  const handleSearch = (e:any)=>{
    setSearchText(e.target.value)
  }
  const searchedData ={
    "SearchByName":searchText
  }
  const handleSearchBtn = ()=>{
    dispatch(actions.fetchData(searchedData));
  }

  useEffect(() => {
    loading();
  }, []);
  return (
    <>
      <section id="new-arrivals" className="new-arrivals">
        <div className="container">
          <div className="section-header">
            <h2>Collections</h2>
            {loader ? (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/54/Ajux_loader.gif"
                alt="loading"
                className="loader"
              />
            ) : null}
          </div>

          <div className="sort">
            <h3>Sort By:</h3>
            <a
              href=""
              onClick={(e) => {
                handleSort(e, "DESC");
              }}
            >
              High to low ↑ 
            </a>
            <a
              href=""
              onClick={(e) => {
                handleSort(e, "ASC");
              }}
            >
              Low to high ↓{" "}
            </a>
          </div>
          <div className="search" onChange={(e)=>{handleSearch(e)}}>
            <input type="text" />
            <SearchOutlined onClick={handleSearchBtn} className="searchBtn" style={{}}/>
          </div>
          <div className="new-arrivals-content">
            <div className="row">
              {prodData.map((data: any, ky: number) => {
                return (
                  <div className="col-md-3 col-sm-4" key={ky}>
                    <div className="single-new-arrival">
                      <div className="single-new-arrival-bg">
                        <img
                          src={data.image}
                          alt="new-arrivals images"
                          className="productImg"
                        />
                        <div className="single-new-arrival-bg-overlay"></div>
                        <div className="sale bg-1">
                          <p>sale</p>
                        </div>
                        <div className="new-arrival-cart">
                          <p>
                            <span className="lnr lnr-cart"></span>
                            {authenticated && (
                              <a
                                href=""
                                onClick={() => handleAddToCart(data.id)}
                              >
                                add <span>to </span> cart
                              </a>
                            )}
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
                        <a
                          href=""
                          onClick={() => navigate(`/product/${data.id}`)}
                        >
                          {data.Product_name}
                        </a>
                      </h4>
                      <p className="arrival-product-price">₹ {data.Price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {
            <Pagination
              total={totalProduct}
              showTotal={(total) => `Total ${total} items`}
              defaultPageSize={postPerPage}
              defaultCurrent={currentPage}
              showQuickJumper
              pageSizeOptions={[8, 16, 20]}
              showSizeChanger
              onChange={handleOnChange}
            />
          }
        </div>
      </section>
    </>
  );
}
