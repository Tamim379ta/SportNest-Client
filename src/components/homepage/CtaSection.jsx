import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CtaSection = () => {
  return (
    <div>
      <div className="relative w-full h-80 overflow-hidden">

        <Image
          className="w-full h-full object-cover"
          src={"/assets/Cta2.png"}
          alt="CTA Banner"
          width={1200}
          height={400}
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

          <h1 className="text-3xl md:text-4xl font-bold">
            Ready to Play Your Next Match?
          </h1>

          <p className="text-sm md:text-base mt-2 text-gray-200">
            Book sports venues instantly with SportNest.
          </p>

          <Link href={'/all-facilities'}>
            <button className="mt-5 px-6 py-2 bg-green-500 hover:bg-green-600 rounded-full font-medium transition">
              Explore Venues
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default CtaSection;