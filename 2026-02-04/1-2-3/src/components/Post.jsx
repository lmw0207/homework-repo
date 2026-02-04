function Post({ autor, content }) {
  return (
    <div className="post-card">
      <h2>게시물</h2>
      <div className="post-header">
        <h3>작성자: {autor}</h3>
      </div>
      <div className="post-desc">
        <p>내용: {content}</p>
      </div>
    </div>
  );
}
export default Post;
