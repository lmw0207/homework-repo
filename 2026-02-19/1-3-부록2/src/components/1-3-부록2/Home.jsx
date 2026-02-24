import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh"
      }}
    >
      <span style={{ fontSize: "60px" }}>🏠</span>
      <h1 style={{ fontSize: "3rem", margin: "20px 0", fontWeight: "bold" }}>
        미니 블로그 홈
      </h1>
      <Link
        to="/posts"
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "15px 30px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}
      >
        글 목록 보러가기
      </Link>
    </div>
  );
}

export default Home;
