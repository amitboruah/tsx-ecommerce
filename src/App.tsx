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
import Product from "./components/products/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Error from "./components/errorPage/Error";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Collections /> */}
        {/* <Signup /> */}
        <Routes>
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <Featured />
                <Collections />
                <CollectionCarousel />
                <Features />
                <Blogs />
                <Clients />
                <Newsletter />
              </>
            }
          />
            <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footers />
      </Router>
    </>
  );
}

export default App;
