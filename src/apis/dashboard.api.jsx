// Importing constants
import apiPath from "../constants/api-path.constant";

import axios from "../configs/axios-instances";

const dashBoardApi = {
    AllServices: ({ payload, success, error }) => {
        const {
          services: { getAllServices },
        } = apiPath;
    
        axios.getRequest({ path: getAllServices, payload, success, error });
      },
};

export default dashBoardApi;
