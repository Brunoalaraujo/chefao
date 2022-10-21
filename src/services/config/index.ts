import axios from "axios";

export const baseURL = axios.create({
    baseURL: "https://cola-ai.herokuapp.com",
    headers: {
        "Content-Type": "application/json",
    }
});

  
  export default baseURL;


// export default baseUrl
