
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  const API = "/api";

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
  <div style={{ textAlign: "center", padding: "40px", fontFamily: "Arial" }}>
    <h1 style={{ color: "#4CAF50" }}>🚀 My DevOps App</h1>

    <input
      type="text"
      placeholder="Enter message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      style={{ padding: "10px", marginRight: "10px" }}
    />

    <button
      onClick={sendData}
      style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none" }}
    >
      Send
    </button>

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
