import { login } from "./login";

describe("Action Login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  it("click button login, should print message alert", () => {
    login();
    expect(mockAlert).toHaveBeenCalledWith(
      "Bem vinda! Obrigado(a) por cadastrar no nosso site!"
    );
  });
});
