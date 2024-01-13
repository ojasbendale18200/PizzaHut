import Image from "next/image";
import React from "react";

const MenuItem = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:scale-105">
      <div className="relative">
        <Image
          className="mx-auto rounded-md"
          src="/pizza.png"
          alt="Pepperoni Pizza"
          height={200}
          width={200}
        />
        <span className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-tr-md rounded-bl-md">
          New!
        </span>
      </div>
      <div className="mt-6">
        <h4 className="font-semibold text-3xl mb-2">Pepperoni Pizza</h4>
        <p className="text-gray-600 text-lg mb-4">
          A classic favorite with pepperoni slices, melted cheese, and a savory
          tomato sauce. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-gray-700 text-xl font-semibold mr-2">
              $12
            </span>
            <span className="text-gray-500 text-sm">Per Pizza</span>
          </div>
          <button className="bg-primary text-white rounded-full px-6 py-3 hover:bg-primary-dark transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
