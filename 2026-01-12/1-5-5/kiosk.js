// 1. 피자 주문 함수 (가끔 실패함)
function orderPizza(menu) {
  console.log(menu + " 주문 접수 중...");

  // TODO: 랜덤하게 에러 발생시키기 (재료 소진)
  if (Math.random() < 0.3) {
    // 여기에 코드를 작성하세요 (throw)
    throw new Error("재료 소진");
  }

  return menu + " 준비 완료!";
}

// 2. 키오스크 메인 로직
function kiosk() {
  console.log("=== 키오스크 가동 ===");

  // TODO: 안전하게 주문 받기 (try-catch)
  try {
    const result = orderPizza("페퍼로니");
    console.log(result);
    console.log("맛있게 드세요!");
  } catch (e) {
    console.log("죄송합니다, 재료가 소진되었습니다.");
  } finally {
    console.log("이용해 주셔서 감사합니다.");
  }

  // 성공: "맛있게 드세요!"
  // 실패: "죄송합니다..."
}

kiosk();
