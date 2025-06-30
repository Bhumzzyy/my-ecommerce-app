// // import React from "react";
// // import Man from "../assets/Images/Male.jpg";
// // import Woman from "../assets/Images/Female.jpg";
// // import Kids from "../assets/Images/Kids.jpg";


// // const categories = [
// //   {
// //     title: 'Men',
// //     imageUrl: Man, 
// //     alt: "Men's Clothing",
// //   },
// //   {
// //     title: 'Women',
// //     imageUrl: Woman,
// //     alt: "Women's Clothing",
// //   },
// //   {
// //     title: 'Kids',
// //     imageUrl: Kids,
// //     alt: "Kids' Clothing",
// //   }
// // ];


// // const CategorySection = () => {
// //   return (
// //     <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 ">
// //       {categories.map((category, index) => (
// //         <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
// //           <img src={category.imageUrl} className="w-full h-full object-cover rounded-lg shadow-md"/>
// //           <div className="absolute top-20 left-12">
// //             <p className="text-xl font-bold">{category.title}</p>
// //             <p className="text-gray-600">View All</p>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default CategorySection;


// import React from "react";
// import { Link } from "react-router-dom"; // ✅ Add this import
// import Man from "../assets/Images/Male.jpg";
// import Woman from "../assets/Images/Female.jpg";
// import Kids from "../assets/Images/Kids.jpg";

// const categories = [
//   {
//     title: "Men",
//     imageUrl: Man,
//     alt: "Men's Clothing",
//   },
//   {
//     title: "Women",
//     imageUrl: Woman,
//     alt: "Women's Clothing",
//   },
//   {
//     title: "Kids",
//     imageUrl: Kids,
//     alt: "Kids' Clothing",
//   },
// ];

// const CategorySection = () => {
//   return (
//     <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
//       {categories.map((category, index) => (
//         <Link
//           to={`/filter-data?type=${category.title}`}
//           key={index}
//           className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
//         >
//           <img
//             src={category.imageUrl}
//             alt={category.alt}
//             className="w-full h-full object-cover rounded-lg shadow-md"
//           />
//           <div className="absolute top-20 left-12">
//             <p className="text-xl font-bold">{category.title}</p>
//             <p className="text-gray-600">View All</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default CategorySection;

import React from "react";
import { Link } from "react-router-dom";
import Man from "../assets/Images/Male.jpg";
import Woman from "../assets/Images/Female.jpg";
import Kids from "../assets/Images/Kids.jpg";

const categories = [
  {
    title: "Men",
    imageUrl: Man,
    alt: "Men's Clothing",
  },
  {
    title: "Women",
    imageUrl: Woman,
    alt: "Women's Clothing",
  },
  {
    title: "Kids",
    imageUrl: Kids,
    alt: "Kids' Clothing",
  },
];

const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <Link
          to={`/filter-data?type=${category.title}`}
          key={index}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={category.imageUrl}
            alt={category.alt}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-gray-600">View All</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategorySection;

