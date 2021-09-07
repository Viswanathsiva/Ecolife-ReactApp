import React from 'react';
import {Link} from 'react-router-dom';
class Organic3 extends React.Component{
    render(){
        return(
            <div>
                <div>
                {/* Slider Arae Start */}
                <div className="slider-area">
                    <div className="slider-active-3 owl-carousel slider-hm8 owl-dot-style">
                    {/* Slider Single Item Start */}
                    <div className="slider-height-6 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-5.jpg)'}}>
                        <div className="container">
                        <div className="slider-content-5 slider-animated-1 text-left">
                            <span className="animated">100% NATURAL</span>
                            <h1 className="animated">
                            Fresh Lemonade <br />
                            Summer Drinks
                            </h1>
                            <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
                        </div>
                        </div>
                    </div>
                    {/* Slider Single Item End */}
                    {/* Slider Single Item Start */}
                    <div className="slider-height-6 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-6.jpg)'}}>
                        <div className="container">
                        <div className="slider-content-5 slider-animated-1 text-left">
                            <span className="animated">100% PURE &amp; NATURE</span>
                            <h1 className="animated">
                            Fresh Mango Juice<br />
                            Just Fruit
                            </h1>
                            <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
                        </div>
                        </div>
                    </div>
                    {/* Slider Single Item End */}
                    </div>
                </div>
                {/* Slider Arae End */}
                {/* Banner Area Start */}
                <div className="banner-3-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-res-xs-30">
                        <div className="banner-wrapper">
                            <a href="shop-4-column.html"><img src="assets/images/banner-image/5.jpg" alt="" /></a>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="banner-wrapper mb-30px">
                            <a href="shop-4-column.html"><img src="assets/images/banner-image/6.jpg" alt="" /></a>
                        </div>
                        <div className="banner-wrapper">
                            <a href="shop-4-column.html"><img src="assets/images/banner-image/7.jpg" alt="" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Banner Area End */}
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
                {/* Best Sells Area Start */}
                <section className="best-sells-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <h2>Best Sellers</h2>
                            <p>Add bestselling products to weekly line up</p>
                        </div>
                        {/* Section Title Start */}
                        </div>
                    </div>
                    {/* Best Sell Slider Carousel Start */}
                    <div className="best-sell-slider owl-carousel owl-nav-style">
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <Link to='/bnatural' className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/naturalb.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/naturalb.jpg" alt="" />
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
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><Link to='/bnatural' className="product-link">B Natural Mixed Fruit Juice, 1L (Pack of 2)</Link></h2>
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
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <Link to='/mangodrink' className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/10.jpg" alt="" />
                            {/* <img class="second-img" src="assets/images/product-image/organic/product-1.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><Link to='/mangodrink' className="product-link">Mango-drink</Link></h2>
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
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <Link to='/schweepes' className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/20.jpg" alt="" />
                            {/* <img class="second-img" src="assets/images/product-image/organic/product-4.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><Link to='/schweepes' className="product-link">Schweepes</Link></h2>
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
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <Link to='/monster' className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/19.jpg" alt="" />
                            {/* <img class="second-img" src="assets/images/product-image/organic/product-5.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>COld</span></a>
                            <h2><Link to='/monster' className="product-link">Monster</Link></h2>
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
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <Link to='/milk' className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/28.jpg" alt="" />
                            {/* <img class="second-img" src="assets/images/product-image/organic/product-6.jpg" alt="" /> */}
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
                            <h2><Link to='/milk' className="product-link">Milk</Link></h2>
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
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/33.jpg" alt="" />
                            {/* <img class="second-img" src="assets/images/product-image/organic/product-8.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><a href="single-product.html" className="product-link">Lemon+Mint</a></h2>
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
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/masala-jamun.jpg" alt="" />
                            {/* <img class="second-img" src="assets/images/product-image/organic/product-9.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><a href="single-product.html" className="product-link">Masala-Jamun</a></h2>
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
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/34.jpg" alt="" />
                            {/* <img class="second-img" src="assets/images/product-image/organic/product-10.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><a href="single-product.html" className="product-link">Habit-Lemon</a></h2>
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
                            <img className="first-img" src="assets/images/product-image/organic/36.jpg" alt="" />
                            {/* <img class="second-img" src="assets/images/product-image/organic/product-12.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
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
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/coco-water1.jpg" alt="" />
                            {/* <img class="second-img" src="assets/images/product-image/organic/product-3.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><a href="single-product.html" className="product-link">Coconut-Water</a></h2>
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
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/34.jpg" alt="" />
                            {/* <img class="second-img" src="assets/images/product-image/organic/product-14.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><a href="single-product.html" className="product-link">Habit-Strawberry</a></h2>
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
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/guava1.jpeg" alt="" />
                            {/* <img class="second-img" src="assets/images/product-image/organic/product-2.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><a href="single-product.html" className="product-link">Guava-Drink</a></h2>
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
                        {/* right side */}
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
                {/* Feature area 2 End */}
                {/* Hot deal area Start */}
                <section className="hot-deal-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        {/* Section Title */}
                        <div className="section-title">
                            <h2>Hot Deals</h2>
                            <p>Add hot products to weekly line up</p>
                        </div>
                        {/* Section Title */}
                        </div>
                    </div>
                    {/* Hot Deal Slider 2 Start */}
                    <div className="hot-deal-2 owl-carousel owl-nav-style">
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="hot-item-inner">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/38.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-16.jpg" alt="" /> */}
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
                        </div>
                        <div className="product-wrapper">
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>Fresho</span></a>
                            <h2><a href="single-product.html" className="product-link">Fruit-Mixtures</a></h2>
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
                            </div>
                            <div className="in-stock">Availability: <span>300 In Stock</span></div>
                            <div className="clockdiv">
                            <div className="title_countdown">Hurry Up! Offers ends in:</div>
                            <div data-countdown="2021/03/01" />
                            </div>
                        </div>
                        </article>
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="hot-item-inner">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/39.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-12.jpg" alt="" /> */}
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
                        </div>
                        <div className="product-wrapper">
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><a href="single-product.html" className="product-link">Coco-cola</a></h2>
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
                            </div>
                            <div className="in-stock">Availability: <span>300 In Stock</span></div>
                            <div className="clockdiv">
                            <div className="title_countdown">Hurry Up! Offers ends in:</div>
                            <div data-countdown="2021/03/01" />
                            </div>
                        </div>
                        </article>
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="hot-item-inner">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/40.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-2.jpg" alt="" /> */}
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
                        </div>
                        <div className="product-wrapper">
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>Fresho</span></a>
                            <h2><a href="single-product.html" className="product-link">Pine+Mango-Juicy</a></h2>
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
                            </div>
                            <div className="in-stock">Availability: <span>299 In Stock</span></div>
                            <div className="clockdiv">
                            <div className="title_countdown">Hurry Up! Offers ends in:</div>
                            <div data-countdown="2021/03/01" />
                            </div>
                        </div>
                        </article>
                        {/* Single Item */}
                        <article className="list-product">
                        <div className="hot-item-inner">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/41.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-14.jpg" alt="" /> */}
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
                        </div>
                        <div className="product-wrapper">
                            <div className="product-decs">
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><a href="single-product.html" className="product-link">Pepsi</a></h2>
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
                            </div>
                            <div className="in-stock">Availability: <span>299 In Stock</span></div>
                            <div className="clockdiv">
                            <div className="title_countdown">Hurry Up! Offers ends in:</div>
                            <div data-countdown="2021/03/01" />
                            </div>
                        </div>
                        </article>
                        {/* Single Item */}
                    </div>
                    {/* Hot Deal Slider 2 Start */}
                    </div>
                </section>
                {/* Hot Deal Area End */}
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
                        {/* Product Single Item */}
                        <div className="product-inner-item">
                        <article className="list-product mb-30px">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/44.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-16.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><a href="single-product.html" className="product-link">Amul Real Ice Cream</a></h2>
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
                                <img className="first-img" src="assets/images/product-image/organic/43.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-2.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><a href="single-product.html" className="product-link">Sprite</a></h2>
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
                        {/* Product Single Item */}
                        <div className="product-inner-item">
                        <article className="list-product mb-30px">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/42.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-13.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Dessert</span></a>
                            <h2><a href="single-product.html" className="product-link">Orange Cream Cake</a></h2>
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
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/47.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-10.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><a href="single-product.html" className="product-link">Delights Mango</a></h2>
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
                        {/* Product Single Item */}
                        <div className="product-inner-item">
                        <article className="list-product mb-30px">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/48.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-12.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><a href="single-product.html" className="product-link">Sparkling Water Soda</a></h2>
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
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/49.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-1.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><a href="single-product.html" className="product-link">Appy Fizz Apple Juice</a></h2>
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
                        {/* Product Single Item */}
                        <div className="product-inner-item">
                        <article className="list-product mb-30px">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/50.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-14.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><a href="single-product.html" className="product-link">Appy Fizz Apple Juice</a></h2>
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
                                <img className="first-img" src="assets/images/product-image/organic/51.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-16.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><a href="single-product.html" className="product-link">Pressery Sugarcane</a></h2>
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
                        {/* Product Single Item */}
                        <div className="product-inner-item">
                        <article className="list-product mb-30px">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/52.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-9.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Dessert</span></a>
                            <h2><a href="single-product.html" className="product-link">Mango Ice</a></h2>
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
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/34.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-15.jpg" alt="" /> */}
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
                            <h2><a href="single-product.html" className="product-link">Habit-Lemon</a></h2>
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
                                <li className="current-price">€15.11</li>
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
                        {/* Product Single Item */}
                        <div className="product-inner-item">
                        <article className="list-product mb-30px">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/22.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-18.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Dessert</span></a>
                            <h2><a href="single-product.html" className="product-link">Nutella</a></h2>
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
                                <img className="first-img" src="assets/images/product-image/organic/45.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-20.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Freeze</span></a>
                            <h2><a href="single-product.html" className="product-link">Strwberry-Stick</a></h2>
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
                        {/* Product Single Item */}
                        <div className="product-inner-item">
                        <article className="list-product mb-30px">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/orange -wafer1.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-16.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Biscuit</span></a>
                            <h2><a href="single-product.html" className="product-link">Orange Wafer</a></h2>
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
                                <img className="first-img" src="assets/images/product-image/organic/tropican-straw.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-2.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><a href="single-product.html" className="product-link">Tropicana-Strawberry</a></h2>
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
                        {/* Product Single Item */}
                        <div className="product-inner-item">
                        <article className="list-product mb-30px">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/16.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-13.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                            <h2><a href="single-product.html" className="product-link">Fanta</a></h2>
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
                        <article className="list-product">
                            <div className="img-block">
                            <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/organic/26.jpg" alt="" />
                                {/* <img class="second-img" src="assets/images/product-image/organic/product-10.jpg" alt="" /> */}
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
                            <a className="inner-link" href="shop-4-column.html"><span>Dessert</span></a>
                            <h2><a href="single-product.html" className="product-link">Snickers</a></h2>
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
                    </div>
                    {/* Recent Area Slider End */}
                    </div>
                </section>
                {/* Recent product area end */}
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
                {/* Blog area Start */}
                <section className="blog-area mb-30px">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        {/* Section title */}
                        <div className="section-title">
                            <h2>Latest Blogs</h2>
                            <p>Present posts in a best way to highlight interesting moments of your blog.</p>
                        </div>
                        {/* Section title */}
                        </div>
                    </div>
                    {/* Blog Slider Start */}
                    <div className="blog-slider-active owl-carousel owl-nav-style">
                        {/* single item */}
                        <article className="blog-post">
                        <div className="blog-post-top">
                            <div className="blog-img">
                            <img src="assets/images/blog-image/blog-1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="blog-post-content d-flex">
                            <div className="blog-post-content-cell">
                            <a href="blog-grid-left-sidebar.html" className="blog-meta">Fashion</a>
                            <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">This is First Post For XipBlog</a></h4>
                            <p className="blog-text">
                                Lorem Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the industrys ...
                            </p>
                            <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
                            </div>
                        </div>
                        </article>
                        {/* single item */}
                        <article className="blog-post">
                        <div className="blog-post-top">
                            <div className="blog-img">
                            <img src="assets/images/blog-image/blog-2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="blog-post-content d-flex">
                            <div className="blog-post-content-cell">
                            <a href="blog-grid-left-sidebar.html" className="blog-meta">Fashion</a>
                            <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">This is Secound Post For XipBlog</a></h4>
                            <p className="blog-text">
                                Lorem Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the industrys ...
                            </p>
                            <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
                            </div>
                        </div>
                        </article>
                        {/* single item */}
                        <article className="blog-post">
                        <div className="blog-post-top">
                            <div className="blog-img">
                            <img src="assets/images/blog-image/blog-2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="blog-post-content d-flex">
                            <div className="blog-post-content-cell">
                            <a href="blog-grid-left-sidebar.html" className="blog-meta">Fashion</a>
                            <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">This is Third Post For XipBlog</a></h4>
                            <p className="blog-text">
                                Lorem Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the industrys ...
                            </p>
                            <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
                            </div>
                        </div>
                        </article>
                        {/* single item */}
                        <article className="blog-post">
                        <div className="blog-post-top">
                            <div className="blog-img">
                            <img src="assets/images/blog-image/blog-1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="blog-post-content d-flex">
                            <div className="blog-post-content-cell">
                            <a href="blog-grid-left-sidebar.html" className="blog-meta">Fruits</a>
                            <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">This is Foruth Post For XipBlog</a></h4>
                            <p className="blog-text">Lorem ipsum dolor sit amet con pariatur quos molestiae tenetur ullam placeat harum veritafugiat...</p>
                            <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
                            </div>
                        </div>
                        </article>
                        {/* single item */}
                    </div>
                    {/* Blog Slider Start */}
                    </div>
                </section>
                {/* Blog Area End */}
                {/* Category Area Start */}
                <section className="categorie-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        {/* Section Title */}
                        <div className="section-title">
                            <h2>Popular Categories</h2>
                            <p>Add Popular Categories to weekly line up</p>
                        </div>
                        {/* Section Title */}
                        </div>
                    </div>
                    {/* Category Slider Start */}
                    <div className="category-slider owl-carousel owl-nav-style">
                        {/* Single item */}
                        <div className="category-item">
                        <div className="category-list mb-30px">
                            <div className="category-thumb">
                            <a href="shop-4-column.html">
                                <img src="assets/images/product-image/organic/thumb2.jpg" alt="" />
                            </a>
                            </div>
                            <div className="desc-listcategoreis">
                            <div className="name_categories">
                                <h4>Fresh Vegetables</h4>
                            </div>
                            <span className="number_product">80 Products</span>
                            <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
                            </div>
                        </div>
                        <div className="category-list">
                            <div className="category-thumb">
                            <a href="shop-4-column.html">
                                <img src="assets/images/product-image/organic/dates.jpg" alt="" />
                            </a>
                            </div>
                            <div className="desc-listcategoreis">
                            <div className="name_categories">
                                <h4>Fresh Salad &amp; Dips</h4>
                            </div>
                            <span className="number_product">17 Products</span>
                            <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
                            </div>
                        </div>
                        </div>
                        {/* Single item */}
                        <div className="category-item">
                        <div className="category-list mb-30px">
                            <div className="category-thumb">
                            <a href="shop-4-column.html">
                                <img src="assets/images/product-image/organic/thumb1.jpg" alt="" />
                            </a>
                            </div>
                            <div className="desc-listcategoreis">
                            <div className="name_categories">
                                <h4>Fresh Fruit</h4>
                            </div>
                            <span className="number_product">200 Products</span>
                            <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
                            </div>
                        </div>
                        <div className="category-list">
                            <div className="category-thumb">
                            <a href="shop-4-column.html">
                                <img src="assets/images/product-image/organic/thumb-4.jpg" alt="" />
                            </a>
                            </div>
                            <div className="desc-listcategoreis">
                            <div className="name_categories">
                                <h4>Baking &amp; Cooking</h4>
                            </div>
                            <span className="number_product">70 Products</span>
                            <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
                            </div>
                        </div>
                        </div>
                        {/* Single item */}
                        <div className="category-item">
                        <div className="category-list mb-30px">
                            <div className="category-thumb">
                            <a href="shop-4-column.html">
                                <img src="assets/images/product-image/organic/thumb-5.jpg" alt="" />
                            </a>
                            </div>
                            <div className="desc-listcategoreis">
                            <div className="name_categories">
                                <h4>Fresh Cream &amp; Custard</h4>
                            </div>
                            <span className="number_product">107 Products</span>
                            <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
                            </div>
                        </div>
                        <div className="category-list">
                            <div className="category-thumb">
                            <a href="shop-4-column.html">
                                <img src="assets/images/product-image/organic/thumb-6.jpg" alt="" />
                            </a>
                            </div>
                            <div className="desc-listcategoreis">
                            <div className="name_categories">
                                <h4>Milk, Butter &amp; Eggs</h4>
                            </div>
                            <span className="number_product">57 Products</span>
                            <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
                            </div>
                        </div>
                        </div>
                        {/* Single item */}
                        <div className="category-item">
                        <div className="category-list mb-30px">
                            <div className="category-thumb">
                            <a href="shop-4-column.html">
                                <img src="assets/images/product-image/organic/thumb-3.jpg" alt="" />
                            </a>
                            </div>
                            <div className="desc-listcategoreis">
                            <div className="name_categories">
                                <h4> Spreads &amp; Margarine </h4>
                            </div>
                            <span className="number_product">45 Products</span>
                            <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
                            </div>
                        </div>
                        <div className="category-list">
                            <div className="category-thumb">
                            <a href="shop-4-column.html">
                                <img src="assets/images/product-image/organic/thumb-7.jpg" alt="" />
                            </a>
                            </div>
                            <div className="desc-listcategoreis">
                            <div className="name_categories">
                                <h4> Cereals </h4>
                            </div>
                            <span className="number_product">58 Products</span>
                            <a href="shop-4-column.html">Shop Now<i className="ion-android-arrow-dropright-circle" /></a>
                            </div>
                        </div>
                        </div>
                        {/* Single item */}
                    </div>
                    {/* Category Slider Start */}
                    </div>
                </section>
                {/* Category Area End */}
                </div>

            </div>

        )
    }
}
export default Organic3;