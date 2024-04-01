import { useState, useEffect } from "react";
import poster from "../assets/poster.png";

import axios from "axios";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sampleapis.com/futurama/info"
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
      <img className="poster" src={poster} alt="futurama's poster" />
      <h2>Synopsis</h2>
      <p>{data[0].synopsis}</p>
    </>
  );
};

export default Home;
