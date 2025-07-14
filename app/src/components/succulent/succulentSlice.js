import { createSlice } from "@reduxjs/toolkit";

export const succulentSlice = createSlice({
    name: "succulent",
    initialState: [
        {
            "name": "Echeveria Elegans",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGsuxKNRLZU7y4-3I__npl5uKImdtZSk5wg&s",
            "price": 8.99,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Haworthia Fasciata",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOR5bCrkLyYeWm6ChwIMPcNaMWOyZazGciww&s",
            "price": 7.50,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Jade Plant (Crassula Ovata)",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZr5N1mFuS1k46f1zd4Q4hVScBtowN5UThQ&s",
            "price": 10.00,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "String of Pearls (Senecio Rowleyanus)",
            "image": "https://www.plantsforallseasons.co.uk/cdn/shop/products/10-15cm-variegated-string-of-pearls-senecio-rowleyanus-8cm-pot-house-plant-house-plant-948221.jpg?v=1691759259",
            "price": 12.00,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Aloe Vera",
            "image": "https://ucarecdn.com/e2de23cf-f81d-4373-8fe1-1d0aa4cb8266/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
            "price": 9.00,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Burro's Tail (Sedum Morganianum)",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT018I8ayEEZ39e0mCrs9YkwQEZUMh6XRY5Jw&s",
            "price": 11.50,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Panda Plant (Kalanchoe Tomentosa)",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXeH0ylIWHXddcmMRB4yAkShajkrDo6MqdQ&s",
            "price": 6.75,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Zebra Cactus (Haworthiopsis Attenuata)",
            "image": "https://m.media-amazon.com/images/I/81fwQO8FMrL._UF1000,1000_QL80_.jpg",
            "price": 7.99,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Lithops (Living Stones)",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3maYr6p6iKi90g4L-kcMFlpajuwLhoWnVsw&s",
            "price": 13.25,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Crown of Thorns (Euphorbia Milii)",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOk9gDP0KVrA2dZ4gsOVlPmudUKBfAHv7YVQ&s",
            "price": 10.50,
            "added_to_cart": false,
            "amount": 0
        }
    ],
    reducers: {
        addedSucculentToCart: (state, action) => {
            const {payload: index} = action;
            if (state[index]) {
                state[index].added_to_cart = true;
                state[index].amount += 1;
            }
        },
        removedSucculentFromCart: (state, action) => {
            const {payload: index} = action;
            if (state[index]) {
                state[index].amount = 0;
                state[index].added_to_cart = false;
            }
        },
        incrementSucculent: (state, action) => {
            const {payload: index} = action;
            if (state[index]) {
                state[index].amount += 1;
            }
        },
        decrementSucculent: (state, action) => {
            const {payload: index} = action;
            if (state[index] && state[index].amount !== 0) {
                state[index].amount -= 1;
            }
        }
    }

})

export const {addedSucculentToCart, removedSucculentFromCart, incrementSucculent, decrementSucculent} = succulentSlice.actions;

export default succulentSlice.reducer;