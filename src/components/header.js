
import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component{
    render(){
        return(
            <div>
  {/*====== PRELOADER PART ENDS ======*/}
  <div id="main">
    {/* Header Area Start  */}
    <header className="main-header home-2">
      {/* Header top Area Start  */}
      <div className="header-top-nav">
        <div className="container-fluid">
          <div className="row">
            {/*Left Start*/}
            <div className="col-lg-4 col-md-4">
              <div className="left-text">
                <p>Welcome you to Ecolife store!</p>
              </div>
            </div>
            {/*Left end*/}
            {/*Right Start*/}
            <div className="col-lg-8 col-md-8 text-right">
              <div className="header-right-nav">
                <ul className="res-xs-flex">
                  <li className="after-n">
                    <a href="compare.html"><i className="ion-ios-shuffle-strong" />Compare (0)</a>
                  </li>
                  <li>
                    <a href="wishlist.html"><i className="ion-android-favorite-outline" />Wishlist (0)</a>
                  </li>
                </ul>
                <div className="dropdown-navs">
                  <ul>
                    {/* Settings Start  */}
                    <li className="dropdown">
                      <a className="angle-icon" href=" ">Settings</a>
                      <ul className="dropdown-nav">
                        <li><a href="my-account.html">My Account</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="login.html">Login</a></li>
                      </ul>
                    </li>
                    {/* Settings end  */}
                    {/* Currency Start */}
                    <li className="top-10px first-child">
                      <select>
                        <option value={1}>USD $</option>
                        <option value={2}>EUR €</option>
                      </select>
                    </li>
                    {/* Currency End */}
                    {/* Language Start */}
                    <li className="top-10px mr-15px">
                      <select>
                        <option value={1}>English</option>
                        <option value={2}>France</option>
                      </select>
                    </li>
                    {/* Language End */}
                  </ul>
                </div>
              </div>
            </div>
            {/*Right end*/}
          </div>
        </div>
      </div>
      {/* Header top Area end  */}
      {/* Header Navigation Area Start  */}
      <div className="header-navigation sticky-nav">
        <div className="container-fluid">
          <div className="row">
            {/*  Logo Area Start*/}
            <div className="col-md-2 col-sm-2">
              <div className="logo">
                <a href="index.html"><img src="assets/images/logo/logo.jpg" alt="" /></a>
              </div>
            </div>
            {/*  Logo Area end*/}
            <div className="col-md-10 col-sm-10">
              {/* Main Navigation Area */}
              <div className="main-navigation d-none d-lg-block">
                <ul>
                  <li className="menu-dropdown">
                    <a href=" ">Home <i className="ion-ios-arrow-down" /></a>
                    <ul className="sub-menu">
                      <li className="menu-dropdown position-static">
                        <a href=" ">Home Organic <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                          <li><Link to='/'>Organic 1</Link></li>
                          <li><Link to='organic_2'>Organic 2</Link></li>
                          <li><Link to='organic_3'>Organic 3</Link></li>
                          <li><Link to='organic_4'>Organic 4</Link></li>
                        </ul>
                      </li>
                      <li className="menu-dropdown position-static">
                        <a href=" ">Home Cosmetic <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                          <li><a href="index-5.html">Cosmetic 1</a></li>
                          <li><a href="index-6.html">Cosmetic 2</a></li>
                          <li><a href="index-7.html">Cosmetic 3</a></li>
                          <li><a href="index-8.html">Cosmetic 4</a></li>
                        </ul>
                      </li>
                      <li className="menu-dropdown position-static">
                        <a href=" ">Home Digital <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                          <li><a href="index-9.html">Digital 1</a></li>
                          <li><a href="index-10.html">Digital 2</a></li>
                          <li><a href="index-11.html">Digital 3</a></li>
                          <li><a href="index-12.html">Digital 4</a></li>
                        </ul>
                      </li>
                      <li className="menu-dropdown position-static">
                        <a href=" ">Home Furniture <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                          <li><a href="index-13.html">Furniture 1</a></li>
                          <li><a href="index-14.html">Furniture 2</a></li>
                          <li><a href="index-15.html">Furniture 3</a></li>
                          <li><a href="index-16.html">Furniture 4</a></li>
                        </ul>
                      </li>
                      <li className="menu-dropdown position-static">
                        <a href=" ">Home Medical <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                          <li><a href="index-17.html">Medical 1</a></li>
                          <li><a href="index-18.html">Medical 2</a></li>
                          <li><a href="index-19.html">Medical 3</a></li>
                          <li><a href="index-20.html">Medical 4</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-dropdown">
                    <a href=" ">Shop <i className="ion-ios-arrow-down" /></a>
                    <ul className="mega-menu-wrap">
                      <li>
                        <ul>
                          <li className="mega-menu-title"><a href=" ">Shop Grid</a></li>
                          <li><a href="shop-3-column.html">Shop Grid 3 Column</a></li>
                          <li><a href="shop-4-column.html">Shop Grid 4 Column</a></li>
                          <li><a href="shop-left-sidebar.html">Shop Grid Left Sidebar</a></li>
                          <li><a href="shop-right-sidebar.html">Shop Grid Right Sidebar</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li className="mega-menu-title"><a href=" ">Shop List</a></li>
                          <li><a href="shop-list.html">Shop List</a></li>
                          <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                          <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li className="mega-menu-title"><a href=" ">Shop Single</a></li>
                          <li><a href="single-product.html">Shop Single</a></li>
                          <li><a href="single-product-variable.html">Shop Variable</a></li>
                          <li><a href="single-product-affiliate.html">Shop Affiliate</a></li>
                          <li><a href="single-product-group.html">Shop Group</a></li>
                          <li><a href="single-product-tabstyle-2.html">Shop Tab 2</a></li>
                          <li><a href="single-product-tabstyle-3.html">Shop Tab 3</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li className="mega-menu-title"><a href=" ">Shop Single</a></li>
                          <li><a href="single-product-slider.html">Shop Slider</a></li>
                          <li><a href="single-product-gallery-left.html">Shop Gallery Left</a></li>
                          <li><a href="single-product-gallery-right.html">Shop Gallery Right</a></li>
                          <li><a href="single-product-sticky-left.html">Shop Sticky Left</a></li>
                          <li><a href="single-product-sticky-right.html">Shop Sticky Right</a></li>
                        </ul>
                      </li>
                      <li className="banner-wrapper">
                        <a href="single-product.html"><img src="assets/images/banner-image/banner-menu.jpg" alt="" /></a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-dropdown">
                    <a href=" ">Pages <i className="ion-ios-arrow-down" /></a>
                    <ul className="sub-menu">
                      <li><a href="about.html">About Page</a></li>
                      <li><a href="cart.html">Cart Page</a></li>
                      <li><a href="checkout.html">Checkout Page</a></li>
                      <li><a href="compare.html">Compare Page</a></li>
                      <li><a href="login.html">Login &amp; Regiter Page</a></li>
                      <li><a href="my-account.html">Account Page</a></li>
                      <li><a href="wishlist.html">Wishlist Page</a></li>
                    </ul>
                  </li>
                  <li className="menu-dropdown">
                    <a href=" ">Blog <i className="ion-ios-arrow-down" /></a>
                    <ul className="sub-menu">
                      <li className="menu-dropdown position-static">
                        <a href=" ">Blog Grid <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                          <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a></li>
                          <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
                        </ul>
                      </li>
                      <li className="menu-dropdown position-static">
                        <a href=" ">Blog List <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                          <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a></li>
                          <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                        </ul>
                      </li>
                      <li className="menu-dropdown position-static">
                        <a href=" ">Blog Single <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                          <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a></li>
                          <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidebar</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </div>
              {/* Main Navigation Area end */}
              <div className="header_account_area">
                {/* Search start */}
                <div className="header_account_list search_list">
                  <a href=" "><i className="ion-ios-search-strong" /></a>
                  <div className="dropdown_search">
                    <form action=" ">
                      <input placeholder="Search entire store here ..." type="text" />
                      <div className="search-category">
                        <select className="bootstrap-select" name="poscats">
                          <option value={0}>All categories</option>
                          <option value={104}>
                            Fresh Food
                          </option>
                          <option value={183}>
                            - - Fresh Fruit
                          </option>
                          <option value={187}>
                            - - - - Bananas
                          </option>
                          <option value={188}>
                            - - - - Apples &amp; Pears
                          </option>
                          <option value={189}>
                            - - - - Berries &amp; Cherries
                          </option>
                          <option value={190}>
                            - - - - Oranges &amp; Citrus Fruit
                          </option>
                          <option value={191}>
                            - - - - Grapes
                          </option>
                          <option value={184}>
                            - - Fresh Vegetables
                          </option>
                          <option value={192}>
                            - - - - Potatoes &amp; Sweet Potatoes
                          </option>
                          <option value={193}>
                            - - - - Onions &amp; Leeks
                          </option>
                          <option value={194}>
                            - - - - Carrots &amp; Root Vegetables
                          </option>
                          <option value={195}>
                            - - - - Broccoli &amp; Cauliflower
                          </option>
                          <option value={196}>
                            - - - - Cabbages &amp; Greens
                          </option>
                          <option value={185}>
                            - - Fresh Salad &amp; Dips
                          </option>
                          <option value={197}>
                            - - - - Lettuce &amp; Salad bags
                          </option>
                          <option value={198}>
                            - - - - Tomatoes
                          </option>
                          <option value={199}>
                            - - - - Cucumber
                          </option>
                          <option value={200}>
                            - - - - Celery
                          </option>
                          <option value={201}>
                            - - - - Peppers
                          </option>
                          <option value={186}>
                            - - Milk, Butter &amp; Eggs
                          </option>
                          <option value={202}>
                            - - - - Milk
                          </option>
                          <option value={203}>
                            - - - - Spreads &amp; Margarine
                          </option>
                          <option value={204}>
                            - - - - Fresh Cream &amp; Custard
                          </option>
                          <option value={205}>
                            - - - - Eggs
                          </option>
                          <option value={206}>
                            - - - - Baking &amp; Cooking
                          </option>
                        </select>
                      </div>
                      <button type="submit"><i className="ion-ios-search-strong" /></button>
                    </form>
                  </div>
                </div>
                {/* Search  End */}
                {/* cart info start  */}
                <div className="cart-info d-flex">
                  <div className="mini-cart-warp">
                    <a href=" " className="count-cart"><span>$20.00</span></a>
                    <div className="mini-cart-content">
                      <ul>
                        <li className="single-shopping-cart">
                          <div className="shopping-cart-img">
                            <a href="single-product.html"><img alt="" src="assets/images/product-image/mini-cart/1.jpg" /></a>
                            <span className="product-quantity">1x</span>
                          </div>
                          <div className="shopping-cart-title">
                            <h4><a href="single-product.html">Juicy Couture...</a></h4>
                            <span>$9.00</span>
                            <div className="shopping-cart-delete">
                              <a href=" "><i className="ion-android-cancel" /></a>
                            </div>
                          </div>
                        </li>
                        <li className="single-shopping-cart">
                          <div className="shopping-cart-img">
                            <a href="single-product.html"><img alt="" src="assets/images/product-image/mini-cart/2.jpg" /></a>
                            <span className="product-quantity">1x</span>
                          </div>
                          <div className="shopping-cart-title">
                            <h4><a href="single-product.html">Water and Wind...</a></h4>
                            <span>$11.00</span>
                            <div className="shopping-cart-delete">
                              <a href=" "><i className="ion-android-cancel" /></a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="shopping-cart-total">
                        <h4>Subtotal : <span>$20.00</span></h4>
                        <h4>Shipping : <span>$7.00</span></h4>
                        <h4>Taxes : <span>$0.00</span></h4>
                        <h4 className="shop-total">Total : <span>$27.00</span></h4>
                      </div>
                      <div className="shopping-cart-btn text-center">
                        <a className="default-btn" href="checkout.html">checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* cart info  End */}
              </div>
            </div>
          </div>
          {/* mobile menu */}
          <div className="mobile-menu-area">
            <div className="mobile-menu">
              <nav id="mobile-menu-active">
                <ul className="menu-overflow">
                  <li>
                    <a href="index.html">HOME</a>
                    <ul>
                      <li>
                        <a href=" ">Home Organic</a>
                        <ul>
                          <li><a href="index.html">Organic 1</a></li>
                          <li><a href="index-2.html">Organic 2</a></li>
                          <li><a href="index-3.html">Organic 3</a></li>
                          <li><a href="index-4.html">Organic 4</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href=" ">Home Cosmetic</a>
                        <ul>
                          <li><a href="index-5.html">Cosmetic 1</a></li>
                          <li><a href="index-6.html">Cosmetic 2</a></li>
                          <li><a href="index-7.html">Cosmetic 3</a></li>
                          <li><a href="index-8.html">Cosmetic 4</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href=" ">Home Digital</a>
                        <ul>
                          <li><a href="index-9.html">Digital 1</a></li>
                          <li><a href="index-10.html">Digital 2</a></li>
                          <li><a href="index-11.html">Digital 3</a></li>
                          <li><a href="index-12.html">Digital 4</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href=" ">Home Furniture</a>
                        <ul>
                          <li><a href="index-13.html">Furniture 1</a></li>
                          <li><a href="index-14.html">Furniture 2</a></li>
                          <li><a href="index-15.html">Furniture 3</a></li>
                          <li><a href="index-16.html">Furniture 4</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href=" ">Home Medical</a>
                        <ul>
                          <li><a href="index-17.html">Medical 1</a></li>
                          <li><a href="index-18.html">Medical 2</a></li>
                          <li><a href="index-19.html">Medical 3</a></li>
                          <li><a href="index-20.html">Medical 4</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href=" ">Shop</a>
                    <ul>
                      <li>
                        <a href=" ">Shop Grid</a>
                        <ul>
                          <li><a href="shop-3-column.html">Shop Grid 3 Column</a></li>
                          <li><a href="shop-4-column.html">Shop Grid 4 Column</a></li>
                          <li><a href="shop-left-sidebar.html">Shop Grid Left Sidebar</a></li>
                          <li><a href="shop-right-sidebar.html">Shop Grid Right Sidebar</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href=" ">Shop List</a>
                        <ul>
                          <li><a href="shop-list.html">Shop List</a></li>
                          <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                          <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href=" ">Single Shop</a>
                        <ul>
                          <li><a href="single-product.html">Shop Single</a></li>
                          <li><a href="single-product-variable.html">Shop Variable</a></li>
                          <li><a href="single-product-affiliate.html">Shop Affiliate</a></li>
                          <li><a href="single-product-group.html">Shop Group</a></li>
                          <li><a href="single-product-tabstyle-2.html">Shop Tab 2</a></li>
                          <li><a href="single-product-tabstyle-3.html">Shop Tab 3</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href=" ">Single Shop</a>
                        <ul>
                          <li><a href="single-product-slider.html">Shop Slider</a></li>
                          <li><a href="single-product-gallery-left.html">Shop Gallery Left</a></li>
                          <li><a href="single-product-gallery-right.html">Shop Gallery Right</a></li>
                          <li><a href="single-product-sticky-left.html">Shop Sticky Left</a></li>
                          <li><a href="single-product-sticky-right.html">Shop Sticky Right</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href=" ">Pages</a>
                    <ul>
                      <li><a href="about.html">About Page</a></li>
                      <li><a href="cart.html">Cart Page</a></li>
                      <li><a href="checkout.html">Checkout Page</a></li>
                      <li><a href="compare.html">Compare Page</a></li>
                      <li><a href="login.html">Login &amp; Regiter Page</a></li>
                      <li><a href="my-account.html">Account Page</a></li>
                      <li><a href="wishlist.html">Wishlist Page</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href=" ">Blog</a>
                    <ul>
                      <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a></li>
                      <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
                      <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a></li>
                      <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                      <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a></li>
                      <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidebar</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </nav>
            </div>
          </div>
          {/* mobile menu end*/}
        </div>
      </div>
      {/*Header Bottom Account End */}
    </header>
    {/*  Main Header End */}
    
    
  </div>
  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12">
              <div className="tab-content quickview-big-img">
                <div id="pro-1" className="tab-pane fade show active">
                  <img src="assets/images/product-image/organic/product-11.jpg" alt="" />
                </div>
                <div id="pro-2" className="tab-pane fade">
                  <img src="assets/images/product-image/organic/product-9.jpg" alt="" />
                </div>
                <div id="pro-3" className="tab-pane fade">
                  <img src="assets/images/product-image/organic/product-20.jpg" alt="" />
                </div>
                <div id="pro-4" className="tab-pane fade">
                  <img src="assets/images/product-image/organic/product-19.jpg" alt="" />
                </div>
              </div>
              {/* Thumbnail Large Image End */}
              {/* Thumbnail Image End */}
              <div className="quickview-wrap mt-15">
                <div className="quickview-slide-active owl-carousel nav owl-nav-style owl-nav-style-2" role="tablist">
                  <a className="active" data-toggle="tab" href="#pro-1"><img src="assets/images/product-image/organic/product-11.jpg" alt="" /></a>
                  <a data-toggle="tab" href="#pro-2"><img src="assets/images/product-image/organic/product-9.jpg" alt="" /></a>
                  <a data-toggle="tab" href="#pro-3"><img src="assets/images/product-image/organic/product-20.jpg" alt="" /></a>
                  <a data-toggle="tab" href="#pro-4"><img src="assets/images/product-image/organic/product-19.jpg" alt="" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="product-details-content quickview-content">
                <h2>Originals Kaval Windbr</h2>
                <p className="reference">Reference:<span> demo_17</span></p>
                <div className="pro-details-rating-wrap">
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <span className="read-review"><a className="reviews" href=" ">Read reviews (1)</a></span>
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price not-cut">€18.90</li>
                  </ul>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
                <div className="pro-details-size-color">
                  <div className="pro-details-color-wrap">
                    <span>Color</span>
                    <div className="pro-details-color-content">
                      <ul>
                        <li className="blue" />
                        <li className="maroon active" />
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pro-details-quality">
                  <div className="cart-plus-minus">
                    <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={1} />
                  </div>
                  <div className="pro-details-cart btn-hover">
                    <a href=" "> + Add To Cart</a>
                  </div>
                </div>
                <div className="pro-details-wish-com">
                  <div className="pro-details-wishlist">
                    <a href=" "><i className="ion-android-favorite-outline" />Add to wishlist</a>
                  </div>
                  <div className="pro-details-compare">
                    <a href=" "><i className="ion-ios-shuffle-strong" />Add to compare</a>
                  </div>
                </div>
                <div className="pro-details-social-info">
                  <span>Share</span>
                  <div className="social-info">
                    <ul>
                      <li>
                        <a href=" "><i className="ion-social-facebook" /></a>
                      </li>
                      <li>
                        <a href=" "><i className="ion-social-twitter" /></a>
                      </li>
                      <li>
                        <a href=" "><i className="ion-social-google" /></a>
                      </li>
                      <li>
                        <a href=" "><i className="ion-social-instagram" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal end */}</div>
   



                    )
    }
}export default Header;