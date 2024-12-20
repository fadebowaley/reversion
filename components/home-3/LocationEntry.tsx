import React, { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, MapPinIcon } from "@heroicons/react/24/outline";



//TODO - Data from database Hotel Model
const accomodations = [
  { id: 1, name: "All Accommodations" },
  { id: 2, name: "Grace Courts" },
  { id: 3, name: "Shiloh Apartments" },
  { id: 4, name: "Redemption Resort" },
  { id: 5, name: "Joy to the Wise" },
  { id: 6, name: "1000 Chalets" },
  { id: 7, name: "Gethsemane Apartment" },
  { id: 8, name: "Wave of Glory Apartment" },
  { id: 9, name: "Shepherd's Place" },
  { id: 10, name: "Jordan Executive Chalets" },
  { id: 11, name: "International Guest House" },
  { id: 12, name: "Overflow Executive Chalets (Annex)" },
  { id: 13, name: "White House Suites" },
  { id: 14, name: "Dove Executive Chalets" },
  { id: 15, name: "Moses Apartment" },
  { id: 16, name: "The Overflow Executive Chalets (Main)" },
  { id: 17, name: "2000 Chalets" },
  { id: 18, name: "Regional Executive Chalets" },
  { id: 19, name: "RCCG Missionary Court" },
  { id: 20, name: "RCCG Jubilee Chalets" },
  { id: 21, name: "The All Sufficient God's Chalets" },
  { id: 22, name: "International Guest Suites" },
  { id: 23, name: "RCCG Healthy Foods Guest House" },
  { id: 24, name: "RCCG Hospitality" },
];
;



const LocationEntry: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  const [selected, setSelected] = useState({});
  const [query, setQuery] = useState("");

  const filteredaccomodations =
    query === ""
      ? accomodations
      : accomodations.filter((accomodation) =>
          accomodation.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative w-full md:w-[48%] xl:w-[22%] shrink-0">
        <div className="relative w-full cursor-pointer overflow-hidden rounded-full sm:text-sm bg-[var(--bg-1)] border focus:outline-none">
          <Combobox.Input
            className="w-full bg-[var(--bg-1)] border-none py-3 pl-3 md:pl-4 text-sm leading-5 text-gray-900 focus:outline-none"
            displayValue={(accomodation: any) => accomodation.name}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-4">
            <MapPinIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}>
          <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredaccomodations.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing accomodation Found.
              </div>
            ) : (
              filteredaccomodations.map((accomodation) => (
                <Combobox.Option
                  key={accomodation.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-3 pl-10 pr-4 ${
                      active ? "bg-gray-200 text-gray-900" : "text-gray-900"
                    }`
                  }
                  value={accomodation}>
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}>
                        {accomodation.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}>
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default LocationEntry;
