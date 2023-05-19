// Helpers
import axios from "../../helpers/axiosInstance";
// Models
import { Review } from "../../models/api/Reviews/Review";
// Service Config
import reviewServiceConfig from "./ReviewConfig";

// GET - /reviews
export async function getAllReviews() {
    try {
        const response = await axios.get(`/${reviewServiceConfig.getAll}`);
        return response;
    } catch (error: any) {
        throw Error(error);
    }
};

// POST - /reviews
export async function createReview(payload: Review) {
    try {
        const response = await axios.post(`/${reviewServiceConfig.getAll}`, payload);
        return response;
    } catch (error: any) {
        throw Error(error);
    }
};
