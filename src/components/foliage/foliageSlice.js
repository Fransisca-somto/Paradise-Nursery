import { createSlice } from "@reduxjs/toolkit"

export const foliageSlice = createSlice({
    name: "foliage",
    initialState: [
        {
            "name": "Monstera Deliciosa",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGzmZXqcDfaG9jTbp5Z_UwMEPftbpCtooGAw&s",
            "price": 30,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Fiddle Leaf Fig",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCVkh44j-UuntZdbGb3_6_bHVmCdcjHN3Ow&s",
            "price": 60,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Peace Lily",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDodWGGab6Wdurua1rA_uvxJlT4hqSnl3VSg&s",
            "price": 40,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Snake Plant",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6LkxVm3IOGNcGY7vs0Jw6bp3gAzmrlOdQew&s",
            "price": 25,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Pothos",
            "image": "https://media.houseandgarden.co.uk/photos/64bff5f4d6a55acd0397054e/1:1/w_1342,h_1342,c_limit/Screenshot%202023-07-25%20at%2017.17.10.png",
            "price": 20,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Calathea Orbifolia",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3DPCC84dR5mTNtJ3zRd9VhYpvxwQy8O2qw&s",
            "price": 40,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "ZZ Plant",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfSS8cDpRZJefCJh1sPwjc9SMLjMio3Ra6Ng&s",
            "price": 28,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Rubber Plant",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5b_D6jyk5xuvH25TkQCltJV0hcGu-o9ojw&s",
            "price": 38,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Dieffenbachia",
            "image": "https://bloomscape.com/wp-content/uploads/2022/02/bloomscape_dieffenbachia_10in_clay-scaled.jpg?ver=675709",
            "price": 26,
            "added_to_cart": false,
            "amount": 0
        },
        {
            "name": "Bird's Nest Fern",
            "image": "https://www.ourhouseplants.com/imgs-content/large_bird_nest_fern.jpg",
            "price": 33,
            "added_to_cart": false,
            "amount": 0
        }

    ],

    reducers: {
        addFoliageToCart: (state, action) => {
            const { payload: index } = action;
            if (state[index]){
                state[index].added_to_cart = true;
                state[index].amount += 1;
            } 
        },
        removeFoliageFromCart: (state, action) => {
            const {payload: index} = action;
            if (state[index] && state[index].amount !== 0){
                state[index].added_to_cart = false;
                state[index].amount = 0;
            }
        },
        increaseFoliageInCart: (state, action) => {
            const { payload: index} = action;
            if (state[index]) {
                state[index].amount += 1;
            }
        },
        decreaseFoliageInCart: (state, action) => {
            const { payload: index} = action;
            if (state[index]) {
                state[index].amount -= 1;
            }
        } 
    }
})

export const { addFoliageToCart, removeFoliageFromCart, increaseFoliageInCart, decreaseFoliageInCart } = foliageSlice.actions;

export default foliageSlice.reducer;