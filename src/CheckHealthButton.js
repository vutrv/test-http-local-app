import { useState } from "react";

const CheckHealthButton = () => {
  const [response, setResponse] = useState(null);

  const handleCheckApi = async () => {
    try {
      const res = await fetch("http://localhost:8080/health");
      if (!res.ok) throw new Error("Failed to fetch API");

      const data = await res.text();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Failed to connect to the API");
    }
  };

  return (
    <div>
      <button onClick={handleCheckApi}>Check Health API</button>
      {response && <p>Response: {response}</p>}
    </div>
  );
};

export default CheckHealthButton;
