
import ManageFacilites from "@/components/shared/ManageFacilites";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const ManageFacility = async () => {

  const res = await fetch(`http://localhost:5000/manage-my-facilities`)
  const data = await res.json();
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
  })
  const user = session?.user
  const filterData = data.filter(item => item.owner_email === user.email)
  return (
    <div className='mt-25 container mx-auto'>
      <h1 className=' text-3xl md:text-4xl text-center font-bold p-5'>Manage My Facilities</h1>


      <div className="flex flex-col gap-5 mb-10 ">
        {
          filterData.length ? (
            filterData.map((item) => (
              <ManageFacilites key={item._id} item={item} />
            ))
          ) : (
            <div className="text-center py-10 space-y-2 text-gray-500">
              <p className="text-lg">No facilities yet</p>
              <p className="text-sm">Start by adding your first facility 🚀</p>
              <Link href={'/add-facilities'}>
                <Button className={'bg-green-800 text-white group'} variant="outline"> Add Facility<FaArrowRightLong className="group-hover:translate-x-2 duration-300" /> </Button>
              </Link>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default ManageFacility;