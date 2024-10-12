import axios from "axios";

const URL = "link";

export const fetchProducts = async()=>{
    const response = await axios.get(URL)
    return response.data;
}