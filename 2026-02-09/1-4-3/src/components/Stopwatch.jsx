import { useState, useRef, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const start = () => {
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);
  };

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  useEffect(() => {
    return () => stop();
  }, []);

  const minutes = Math.floor(time / 60000)
    .toString()
    .padStart(2, "0");

  const seconds = Math.floor((time % 60000) / 1000)
    .toString()
    .padStart(2, "0");

  const centiseconds = Math.floor((time % 1000) / 10)
    .toString()
    .padStart(2, "0");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw"
      }}
    >
      <div
        style={{
          border: "1px solid black",
          borderRadius: "15px",
          width: "400px",
          height: "250px",
          backgroundColor: "#111827",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px"
        }}
      >
        {/* 시간 표시 영역 */}
        <h1
          style={{
            color: "#FFFFFF",
            fontSize: "60px",
            margin: "0",
            fontWeight: "bold"
          }}
        >
          {`${minutes}:${seconds}:${centiseconds}`}
        </h1>

        {/* 스타트, 스톱 버튼 영역 */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={start}
            style={{
              padding: "15px 35px",
              borderRadius: "30px",
              border: "none",
              backgroundColor: "#2563EB",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Start
          </button>

          <button
            onClick={stop}
            style={{
              padding: "15px 35px",
              borderRadius: "30px",
              border: "none",
              backgroundColor: "#DC262680",
              color: "#ffffff",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Stop
          </button>
        </div>

        {/* 리셋 버튼 영역 (아래쪽) */}
        <button
          onClick={reset}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "#ffffff",
            textDecoration: "underline",
            cursor: "pointer",
            fontSize: "14px",
            marginTop: "10px"
          }}
        >
          Reset Timer
        </button>
      </div>
    </div>
  );
}
