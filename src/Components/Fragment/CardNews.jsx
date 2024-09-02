import { useState, useEffect } from "react";

const CardNews = () => {
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Define an async function to fetch data
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/news");
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   // Call the async function
  //   fetchData();
  // }, []); // Empty dependency array means this effect runs once when the component mounts

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>card</h1>
      {/* {data.map((post) => {
        return (
          <div className="" key={post.id}>
            <h1>{post.headline}</h1>
          </div>
        );
      })} */}
    </div>
  );
};

export default CardNews;
