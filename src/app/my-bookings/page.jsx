import BookingCard from '@/components/shared/BookingCard';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const BookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
  })
  const user = session?.user

  const res = await fetch(`http://localhost:5000/my-bookings`)
  const data = await res.json()

  const filterData = data.filter(item => item.facility_id === user.id)

  return (
    <div className='mt-25 container mx-auto'>

      <h1 className='text-3xl md:text-4xl font-bold text-center'>My Bookings</h1>
      <div className='flex flex-col gap-5 my-10'>
        {
          filterData.length ? (filterData.map(item => <BookingCard key={item._id} item={item} />)) :
            (<div className="text-center py-10 space-y-2 text-gray-500">
              <p className="text-lg">No Bookings yet</p>
              <p className="text-sm">let's Book Your First Venu.. 🚀</p>
              <Link href={'/all-facilities'}>
                <Button className={'bg-green-800 text-white group'} variant="outline">Booking <FaArrowRightLong className="group-hover:translate-x-2 duration-300" /> </Button>
              </Link>
            </div>)
          
        }
      </div>

    </div>
  );
};

export default BookingsPage;