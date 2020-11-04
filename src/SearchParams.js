import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState([]);
  const [breeds, setBreeds] = useState([]);

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={animal}
              onChange={(e) => setAnimal(e.target.value)}
              onBlur={(e) => setAnimal(e.target.value)}
            >
              <option value="">All</option>
              {ANIMALS.map((animal) => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="breed">
            Breed
            <select
              id="breed"
              value={breed}
              onChange={(e) => e.target.value}
              onBlur={(e) => e.target.value}
              disabled={!breeds.length}
            >
              <option>All</option>
              {breeds.map((breedString) => (
                <option value={breedString} key={breedString}>
                  {breedString}
                </option>
              ))}
            </select>
          </label>
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
