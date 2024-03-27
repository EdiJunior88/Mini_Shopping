import axios from "axios";

export const API = async () => {
  const response = await axios.get(
    "https://private-0229b7-minishoppingreact.apiary-mock.com/products",
  );
  return response.data.products;
};

// export const API = async () => {
//   const response = await axios.get(
//     "https://run.mocky.io/v3/c181cb8f-8707-4423-9f75-1771c3fe4542/products",
//   );
//   return response.data.products;
// };
