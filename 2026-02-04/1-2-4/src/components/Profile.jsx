import { useState } from "react";

function Profile({ isDark, setIsDark }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("이민우");
  const [message, setMessage] = useState("React 어렵다");

  const handleMessageChange = (e) => {
    if (e.target.value.length <= 20) {
      setMessage(e.target.value);
    }
  };

  return (
    <div
      className="container"
      style={{ borderColor: isDark ? "white" : "black" }}
    >
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "🌞 라이트 모드" : "🌛 다크 모드"}
      </button>

      <h2>프로필 편집</h2>

      {isEditing ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <input
            className="profile-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "250px" }}
            placeholder="변경할 이름을 입력하세요"
          />
          <input
            className="profile-input"
            value={message}
            onChange={handleMessageChange}
            style={{
              width: "250px",
              borderColor: message.length >= 20 ? "red" : "#ccc",
            }}
            placeholder="변경할 상태를 입력하세요"
          />
          {message.length >= 20 && (
            <span style={{ color: "red", fontSize: "12px" }}>
              최대 20자까지만 가능합니다!
            </span>
          )}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h3>이름: {name}</h3>
          <h3>상태: {message}</h3>
        </div>
      )}
      <button
        onClick={() => setIsEditing(!isEditing)}
        style={{ width: "65px", height: "35px" }}
      >
        {isEditing ? "저장" : "편집"}
      </button>
    </div>
  );
}

export default Profile;
