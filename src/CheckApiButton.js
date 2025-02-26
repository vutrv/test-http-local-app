import { useState } from "react";

const CheckApiButton = () => {
  const [response, setResponse] = useState(null);

  const handleCheckApi = async () => {
    try {
      const res = await fetch("http://localhost:8080/check-rest-api");
      if (!res.ok) throw new Error("Failed to fetch API");

      const data = await res.text(); // Or res.json() if the API returns JSON
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Failed to connect to the API");
    }
  };

  return (
    <div>
      <button onClick={handleCheckApi}>Check API</button>
      {response && <p>Response: {response}</p>}
    </div>
  );
};

export default CheckApiButton;
