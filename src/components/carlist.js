import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarView from './carview';

const CarList = () => {
    const [carsData, setCarsData] = useState({});
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await axios('https://mocki.io/v1/4f7bf80f-e4c8-44c5-9be2-afc649a5af96');
          setCarsData(result.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
  
    const cars = carsData.cars;
    if (!cars) return <div className=" col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24">
    <div className="w-16 h-16 border border-cyan-600 border-solid rounded-full border-t-4  animate-spin">

</div>
</div>;
    
    return (
      <div className=" bg-gray-100">
        <h1 className='text-lg text-gray-800 font-semibold mt-8' >The Cars</h1>
        <div className='flex flex-wrap mx-12' >  
        {cars.map(car => (
          <div key={car.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <CarView car={car} />
        </div>
        ))}
        </div>
      </div>
    );
  };

export default CarList;
