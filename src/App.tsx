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
import Error from "./components/errorPage/Error";
import Checkout from "./components/checkout/Checkout";
import Address from "./components/address/Address";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import { Alreadylogin, ProtectedRoute } from "./routes/ProtectedRoute";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import ResetPassword from "./components/resetPassword/ResetPassword";
import SingleProduct from "./components/singleProduct/SingleProduct";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Alreadylogin />}>
            <Route path="/" element={<Signin />} />
          </Route>
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
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/resetpassword" element={<ResetPassword />}></Route>

          {/* <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/address" element={<Address />}></Route> */}

          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footers />
      </Router>
    </>
  );
}

export default App;
