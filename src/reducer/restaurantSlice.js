const { createSlice } = require("@reduxjs/toolkit");

const menuList = [
  {
    id: "1",
    foodItem: "Dal Makhni",
    price: "₹120",
    quantity: 0,
    image:
      "https://media.istockphoto.com/id/1338259782/photo/image-of-metal-kadhai-style-serving-bowls-of-homemade-dal-makhani-curry-recipe-and-white-rice.jpg?b=1&s=170667a&w=0&k=20&c=IHQDbRrgQsbDABVu00IUztIdgj6IRjwFylWQPq9qi6I=",
  },
  {
    id: "2",
    foodItem: "Shahi Paneer",
    price: "₹180",
    quantity: 0,
    image:
      "https://media.istockphoto.com/id/1325272041/photo/green-peas-or-matar-paneer-curry.jpg?b=1&s=170667a&w=0&k=20&c=F1rfvmAyRUwxply1TG0z-Q-h26Tsm5OWFCPA9I-Xnl0=",
  },
  {
    id: "3",
    foodItem: "Malai Kofta",
    price: "₹160",
    quantity: 0,
    image:
      "https://media.istockphoto.com/id/1219174105/photo/malai-kofta-curry-in-black-bowl-malai-kofta-is-indian-cuisine-dish-with-potato-and-paneer.jpg?s=612x612&w=0&k=20&c=CuL6_R7LVWBTI7q65w6wiDZIfWJ_dHcBx3DCrr9-h7g=",
  },
  {
    id: "4",
    foodItem: "Tawa Chaap",
    price: "₹140",
    quantity: 0,
    image:
      "https://thumbs.dreamstime.com/b/soya-chaap-cooked-creamy-sauce-31722521.jpg",
  },
  {
    id: "5",
    foodItem: "Gulaab Jamun",
    price: "₹35",
    quantity: 0,
    image:
      "https://media.istockphoto.com/id/163064596/photo/gulab-jamun.jpg?b=1&s=170667a&w=0&k=20&c=lhzS7I0GZvUPGCrctlUHyvHP9_9dPEQ1FAAJcgAF7pQ=",
  },
];

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurantList: menuList,
    cartItems: [],
  },
  reducers: {
    increment(state, action) {
      const itemObjOld = action.payload;
      const itemObj = { ...itemObjOld, quantity: 1 };
      const index = state.restaurantList.findIndex(
        (item) => item.id === itemObj.id
      );
      state.restaurantList[index].quantity += 1;

      if (state.cartItems.length === 0) {
        state.cartItems.push(itemObj);
        console.log(JSON.parse(JSON.stringify(state.cartItems)));
      } else {
        const objIndex = state.cartItems.findIndex(
          (item) => item.id === itemObj.id
        );
        if (objIndex === -1) {
          state.cartItems.push(itemObj);
          console.log(JSON.parse(JSON.stringify(state.cartItems)));
        } else {
          state.cartItems[objIndex].quantity += 1;
          console.log(JSON.parse(JSON.stringify(state.cartItems)));
        }
      }
    },
    decrement(state, action) {
      const itemObjOld = action.payload;
      const itemObj = { ...itemObjOld, quantity: 1 };
      const index = state.restaurantList.findIndex(
        (item) => item.id === itemObj.id
      );

      state.restaurantList[index].quantity -= 1;

      if (state.cartItems.length > 0) {
        console.log(JSON.parse(JSON.stringify(state.cartItems)));

        const objIndex = state.cartItems.findIndex(
          (item) => item.id === itemObj.id
        );

        state.cartItems[objIndex].quantity -= 1;

        console.log(JSON.parse(JSON.stringify(state.cartItems)));
        console.log(objIndex);


         if(state.cartItems[objIndex].quantity === 1){

          const decreaseQuantity =   state.cartItems.filter((item)=> item.id !== objIndex.id);
          console.log(JSON.parse(JSON.stringify(decreaseQuantity)));

          

         }
         

      }
    },
  },
});

export default restaurantSlice;
export const restaurantAction = restaurantSlice.actions;
