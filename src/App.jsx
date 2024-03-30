import "./App.css";

import { useState, useEffect } from "react";

// Import du package Axios
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sampleapis.com/futurama/characters"

          // "https://api.sampleapis.com/futurama/info"
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
      <div>
        {data.map((characters) => {
          console.log(characters.name.first);
          return (
            <div key={characters.id}>
              <p>{characters.name.first}</p>
              <img src={characters.images.main} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
