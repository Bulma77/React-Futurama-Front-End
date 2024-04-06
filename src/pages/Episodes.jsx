import { useState, useEffect } from "react";

// Import du package Axios
import axios from "axios";

// Import Loader
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

import Episode from "../components/Episode";
const Episodes = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.sampleapis.com/futurama/episodes`
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

  // pagination
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <h1>Episodes</h1>
      <Episode data={currentPosts} />
      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        firstPostIndex={firstPostIndex}
        lastPostIndex={lastPostIndex}
      />
    </>
  );
};

export default Episodes;
