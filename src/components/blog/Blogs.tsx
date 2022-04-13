import './blog.scss'

export default function Blogs() {
  return (
    <>
      <section id="blog" className="blog">
        <div className="container">
          <div className="section-header">
            <h2>latest blog</h2>
          </div>
          <div className="blog-content">
            <div className="row">
              <div className="col-sm-4">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <img src="assets/images/b1.jpg" alt="blog" />
                    <div className="single-blog-img-overlay"></div>
                  </div>
                  <div className="single-blog-txt">
                    <h2>
                      <p>Why Brands are Looking at Local Language</p>
                    </h2>
                    <h3>
                      By <p>Robert Norby</p>March 2018
                    </h3>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt....
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <img src="assets/images/b2.jpg" alt="blog" />
                    <div className="single-blog-img-overlay"></div>
                  </div>
                  <div className="single-blog-txt">
                    <h2>
                      <p>Why Brands are Looking at Local Language</p>{" "}
                    </h2>
                    <h3>
                      By <p>Robert Norby</p>March 2018
                    </h3>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt....
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <img src="assets/images/b3.jpg" alt="blog" />
                    <div className="single-blog-img-overlay"></div>
                  </div>
                  <div className="single-blog-txt">
                    <h2>
                      <p>Why Brands are Looking at Local Language</p>{" "}
                    </h2>
                    <h3>
                      By <p>Robert Norby</p>March 2018
                    </h3>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt....
                    </p>
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
