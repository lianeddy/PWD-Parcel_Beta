import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";
import { UserTransactionReducer } from "./UserTransactionReducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  product: productReducer,
  transaction: UserTransactionReducer,
});
