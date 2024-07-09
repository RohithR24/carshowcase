import { FilterProps } from "@/types";

// Returns the response from the API
export async function fetchCars(filters: FilterProps) {
  const { model, year, fuel, manufacturer, limit } = filters;

  console.log('Test: 01', model);
  const Url = new URL("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars");
  Url.searchParams.append("model", model);
  Url.searchParams.append("make", manufacturer);
  Url.searchParams.append("year", `${year}`);
  Url.searchParams.append("fuel_type", fuel);
  Url.searchParams.append("limit", String(limit));


  // const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${manufacturer}`;

  // console.log("URL 1", url);
  // console.log("URL 2", Url);

  const apiKey = process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY || "";
  const apiHost = process.env.NEXT_PUBLIC_RAPIDAPI_HOST || "";

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
    console.log('Test: 01', apiKey);
    console.log('Test: 03', apiHost);

    return result;
  } catch (error) {
    console.error(error);
  }
}
