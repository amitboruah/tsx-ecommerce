import "./App.css";
import Blogs from "./components/blog/Blogs";
import Carousel from "./components/carousel/Carousel";
import Clients from "./components/clients/Clients";
import CollectionCarousel from "./components/collectionCarousel/CollectionCarousel";
import Collections from "./components/collections/Collections";
import Featured from "./components/featured/Feastured";
import Features from "./components/features/Features";
import Footers from "./components/footer/Footers";
import Header from "./components/header/Header";
import Newsletter from "./components/newsletter/Newsletter";
import Product from "./components/product/Product";
// import Signup from "./components/signup/Signup";
import Error from "./components/errorPage/Error";
import Checkout from "./components/checkout/Checkout";
import Address from "./components/address/Address";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/" element={<ProtectedRoute />}>
            {
              <Route
                path="/home"
                element={
                  <>
                    <Carousel />
                    <Featured />
                    <CollectionCarousel />
                    <Features />
                    <Blogs />
                    <Clients />
                    <Newsletter />
                  </>
                }
              />
            }
            <Route path="/collection" element={<Collections />}></Route>
          </Route>

          <Route
            path="/contact"
            element={
              <>
                <Blogs />
                <Clients />
                <Newsletter />
              </>
            }
          />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/signup" element={<Signup />}></Route>
          {/* <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/address" element={<Address />}></Route>
          <Route path="/resetpassword" element={<Signup />}></Route> */}
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footers />
      </Router>
    </>
  );
}

export default App;
