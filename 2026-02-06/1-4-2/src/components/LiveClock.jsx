import { useState, useEffect } from "react";

export default function LiveClock() {
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(id);
  }, [isRunning]);

  return (
    <div style={{ marginTop: "50px", marginLeft: "50px" }}>
      <div
        style={{
          backgroundColor: "#2c313c",
          color: "rgb(96, 165, 250)",
          padding: "20px",
          borderRadius: "12px",
          width: "300px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>{timer}</h1>

        <button
          onClick={() => setIsRunning((p) => !p)}
          style={{
            padding: "10px 25px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
            backgroundColor: isRunning ? "#ef4444" : "#22c55e",
            transition: "background-color 0.2s",
          }}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <p style={{ color: "#6b7280" }}>
          {isRunning ? "타이머 작동중" : "타이머 멈춤"}
        </p>
      </div>
    </div>
  );
}
