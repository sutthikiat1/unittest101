import MockAdapter from "axios-mock-adapter";
import { Sale_Cloth } from "../cloth_sale";
import axios from "axios";

describe("price on sale", () => {
  var mock_cloth = new MockAdapter(axios);
  it("10 % off ", async () => {
    const expectedResult = {
      productId: 1,
      productName: "Levi",
      price: 100,
      quantity: 1,
      discount: 10,
      net: 90,
    };

    mock_cloth
      .onPost("/get-discount", {
        quantity: 1,
        productName: "Levi",
        productId: 1,
      })
      .reply(200, {
        status: "success",
        message: "-",
        data: {
          discount: 10,
          price: 100,
        },
      });

    const result = await Sale_Cloth(1, 1, "Levi");

    expect(result.net).toEqual(expectedResult.net);
  });
});
