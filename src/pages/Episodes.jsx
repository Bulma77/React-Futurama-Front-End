import { useState, useEffect } from "react";

// Import du package Axios
import axios from "axios";

// Import Loader
import Loader from "../components/Loader";

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
    <Loader />
  ) : (
    <>
      <h1>Episodes</h1>
      <div>
        {data.map((episode) => {
          return (
            <div className="episodes" key={episode.title}>
              <h2>Title : {episode.title}</h2>
              <p>Writers : {episode.writers}</p>
              <p>Original Air Date : {episode.originalAirDate}</p>
              <p>Description : {episode.desc}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Episodes;
