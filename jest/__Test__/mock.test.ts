import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("Test mockapi", () => {
  var mock = new MockAdapter(axios);

  beforeAll(() => {
    console.log("Before all");
  });

  beforeEach(() => {
    mock.reset();
  });

  it("should get request", async () => {
    // arange
    mock.onGet("/users").reply(200, {
      statusCode: 1,
      status: "success",
      msg: "",
      data: [
        {
          id: 1,
          name: "Johny",
        },
      ],
    });

    const expectedResult = "Johny";

    // action
    const result = await axios.get("/users");

    // console.log(result);

    // assert
    expect(result.data.data[0].name).toBe(expectedResult);
  });

  it("should post request", async () => {
    mock
      .onPost("/add-users", {
        id: 2,
        name: "Max",
      })
      .reply(200, {
        statusCode: 1,
        status: "success",
        msg: "",
        data: [{ id: 2, name: "Max" }],
      });

    const expectedResult = 1;
    const expectedResultGet = "Johny";

    const result = await axios.post("/add-users", {
      id: 2,
      name: "Max",
    });

    expect(result.data.statusCode).toBe(expectedResult);
  });
});
