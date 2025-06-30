import img1 from "./Images/EthnicK1.jpg";
import img17 from "./Images/WesternM2.jpg";
import img23 from "./Images/SportsW2.jpg";
import img30 from "./Images/SleepwearK3.jpg";
import img44 from "./Images/FormalM2.jpg";


export const Categories = [
  "Ethnic Wear",
  "Western Wear",
  "Sportswear",
  "Loungewear",
  "Formal Wear"
];

 const mockData = {
  products: [
    {
        id: 1,
        category: "Ethnic Wear",
        type: "Kids",
        image: img1,
        name: "Lehenga Choli",
        price: 1500,
      },
    {
        id: 2,
        category: "Sportswear",
        type: "Women",
        image: img23,
        name: "Gym Tracksuit",
        price: 440,
      },
    {
        id: 3,
        category: "Western Wear",
        type: "Men",
        image: img17,
        name: "Jeans & Casual Shirt",
        price: 550,
      },
    {
        id: 4,
        category: "Loungewear",
        type: "Kids",
        image: img30,
        name: "Nightwear Gown",
        price: 215,
      },
    {
        id: 5,
        category: "Formal Wear",
        type: "Men",
        image: img44,
        name: "Two Peice Formals",
        price: 1500,
      },
  ]
};


export default mockData;

