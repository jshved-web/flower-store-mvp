import { ApiService } from '../services/ApiService.js';

export const apiGetAllFlowersData = async () => {
  const url = 'products';
  try {
    const { data } = await ApiService()
      .get(url);
    return data;
  } catch (err) {
    console.error(err, err.message);
  }
};

export const apiPostFlowerToCart = async (params) => {
  const url = 'cart';
  try {
    const { data } = await ApiService()
      .post(url, {
          ...params,
      });
    return data;
  } catch (err) {
    console.error(err, err.message);
  }
}
