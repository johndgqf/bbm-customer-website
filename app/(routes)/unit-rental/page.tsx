"use client";
import Gallery from "@/components/unit-gallery";
import Info from "@/components/info";
import Container from "@/components/ui/container";

import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { Image } from "@/types";

import GalleryTab from "@/components/unit-gallery/gallery-tab";


const unitRentals = {
  name: "99 Big Break Road, Oakley, CA 94561",
  price: "$2,500 - Occupied",
  description:
    "Spacious single level home on the water is available for rent. Located at the heart of Big Break Marina, the unit comes with a spacious living room and kitchen attached, features granite countertops and island. Large sliding door leads to the open water. Laundry area with washer and dryer hook up. Community amenities include launch ramp and picnic areas. Finished yard space and garden. New window coverings. Covered patio",
  applyUrl: "https://turbo.rent/s/1262094p",
  details: [{ type: "Cottage" }, { size: "925 SF" }],
  amenities: [
    "Central Heat and AC",
    "Cable Ready",
    "Washer / Dryer Hook Up",
    "Smoke Alarm",
    "Private lawn",
    "Private parking",
    "Outdoor deck",
    "By the water",
  ],
  images: [
    { id: "1", url: "/images/unit-99/ext-1.jpeg" },
    { id: "2", url: "/images/unit-99/ext-2.jpeg" },
    { id: "3", url: "/images/unit-99/int-1.jpeg" },
    { id: "4", url: "/images/unit-99/int-2.jpeg" },
  ],
};

const UnitRental = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div id="fixed-here" className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Tab.Group as="div" className="flex flex-col-reverse">
              <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {unitRentals.images.map((image) => (
                    <GalleryTab key={image.id} image={image} />
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="aspect-square w-full">
                {unitRentals.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                      <NextImage
                        fill
                        src={image.url}
                        alt="Image"
                        className="object-cover object-center"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {unitRentals.name}
                  <br />
                  <div className="text-2xl">
                  {unitRentals.price}
                  </div>
                </h2>
                <p className="mt-8 text-lg text-gray-900">{unitRentals.description}</p>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-md font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Details
                  </h3>
                  <div className="mt-4 text-lg">
                    <p><span className="font-bold space-y-4">Property Type: </span> Cottage</p>
                    <p><span className="font-bold space-y-4">Building Size: </span> 925 SF</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-md font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Amenities
                  </h3>
                  <div className="mt-4">
                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm"
                    >
                      {unitRentals.amenities.map((amenity) => (
                        <li key={amenity} className="text-gray-900">
                          <span className="text-lg">{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </dl>
              <hr className="my-10" />
              <h3 className="text-md font-bold tracking-tight text-gray-900 sm:text-3xl">
                Contact Us
              </h3>
              <div className="mt-4 text-lg">
              <p>Big Break Marina</p>
              <p>925-679-0900</p>
              <p>info@bigbreakmarina.com</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UnitRental;
