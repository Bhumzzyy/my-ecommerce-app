// import React from "react";
// import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from "react";
// import Login from "./Login";
// import Modal from "./Modal";
// import Register from "./Register";
// import { useDispatch } from "react-redux";
// import { setSearchTerm } from "../redux/productSlice";

// const Navbar = () => {
//     const products = useSelector((state) => state.cart.products) || [];
//     const totalQuantity = useSelector((state) => state.cart.totalQuantity);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [isLogin, setIsLogin] = useState(true);
//     const [search, setSearch] = useState('');  
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleSearch = (e) => {
//         e.preventDefault();
//         dispatch(setSearchTerm(search));
//         navigate('/filter-data');
//     };

//     const openSignUp = () => {
//         setIsLogin(false);
//         setIsModalOpen(true);
//     }
//     const openLogin = () => {
//         setIsLogin(true);
//         setIsModalOpen(true);
//     }


//     return (
//         <nav className="bg-white shadow-md  mt-6">
//             <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center ">
//                 <div className="text-2xl font-bold">
//                     <Link to="/home">VASTRAA</Link>
//                 </div>
//                 <div className="relative flex-1 mx-4 ">
//                     <form onSubmit={handleSearch}>
//                         <input type="text" placeholder="Search products..." 
//                         className="w-full border py-2 px-4" 
//                         onChange={(e) => setSearch(e.target.value)}/>
//                         <FaSearch className="absolute right-3 top-3 text-red-500" />
//                     </form>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                     <Link to="/cart" className="relative">
//                         <FaShoppingCart className="text-xl" />
//                         {totalQuantity > 0 && (
//                             <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 text-white rounded-full flex items-center justify-center">
//                                 {totalQuantity}
//                             </span>
//                         )}
//                     </Link>
//                     <button className="hidden md:block text-xl cursor-pointer"
//                         onClick={() => { setIsModalOpen(true) }}>Login | Register </button>
//                     <button className="block md:hidden"> <FaUser /></button>
//                 </div>
//             </div>
//             <div className="flex items-center justify-center space-x-10 py-4 text-l font-bold ">
//                 <Link to="/home" className="hover:underline">Home</Link>
//                 <Link to="/shop" className="hover:underline">Shop</Link>
//                 <Link to="/about" className="hover:underline">About</Link>
//                 <Link to="/contact" className="hover:underline">Contact</Link>
//             </div>
//             <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
//                 {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
//             </Modal>
//         </nav>
//     );
// };

// export default Navbar;


import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import Login from "./Login";
import Modal from "./Modal";
import Register from "./Register";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
    const products = useSelector((state) => state.cart.products) || [];
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = (e) => {
  e.preventDefault();
  navigate(`/filter-data?search=${search}`);
};

    const openSignUp = () => {
        setIsLogin(false);
        setIsModalOpen(true);
    }
    const openLogin = () => {
        setIsLogin(true);
        setIsModalOpen(true);
    }

    return (
        <nav className="bg-white shadow-md  mt-6">
            <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center ">
                <div className="text-2xl font-bold">
                    <Link to="/home">VASTRAA</Link>
                </div>
                <div className="relative flex-1 mx-4 ">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full border py-2 px-4"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button type="submit">
                            <FaSearch className="absolute right-3 top-3 text-red-500 cursor-pointer" />
                        </button>
                    </form>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/cart" className="relative">
                        <FaShoppingCart className="text-xl" />
                        {totalQuantity > 0 && (
                            <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 text-white rounded-full flex items-center justify-center">
                                {totalQuantity}
                            </span>
                        )}
                    </Link>
                    <button className="hidden md:block text-xl cursor-pointer"
                        onClick={() => { setIsModalOpen(true) }}>Login | Register </button>
                    <button className="block md:hidden"> <FaUser /></button>
                </div>
            </div>
            <div className="flex items-center justify-center space-x-10 py-4 text-l font-bold ">
                <Link to="/home" className="hover:underline">Home</Link>
                <Link to="/shop" className="hover:underline">Shop</Link>
                <Link to="/about" className="hover:underline">About</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
            </Modal>
        </nav>
    );
};

export default Navbar;


