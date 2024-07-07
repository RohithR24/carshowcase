"use client";

import { Hero } from "@/components";
import { CustomFilter, SearchBar, CarCard, ShowMore } from "@/components";
import { fetchCars } from "@/API";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [cars, setCars] = useState([]);

  const [manufacturer, setManufacturer] = useState("hyundai");
  const [model, setModel] = useState("sonata");
  const [fuel, setFuel] = useState("gas");
  const [limit, setLimit] = useState(10);
  const [year, setYear] = useState(2022);
  const [loading, setLoading] = useState(false);

  const getCars = async () => {
    setLoading(true);
    try {
      if(!loading){
        const carsData = await fetchCars({
          manufacturer: manufacturer || "",
          model: model || "",
          limit: limit || 10,
          fuel: fuel || "",
          year: year || 2010,
        });
        console.log('Rohith', carsData);
        setCars(carsData);
      }
      
    } catch (error) {
      console.log("Error: ", error);
    }
    finally{
      setLoading(false);
    }
  };

  useEffect(() => {getCars()}, [manufacturer, year, model, limit, fuel]);
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
            <CustomFilter title={"fuel"} options={fuels} />
            <CustomFilter title={"year"} options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {cars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(limit || 10) / 10}
              isNext={(limit || 10) > cars.length}
            />
          </section>
        ) : (
          <div>
            <h4>
              No Data
              {/* {cars?.map(() => (<CarCard />))} */}
            </h4>{" "}
          </div>
        )}
      </div>
    </main>
  );
}
