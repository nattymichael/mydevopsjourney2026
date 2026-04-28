import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  const API = "44.211.234..174:3000";

  // Fetch data
  useEffect(() => {
    fetch(`${API}/data`)
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  // Send data
  const sendData = async () => {
    await fetch(`${API}/data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    window.location.reload();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🚀 DevOps App</h1>

      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendData}>Send</button>

      <h2>Messages:</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
