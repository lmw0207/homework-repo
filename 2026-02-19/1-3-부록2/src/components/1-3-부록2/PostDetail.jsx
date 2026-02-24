import { useParams, useNavigate } from "react-router-dom";
import { posts } from "./PostList";

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === parseInt(id));

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", paddingTop: "50px" }}>
      <div
        style={{
          border: "1px solid #334155",
          padding: "4px 12px",
          borderRadius: "6px",
          width: "fit-content",
          color: "black",
          marginBottom: "20px",
        }}
      >
        Post ID: {post.id}
      </div>
      <h1
        style={{ fontSize: "3.5rem", marginBottom: "30px", fontWeight: "bold" }}
      >
        {post.title}
      </h1>
      <p style={{ fontSize: "1.3rem", lineHeight: "1.6", color: "black" }}>
        {post.content}
      </p>

      <button
        onClick={() => navigate("/posts")}
        style={{
          marginTop: "50px",
          backgroundColor: "#334155",
          color: "white",
          border: "none",
          padding: "12px 20px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        &lt; 목록으로 돌아가기
      </button>
    </div>
  );
}

export default PostDetail;
