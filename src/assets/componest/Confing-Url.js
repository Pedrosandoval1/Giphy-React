import { Api_Search, Key } from "./Url";

export const FetchSearch = async (value, numberOne) => {
  try {
    const response = await fetch(
      `${Api_Search}?q=${value}&api_key=${Key}&limit=${numberOne}`
    );
    const data = await response.json();
    return data;
    // return response;
  } catch (err) {
    console.log(err, "algo salió mal");
  }
};
