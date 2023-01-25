import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const CarView = ({ car }) => {
    const navigate = useNavigate();

  const [isStarred, setIsStarred] = useState(false);


  const toggleStar = () => setIsStarred(!isStarred);

  return (
    <div className="w-full h-full rounded-lg shadow-md m-2 overflow-hidden bg-white">
      <div className="flex items-center justify-between p-2">
        <div className="text-base text-gray-800 font-medium">{car.carName}</div>
        <button
          className={`w-8 h-8 rounded-full text-xl ${
            isStarred ? "text-yellow-500" : "text-gray-500"
          }`}
          onClick={toggleStar}
        >
        </button>
      </div>
      <img className="w-full h-64 object-cover" src={car.images[1]} alt={car.carName} />
      <div className="p-2">
        
            <div className='flex flex-row justify-between p-1'>
                <div className="my-4 text-sm text-gray-800 font-medium">Price: ${car.carPrice}</div>
                <button to={{pathname: '/cardetail', state: {car}}} onClick={() => {navigate("/cardetail",{ state: { car } });
        }} className="bg-cyan-600 text-white rounded-lg text-sm p-1 ">More Details</button>

            </div>
        
</div>
</div>
);
};

export default CarView;