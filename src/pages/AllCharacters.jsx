import { useState, useEffect } from "react";

// Import du package Axios
import axios from "axios";

import Loader from "../components/Loader";
import Card from "../components/Card";

const AllCharacters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // const character = data.find((e) => e.id === `${selectedCharacter}`);
  console.log(data);
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
      <div className="card-bloc">
        {data.map((characters) => {
          return <Card key={characters.id} data={characters} />;
        })}
      </div>
    </>
  );
};
export default AllCharacters;
