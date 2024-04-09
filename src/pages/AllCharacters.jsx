import { useState, useEffect } from "react";

// Import du package Axios
import axios from "axios";

import Loader from "../components/Loader";
import Card from "../components/Card";

import Sayings from "../components/Sayings";

const AllCharacters = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sampleapis.com/futurama/characters"
        );
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <h1>Charcaters</h1>

      <div>
        {selectedCharacter === null ? (
          <div className="card-bloc">
            {data.map((characters) => {
              return (
                <Card
                  key={characters.id}
                  data={characters}
                  setSelectedCharacter={setSelectedCharacter}
                />
              );
            })}
          </div>
        ) : (
          <div>
            {data.map((characters) => {
              return (
                <Sayings
                  key={characters.id}
                  characters={characters}
                  selectedCharacter={selectedCharacter}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default AllCharacters;
