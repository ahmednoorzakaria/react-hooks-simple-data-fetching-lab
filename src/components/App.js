// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDogImage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!dogImage) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <img src={dogImage} alt="A Random Dog"></img>
    </div>
  );
}

export default App;
