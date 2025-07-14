import { configureStore } from "@reduxjs/toolkit"
import foliageReducer from "./components/foliage/foliageSlice"
import floweringReducer from './components/flowering/floweringSlice'
import succulentReducer from "./components/succulent/succulentSlice"
import fernsReducer from './components/ferns/fernsSlice'

export default configureStore({
    reducer: {
        foliage: foliageReducer,
        flowering: floweringReducer,
        succulent: succulentReducer,
        ferns: fernsReducer
    }
})