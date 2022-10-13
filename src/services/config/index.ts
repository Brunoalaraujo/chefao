import axios from "axios";

export const baseURL = axios.create({
    baseURL: "http://localhost:9000",
    headers: {
        "Content-Type": "application/json",
    }
});



// export default baseUrl
