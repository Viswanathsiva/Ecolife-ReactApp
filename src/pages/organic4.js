import React from 'react';
import {Link} from 'react-router-dom';
class Organic4 extends React.Component{
    render(){
        return(
            <div>
                <div>
                {/* Slider Arae Start */}
                <div className="slider-area home-2 home-4">
                    <div className="slider-active-3 owl-carousel slider-hm8 owl-dot-style">
                    {/* Slider Single Item Start */}
                    <div className="slider-height-6 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-7.jpg)'}}>
                        <div className="container">
                        <div className="slider-content-5 slider-animated-1 text-left">
                            <span className="animated">100% NATURAL</span>
                            <h1 className="animated">
                            Fresh Vegetables<br />
                            And Fruits
                            </h1>
                            <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
                        </div>
                        </div>
                    </div>
                    {/* Slider Single Item End */}
                    {/* Slider Single Item Start */}
                    <div className="slider-height-6 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-8.jpg)'}}>
                        <div className="container">
                        <div className="slider-content-5 slider-animated-1 text-left">
                            <span className="animated">BEST OFFER SALE !</span>
                            <h1 className="animated">
                            Up To 70% Off <br />
                            Fresh Juice
                            </h1>
                            <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
                        </div>
                        </div>
                    </div>
                    {/* Slider Single Item End */}
                    </div>
                </div>
                {/* Slider Arae End */}
                {/* Static Area Start */}
                <section className="static-area mtb-60px">
                    <div className="container">
                    <div className="static-area-wrap">
                        <div className="row">
                        {/* Static Single Item Start */}
                        <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                            <div className="single-static pb-res-md-0 pb-res-sm-0 pb-res-xs-0">
                            <img src="assets/images/icons/static-icons-1.png" alt="" className="img-responsive" />
                            <div className="single-static-meta">
                                <h4>Free Shipping</h4>
                                <p>On all orders over $75.00</p>
                            </div>
                            </div>
                        </div>
                        {/* Static Single Item End */}
                        {/* Static Single Item Start */}
                        <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                            <div className="single-static pb-res-md-0 pb-res-sm-0 pb-res-xs-0 pt-res-xs-20">
                            <img src="assets/images/icons/static-icons-2.png" alt="" className="img-responsive" />
                            <div className="single-static-meta">
                                <h4>Free Returns</h4>
                                <p>Returns are free within 9 days</p>
                            </div>
                            </div>
                        </div>
                        {/* Static Single Item End */}
                        {/* Static Single Item Start */}
                        <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                            <div className="single-static pt-res-md-30 pb-res-sm-30 pb-res-xs-0 pt-res-xs-20">
                            <img src="assets/images/icons/static-icons-3.png" alt="" className="img-responsive" />
                            <div className="single-static-meta">
                                <h4>100% Payment Secure</h4>
                                <p>Your payment are safe with us.</p>
                            </div>
                            </div>
                        </div>
                        {/* Static Single Item End */}
                        {/* Static Single Item Start */}
                        <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                            <div className="single-static pt-res-md-30 pb-res-sm-30 pt-res-xs-20">
                            <img src="assets/images/icons/static-icons-4.png" alt="" className="img-responsive" />
                            <div className="single-static-meta">
                                <h4>Support 24/7</h4>
                                <p>Contact us 24 hours a day</p>
                            </div>
                            </div>
                        </div>
                        {/* Static Single Item End */}
                        </div>
                    </div>
                    </div>
                </section>
                {/* Static Area End */}
                {/* Banner Area Start */}
                <div className="banner-area home-2">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-xs-12">
                        <div className="banner-wrapper">
                            <a href="shop-4-column.html"><img src="assets/images/banner-image/8.jpg" alt="" /></a>
                        </div>
                        </div>
                        <div className="col-md-6 col-xs-12 mt-res-sx-30px">
                        <div className="banner-wrapper">
                            <a href="shop-4-column.html"><img src="assets/images/banner-image/9.jpg" alt="" /></a>
                        </div>
                        </div>
                        <div className="col-md-3 col-xs-12 mt-res-sx-30px">
                        <div className="banner-wrapper">
                            <a href="shop-4-column.html"><img src="assets/images/banner-image/10.jpg" alt="" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Banner Area End */}
                {/* Best Sells Area Start */}
                <section className="best-sells-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        {/* Section Title */}
                        <div className="section-title">
                            <h2>Best Sellers</h2>
                            <p>Add bestselling products to weekly line up</p>
                        </div>
                        {/* Section Title */}
                        </div>
                    </div>
                    {/* Best Sell Slider Carousel Start */}
                    <div className="best-sell-slider owl-carousel owl-nav-style">
                        {/* Single Item */}
                        <div className="list-product-2">
                        <article className="list-product mb-30px">
                            <div className="img-block">
                            <Link to='/mango' className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/mango1.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/mango2.jpg" alt="" />
                            </Link>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <ul className="product-flag">
                            <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>Fresho</span></a>
                            <h2><Link to='/mango' className="product-link">Mango</Link></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price">€18.90</li>
                                <li className="current-price">€34.21</li>
                                <li className="discount-price">-5%</li>
                                </ul>
                            </div>
                            </div>
                            <div className="add-to-link">
                            <ul>
                                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                                <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                                </li>
                                <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                                </li>
                            </ul>
                            </div>
                        </article>
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/Blueberry2.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/Blueberry1.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <ul className="product-flag">
                            <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>Fresho</span></a>
                            <h2><a href="single-product.html" className="product-link">Blueberry</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price">€18.90</li>
                                <li className="current-price">€15.12</li>
                                <li className="discount-price">-20%</li>
                                </ul>
                            </div>
                            </div>
                            <div className="add-to-link">
                            <ul>
                                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                                <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                                </li>
                                <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                                </li>
                            </ul>
                            </div>
                        </article>
                        </div>
                        {/* Single Item */}
                        <div className="list-product-2">
                        <article className="list-product">
                            <div className="img-block">
                            <Link to='/tomato' className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/tomato1.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/tomato2.jpg" alt="" />
                            </Link>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <ul className="product-flag">
                            <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>Fresho</span></a>
                            <h2><Link to='/tomato'className="product-link">Tomato</Link></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price not-cut">€18.90</li>
                                </ul>
                            </div>
                            </div>
                            <div className="add-to-link">
                            <ul>
                                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                                <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                                </li>
                                <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                                </li>
                            </ul>
                            </div>
                        </article>
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/watermelon1.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/watermelon2.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <ul className="product-flag">
                            <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>Fresho</span></a>
                            <h2><a href="single-product.html" className="product-link">Water Melon</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price not-cut">€18.90</li>
                                </ul>
                            </div>
                            </div>
                            <div className="add-to-link">
                            <ul>
                                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                                <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                                </li>
                                <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                                </li>
                            </ul>
                            </div>
                        </article>
                        </div>
                        {/* Single Item */}
                        <div className="list-product-2">
                        <article className="list-product mb-30px">
                            <div className="img-block">
                            <Link to='/pineapple' className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/pine1.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/pine2.jpg" alt="" />
                            </Link>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <ul className="product-flag">
                            <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>Fresho</span></a>
                            <h2><Link to='/pineapple' className="product-link">Pine Apple</Link></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price not-cut">€18.90</li>
                                </ul>
                            </div>
                            </div>
                            <div className="add-to-link">
                            <ul>
                                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                                <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                                </li>
                                <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                                </li>
                            </ul>
                            </div>
                        </article>
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/apple1.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/apple2.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <ul className="product-flag">
                            <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>Fresho</span></a>
                            <h2><a href="single-product.html" className="product-link">Apple</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price not-cut">€18.90</li>
                                </ul>
                            </div>
                            </div>
                            <div className="add-to-link">
                            <ul>
                                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                                <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                                </li>
                                <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                                </li>
                            </ul>
                            </div>
                        </article>
                        </div>
                        {/* Single Item */}
                        <div className="list-product-2">
                        <article className="list-product mb-30px">
                            <div className="img-block">
                            <Link to='/strawberry'className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/strawberry1.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/strawberry2.jpg" alt="" />
                            </Link>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <ul className="product-flag">
                            <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>Fresho</span></a>
                            <h2><Link to='/strawberry' className="product-link">Strawberry</Link></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price not-cut">€18.90</li>
                                </ul>
                            </div>
                            </div>
                            <div className="add-to-link">
                            <ul>
                                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                                <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                                </li>
                                <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                                </li>
                            </ul>
                            </div>
                        </article>
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/papaya1.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/papaya2.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <ul className="product-flag">
                            <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>Fresho</span></a>
                            <h2><a href="single-product.html" className="product-link">Papaya</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price not-cut">€29.90</li>
                                </ul>
                            </div>
                            </div>
                            <div className="add-to-link">
                            <ul>
                                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                                <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                                </li>
                                <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                                </li>
                            </ul>
                            </div>
                        </article>
                        </div>
                        {/* Single Item */}
                        <div className="list-product-2">
                        <article className="list-product mb-30px">
                            <div className="img-block">
                            <Link to='/fig' className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/fig1.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/fig2.jpg" alt="" />
                            </Link>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <ul className="product-flag">
                            <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>Fresho</span></a>
                            <h2><Link to='/fig' className="product-link">Fig</Link></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price not-cut">€08.90</li>
                                </ul>
                            </div>
                            </div>
                            <div className="add-to-link">
                            <ul>
                                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                                <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                                </li>
                                <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                                </li>
                            </ul>
                            </div>
                        </article>
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/cucumber2.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/cucumber1.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <ul className="product-flag">
                            <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>Fresho</span></a>
                            <h2><a href="single-product.html" className="product-link">Cucumber</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price not-cut">€19.90</li>
                                </ul>
                            </div>
                            </div>
                            <div className="add-to-link">
                            <ul>
                                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                                <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                                </li>
                                <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                                </li>
                            </ul>
                            </div>
                        </article>
                        </div>
                        {/* Single Item */}
                        <div className="list-product-2">
                        <article className="list-product mb-30px">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/orange1.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/orange2.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <ul className="product-flag">
                            <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>Fresho</span></a>
                            <h2><a href="single-product.html" className="product-link">Orange</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price">€23.90</li>
                                <li className="current-price">€21.51</li>
                                <li className="discount-price">-10%</li>
                                </ul>
                            </div>
                            </div>
                            <div className="add-to-link">
                            <ul>
                                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                                <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                                </li>
                                <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                                </li>
                            </ul>
                            </div>
                        </article>
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/pomo1.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/pomo2.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <ul className="product-flag">
                            <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>Fresho</span></a>
                            <h2><a href="single-product.html" className="product-link">Pomogranate</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price not-cut">€18.90</li>
                                </ul>
                            </div>
                            </div>
                            <div className="add-to-link">
                            <ul>
                                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                                <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                                </li>
                                <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                                </li>
                            </ul>
                            </div>
                        </article>
                        </div>
                        {/* Single Item */}
                        <div className="list-product-2">
                        <article className="list-product mb-30px">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/banana2.jpg" alt="Banana" />
                                <img className="second-img" src="assets/images/product-image/organic/banana1.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <ul className="product-flag">
                            <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>Fresho</span></a>
                            <h2><a href="single-product.html" className="product-link">Banana</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price">€11.90</li>
                                <li className="current-price">€10.12</li>
                                <li className="discount-price">-15%</li>
                                </ul>
                            </div>
                            </div>
                            <div className="add-to-link">
                            <ul>
                                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                                <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                                </li>
                                <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                                </li>
                            </ul>
                            </div>
                        </article>
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/grape1.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/grape2.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <ul className="product-flag">
                            <li className="new">New</li>
                            </ul>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>Fresho</span></a>
                            <h2><a href="single-product.html" className="product-link">Grapes</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price">€35.90</li>
                                <li className="current-price">€34.11</li>
                                <li className="discount-price">-5%</li>
                                </ul>
                            </div>
                            </div>
                            <div className="add-to-link">
                            <ul>
                                <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                                <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                                </li>
                                <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                                </li>
                            </ul>
                            </div>
                        </article>
                        </div>
                        {/* Single Item */}
                    </div>
                    {/* Best Sell Slider Carousel End */}
                    </div>
                </section>
                {/* Best Sell Area End */}
                {/* Feature Area 2 Start */}
                <section className="feature-area-2">
                    <div className="container">
                    <div className="row">
                        {/* left side */}
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="feature-left">
                            <img src="assets/images/feature-bg/1.jpg" alt="" className="img-responsive" />
                        </div>
                        </div>
                        {/* left side */}
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        {/* Section Title */}
                        <div className="section-title">
                            <h2>Featured Products</h2>
                            <p>Add featured products to weekly line up</p>
                        </div>
                        {/* Section Title */}
                        {/* Feature slide 2 start */}
                        <div className="feature-slider-2 owl-carousel owl-nav-style">
                            {/* slngle item */}
                            <div className="feature-slider-item">
                            <article className="list-product">
                                <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/naturalb.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/naturalb.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                    <i className="ion-ios-search-strong" />
                                    </a>
                                </div>
                                </div>
                                <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                                <h2><a href="single-product.html" className="product-link">B Natural Mixed Fruit Juice, 1L (Pack of 2)</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                    <li className="old-price not-cut">€29.90</li>
                                    </ul>
                                </div>
                                </div>
                            </article>
                            <article className="list-product">
                                <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/816sP4Co-SL._SL1500_.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/816sP4Co-SL._SL1500_.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                    <i className="ion-ios-search-strong" />
                                    </a>
                                </div>
                                </div>
                                <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                <h2><a href="single-product.html" className="product-link">Real Apple Fruit Power, 1L (Pack of 2)</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                    <li className="old-price not-cut">€29.90</li>
                                    </ul>
                                </div>
                                </div>
                            </article>
                            </div>
                            {/* slngle item */}
                            <div className="feature-slider-item">
                            <article className="list-product">
                                <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="second-img" src="assets/images/product-image/organic/mango-juice.jpg" alt="" />
                                    <img className="first-img" src="assets/images/product-image/organic/mango-juice.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                    <i className="ion-ios-search-strong" />
                                    </a>
                                </div>
                                </div>
                                <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                <h2><a href="single-product.html" className="product-link">Real Fruit Power Juice, Mango, 1L (Pack of 2)</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                    <li className="old-price">€23.90</li>
                                    <li className="current-price">€21.51</li>
                                    </ul>
                                </div>
                                </div>
                            </article>
                            <article className="list-product">
                                <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/orange-juice.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/orange-juice.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                    <i className="ion-ios-search-strong" />
                                    </a>
                                </div>
                                </div>
                                <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                <h2><a href="single-product.html" className="product-link">
                                    B Natural Orange+ Juice, 1L (Pack of 2)</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                    <li className="old-price">€23.90</li>
                                    <li className="current-price">€21.51</li>
                                    </ul>
                                </div>
                                </div>
                            </article>
                            </div>
                            {/* slngle item */}
                            <div className="feature-slider-item">
                            <article className="list-product">
                                <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/nestea.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/nestea.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                    <i className="ion-ios-search-strong" />
                                    </a>
                                </div>
                                </div>
                                <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                <h2><a href="single-product.html" className="product-link">NESTEA Instant Iced Tea, Lemon-400g</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                    <li className="old-price">€35.90</li>
                                    <li className="current-price">€34.11</li>
                                    </ul>
                                </div>
                                </div>
                            </article>
                            <article className="list-product">
                                <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/tea.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/tea.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                    <i className="ion-ios-search-strong" />
                                    </a>
                                </div>
                                </div>
                                <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                <h2><a href="single-product.html" className="product-link">Girnar Instant Tea (140g)</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                    <li className="old-price">€35.90</li>
                                    <li className="current-price">€34.11</li>
                                    </ul>
                                </div>
                                </div>
                            </article>
                            </div>
                            {/* slngle item */}
                            <div className="feature-slider-item">
                            <article className="list-product">
                                <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/tin-juice.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/tin-juice.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                    <i className="ion-ios-search-strong" />
                                    </a>
                                </div>
                                </div>
                                <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                <h2><a href="single-product.html" className="product-link">Del Monte ACE - 100% Mixed Fruit Juice </a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                    <li className="old-price">€18.90</li>
                                    <li className="current-price">€15.12</li>
                                    </ul>
                                </div>
                                </div>
                            </article>
                            <article className="list-product">
                                <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/lipton.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/lipton.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                    <i className="ion-ios-search-strong" />
                                    </a>
                                </div>
                                </div>
                                <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                <h2><a href="single-product.html" className="product-link">
                                    Lipton Ice Tea Lemon Flavoured,224g</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                    <li className="old-price not-cut">€29.90</li>
                                    </ul>
                                </div>
                                </div>
                            </article>
                            </div>
                            {/* slngle item */}
                            <div className="feature-slider-item">
                            <article className="list-product">
                                <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/pomegrenate-juice.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/pomegrenate-juice.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                    <i className="ion-ios-search-strong" />
                                    </a>
                                </div>
                                </div>
                                <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                <h2><a href="single-product.html" className="product-link">
                                    Real Fruit Juice, Pomegranate, 1L (Pack of 2)</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                    <li className="old-price not-cut">€18.90</li>
                                    </ul>
                                </div>
                                </div>
                            </article>
                            <article className="list-product">
                                <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/masala-jamun.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/masala-jamun.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                    <i className="ion-ios-search-strong" />
                                    </a>
                                </div>
                                </div>
                                <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                <h2><a href="single-product.html" className="product-link">B Natural Masala Jamun Juice, 1L </a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                    <li className="old-price not-cut">€11.90</li>
                                    </ul>
                                </div>
                                </div>
                            </article>
                            </div>
                            {/* slngle item */}
                            <div className="feature-slider-item">
                            <article className="list-product">
                                <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/bottle-apple.png" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/bottle-apple.png" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                    <i className="ion-ios-search-strong" />
                                    </a>
                                </div>
                                </div>
                                <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                                <h2><a href="single-product.html" className="product-link">Liquid Bottle Mixed Fruit Juice</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                    <li className="old-price not-cut">€29.90</li>
                                    </ul>
                                </div>
                                </div>
                            </article>
                            <article className="list-product">
                                <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/pine-juice.png" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/pine-juice.png" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                    <i className="ion-ios-search-strong" />
                                    </a>
                                </div>
                                </div>
                                <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                <h2><a href="single-product.html" className="product-link">Juscoco Yellow Coconut Water With Pineapple Juice</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                    <li className="old-price not-cut">€11.90</li>
                                    </ul>
                                </div>
                                </div>
                            </article>
                            </div>
                            {/* slngle item */}
                            <div className="feature-slider-item">
                            <article className="list-product">
                                <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/red-label.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/red-label.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                    <i className="ion-ios-search-strong" />
                                    </a>
                                </div>
                                </div>
                                <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                <h2><a href="single-product.html" className="product-link">
                                    Red Label Natural Care Tea</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                    <li className="old-price">€18.90</li>
                                    <li className="current-price">€34.21</li>
                                    </ul>
                                </div>
                                </div>
                            </article>
                            <article className="list-product">
                                <div className="img-block">
                                <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/nescafe.jpg" alt="" />
                                    <img className="second-img" src="assets/images/product-image/organic/nescafe.jpg" alt="" />
                                </a>
                                <div className="quick-view">
                                    <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                    <i className="ion-ios-search-strong" />
                                    </a>
                                </div>
                                </div>
                                <div className="product-decs">
                                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                <h2><a href="single-product.html" className="product-link">
                                    Nescafé Classic Coffee, 100g Dawn Jar</a></h2>
                                <div className="rating-product">
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                    <i className="ion-android-star" />
                                </div>
                                <div className="pricing-meta">
                                    <ul>
                                    <li className="old-price ">€34.90</li>
                                    <li className="current-price">€30.21</li>
                                    </ul>
                                </div>
                                </div>
                            </article>
                            </div>
                            {/* slngle item */}
                        </div>
                        {/* Feature slide 2 End */}
                        </div>
                    </div>
                    </div>
                </section>
                {/* Feature Area end */}
                {/* Recent Add Product Area Start */}
                <section className="recent-add-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        {/* Section Title */}
                        <div className="section-title">
                            <h2>New Arrivals</h2>
                            <p>Add new products to weekly line up</p>
                        </div>
                        {/* Section Title */}
                        </div>
                    </div>
                    {/* Recent Product slider Start */}
                    <div className="recent-product-slider owl-carousel owl-nav-style">
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/greenchilli2.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/greenchilli1.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                            <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                            </a>
                            </div>
                        </div>
                        <ul className="product-flag">
                            <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                            <h2><a href="single-product.html" className="product-link">Green Chilli</a></h2>
                            <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                            <ul>
                                <li className="old-price">€23.90</li>
                                <li className="current-price">€21.51</li>
                                <li className="discount-price">-10%</li>
                            </ul>
                            </div>
                        </div>
                        <div className="add-to-link">
                            <ul>
                            <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                            <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                            </li>
                            <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                            </li>
                            </ul>
                        </div>
                        </article>
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/beetroot2.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/beetroot1.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                            <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                            </a>
                            </div>
                        </div>
                        <ul className="product-flag">
                            <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                            <h2><a href="single-product.html" className="product-link">Beetroot</a></h2>
                            <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                            <ul>
                                <li className="old-price">€35.90</li>
                                <li className="current-price">€34.21</li>
                                <li className="discount-price">-5%</li>
                            </ul>
                            </div>
                        </div>
                        <div className="add-to-link">
                            <ul>
                            <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                            <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                            </li>
                            <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                            </li>
                            </ul>
                        </div>
                        </article>
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/capsicum1.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/capsicum2.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                            <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                            </a>
                            </div>
                        </div>
                        <ul className="product-flag">
                            <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                            <h2><a href="single-product.html" className="product-link">Capsicum
                            </a></h2>
                            <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                            <ul>
                                <li className="old-price not-cut">€29.90</li>
                            </ul>
                            </div>
                        </div>
                        <div className="add-to-link">
                            <ul>
                            <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                            <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                            </li>
                            <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                            </li>
                            </ul>
                        </div>
                        </article>
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/pumpkin1.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/pumpkin2.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                            <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                            </a>
                            </div>
                        </div>
                        <ul className="product-flag">
                            <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                            <h2><a href="single-product.html" className="product-link">Pumpkin</a></h2>
                            <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                            <ul>
                                <li className="old-price not-cut">€29.90</li>
                            </ul>
                            </div>
                        </div>
                        <div className="add-to-link">
                            <ul>
                            <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                            <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                            </li>
                            <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                            </li>
                            </ul>
                        </div>
                        </article>
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/tomato1.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/tomato2.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                            <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                            </a>
                            </div>
                        </div>
                        <ul className="product-flag">
                            <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                            <h2><a href="single-product.html" className="product-link">Tomato</a></h2>
                            <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                            <ul>
                                <li className="old-price not-cut">€29.90</li>
                            </ul>
                            </div>
                        </div>
                        <div className="add-to-link">
                            <ul>
                            <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                            <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                            </li>
                            <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                            </li>
                            </ul>
                        </div>
                        </article>
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/potato1.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/potato2.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                            <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                            </a>
                            </div>
                        </div>
                        <ul className="product-flag">
                            <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                            <h2><a href="single-product.html" className="product-link">Potato</a></h2>
                            <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                            <ul>
                                <li className="old-price">€12.90</li>
                                <li className="current-price">€10.21</li>
                                <li className="discount-price">-10%</li>
                            </ul>
                            </div>
                        </div>
                        <div className="add-to-link">
                            <ul>
                            <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                            <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                            </li>
                            <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                            </li>
                            </ul>
                        </div>
                        </article>
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/onion2.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/onion1.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                            <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                            </a>
                            </div>
                        </div>
                        <ul className="product-flag">
                            <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                            <h2><a href="single-product.html" className="product-link">Onion</a></h2>
                            <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                            <ul>
                                <li className="old-price not-cut">€11.90</li>
                            </ul>
                            </div>
                        </div>
                        <div className="add-to-link">
                            <ul>
                            <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                            <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                            </li>
                            <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                            </li>
                            </ul>
                        </div>
                        </article>
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/carrot2.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/carrot1.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                            <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                            </a>
                            </div>
                        </div>
                        <ul className="product-flag">
                            <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                            <h2><a href="single-product.html" className="product-link">Carrot</a></h2>
                            <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                            <ul>
                                <li className="old-price not-cut">€11.90</li>
                            </ul>
                            </div>
                        </div>
                        <div className="add-to-link">
                            <ul>
                            <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                            <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                            </li>
                            <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                            </li>
                            </ul>
                        </div>
                        </article>
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/garlic1.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/garlic2.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                            <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                            </a>
                            </div>
                        </div>
                        <ul className="product-flag">
                            <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                            <h2><a href="single-product.html" className="product-link">Garlic</a></h2>
                            <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                            <ul>
                                <li className="old-price not-cut">€11.90</li>
                            </ul>
                            </div>
                        </div>
                        <div className="add-to-link">
                            <ul>
                            <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                            <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                            </li>
                            <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                            </li>
                            </ul>
                        </div>
                        </article>
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/cocunut1.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/cocunut2.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                            <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                            </a>
                            </div>
                        </div>
                        <ul className="product-flag">
                            <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                            <h2><a href="single-product.html" className="product-link">Cocunut</a></h2>
                            <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                            <ul>
                                <li className="old-price not-cut">€15.90</li>
                            </ul>
                            </div>
                        </div>
                        <div className="add-to-link">
                            <ul>
                            <li className="cart"><a className="cart-btn" href=" ">ADD TO CART </a></li>
                            <li>
                                <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                            </li>
                            <li>
                                <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                            </li>
                            </ul>
                        </div>
                        </article>
                        {/* Single Item */}
                    </div>
                    {/* Recent product slider end */}
                    </div>
                </section>
                {/* Recent product area end */}
                {/* Banner Area 2 Start */}
                <div className="banner-area-2">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="banner-inner">
                            <a href="shop-4-column.html"><img src="assets/images/banner-image/4.jpg" alt="" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Banner Area 2 end */}
                {/* Feature Area Start */}
                <section className="feature-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        {/* Section Title */}
                        <div className="section-title">
                            <h2>Recently Added</h2>
                            <p>Add products to weekly line up</p>
                        </div>
                        {/* Section Title */}
                        </div>
                    </div>
                    {/* Feature Slider Start */}
                    <div className="feature-slider owl-carousel owl-nav-style">
                        {/* Single Item */}
                        <div className="feature-slider-item">
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/tata-channa1.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/tata-channa.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                            <h2><a href="single-product.html" className="product-link">
                                Tata Sampann Unpolished Chana Dal, 1kg</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star"> </i>
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price not-cut">€29.90</li>
                                </ul>
                            </div>
                            </div>
                        </article>
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/oats1.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/oats.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                            <h2><a href="single-product.html" className="product-link">Quaker Oats Pouch, 1000 g</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price not-cut">€29.90</li>
                                </ul>
                            </div>
                            </div>
                        </article>
                        </div>
                        {/* Single Item */}
                        <div className="feature-slider-item">
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/sugar.jpeg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/sugar1.jpeg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                            <h2><a href="single-product.html" className="product-link">Parry's White Label Sugar</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price">€23.90</li>
                                <li className="current-price">€21.51</li>
                                </ul>
                            </div>
                            </div>
                        </article>
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/amu.jpeg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/amu.jpeg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                            <h2><a href="single-product.html" className="product-link">Amul Plain cheese Block</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price">€23.90</li>
                                <li className="current-price">€21.51</li>
                                </ul>
                            </div>
                            </div>
                        </article>
                        </div>
                        {/* Single Item */}
                        <div className="feature-slider-item">
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/butter.jpeg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/butter.jpeg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                            <h2><a href="single-product.html" className="product-link">Heritage Pasteurized Butter</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price">€35.90</li>
                                <li className="current-price">€34.11</li>
                                </ul>
                            </div>
                            </div>
                        </article>
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/semiya1.jpeg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/semiya1.jpeg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                            <h2><a href="single-product.html" className="product-link">MTR Vermicelli 850 g  (Plain)</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price">€35.90</li>
                                <li className="current-price">€34.11</li>
                                </ul>
                            </div>
                            </div>
                        </article>
                        </div>
                        {/* Single Item */}
                        <div className="feature-slider-item">
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/noodles1.jpeg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/noodles1.jpeg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                            <h2><a href="single-product.html" className="product-link">Ching's Secret Veg Hakka Noodles</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price">€18.90</li>
                                <li className="current-price">€15.12</li>
                                </ul>
                            </div>
                            </div>
                        </article>
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/yippe.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/yippe.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                            <h2><a href="single-product.html" className="product-link">YIPPEE Tricolor Masala Pasta</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price not-cut">€29.90</li>
                                </ul>
                            </div>
                            </div>
                        </article>
                        </div>
                        {/* Single Item */}
                        <div className="feature-slider-item">
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/pazzta.jpeg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/pazzta.jpeg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                            <h2><a href="single-product.html" className="product-link">Maggi Cheese Pazzta Pasta  (140 g)</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price not-cut">€9.90</li>
                                </ul>
                            </div>
                            </div>
                        </article>
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/choco flakes.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/choco flakes.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                            <h2><a href="single-product.html" className="product-link">Kwality Choco Flakes  (1 kg)</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price not-cut">€9.90</li>
                                </ul>
                            </div>
                            </div>
                        </article>
                        </div>
                        {/* Single Item */}
                        <div className="feature-slider-item">
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/kissan.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/kissan.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                            <h2><a href="single-product.html" className="product-link">Kissan Orange Marmalade 500 g</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price">€18.90</li>
                                </ul>
                            </div>
                            </div>
                        </article>
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/honey.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/honey.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                            <h2><a href="single-product.html" className="product-link">ORGANIC INDIA Honey(250 g)</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price">€11.90</li>
                                </ul>
                            </div>
                            </div>
                        </article>
                        </div>
                        {/* Single Item */}
                        <div className="feature-slider-item">
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/pizza-sauce.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/pizza-sauce.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>GRAPIC CORNER</span></a>
                            <h2><a href="single-product.html" className="product-link">FUN FOODS Pasta &amp; Pizza Sauce</a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price">€11.90</li>
                                <li className="current-price">€10.12</li>
                                </ul>
                            </div>
                            </div>
                        </article>
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/bread-mix.jpg" alt="" />
                                <img className="second-img" src="assets/images/product-image/organic/bread-mix.jpg" alt="" />
                            </a>
                            <div className="quick-view">
                                <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                <i className="ion-ios-search-strong" />
                                </a>
                            </div>
                            </div>
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                            <h2><a href="single-product.html" className="product-link">Snapin Cheesy Garlic Bread Mix </a></h2>
                            <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                                <ul>
                                <li className="old-price not-cut">€18.90</li>
                                </ul>
                            </div>
                            </div>
                        </article>
                        </div>
                        {/* Single Item */}
                    </div>
                    {/* Feature Slider End */}
                    </div>
                </section>
                {/* Feature Area End */}
                {/* Testimonial Area Start */}
                <section className="testimonial-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        {/* Section Title */}
                        <div className="section-title">
                            <h2>Client Testimonials</h2>
                            <p>What our happy customers says !</p>
                        </div>
                        {/* Section Title */}
                        </div>
                    </div>
                    {/* Testimonial Slider Start */}
                    <div className="testi-slider owl-carousel owl-dot-style">
                        {/* Single item */}
                        <div className="testi-slider-wrapper">
                        <div className="testi-slider-inner">
                            <div className="testi-img">
                            <img src="assets/images/testimonial-image/1.png" alt="" />
                            </div>
                            <div className="testi-content">
                            <div className="testi-content-text">
                                All Perfect !! I have three sites with magento , this theme is the best !! Excellent support , advice theme installation package , sorry for English, are Italian but I had no problem !! Thank you !
                            </div>
                            <div className="author-text">
                                <h4>orando BLoom <span>demo@posthemes.com</span></h4>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* Single item */}
                        <div className="testi-slider-wrapper">
                        <div className="testi-slider-inner">
                            <div className="testi-img">
                            <img src="assets/images/testimonial-image/2.png" alt="" />
                            </div>
                            <div className="testi-content">
                            <div className="testi-content-text">
                                All Perfect !! I have three sites with magento , this theme is the best !! Excellent support , advice theme installation package , sorry for English, are Italian but I had no problem !! Thank you !
                            </div>
                            <div className="author-text">
                                <h4>orando BLoom <span>demo@posthemes.com</span></h4>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* Single item */}
                        <div className="testi-slider-wrapper">
                        <div className="testi-slider-inner">
                            <div className="testi-img">
                            <img src="assets/images/testimonial-image/1.png" alt="" />
                            </div>
                            <div className="testi-content">
                            <div className="testi-content-text">
                                All Perfect !! I have three sites with magento , this theme is the best !! Excellent support , advice theme installation package , sorry for English, are Italian but I had no problem !! Thank you !
                            </div>
                            <div className="author-text">
                                <h4>orando BLoom <span>demo@posthemes.com</span></h4>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* Single item */}
                        <div className="testi-slider-wrapper">
                        <div className="testi-slider-inner">
                            <div className="testi-img">
                            <img src="assets/images/testimonial-image/34339by.jpg" alt="" />
                            </div>
                            <div className="testi-content">
                            <div className="testi-content-text">
                                All Perfect !! I have three sites with magento , this theme is the best !! Excellent support , advice theme installation package , sorry for English, are Italian but I had no problem !! Thank you !
                            </div>
                            <div className="author-text">
                                <h4>John Wick<span>demo@posthemes.com</span></h4>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* Single item */}
                    </div>
                    {/* Testimonial Slider End */}
                    </div>
                </section>
                {/* Testimonial Area end */}
                {/* Brand area start */}
                <div className="brand-area">
                    <div className="container">
                    <div className="brand-slider owl-carousel owl-nav-style owl-nav-style-2">
                        <div className="brand-slider-item">
                        <a href=" "><img src="assets/images/brand-logo/1.jpg" alt="" /></a>
                        </div>
                        <div className="brand-slider-item">
                        <a href=" "><img src="assets/images/brand-logo/2.jpg" alt="" /></a>
                        </div>
                        <div className="brand-slider-item">
                        <a href=" "><img src="assets/images/brand-logo/3.jpg" alt="" /></a>
                        </div>
                        <div className="brand-slider-item">
                        <a href=" "><img src="assets/images/brand-logo/4.jpg" alt="" /></a>
                        </div>
                        <div className="brand-slider-item">
                        <a href=" "><img src="assets/images/brand-logo/5.jpg" alt="" /></a>
                        </div>
                        <div className="brand-slider-item">
                        <a href=" "><img src="assets/images/brand-logo/1.jpg" alt="" /></a>
                        </div>
                        <div className="brand-slider-item">
                        <a href=" "><img src="assets/images/brand-logo/2.jpg" alt="" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Brand area end */}
                </div>

            </div>

        )
    }
}
export default Organic4;