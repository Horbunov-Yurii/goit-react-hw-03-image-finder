import axios from "axios";


const API_KEY = '38625269-e94cc3b88596f307f4c7cd69d';
 

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
 
  params: {
    orientation: 'landscape',
    per_page: 12,
    key: API_KEY,
  },
});


export const getImages = async (query, page) => {
  const { data } = await instance.get(`/?q=${query}&page=${page}`);

  return data;
};