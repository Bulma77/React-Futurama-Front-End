import { useState, useEffect } from "react";

// Import du package Axios
import axios from "axios";

const Episodes = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sampleapis.com/futurama/episodes"
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
      <h1>Episodes</h1>
      <div className="card">
        {data.map((episode) => {
          return (
            <div className="card-details" key={episode.title}>
              <h2>{episode.title}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Episodes;
