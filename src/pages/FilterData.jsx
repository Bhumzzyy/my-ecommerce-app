


// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import ProductCard from '../components/productCard';
// import NoProduct from '../assets/Images/noprofound.jpeg';
// import { allProducts } from '../components/AllProducts';

// const useQuery = () => new URLSearchParams(useLocation().search);

// const FilterData = () => {
//   const query = useQuery();
//   const searchTerm = query.get('search')?.toLowerCase() || '';
//   const type = query.get('type')?.toLowerCase() || '';
//   const category = query.get('category')?.toLowerCase() || '';

//   const filteredProducts = allProducts.filter(product => {
//     const matchSearch = searchTerm ? product.name.toLowerCase().includes(searchTerm) : true;
//     const matchType = type ? product.type.toLowerCase() === type : true;
//     const matchCategory = category ? product.category.toLowerCase() === category : true;
//     return matchSearch && matchType && matchCategory;
//   });

//   return (
//     <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
//       {filteredProducts.length > 0 ? (
//         <>
//           <h2 className="text-2xl font-bold mb-6 text-center">Filtered Products</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
//             {filteredProducts.map(product => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </>
//       ) : (
//         <div className="flex justify-center">
//           <img src={NoProduct} alt="No products found" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilterData;


import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/productCard';
import NoProduct from '../assets/Images/noprofound.jpeg';
import { useLocation } from 'react-router-dom';
import { setFilteredData } from '../redux/productSlice';

const FilterData = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const type = queryParams.get('type');
  const category = queryParams.get('category');

  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const heading = type || category || 'Filtered Products';

  useEffect(() => {
    // Filter products by type or category
    const filtered = products.filter((product) => {
      if (type) return product.type.toLowerCase() === type.toLowerCase();
      if (category) return product.category.toLowerCase() === category.toLowerCase();
      return false;
    });

    dispatch(setFilteredData(filtered));
  }, [type, category, products, dispatch]);

  const filteredProducts = useSelector((state) => state.product.filteredData);

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      {filteredProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">{heading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <img src={NoProduct} alt="No products found" />
        </div>
      )}
    </div>
  );
};

export default FilterData;
