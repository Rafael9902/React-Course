import { getUser, getUsuarioActivo } from "../../base-test/05-funciones";

describe("05-funciones tests", () => {
  test("getUser must be return an object", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    console.log(user);

    expect(user).toEqual(userTest);
  });

  test("getUsuaioActivo must be return an object", () => {
    const name = "rafael";
    const user = getUsuarioActivo(name);

    expect(user).toEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
