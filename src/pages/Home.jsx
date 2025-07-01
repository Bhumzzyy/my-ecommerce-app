import React, { useEffect } from "react";
import { Categories } from "../assets/mockData";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { useDispatch } from "react-redux";
import ProductCard from "../components/productCard.jsx";
import mockData from "../assets/mockData";
import { allProducts } from "../components/AllProducts";
import { setProducts } from "../redux/productSlice";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import banner1 from "../assets/Images/Banner1.jpg";
import banner2 from "../assets/Images/Banner2.jpg";
import banner3 from "../assets/Images/Banner3.jpg";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts(allProducts)); // ✅ load all products into Redux
    }, [dispatch]);

    const bannerImages = [banner1, banner2, banner3];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        pauseOnHover: false,
    };

    return (
        <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
            <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
                {/* Sidebar */}
                <div className="w-full md:w-3/12">
                    <div className="bg-red-600 text-white text-l font-bold px-2 py-2.5">
                        SHOP BY CATEGORIES
                    </div>
                    <ul className="space-y-4 bg-gray-100 p-3 border">
                        {Categories.map((category, index) => (
                            <li key={index} className="flex items-center text-sm font-medium">
                                <Link to={`/filter-data?category=${encodeURIComponent(category)}`} className="flex items-center">
                                    <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                                    {category}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Banner with modern text */}
                <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative overflow-hidden rounded-lg shadow-lg">
                    <Slider {...sliderSettings}>
                        {bannerImages.map((img, index) => (
                            <div key={index} className="relative h-96 w-full">
                                <img src={img} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-start px-10 text-white">
                                    <h2 className="text-5xl font-extrabold leading-tight">
                                        STYLE THAT DEFINES YOU
                                    </h2>
                                    <p className="text-xl mt-2">
                                        Discover our latest collection of fashion & trends
                                    </p>
                                    <Link to="/shop">
                                        <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
                                            SHOP NOW
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <InfoSection />
            <CategorySection />

            {/* Top Products */}
            <div className="container mx-auto py-12">
                <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
                    {mockData.products.slice(0, 5).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            {/* Shop All Products */}
            <div className="container mx-auto py-12">
                <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
                    {allProducts.slice(0, 10).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;





