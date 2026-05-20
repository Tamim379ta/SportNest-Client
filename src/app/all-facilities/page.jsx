"use client";

import { useEffect, useState } from "react";
import FacilityCard from "@/components/shared/FacilityCard";
import Search from "@/components/shared/Search";
import CategoryDropdown from "@/components/shared/SortBy";

const AllFacilitiesPage = () => {

  const [facilities, setFacilities] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");



  const fetchFacilities = async (text = searchText, category = selectedCategory) => {

    const res = await fetch(
      `http://localhost:5000/all-facilities?search=${text}&category=${category}`
    );

    const data = await res.json();
    setFacilities(data);
  };
  useEffect(() => {
    fetchFacilities();
  }, []);

  return (
    <div className="pt-25">

      <h1 className="text-center text-3xl font-bold">
        All Facilities
      </h1>

      <div className="container mx-auto mt-5">

        <Search
          onSearch={(text) => {
            setSearchText(text);
            fetchFacilities(text, selectedCategory);
          }}
        />
      </div>
      <div className="container mx-auto flex justify-end mt-2">
        <CategoryDropdown
          onChange={(value) => {
            setSelectedCategory(value);
            fetchFacilities(searchText, value);
          }}
        />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 container mx-auto mt-5 mb-10">

        {facilities.map((f) => (
          <FacilityCard key={f._id} facility={f} />
        ))}

      </div>

    </div>
  );
};

export default AllFacilitiesPage;