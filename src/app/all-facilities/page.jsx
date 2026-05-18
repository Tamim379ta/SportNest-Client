import FacilityCard from '@/components/shared/FacilityCard';
import React from 'react';

const AllFacilitiesPage = async () => {
  const res = await fetch('http://localhost:5000/all-facilities')
  const data = await res.json()
  return (
    <div className='pt-20'>
      <h1 className='font-bold text-3xl text-center pt-5'>All Facilitis</h1>

      <div className='grid grid-cols-3 gap-10 container mx-auto my-10'>
        {
          data.map(facility => <FacilityCard key={facility._id} facility={facility} />)
        }
      </div>
    </div>
  );
};

export default AllFacilitiesPage;
