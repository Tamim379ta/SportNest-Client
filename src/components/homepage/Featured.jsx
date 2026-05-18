import FacilityCard from "../shared/FacilityCard";

const Featured = async() => {
  const res = await fetch('http://localhost:5000/featured-facilities')
  const data = await res.json()
  return (
    <div className="my-20 container mx-auto">
      <h1 className="text-center text-4xl md:text-5xl font-bold ">Featured <span className="text-green-800">Facilities</span> </h1>
      <p className="text-center mt-3 text-xl text-muted">Discover our most popular and highly rated sports facilities</p>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        {
          data.map(facility => <FacilityCard key={facility._id} facility={facility}/>)
        }
      </div>
    </div>
  );
};

export default Featured;