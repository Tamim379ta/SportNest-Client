import Image from 'next/image';
import React from 'react';

const FacilityCard = ({ facility }) => {
  const { image, price_per_hour, location, facility_type, name } = facility
  return (
    <div>

      <div>
        <Image 
        src={image}
        alt={name}
        width={200}
        height={200}
        />
      </div>

      <div>
        <h1>{name}</h1>
        <p>{location}</p>
        <p>{facility_type}</p>
      </div>

    </div>
  );
};

export default FacilityCard;