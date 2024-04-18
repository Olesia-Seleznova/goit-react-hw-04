import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/photos";

export const fetchPhotos = async () => {
  const response = await axios.get(
    "/?client_id=tRsVS1GWcbzQWiFrTd0IrAnjJx0-dCh59uIXJNd0_Uo"
  );
  return response.data;
};
