import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const name = "이민우";
  const birthyear = "2000";
  const currentYear = new Date().getFullYear();
  const hobbies = ["넷플릭스 시청", "산책", "게임"];
  const mbti = "INTP";

  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Card
            name={name}
            birthyear={birthyear}
            currentYear={currentYear}
            hobbies={hobbies}
            mbti={mbti}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
