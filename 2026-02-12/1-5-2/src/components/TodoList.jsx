import { useReducer, useState } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          done: false
        }
      ];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  // const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    if (!inputText.trim()) return;
    dispatch({ type: "ADD", payload: inputText });
    setInputText("");

    // const newTodo = { id: Date.now(), text: inputText };
    // setTodos([...todos, newTodo]);
    // setInputText("");
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
    // setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ marginTop: "50px" }}>
      {/* 투두리스트 메인 보드 */}
      <div
        style={{
          width: "450px",
          height: "250px",
          backgroundColor: "#1e222b",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          marginLeft: "70px"
        }}
      >
        {/* 입력창, 버튼  */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="할 일을 입력하세요..."
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#2c313c",
              color: "white",
              outline: "none"
            }}
          />
          <button
            onClick={handleAdd}
            style={{
              padding: "0 20px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            추가
          </button>
        </div>

        {/* 리스트 출력 */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {todos.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                color: "#6b7280",
                marginTop: "40px",
                fontStyle: "italic"
              }}
            >
              할 일이 없습니다.
            </p>
          ) : (
            todos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px",
                  marginBottom: "10px",
                  backgroundColor: "#2c313c",
                  borderRadius: "8px",
                  border: "1px solid #3d4452",
                  color: "white"
                }}
              >
                <span
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE",
                      payload: todo.id
                    })
                  }
                  style={{
                    textDecoration: todo.done ? "line-through" : "none"
                  }}
                >
                  {todo.text}
                </span>

                {/* <button
                  onClick={() =>
                    dispatch({
                      type: "DELETE",
                      payload: todo.id
                    })
                  }
                  style={{
                    backgroundColor: "#2c313c",
                    color: "#ff4d4f",
                    border: "1px solid #ff4d4f",
                    borderRadius: "4px",
                    cursor: "pointer",
                    padding: "3px 8px"
                  }}
                >
                  삭제
                </button> */}

                <button
                  onClick={() => handleDelete(todo.id)}
                  style={{
                    backgroundColor: "#2c313c",
                    color: "#ff4d4f",
                    border: "1px solid #ff4d4f",
                    borderRadius: "4px",
                    cursor: "pointer",
                    padding: "3px 8px"
                  }}
                >
                  삭제
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
