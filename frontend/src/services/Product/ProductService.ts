// Helpers
import axios from "../../helpers/axiosInstance";
// Service Config
import productServiceConfig from "./ProductConfig";

// GET - /products
export async function getAllProducts() {
    try {
        const response = await axios.get(`/${productServiceConfig.getAll}`);
        return response;
    } catch (error: any) {
        throw Error(error);
    }
};