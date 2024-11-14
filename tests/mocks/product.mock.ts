const mockProduct = {
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 4,
};

const mockProductResponse = {
  id: 1,
  name: mockProduct.name,
  price: mockProduct.price,
  orderId: mockProduct.orderId,
}

const mockProductList = [
  {
    id: 1,
    name: "Sulfuras, Hand of Ragnaros",
    price: "33 peças de ouro",
    orderId: 5,
  },
  {
    id: 2,
    name: "Corrupted Ashbringer",
    price: "28 peças de ouro",
    orderId: 6,
  },
  {
    id: 3,
    name: "Thunderfury, Blessed Blade of the Windseeker",
    price: "25 peças de ouro",
    orderId: 7,
  },
  {
    id: 4,
    name: "Atiesh, Greatstaff of the Guardian",
    price: "56 peças de ouro",
    orderId: 8,
  }
]

export default {
  mockProduct,
  mockProductResponse,
  mockProductList
}
