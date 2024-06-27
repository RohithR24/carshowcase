
import { FilterProps} from '@/types'; 


// Returns the response from the API
export async function fetchCars(filters: FilterProps) {
  const {model, year, fuel, manufacturer} = filters;
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${manufacturer}`;

    console.log('URL', url);
    //url.searchParams.append('model', )
    
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
  