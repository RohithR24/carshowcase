import { Hero } from "@/components";
import Image from "next/image";
import { CustomFilter, SearchBar,CarCard } from "@/components";
import { fetchCars } from "@/API";
import { manufacturers, fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";

export default async function Home({searchParams}: HomeProps) {

  
  const cars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    model: searchParams.model  || '',
    limit: searchParams.limit || 10,
    fuel: searchParams.fuel || '',
    year: searchParams.year || 2000
  });
  
  console.log('manufacturer 02 ', searchParams.manufacturer)
  console.log('Model 02', searchParams.model)
  console.log('Cars', cars.length);


  const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you like.</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title={"fuel"} options={fuels}/>
            <CustomFilter title={"year"} options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? 
        <section>
            <div className="home__cars-wrapper">
              {cars?.map((car) => (<CarCard  car= {car}/>))}

            </div>
        </section> : 
        <div> 
          <h4>
            No Data
          {/* {cars?.map(() => (<CarCard />))} */}
            </h4> </div>}
      </div>
    </main>
  );
}
