import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
const CarDetail = () => {
  const location = useLocation();
  
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }
  const car = location.state.car;
  

  return (
    <div className="bg-white p-8 rounded-lg">
  <div className="mt-8 flex flex-col md:flex-row">
    <div className="relative w-full md:w-1/2">
      <img src={car.images[0]} alt={car.carName} className="w-full rounded-lg" />
    </div>
    <div className="w-full md:w-1/2 pl-4">
    <div className="flex flex-col justify-between">
    <h1 className="text-2xl font-medium">{car.carName}</h1>
    <h2 className="text-lg font-medium text-yellow-500">Price: ${car.carPrice}</h2>
  </div>
      <p className="text-gray-600">{car.detail}</p>
      <div className="mt-8">
        <h2 className="text-lg font-medium">Features</h2>
        <ul className="list-disc pl-6">
          {car.features.map((feature, index) => (
            <li key={index} className="text-gray-700">{feature}</li>
          ))}
        </ul>
        <div className="mt-8">
    <h3 className="text-lg font-medium">What's included in the price</h3>
    <ul className="list-disc pl-6">
      {car.includedInThePrice.map((included, index) => (
        <li key={index} className="text-gray-700">{included}</li>
      ))}
    </ul>
  </div>
  <div className="mt-8 flex items-center justify-between">
  <div className="relative rounded-md shadow-sm">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
    </div>
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      className="form-input py-2 px-4 rounded-md leading-5 text-gray-700 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:text-gray-700 focus:bg-white"
    />
  </div>
  <button className="ml-4 py-2 px-4 rounded-md text-sm font-medium leading-5 text-white bg-cyan-600 hover:bg-cyan-500 focus:outline-none">
    Book Now
  </button>
</div>
      </div>
    </div>
  </div>
  
  
  <div className="mt-8">
    <h2 className="text-lg font-medium">Additional Images</h2>
    <div className="flex flex-col md:flex-row">
      {car.images.map((image, index) => (
        <img key={index} src={image} alt={car.carName} className="w-full md:w-1/4 h-40 object-cover m-2 rounded-lg" />
        ))}
        </div>
        
          </div>
        </div>

  );
};

export default CarDetail;