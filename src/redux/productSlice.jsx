import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchTerm: '',
  filteredData: []
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredData = state.products.filter(product =>
        product.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setFilteredData(state, action) {
  state.filteredData = action.payload;
}

  },
});

export const { setProducts, setSearchTerm, setFilteredData } = productSlice.actions;
export default productSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   products: [],
// };

// const productSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {
//     setProducts: (state, action) => {
//       state.products = action.payload;
//     },
//   },
// });

// export const { setProducts } = productSlice.actions;
// export default productSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   products: []  // 👈 this creates products.products
// };

// const productSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {
//     setProducts: (state, action) => {
//       state.products = action.payload;
//     },
//   },
// });

// export const { setProducts } = productSlice.actions;
// export default productSlice.reducer;
