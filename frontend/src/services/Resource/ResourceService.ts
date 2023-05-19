import axios from "axios";
// Helpers
import { RESOURCE_BASE_URL } from "../../helpers/constants";
// Service Config
import resourceServiceConfig from "./ResourceConfig";

// GET - /resources
export async function getAllResources() {
    try {
        const response = await axios.get(`${RESOURCE_BASE_URL}/${resourceServiceConfig.getAll}`);
        return response;
    } catch (error: any) {
        throw Error(error);
    }
};
