import { combineReducers } from "redux";

// Slices
import productReducer from "../features/Product/ProductSlice";
import reviewReducer from "../features/Review/ReviewSlice";
import resourceReducer from "../features/Resource/ResourceSlice";

export const rootReducer: any = combineReducers({
  products: productReducer,
  reviews: reviewReducer,
  resources: resourceReducer
});
