import { useState, useEffect } from "react";

// Import du package Axios
import axios from "axios";

const AllCharacters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
    <p>Loading in progress...</p>
  ) : (
    <>
      <div className="card">
        {data.map((characters) => {
          console.log(characters.name.first);
          return (
            <div className="card-details" key={characters.id}>
              <p>{characters.name.first}</p>
              <img src={characters.images.main} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default AllCharacters;
