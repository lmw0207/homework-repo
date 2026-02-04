import { useState } from "react";
import Profile from "./Profile";

function Theme() {
  const [isDark, setIsDark] = useState(false);

  const themeStyle = {
    backgroundColor: isDark ? "#333" : "#fff",
    color: isDark ? "#fff" : "#000",
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={themeStyle}>
      <Profile isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default Theme;
