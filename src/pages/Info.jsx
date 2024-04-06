import { useState, useEffect } from "react";

import axios from "axios";
import Loader from "../components/Loader";

const Info = () => {
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
    <Loader />
  ) : (
    <>
      <h2>Synopsis</h2>
      <div>
        {data.map((infos) => {
          console.log(infos);
          return (
            <div key={infos.id}>
              <p>{infos.synopsis}</p>
              <h2>Creators name :</h2>
              {infos.creators.map((creators) => {
                return <p key={creators.name}>{creators.name}</p>;
              })}
              <p>Production : {infos.yearsAired}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Info;
