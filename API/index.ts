import { FilterProps } from "@/types";

// Returns the response from the API
export async function fetchCars(filters: FilterProps) {
  const { model, year, fuel, manufacturer } = filters;

  const Url = new URL("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars");
  Url.searchParams.append("model", model);
  Url.searchParams.append("make", manufacturer);
  Url.searchParams.append("year", `${year}`);
  Url.searchParams.append("fuel", fuel);

  // const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${manufacturer}`;

  // console.log("URL 1", url);
  // console.log("URL 2", Url);

  const apiKey = process.env.X_RAPIDAPI_KEY || "";
  const apiHost = process.env.X_RAPIDAPI_HOST || "";

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": apiHost,
    },
  };

  try {
    const response = await fetch(Url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
