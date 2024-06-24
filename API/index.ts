// Returns the response from the API
export async function fetchCars() {
    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
    
    const apiKey = process.env.X_RAPIDAPI_KEY || '';
    const apiHost = process.env.X_RAPIDAPI_HOST || '';
  
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': apiHost
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  