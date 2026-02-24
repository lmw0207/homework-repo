import { createContext, useContext, useState } from "react";

// 생성
const CountContext = createContext({
  count: 0,
  handleCount: () => {}
});

// 적용
function App() {
  const [count, setCount] = useState(0);
  const handleCount = setCount((prev) => prev + 1);

  return (
    <CountContext.Provider value={{ count, handleCount }}>
      <Main />
    </CountContext.Provider>
  );
}

// 사용
function Main() {
  const { count, handleCount } = useContext(CountContext);
}
