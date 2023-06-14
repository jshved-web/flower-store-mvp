import { ApiService } from "shared/services/ApiService.js"

export const apiGetAllItemsInCart = async () => {
  const url = 'cart';
  try {
    const { data } = await ApiService()
      .get(url);
    return data;
  } catch (err) {
    console.error(err, err.message);
  }
};
