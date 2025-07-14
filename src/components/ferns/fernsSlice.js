import { createSlice } from "@reduxjs/toolkit";

export const fernsSlice = createSlice({
    name: "ferns",
    initialState: [
        {
            "name": "Boston Fern",
            "image": "https://gardengoodsdirect.com/cdn/shop/files/boston-fern-7851535925312_x560.progressive.jpg?v=1715970756",
            "price": 15.99,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Maidenhair Fern",
            "image": "https://www.englishgardens.com/wp-content/uploads/House-Plant-Maidenhair-Fern-1.jpg",
            "price": 18.50,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Staghorn Fern",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNpjhxMttD5choQbvXPjOc-saSsJnCvV9Dg&s",
            "price": 25.00,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Asparagus Fern",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGwmaucwOHnz4W0-ee9iysy0ZjKxS2xwdqPg&s",
            "price": 12.75,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Bird’s Nest Fern",
            "image": "https://www.ourhouseplants.com/imgs-content/large_bird_nest_fern.jpg",
            "price": 20.99,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Kangaroo Paw Fern",
            "image": "https://media.greg.app/Y2FyZS1wbGFudC1wcm9maWxlLzI3NjU1LzI2OUY1NzdDLTc5REEtNDMxNy04NDQ3LTRFNDdDMTlBMzQzQi5wbmc=?format=pjpeg&optimize=high&auto=webp&width=450",
            "price": 17.40,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Blue Star Fern",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi02q9gu1qifXG06OTxYqeOkM60OB-QzFrSg&s",
            "price": 16.80,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Lemon Button Fern",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWtY6gSAHmjagVVLKQmCnXjEKuVhh-aSeSGA&s",
            "price": 14.30,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Crocodile Fern",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pUEagslGgXQNzIRiYbbRmZA7m-tw211cIA&s",
            "price": 22.50,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Rabbit’s Foot Fern",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Ajr6MJu3SBShWHuPhEt88bqiSdMSBTUDHg&s",
            "price": 19.95,
            "added_to_cart": false,
            "amount": 0
        }
    ], 
    reducers: {
        addedToCart: (state, action) => {
            const {payload: index} = action;
            if (state[index]) {
                state[index].added_to_cart = true;
                state[index].amount += 1;
            }
        },
        removedFromCart: (state, action) => {
            const {payload: index} = action;
            if (state[index]) {
                state[index].added_to_cart = false;
                state[index].amount = 0;
            }
        },
        increaseFernsInCarts: (state, action) => {
            const {payload: index} = action;
            if (state[index]) {
                state[index].amount += 1;
            }
        },
        decreaseFernsInCarts: (state, action) => {
            const {payload: index} = action;
            if (state[index] && state[index].amount !== 0) {
                state[index].amount -= 1;
            }
        }
    }

})

export const { addedToCart, removedFromCart, increaseFernsInCarts, decreaseFernsInCarts } = fernsSlice.actions;

export default fernsSlice.reducer