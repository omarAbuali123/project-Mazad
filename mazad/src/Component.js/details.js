import  { useState } from 'react';
import React from 'react';
import bgvid from '../img/Car 4k wallpaper.mp4'; 
import bg from "../img/bmw-i5-m60-xdrive-m-3840x2160-12608.jpg"; 

const DetailPage = () => {

  const [bidAmount, setBidAmount] = useState(385);


  return (
    <div className="bg-blue-100 min-h-screen p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* <h1 className="text-2xl font-bold mb-4">Expires at 2/5 at 11:51</h1> */}
        <h1 className="text-2xl font-bold mb-4">BMW M4 Competition</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <img 
                src={bg}
                alt="BMW M4" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex space-x-2 mb-4">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i}
                  src={bg}
                  alt={`BMW M4 thumbnail ${i}`}
                  className="w-1/3 h-auto rounded-lg cursor-pointer"
                />
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">تفاصيل المركبه</h2>
            <p className="text-gray-600 mb-2">نوع المحرك: 234</p>
            <p className="text-gray-600 mb-2"> رقم تعريف المركبة: 122345</p>
            <p className="text-gray-600 mb-2">وارد المركبه: امريكا</p>
            <p className="text-gray-600 mb-2">عداد المسافات : 123445</p>
            <p className="text-gray-600 mb-2">ناقل الحركة  : أوتوماتيك</p>
            <p className="mb-2">Starts with 350</p>
            <p className="mb-4">Current price = {bidAmount}</p>
            
            <input 
              type="number" 
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
              AUCTION
            </button>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Car Details</h3>
          <video 
            controls 
            className="w-full h-auto rounded-lg mb-4"
            poster="/path-to-video-thumbnail.jpg"
          >
            <source src={bgvid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-gray-700">
            The BMW M4 Competition is a high-performance luxury sports car. 
            It features a twin-turbocharged 3.0-liter inline-six engine producing 503 horsepower. 
            With its advanced suspension system and precision steering, the M4 Competition 
            delivers an exhilarating driving experience both on the road and track.
          </p>
        </div>
      </div>
    </div>
  ) 
};

export default DetailPage;







