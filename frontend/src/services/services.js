// import axios from 'axios';

// const API_BASE_URL = "http://localhost:8081" ; // Lấy API_URL từ file .env

// const getStores = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/stores`);
//     return response.data;
//   } catch (error) {
//     console.error('Lỗi khi lấy danh sách cửa hàng:', error);
//     throw error;
//   }
// };

// // ... (các hàm khác)

// export { getStores };

import * as httpRequest from '../utils/httptestRequest';

export const getStores = async () => {
    try {
        const res = await httpRequest.get('stores');
        return res;
    } catch (error) {
        console.log(error)
    }
}