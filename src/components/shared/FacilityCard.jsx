import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineSportsScore, MdSportsVolleyball } from 'react-icons/md';

const FacilityCard = ({ facility }) => {
  const { image, price_per_hour, location, facility_type, name , _id } = facility
  return (
    <div className='p-5 md:p-0'>

      <div className='relative '>
        <Image
          className='h-90 object-cover w-full rounded-2xl'
          src={image}
          alt={name}
          width={200}
          height={200}
        />

        <div className='absolute bottom-0 backdrop-blur-[2px] w-full p-3 space-y-2'>
          <h1 className='text-white font-bold text-xl drop-shadow-lg'>{name}</h1>
          <div className='flex justify-between items-center'>
            <p className=' flex items-center bg-white/50 px-2 py-1 font-semibold rounded-2xl '> <CiLocationOn /> {location}</p>
            <p className='bg-white/50 px-2 py-1 rounded-2xl flex items-center '> <MdSportsVolleyball />{facility_type}</p>
          </div>
          <p className=' font-semibold bg-white/50 px-2  py-1 rounded-2xl w-29'>${price_per_hour} <span className='text-sm text-gray-700'>/per hour</span> </p>
          <Link href={`/all-facilities/${_id}`}>
            <Button className={'w-full bg-white'} variant='white'>
              See Details
            </Button>
          </Link>
        </div>
      </div>



    </div>
  );
};

export default FacilityCard;