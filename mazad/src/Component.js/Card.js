

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ items }) => {
  const navigate = useNavigate();

  const handleDetailsClick = (id) => {
    navigate(`/detailPage`);
  };

  return (
    <div className='flex flex-wrap gap-2'>
      {items.map(item => (
        <div class="max-w-sm mx-auto bg-card rounded-lg shadow-lg overflow-hidden w-1/4 mt-9 " key={item.id}>
          <img class="w-full h-48 object-cover" src={item.image} alt="Car" />
            <div class="p-4">
              <h2 class="text-lg font-semibold text-primary">toyota</h2>
              <p class="text-muted-foreground">سيارات مستعمله وجديده</p>
              <div class="flex items-center justify-between mt-4">
                <div className='flex font-bold'>
                  <p class="text-sm text-secondary color-black mr-4">Model: XYZ</p>
                  <p class="text-sm text-secondary color-black">Year: 2022</p>
                </div>
              </div>
              <div className='flex justify-between items-center '>
              <button href="#" onClick={() => handleDetailsClick(item.id)} class="mt-4 inline-block bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg px-4 py-2 text-center bg-[#8EABBF] text-[#ffffff]">DETAILS</button>
              <p class="text-lg font-semibold text-primary">$20,000</p>
              </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Card;
