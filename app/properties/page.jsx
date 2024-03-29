import Link from "next/link";
import React from "react";
// import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";
import Image from "next/image";
import { fetchProperties } from "@/utils/request";
import PropertySearchForm from "@/components/PropertySearchForm";

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  return (
    <>
      <section className='bg-blue-700 py-4'>
        <div className=' max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
          <PropertySearchForm />
        </div>
      </section>
      {
        <section className='px-4 py-6'>
          <div className='contxainer-xl lg:container m-auto px-4 py-6'>
            {properties.length === 0 ? (
              <p>No properties found</p>
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {properties.map((property) => (
                  <PropertyCard key={property._id} property={property} />
                ))}
              </div>
            )}
          </div>
        </section>
      }
    </>
  );
};

export default PropertiesPage;
