const isValidPassword = require("./password");

describe("isVaildPassword 테스트", () => {
  describe("성공", () => {
    test("유효한 비밀번호", () => {
      expect(isValidPassword("password123@")).toBe(true);
    });
  });

  describe("실패", () => {
    test("8글자 이상만 유효", () => {
      expect(isValidPassword("pass")).toBe(false);
    });

    test("영문을 포함해야 유효", () => {
      expect(isValidPassword("12345678")).toBe(false);
    });

    test("숫자를 포함해야 유효", () => {
      expect(isValidPassword("password")).toBe(false);
    });

    test("숫자,영문,특수문자, 8글자 이상이어야 유효", () => {
      expect(isValidPassword("")).toBe(false);
    });

    test("특수문자를 포함해야 유효", () => {
      expect(isValidPassword("password123")).toBe(false);
    });
  });
});
