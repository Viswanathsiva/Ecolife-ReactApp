import React from 'react';
import {Link} from 'react-router-dom';
class Organic1 extends React.Component{
    render(){
        return(
            <div>
        <div>
        {/* Slider Arae Start */}
        <div className="slider-area">
            <div className="slider-active-3 owl-carousel slider-hm8 owl-dot-style">
            {/* Slider Single Item Start */}
            <div className="slider-height-6 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-1.jpg)'}}>
                <div className="container">
                <div className="slider-content-1 slider-animated-1 text-left">
                    <span className="animated">NOT FRIED NOT BAKED</span>
                    <h1 className="animated">
                    Freeze Dried Fruits <br />
                    Pineapple Coconut
                    </h1>
                    <p className="animated">Free Shipping On Qualified Orders Over $35</p>
                    <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
                </div>
                </div>
            </div>
            {/* Slider Single Item End */}
            {/* Slider Single Item Start */}
            <div className="slider-height-6 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-2.jpg)'}}>
                <div className="container">
                <div className="slider-content-1 slider-animated-1 text-left">
                    <span className="animated">100% NATURAL</span>
                    <h1 className="animated">
                    Organic Fruits <br />
                    Summer Drinks
                    </h1>
                    <p className="animated">fresh New pack Brusting Fruits</p>
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
        {/* Best Sells Area Start */}
        <section className="best-sells-area mb-30px">
            <div className="container">
            {/* Section Title Start */}
            <div className="row">
                <div className="col-md-12">
                <div className="section-title">
                    <h2>Best Sellers</h2>
                    <p>Add bestselling products to weekly line up</p>
                </div>
                </div>
            </div>
            {/* Section Title End */}
            {/* Best Sell Slider Carousel Start */}
            <div className="best-sell-slider owl-carousel owl-nav-style">
                {/* Single Item */}
                <article className="list-product">
                <div className="img-block">
                    <Link to='/mangojuice' className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/mango-juice.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/mango-juice.jpg" alt="" />
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
                    <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                    <h2><Link to='/mangojuice' className="product-link">Real Fruit Mango-juice</Link></h2>
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
                    <Link to='/chocowafer' className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/choc-wafer1.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/choc-wafer2.jpg" alt="" />
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
                    <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                    <h2><Link to='/chocowafer' className="product-link">Britannia Chocolate Wafers, 75 g</Link></h2>
                    <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    </div>
                    <div className="pricing-meta">
                    <ul>
                        <li className="old-price not-cut">€09.90</li>
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
                    <Link to='/rawpressery' className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/coco-water.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/coco-water1.jpg" alt="" />
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
                    <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                    <h2><Link to='/rawpressery' className="product-link">Raw Pressery Coconut Water</Link></h2>
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
                    <Link to='/paperboat' className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/guava1.jpeg" alt="" />
                    {/* <img className="second-img" src="assets/images/product-image/organic/product-4.jpg" alt="" /> */}
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
                    <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                    <h2><Link to='/paperboat' className="product-link">Paper boat Juice - Guava  (1 L)</Link></h2>
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
                    <Link to='/tropicana' className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/tropican-straw.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/tropican-straw1.jpg" alt="" />
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
                    <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                    <h2><Link to='/tropicana' className="product-link">Tropicana Fruit Juice - Delight, Litchi, 2x1 L </Link></h2>
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
                    <Link to='/pomegranate' className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/pomegrenate-juice.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/pomegrenate-juice.jpg" alt="" />
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
                    <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                    <h2><Link to='/pomegranate' className="product-link">Real Fruit Pomegrenate-juice</Link></h2>
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
                    <img className="first-img" src="assets/images/product-image/organic/816sP4Co-SL._SL1500_.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/816sP4Co-SL._SL1500_.jpg" alt="" />
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
                    <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNAR</span></a>
                    <h2><a href="single-product.html" className="product-link">Real Fruit Apple Drink</a></h2>
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
                    <img className="first-img" src="assets/images/product-image/organic/choc-milk.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/choc-milk.jpg" alt="" />
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
                    <h2><a href="single-product.html" className="product-link">
                        Hersheys
                        Hersheys Milk Shake - Chocolate</a></h2>
                    <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    </div>
                    <div className="pricing-meta">
                    <ul>
                        <li className="old-price">€68.90</li>
                        <li className="current-price">€54.21</li>
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
                    <img className="first-img" src="assets/images/product-image/organic/choc-roll1.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/choc-roll2.jpg" alt="" />
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
                    <h2><a href="single-product.html" className="product-link"> Chocolate Stick Wafer, 200 g</a></h2>
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
                    <img className="first-img" src="assets/images/product-image/organic/orange-wafer.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/orange -wafer1.jpg" alt="" />
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
                    <h2><a href="single-product.html" className="product-link"> Wafer Bites - Orange, 100 g</a></h2>
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
                    <img className="first-img" src="assets/images/product-image/organic/jice.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/jice.jpg" alt="" />
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
                    <h2><a href="single-product.html" className="product-link">B Natural Mixed Fruit  (1 L)</a></h2>
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
            </div>
            {/* Best Sells Carousel End */}
            </div>
        </section>
        {/* Best Sells Slider End */}
        {/* Category Area Start */}
        <section className="categorie-area">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                {/* Section Title */}
                <div className="section-title mt-res-sx-30px mt-res-md-30px">
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
                    <span className="number_product">17 Products</span>
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
                    <span className="number_product">17 Products</span>
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
                        <img src="assets/images/product-image/organic/thumb-5.jpg" alt="" />
                    </a>
                    </div>
                    <div className="desc-listcategoreis">
                    <div className="name_categories">
                        <h4>Fresh Cream &amp; Custard</h4>
                    </div>
                    <span className="number_product">17 Products</span>
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
            </div>
        </section>
        {/* Category Area End  */}
        {/* Hot deal area Start */}
        <section className="hot-deal-area">
            <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
                <div className="row">
                    <div className="col-md-12">
                    {/* Section Title */}
                    <div className="section-title">
                        <h2>Hot Deals</h2>
                        <p>Add hot products to weekly line up</p>
                    </div>
                    {/* Section Title End*/}
                    </div>
                </div>
                {/* Hot Deal Slider Start */}
                <br />
                <div className="hot-deal owl-carousel owl-nav-style">
                    {/*  Single item */}
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
                    </article>
                    {/*  Single item */}
                    <article className="list-product">
                    <div className="img-block">
                        <Link to='/orangejuice' className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/organic/juice-orange.jpg" alt="" />
                        <img className="second-img" src="assets/images/product-image/organic/juice-orange.jpg" alt="" />
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
                        <h2><Link to='/orangejuice' className="product-link">Orange-Juice</Link></h2>
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
                    </article>
                    {/*  Single item */}
                    <article className="list-product">
                    <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/organic/cream.jpg" alt="" />
                        <img className="second-img" src="assets/images/product-image/organic/cream.jpg" alt="" />
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
                        <a className="inner-link" href="shop-4-column.html"><span>Hot</span></a>
                        <h2><a href="single-product.html" className="product-link">Fresh-Creams</a></h2>
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
                    </article>
                    {/*  Single item */}
                    <article className="list-product">
                    <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/organic/Milkshake.jpg" alt="" />
                        <img className="second-img" src="assets/images/product-image/organic/Milkshake.jpg" alt="" />
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
                        <a className="inner-link" href="shop-4-column.html"><span>Hot</span></a>
                        <h2><a href="single-product.html" className="product-link">Milkshake</a></h2>
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
                    </article>
                    {/*  Single item */}
                </div>
                {/* Hot Deal Slider End */}
                </div>
                {/* New Arrivals Area Start */}
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8">
                <div className="row">
                    <div className="col-md-12">
                    {/* Section Title */}
                    <div className="section-title ml-0px mt-res-sx-30px">
                        <h2>New Arrivals</h2>
                        <p>Add new products to weekly line up</p>
                    </div>
                    {/* Section Title */}
                    </div>
                </div>
                {/* New Product Slider Start */}
                <div className="new-product-slider owl-carousel owl-nav-style">
                    {/* Product Single Item */}
                    <div className="product-inner-item">
                    <article className="list-product mb-30px">
                        <div className="img-block">
                        <Link to='/babycorn' className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/1.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/1.jpg" alt="" />
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
                        <h2><Link to='/babycorn' className="product-link">Babycorn</Link></h2>
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
                        <Link to='/freshmeat' className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/organic/2.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/2.jpg" alt="" />
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
                        <h2><Link to='/freshmeat' className="product-link">Fresh-meat</Link></h2>
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
                            <img className="first-img" src="assets/images/product-image/organic/3.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/3.jpg" alt="" />
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
                        <a className="inner-link" href="shop-4-column.html"><span>Biscuits</span></a>
                        <h2><a href="single-product.html" className="product-link">Oreo</a></h2>
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
                            <img className="first-img" src="assets/images/product-image/organic/4.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/4.jpg" alt="" />
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
                        <a className="inner-link" href="shop-4-column.html"><span>Biscuits</span></a>
                        <h2><a href="single-product.html" className="product-link">Choco-Wafer</a></h2>
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
                            <img className="first-img" src="assets/images/product-image/organic/5.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/5.jpg" alt="" />
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
                        <a className="inner-link" href="shop-4-column.html"><span>Biscuits</span></a>
                        <h2><a href="single-product.html" className="product-link">Treat</a></h2>
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
                            <img className="first-img" src="assets/images/product-image/organic/lemon2.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/lemon2.jpg" alt="" />
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
                        <h2><a href="single-product.html" className="product-link">Lemon</a></h2>
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
                            <img className="first-img" src="assets/images/product-image/organic/pine2.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/pine2.jpg" alt="" />
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
                        <a className="inner-link" href="shop-4-column.html"><span>fresho</span></a>
                        <h2><a href="single-product.html" className="product-link">Pineapple</a></h2>
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
                            <img className="first-img" src="assets/images/product-image/organic/6.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/6.jpg" alt="" />
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
                        <h2><a href="single-product.html" className="product-link">Cakes</a></h2>
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
                            <img className="first-img" src="assets/images/product-image/organic/7.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/7.jpg" alt="" />
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
                        <a className="inner-link" href="shop-4-column.html"><span>Spicy🔥</span></a>
                        <h2><a href="single-product.html" className="product-link">Burger
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
                            <img className="first-img" src="assets/images/product-image/organic/8.jpg" alt="" />
                            <img className="second-img" src="assets/images/product-image/organic/8.jpg" alt="" />
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
                        <h2><a href="single-product.html" className="product-link">Meat</a></h2>
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
                </div>
                </div>
            </div>
            </div></section>
        {/* Hot Deal Area End */}
        {/* Banner Area Start */}
        <div className="banner-area">
            <div className="container">
            <div className="row">
                <div className="col-md-3 col-xs-12">
                <div className="banner-wrapper">
                    <a href="shop-4-column.html"><img src="assets/images/banner-image/1.jpg" alt="" /></a>
                </div>
                </div>
                <div className="col-md-6 col-xs-12 mt-res-sx-30px">
                <div className="banner-wrapper">
                    <a href="shop-4-column.html"><img src="assets/images/banner-image/2.jpg" alt="" /></a>
                </div>
                </div>
                <div className="col-md-3 col-xs-12 mt-res-sx-30px">
                <div className="banner-wrapper">
                    <a href="shop-4-column.html"><img src="assets/images/banner-image/3.jpg" alt="" /></a>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Banner Area End */}
        {/* Feature Area Start */}
        <section className="feature-area">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                {/* Section Title */}
                <div className="section-title">
                    <h2>Featured Products</h2>
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
                        <img className="first-img" src="assets/images/product-image/organic/9.jpg" alt="" />
                        <img className="second-img" src="assets/images/product-image/organic/9.jpg" alt="" />
                    </a>
                    <div className="quick-view">
                        <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                        </a>
                    </div>
                    </div>
                    <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span>Cereals</span></a>
                    <h2><a href="single-product.html" className="product-link">Almond</a></h2>
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
                        <img className="first-img" src="assets/images/product-image/organic/10.jpg" alt="" />
                        <img className="second-img" src="assets/images/product-image/organic/10.jpg" alt="" />
                    </a>
                    <div className="quick-view">
                        <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                        </a>
                    </div>
                    </div>
                    <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                    <h2><a href="single-product.html" className="product-link">Mango-Juice</a></h2>
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
                        <img className="first-img" src="assets/images/product-image/organic/11.jpg" alt="" />
                        <img className="second-img" src="assets/images/product-image/organic/11.jpg" alt="" />
                    </a>
                    <div className="quick-view">
                        <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                        </a>
                    </div>
                    </div>
                    <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span>Cereals</span></a>
                    <h2><a href="single-product.html" className="product-link">Oats</a></h2>
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
                        <img className="first-img" src="assets/images/product-image/organic/12.jpg" alt="" />
                        <img className="second-img" src="assets/images/product-image/organic/12.jpg" alt="" />
                    </a>
                    <div className="quick-view">
                        <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                        </a>
                    </div>
                    </div>
                    <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                    <h2><a href="single-product.html" className="product-link">Coca-Cola</a></h2>
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
                        <img className="first-img" src="assets/images/product-image/organic/14.jpg" alt="" />
                        <img className="second-img" src="assets/images/product-image/organic/14.jpg" alt="" />
                    </a>
                    <div className="quick-view">
                        <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                        </a>
                    </div>
                    </div>
                    <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                    <h2><a href="single-product.html" className="product-link">Flavor-Drinks</a></h2>
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
                        <img className="first-img" src="assets/images/product-image/organic/13.jpg" alt="" />
                        <img className="second-img" src="assets/images/product-image/organic/13.jpg" alt="" />
                    </a>
                    <div className="quick-view">
                        <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                        </a>
                    </div>
                    </div>
                    <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span>Cereals</span></a>
                    <h2><a href="single-product.html" className="product-link">Wheat</a></h2>
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
                        <img className="first-img" src="assets/images/product-image/organic/15.jpg" alt="" />
                        <img className="second-img" src="assets/images/product-image/organic/15.jpg" alt="" />
                    </a>
                    <div className="quick-view">
                        <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                        </a>
                    </div>
                    </div>
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
                        <li className="old-price not-cut">€9.90</li>
                        </ul>
                    </div>
                    </div>
                </article>
                <article className="list-product">
                    <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/organic/16.jpg" alt="" />
                        <img className="second-img" src="assets/images/product-image/organic/16.jpg" alt="" />
                    </a>
                    <div className="quick-view">
                        <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                        </a>
                    </div>
                    </div>
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
                        <img className="first-img" src="assets/images/product-image/organic/17.jpg" alt="" />
                        <img className="second-img" src="assets/images/product-image/organic/17.jpg" alt="" />
                    </a>
                    <div className="quick-view">
                        <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                        </a>
                    </div>
                    </div>
                    <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                    <h2><a href="single-product.html" className="product-link">Flavor-Drinks</a></h2>
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
                        <img className="first-img" src="assets/images/product-image/organic/18.jpg" alt="" />
                        <img className="second-img" src="assets/images/product-image/organic/18.jpg" alt="" />
                    </a>
                    <div className="quick-view">
                        <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                        </a>
                    </div>
                    </div>
                    <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span>Cereals</span></a>
                    <h2><a href="single-product.html" className="product-link">Corn</a></h2>
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
                {/* Single Item */}
                <div className="feature-slider-item">
                <article className="list-product">
                    <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/organic/19.jpg" alt="" />
                        <img className="second-img" src="assets/images/product-image/organic/19.jpg" alt="" />
                    </a>
                    <div className="quick-view">
                        <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                        </a>
                    </div>
                    </div>
                    <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                    <h2><a href="single-product.html" className="product-link">Monster</a></h2>
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
                        <img className="first-img" src="assets/images/product-image/organic/20.jpg" alt="" />
                        <img className="second-img" src="assets/images/product-image/organic/20.jpg" alt="" />
                    </a>
                    <div className="quick-view">
                        <a className="quick_view" href=" " data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                        </a>
                    </div>
                    </div>
                    <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span>Cold</span></a>
                    <h2><a href="single-product.html" className="product-link">Schweepes</a></h2>
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
                {/* Single Item */}
                <div className="feature-slider-item">
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
                    <a className="inner-link" href="shop-4-column.html"><span>Snacks</span></a>
                    <h2><a href="single-product.html" className="product-link">Choco-Flakes</a></h2>
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
                </article>
                </div>
                {/* Single Item */}
            </div>
            {/* Feature Slider End */}
            </div>
        </section>
        {/* Feature Area End */}
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
        {/* Banner Area 2 End */}
        {/* Recent Add Product Area Start */}
        <section className="recent-add-area">
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
            {/* Recent Product slider Start */}
            <div className="recent-product-slider owl-carousel owl-nav-style">
                {/* Single Item */}
                <article className="list-product">
                <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/20.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/banana2.jpg" alt="" />
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
                    <h2><a href="single-product.html" className="product-link">Schweepes</a></h2>
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
                    <img className="first-img" src="assets/images/product-image/organic/21.jpg" alt="" />
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
                    <h2><a href="single-product.html" className="product-link">Cream cake</a></h2>
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
                    <img className="first-img" src="assets/images/product-image/organic/22.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/22.jpg" alt="" />
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
                    <img className="first-img" src="assets/images/product-image/organic/23.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/23.jpg" alt="" />
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
                    <a className="inner-link" href="shop-4-column.html"><span>Sweet and Hot</span></a>
                    <h2><a href="single-product.html" className="product-link">Chocolates</a></h2>
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
                    <img className="first-img" src="assets/images/product-image/organic/24.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/24.jpg" alt="" />
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
                    <a className="inner-link" href="shop-4-column.html"><span>Sweet</span></a>
                    <h2><a href="single-product.html" className="product-link">Chocolate-mini-cake</a></h2>
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
                    <img className="first-img" src="assets/images/product-image/organic/25.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/25.jpg" alt="" />
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
                    <a className="inner-link" href="shop-4-column.html"><span>Sweet</span></a>
                    <h2><a href="single-product.html" className="product-link">Chocolate-Cake</a></h2>
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
                    <img className="first-img" src="assets/images/product-image/organic/26.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/26.jpg" alt="" />
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
                    <a className="inner-link" href="shop-4-column.html"><span>Chocolate</span></a>
                    <h2><a href="single-product.html" className="product-link">Snicker</a></h2>
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
                    <img className="first-img" src="assets/images/product-image/organic/27.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/27.jpg" alt="" />
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
                    <a className="inner-link" href="shop-4-column.html"><span>Hot</span></a>
                    <h2><a href="single-product.html" className="product-link">Popcorn</a></h2>
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
                    <img className="first-img" src="assets/images/product-image/organic/28.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/28.jpg" alt="" />
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
                    <h2><a href="single-product.html" className="product-link">Milk</a></h2>
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
                    <img className="first-img" src="assets/images/product-image/organic/31.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/31.jpg" alt="" />
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
                    <a className="inner-link" href="shop-4-column.html"><span>Biscuits/span&gt;</span></a>
                    <h2><a href="single-product.html" className="product-link">Oreo</a></h2>
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
                    <img className="first-img" src="assets/images/product-image/organic/32.jpg" alt="" />
                    <img className="second-img" src="assets/images/product-image/organic/32.jpg" alt="" />
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
                    <h2><a href="single-product.html" className="product-link">Thums-up</a></h2>
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
            </div>
            {/* Recent product slider end */}
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
        </div>


            </div>
            

        )
    }
}
export default Organic1;