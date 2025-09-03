"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MealSearchInput = () => {
//   const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const searchQuery = {search}
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParam}`;
    router.push(url);
  }, [search]);
  return (
    <div className="flex justify-center items-center ">
      <input className="text-black bg-white mb-10 mt-5 p-2 border-green-600" value={search} onChange={(e) => setSearch(e.target.value)}></input>
    </div>
  );
};

export default MealSearchInput;
