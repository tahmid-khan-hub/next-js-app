import Link from "next/link";
import React from "react";

const ServicesPage = () => {
  const services = [
    {
      _id: "64a1b2c3d4e5f6789012abcd",
      name: "Web Development",
      image: "https://via.placeholder.com/150?text=Web+Dev",
    },
    {
      _id: "64b2c3d4e5f6789012abcdea",
      name: "Mobile App Development",
      image: "https://via.placeholder.com/150?text=Mobile+App",
    },
    {
      _id: "64c3d4e5f6789012abcdeb12",
      name: "UI/UX Design",
      image: "https://via.placeholder.com/150?text=UI+UX",
    },
  ];

  return (
    <div>
      <h1>Services page</h1>
      <div className=" p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service._id}
            className="p-4 border rounded-lg shadow-md flex flex-col items-center"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-32 h-32 object-cover mb-3 rounded"
            />
            <h4 className="text-lg font-semibold">{service.name}</h4>
            <Link href={`/services/${service._id}`}>
              <button className="p-2 bg-green-600 text-white rounded-xl mt-3">
                Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;