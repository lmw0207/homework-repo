import { useState } from "react";

const ProfileCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = (e) => {
    e.stopPropagation();
    setLikes((prev) => prev + 1);
  };

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <>
      <style>{`
        .card-container { perspective: 1000px; width: 320px; height: 200px; margin: 20px; }
        .card {
          width: 100%; height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.6s;
          cursor: pointer;
        }
        .card.flipped { transform: rotateY(180deg); }

        .front, .back {
          position: absolute;  width: 100%; height: 100%;
          backface-visibility: hidden;
          border-radius: 12px;
          background-color: #232d3a; color: white;
          padding: 24px; box-sizing: border-box;
          display: flex; flex-direction: column;
        }
        .back { transform: rotateY(180deg); background-color: #1e293b; }

        .user-info h2 { margin: 0; font-size: 22px; font-weight: 700; }
        .user-info p { margin: 4px 0 0 0; color: #94a3b8; font-size: 14px; }

        .like-section {
          margin-top: auto;
          display: flex; align-items: center; justify-content: flex-end;
          gap: 6px; font-size: 18px; color: #f43f5e;
        }
        .heart-icon { transition: transform 0.2s; }
        .heart-icon:active { transform: scale(1.3); }
      `}</style>

      <div className="card-container">
        <div
          className={`card ${isFlipped ? "flipped" : ""}`}
          onClick={handleFlip}
        >
          <div className="front">
            <div className="user-info">
              <h2>이민우</h2>
              <p>Frontend Dev</p>
            </div>
            <div className="like-section" onClick={handleLike}>
              <span className="heart-icon">♥️</span>
              <span>{likes}</span>
            </div>
          </div>

          <div className="back">
            <div className="user-info">
              <h2>My Skills</h2>
              <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                {["React", "Vue", "JS"].map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: "#334155",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "12px",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="like-section" onClick={handleLike}>
              <span className="heart-icon">♥️</span>
              <span>{likes}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
