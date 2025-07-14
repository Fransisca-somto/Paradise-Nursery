import { createSlice } from "@reduxjs/toolkit";

export const floweringSlice = createSlice({
    name: "flowering",
    initialState: [
        {
            "name": "Rose",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKiz3YzHUlkLwbbqkmEMI_qJ5QmLv1_r1aLQ&s",
            "price": 15,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Tulip",
            "image": "https://m.media-amazon.com/images/I/71soQIzEeRL._UF1000,1000_QL80_.jpg",
            "price": 12,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Sunflower",
            "image": "https://hips.hearstapps.com/hmg-prod/images/sunflower-ring-of-fire-eden-bros-67d9955316286.jpg?crop=0.801xw:1.00xh;0.0765xw,0&resize=980:*",
            "price": 10,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Orchid",
            "image": "https://hips.hearstapps.com/hmg-prod/images/8c914e30-7b32-459a-a5bb-b16d44ed55c0.jpeg?crop=0.667xw:1xh;0.167xw,0xh&resize=1120:*",
            "price": 25,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Marigold",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4I-yHZlwMhQQYSIH8dJ2c0qLwNUIEoHb7Pg&s",
            "price": 8,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Lavender",
            "image": "https://cdn.mos.cms.futurecdn.net/jxbkV6irQG2pWBBVq8wFsb.jpg",
            "price": 18,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Peony",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTfJI2INyKLXz2TJ5-5APdM0Q9yadzoIJ1fQ&s",
            "price": 22,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Daffodil",
            "image": "https://cdn.shopify.com/s/files/1/1902/7917/files/Daffodil_Bridal_Crown_in_Containers.jpg?v=1599737920",
            "price": 9,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Hibiscus",
            "image": "https://plantura.garden/uk/wp-content/uploads/sites/2/2022/06/best-soil-hibiscus-pots-1024x683.jpg?x54327",
            "price": 14,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Lily",
            "image": "https://www.bulbblog.com/files/2020/01/lilies-in-pots-290x290.jpg",
            "price": 20,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Begonia",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZVT7IQpG1jjNwSyaBB3owjJC_OtLTWnOIQ&s",
            "price": 11,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Zinnia",
            "image": "https://www.brooksidenursery.co.uk/media/catalog/product/cache/1365fd90104fe9bc02276aadbee322bf/t/u/tumbnail_0507eb5c-224d-4c6a-9c5c-6f350a2af53d.jpg",
            "price": 7,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Camellia",
            "image": "https://www.gardens4you.ie/media/catalog/product/cache/3a7af0a8e0e317723249dc9098669163/f/d/fd10261wh.jpg",
            "price": 19,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Petunia",
            "image": "https://www.brooksidenursery.co.uk/media/catalog/product/t/u/tumbnail_843de599-123e-4829-80b9-d150c35bdedd.jpg",
            "price": 13,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Gardenia",
            "image": "https://cdn11.bigcommerce.com/s-jmzfi5zcr2/images/stencil/1280x1280/products/169/14488/Jubilation_Gardenia_flowering__91775.1639971103.jpg?c=2",
            "price": 16,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Chrysanthemum",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjQph4zAroG9nf7Mvau0eRWp-1E6AtuwrMQ&s",
            "price": 17,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Dahlia",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRivGPDECu3jyic2Oiy3JBIHNuiV9PA5I3rHA&s",
            "price": 21,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Azalea",
            "image": "https://cdn11.bigcommerce.com/s-jmzfi5zcr2/product_images/uploaded_images/blooming-azalea-in-green-planter.jpg",
            "price": 13,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Cosmos",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Rh8Q8zFMVlCp9sRvc-cJxiqJwEi86WGmMg&s",
            "price": 6,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Snapdragon",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYw4JVXQ-1snJoJ4TpUTHlKj_Y5a1sA2djeg&s",
            "price": 12,
            "added_to_cart": false,
            "amount": 0
        }
    ],

    reducers: {
        addFloweringToCart: (state, action) => {
            const {payload: index} = action;
            if (state[index]) {
                state[index].added_to_cart = true;
                state[index].amount += 1;
            }
        },
        removeFloweringFromCart: (state, action) => {
            const { payload: index } = action;
            if (state[index]) {
                state[index].added_to_cart = false;
                state[index].amount = 0;
            }
        },
        increaseFloweringInCart: (state, action) => {
            const { payload: index} = action;
            if (state[index]) {
                state[index].amount += 1;
            }
        },
        decreaseFloweringInCart: (state, action) => {
            const { payload: index} = action;
            if (state[index] && state[index].amount !== 0) {
                state[index].amount -= 1;
            }
        }
    }
})

export const {addFloweringToCart, removeFloweringFromCart, increaseFloweringInCart, decreaseFloweringInCart} = floweringSlice.actions;

export default floweringSlice.reducer;