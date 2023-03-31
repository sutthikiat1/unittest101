import axios from "axios";

export async function Sale_Cloth(
  productId: number,
  quantity: number,
  productName: string
) {
  const discount = await axios.post("/get-discount", {
    quantity: quantity,
    productName: productName,
    productId: productId,
  });
  console.log(discount.data.data.discount);
  const mock_cloth = {
    productId: productId,
    productName: productName,
    price: discount.data.data.price,
    quantity: quantity,
    discount: discount.data.data.discount,
    net:
      quantity * discount.data.data.price -
      (discount.data.data.price * discount.data.data.discount) / 100,
  };
  return mock_cloth;
}
