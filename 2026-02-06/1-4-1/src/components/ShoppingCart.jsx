import { useState } from "react";

const PRODUCTS = [
  { id: 1, name: "노트북", price: 1200000 },
  { id: 2, name: "마우스", price: 50000 },
  { id: 3, name: "모니터", price: 300000 },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          padding: "25px",
          backgroundColor: "#161b22",
          color: "white",
          width: "480px",
          borderRadius: "15px",
          border: "1px solid #30363d",
          boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
        }}
      >
        {/* 상단 상품 버튼들 */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          {PRODUCTS.map((p) => (
            <button
              key={p.id}
              onClick={() => addToCart(p)}
              style={{
                padding: "8px 15px",
                backgroundColor: "transparent",
                color: "#c9d1d9",
                border: "1px solid #444c56",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              {p.name} ({p.price / 10000}만) +
            </button>
          ))}
        </div>

        {/* 장바구니  */}
        <div
          style={{
            backgroundColor: "#0d1117",
            borderRadius: "10px",
            padding: "20px",
            minHeight: "180px",
            border: "1px solid #30363d",
          }}
        >
          <p
            style={{ margin: "0 0 15px 0", color: "#8b949e", fontSize: "14px" }}
          >
            장바구니 목록 ({cart.length})
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {cart.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  fontSize: "16px",
                }}
              >
                <span>{item.name}</span>
                <button
                  onClick={() => removeFromCart(index)}
                  style={{
                    backgroundColor: "#0d1117",
                    border: "none",
                    color: "#f85149",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 합계 */}
        <div style={{ textAlign: "right", marginTop: "25px" }}>
          <h2 style={{ color: "#e3b341", fontSize: "24px" }}>
            Total: {total.toLocaleString()}원
          </h2>
        </div>
      </div>
    </div>
  );
}
