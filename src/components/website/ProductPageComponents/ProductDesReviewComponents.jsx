import React from "react";

const ProductDesReviewComponents = ({ productData }) => {
  return (
    <>
      <section className="content-inner-8">
        <div className="container">
          <div className="product-description">
            <div className="dz-tabs">
              <ul className="nav nav-tabs center" id="myTab1" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    Description
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    Reviews ({productData.id})
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabIndex="0"
                >
                  <div className="row">
                    <div
                      className="col-lg-12 mt-4 m-lg-b0 m-md-b30"
                      dangerouslySetInnerHTML={{
                        __html: productData.product_desc,
                      }}
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabIndex="0"
                >
                  <div className="clear mt-4  mb-4" id="comment-list">
                    <div className="post-comments comments-area style-1 clearfix">
                      <h4 className="comments-title mb-2">Comments ({productData.id})</h4>
                      <p className="dz-title-text">
                        There are many variations of passages of Lorem Ipsum
                        available.
                      </p>
                      <div id="comment">
                        <ol className="comment-list">
                          <li
                            className="comment even thread-even depth-1 comment"
                            id="comment-2"
                          >
                            <div className="comment-body">
                              <div className="comment-author vcard">
                                <img
                                  src="/src/assets/website/images/profile4.jpg"
                                  alt="/"
                                  className="avatar"
                                />
                                <cite className="fn">Michel Poe</cite>
                              </div>
                              <div className="comment-content dz-page-text">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book.
                                </p>
                              </div>
                              <div className="reply">
                                <a
                                  rel="nofollow"
                                  className="comment-reply-link"
                                  href="javascript:void(0);"
                                >
                                  Reply
                                </a>
                              </div>
                            </div>
                            <ol className="children">
                              <li
                                className="comment byuser comment-author-w3itexpertsuser bypostauthor odd alt depth-2 comment"
                                id="comment-3"
                              >
                                <div
                                  className="comment-body"
                                  id="div-comment-3"
                                >
                                  <div className="comment-author vcard">
                                    <img
                                      src="/src/assets/website/images/profile3.jpg"
                                      alt="/"
                                      className="avatar"
                                    />
                                    <cite className="fn">Celesto Anderson</cite>
                                  </div>
                                  <div className="comment-content dz-page-text">
                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy text ever since the 1500s, when an
                                      unknown printer took a galley of type and
                                      scrambled it to make a type specimen book.
                                    </p>
                                  </div>
                                  <div className="reply">
                                    <a
                                      className="comment-reply-link"
                                      href="javascript:void(0);"
                                    >
                                      Reply
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ol>
                          </li>
                          <li
                            className="comment even thread-odd thread-alt depth-1 comment"
                            id="comment-4"
                          >
                            <div className="comment-body" id="div-comment-4">
                              <div className="comment-author vcard">
                                <img
                                  src="/src/assets/website/images/profile2.jpg"
                                  alt="/"
                                  className="avatar"
                                />
                                <cite className="fn">Monsur Rahman Lito</cite>
                              </div>
                              <div className="comment-content dz-page-text">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book.
                                </p>
                              </div>
                              <div className="reply">
                                <a
                                  className="comment-reply-link"
                                  href="javascript:void(0);"
                                >
                                  Reply
                                </a>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>
                      <div
                        className="default-form comment-respond style-1"
                        id="respond"
                      >
                        <h4
                          className="comment-reply-title mb-2"
                          id="reply-title"
                        >
                          Good Comments
                        </h4>
                        <p className="dz-title-text">
                          There are many variations of passages of Lorem Ipsum
                          available.
                        </p>
                        <div className="comment-form-rating d-flex">
                          <label className="pull-left m-r10 m-b20  text-secondary">
                            Your Rating
                          </label>
                          <div className="rating-widget">
                            <div className="rating-stars">
                              <ul id="stars">
                                <li className="star" title="Poor">
                                  <i className="fas fa-star fa-fw"></i>
                                </li>
                                <li className="star" title="Fair">
                                  <i className="fas fa-star fa-fw"></i>
                                </li>
                                <li className="star" title="Good">
                                  <i className="fas fa-star fa-fw"></i>
                                </li>
                                <li className="star" title="Excellent">
                                  <i className="fas fa-star fa-fw"></i>
                                </li>
                                <li className="star" title="WOW!!!">
                                  <i className="fas fa-star fa-fw"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="clearfix">
                          <form
                            method="post"
                            id="comments_form"
                            className="comment-form"
                            novalidate
                          >
                            <p className="comment-form-author">
                              <input
                                id="name"
                                placeholder="Author"
                                name="author"
                                type="text"
                              />
                            </p>
                            <p className="comment-form-email">
                              <input
                                id="email"
                                required="required"
                                placeholder="Email"
                                name="email"
                                type="email"
                              />
                            </p>
                            <p className="comment-form-comment">
                              <textarea
                                id="comments"
                                placeholder="Type Comment Here"
                                className="form-control4"
                                name="comment"
                                cols="45"
                                rows="3"
                                required="required"
                              ></textarea>
                            </p>
                            <p className="col-md-12 col-sm-12 col-xs-12 form-submit">
                              <button
                                id="submit"
                                type="submit"
                                className="submit btn btn-secondary btnhover3 filled"
                              >
                                Submit Now
                              </button>
                            </p>
                          </form>
                        </div>
                      </div>
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
};

export default ProductDesReviewComponents;
