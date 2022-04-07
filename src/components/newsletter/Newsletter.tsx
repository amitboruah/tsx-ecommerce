
export default function Newsletter() {
  return (
    <>
      <section id="newsletter" className="newsletter">
        <div className="container">
          <div className="hm-footer-details">
            <div className="row">
              <div className=" col-md-3 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>information</h4>
                  </div>
                  <div className="hm-foot-menu">
                    <ul>
                      <li>
                        <p >about us</p>
                      </li>
                      <li>
                        <p >contact us</p>
                      </li>
                      <li>
                        <p >news</p>
                      </li>
                      <li>
                        <p >store</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" col-md-3 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>collections</h4>
                  </div>
                  <div className="hm-foot-menu">
                    <ul>
                      <li>
                        <p >wooden chair</p>
                      </li>
                      <li>
                        <p >royal cloth sofa</p>
                      </li>
                      <li>
                        <p >accent chair</p>
                      </li>
                      <li>
                        <p >bed</p>
                      </li>
                      <li>
                        <p >hanging lamp</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" col-md-3 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>my accounts</h4>
                  </div>
                  <div className="hm-foot-menu">
                    <ul>
                      <li>
                        <p >my account</p>
                      </li>
                      <li>
                        <p >wishlist</p>
                      </li>
                      <li>
                        <p >Community</p>
                      </li>
                      <li>
                        <p >order history</p>
                      </li>
                      <li>
                        <p >my cart</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" col-md-3 col-sm-6  col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>newsletter</h4>
                  </div>
                  <div className="hm-foot-para">
                    <p>Subscribe to get latest news,update and information.</p>
                  </div>
                  <div className="hm-foot-email">
                    <div className="foot-email-box">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email Here...."
                      />
                    </div>
                    <div className="foot-email-subscribe">
                      <span>
                        <i className="fa fa-location-arrow"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
