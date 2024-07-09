"use client";

import { Hero } from "@/components";
import { CustomFilter, SearchBar, CarCard, ShowMore } from "@/components";
import { fetchCars } from "@/API";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [cars, setCars] = useState([]);

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [limit, setLimit] = useState(10);
  const [year, setYear] = useState(2022);
  const [loading, setLoading] = useState(false);

  const getCars = async () => {
    setLoading(true);
    try {
      const carsData = await fetchCars({
        manufacturer: manufacturer || "",
        model: model || "",
        limit: limit || 10,
        fuel: fuel || "",
        year: year || 2010,
      });
      setCars(carsData);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('Changed', manufacturer)
    getCars();
  }, [manufacturer, year, model, limit, fuel]);



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
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter title={"fuel"} options={fuels} setFilter = {setFuel}/>
            <CustomFilter title={"year"} options={yearsOfProduction} setFilter = {setYear} />
          </div>
        </div>

        {cars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {cars?.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}
            <ShowMore
              pageNumber = {limit / 10}
              isNext = {limit > cars.length}
              setLimit = {setLimit}
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
