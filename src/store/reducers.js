import { ADD_PRODUCT, REMOVE_PRODUCT, SEARCH_PRODUCT } from "./actions";

const initialState = {
  products: [
    { id: "1", title: "Selenite", desc: "The Master", price: 15.99, image:"https://www.healingcrystals.com/images/Selenite-Palm-Stones-Morocco-01.jpg" },
    { id: "2", title: "Moonstone", desc: "The Stabilizer", price: 10.99, image:"https://meanings.crystalsandjewelry.com/wp-content/uploads/2019/05/Blue-Moonstone.jpg" },
    {
      id: "3",
      title: "Aventurine",
      desc: "The Stone of Opportunity",
      price: 14.99,
      image:"https://cdn.shopify.com/s/files/1/1575/9561/products/4-green-aventurine-heart-chakra-stone_f274be39-84c9-42d7-8e52-c3fd75785d20_1024x1024.jpg?v=1571439210"
    },
    {
      id: "4",
      title: "Crystal Quartz",
      desc: "The Spirit Stone",
      price: 12.99,
      image:"https://chairish-prod.freetls.fastly.net/image/product/master/e69851f3-fe06-45da-9d67-8f1de4c6c857/brazilian-crystal-quartz-7408"
    },
    { id: "5", title: "Citrine", desc: "The Money Stone", price: 10.99, image:"https://cdn.shopify.com/s/files/1/0159/0942/1110/products/citrinestone-tumbledstones-energymuse.png?v=1572008661" },
    { id: "6", title: "Agate", desc: "Stone of Inner Stability", price: 7.99, image:"https://cdn.shopify.com/s/files/1/0159/0942/1110/products/botswanaagatestone-tumbledstones-energymuse.png?v=1572007264" },
    { id: "7", title: "Tourmaline", desc: "The Grounding Stone", price: 9.99, image:"https://www.thegemtree.com/images/large/Top%20Polished%20Black%20Tourmaline%20Gemstone%20Specimen%2012_LRG.jpg" },
    { id: "8", title: "Rose Quartz", desc: "The Love Stone", price: 5.99, image:"https://images-na.ssl-images-amazon.com/images/I/81lkseMHYoL._AC_SL1500_.jpg" },
    {
      id: "9",
      title: "Turquoise",
      desc: "The Stone of Protection",
      price: 8.99,
      image:"https://images.ctfassets.net/na9gxrekwk4v/22z4iKQgh69XbuF0CbZ5SH/015fb25bfd43b5cb48c0791de3d35d5e/turquoisemeaning-turquoisehealingproperties-energymuse.jpg"
    },
    {
      id: "10",
      title: "Fluorite",
      desc: "The Stone of Positivity",
      price: 6.99,
      image:"https://www.crystalage.com/img/products/rainbow-fluorite-palm-stone.jpg"
    },
  ],
  cart: [],
  keyword: "",
};

const shopReducer = (state = initialState, action) => {
  let updatedCart;
  let updatedItemIndex;
  switch (action.type) {
    case SEARCH_PRODUCT:
      const keyword = action.payload;
      /*       const searchResult = state.products.filter((item) =>
        item.title.toLowerCase().includes(keyword)
      );
      return { ...state, searchResult: searchResult }; */
      return { ...state, keyword: keyword };

    case ADD_PRODUCT:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart };

    case REMOVE_PRODUCT:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload
      );

      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.quantity--;
      if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};

export default shopReducer;
