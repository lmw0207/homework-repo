import ProfileCard from "./components/ProfileCard";
import Post from "./components/Post";
function App() {
  return (
    <div>
      <ProfileCard name="이민우" age={27} job="예비 개발자" />
      <Post autor="이민우" content="React 어렵다" />
      <Post autor="이민우" content="React 어렵운데 뭔가 재밌기도 하다" />
    </div>
  );
}

export default App;
