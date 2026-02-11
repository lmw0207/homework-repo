import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";

const Header = () => {
  const { lang, toggleLang, t } = useLanguage();
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "250px",
          backgroundColor: "#111827",
          padding: "20px",
          fontWeight: "bold",
          border: "1px solid black",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          fontSize: "27px",
        }}
      >
        <div style={{ margin: "0" }}>
          <p>{t("greeting")}</p>
          <p>{t("welcome")}</p>
        </div>

        <button
          onClick={toggleLang}
          style={{
            padding: "15px 35px",
            borderRadius: "30px",
            border: "none",
            backgroundColor: "#333333",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {t("changeLanguage")} (
          {lang === "ko" ? "현재: 한국어" : "Current: English"})
        </button>
      </div>
    </header>
  );
};

function App() {
  return (
    <>
      <LanguageProvider>
        <div>
          <Header />
        </div>
      </LanguageProvider>
    </>
  );
}

export default App;
