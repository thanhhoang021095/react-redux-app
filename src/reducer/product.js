// import productData from "data/product.json";
import axios from "axios";

// CONSTANT
const ADD_NEW_ITEM = "ADD_NEW_ITEM";
const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
const FETCH_PRODUCTS_FAIL = "FETCH_PRODUCTS_FAIL";

const initState = {
  products: [],
  message: "",
};

export const fetchProductSuccess = (data) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data,
  message: "LẤY DANH SÁCH SẢN PHẨM THÀNH CÔNG",
});

export const fetchProductFail = (message) => ({
  type: FETCH_PRODUCTS_FAIL,
  payload: [],
  message: message,
  
});

export const fetchData = () => {
  return  (dispatch) => {
      return new Promise((resolve, reject) => {
        axios.get("http://localhost:8080/products").then(res => {
          console.log(res.data);
          dispatch(fetchProductSuccess(res.data));
          resolve();
        }).catch((err) => {
          dispatch(fetchProductFail(err));
          reject();
        });
      })
    //   if (api) {
    //     
    //   }
    // } catch (error) {
    //   dispatch(fetchProductFail(error));
    // }
  };
};

export const addNewProduct = (data) => ({
  type: ADD_NEW_ITEM,
  payload: data,
  message: "THÊM SẢN PHẨM MỚI VÀO DANH SÁCH",
});

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        message: action.message,
      };
    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        message: action.message,
      };
    case ADD_NEW_ITEM:
      return {
        ...state,
        products: [...state.products, action.payload],
        message: action.message,
      };
    default:
      return state;
  }
};

export default productReducer;