import { Link } from "react-router-dom";

export const posts = [
  {
    id: 1,
    title: "React는 재미있다",
    content: "정말 재미있는 라이브러리입니다.",
  },
  { id: 2, title: "SPA의 장점", content: "화면 전환이 부드러워요." },
  { id: 3, title: "Router 정복", content: "중첩 라우팅까지 마스터해봅시다!" },
];

function PostList() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1
        style={{
          fontSize: "2.5rem",
          borderBottom: "1px solid #334155",
          paddingBottom: "20px",
        }}
      >
        ✏️ 글 목록
      </h1>
      <ul style={{ listStyle: "none", padding: "20px 0" }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{ marginBottom: "25px", fontSize: "1.2rem" }}
          >
            <Link
              to={`/posts/${post.id}`}
              style={{ color: "black", textDecoration: "none" }}
            >
              ■ {post.id}. {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/"
        style={{
          color: "#94a3b8",
          textDecoration: "none",
          display: "block",
          textAlign: "center",
        }}
      >
        ← 홈으로
      </Link>
    </div>
  );
}

export default PostList;
