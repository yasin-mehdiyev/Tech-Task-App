// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectProductSlice,
  setAllProducts,
} from "../store/features/Product/ProductSlice";
// Model
import { Product } from "../models/api/Products/Product";
// Services
import * as productServices from "../services/Product/ProductService";

const useProducts = () => {
  const dispatch = useDispatch<any>();
  const products: any = useSelector(selectProductSlice);

  return {
    products,
    getProducts: async () => {
      try {
        const { data }  = await productServices.getAllProducts();
        if (data && data.length > 0) {
          const productData: Product = data.map((item: Product) => new Product(item));
          dispatch(setAllProducts(productData));
        }
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export default useProducts;
