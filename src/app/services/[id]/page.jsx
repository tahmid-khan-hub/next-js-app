import React from "react";

const ServicesDetailsPage = ({ params }) => {
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

  const id = params.id;
  const service = services.find((service) => service._id === id);

  if (!service) {
    return <h2 className="text-red-600">Service not found!</h2>;
  }

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold">{service.name}</h3>
      <p className="text-gray-600 mt-2">ID: {service._id}</p>
      <img
        src={service.image}
        alt={service.name}
        className="mt-4 w-40 h-40 object-cover rounded-lg shadow-md"
      />
    </div>
  );
};

export default ServicesDetailsPage;
