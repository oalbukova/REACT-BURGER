import {TIngredient, TOrderForTest} from "./type";

export const topping1: TIngredient = {
  calories: 189,
  carbohydrates: 111,
  fat: 432,
  image: "https://code.s3.yandex.net/react/code/core.png",
  image_large: "https://code.s3.yandex.net/react/code/core-large.png",
  image_mobile: "https://code.s3.yandex.net/react/code/core-mobile.png",
  name: "Кристаллы марсианских альфа-сахаридов",
  price: 762,
  proteins: 234,
  type: "main",
  __v: 0,
  _id: "60d3b41abdacab0026a733d2",
  uuid: "ad285e9e-3768-49a2-90e4-2cf02fdc5675"
}

export const topping2 = {
  calories: 2674,
  carbohydrates: 300,
  fat: 800,
  image: "https://code.s3.yandex.net/react/code/meat-04.png",
  image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
  image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
  name: "Говяжий метеорит (отбивная)",
  price: 3000,
  proteins: 800,
  type: "main",
  __v: 0,
  _id: "60d3b41abdacab0026a733ca",
  uuid: "44f6d0e0-40dc-4212-a860-672bedf84fa0"
}

export const bun1: TIngredient = {
  calories: 420,
  carbohydrates: 53,
  fat: 24,
  image: "https://code.s3.yandex.net/react/code/bun-02.png",
  image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
  image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  name: "Краторная булка N-200i",
  price: 1255,
  proteins: 80,
  type: "bun",
  __v: 0,
  _id: "60d3b41abdacab0026a733c6",
  uuid: "219c05cb-bc94-4d38-b394-de1805662ab9"
}

export const order1: TOrderForTest = {
  ingredients: [bun1, topping1, topping2],
  _id: "6226977625b9a4001b6e338d",
  owner: {
    name: "dfdf", email: "dsd@dsds.ru", createdAt: "2022-02-23T21:33:39.829Z", updatedAt: "2022-03-04T19:09:27.665Z",
  },
  status: "done",
  name: "Краторный метеоритный альфа-сахаридный бургер",
  createdAt: "2022-03-07T23:38:30.456Z",
  updatedAt: "2022-03-07T23:38:30.673Z",
  number: 11324,
  price: 5017,
}

export const passwordReq = {
  success: true, message: "Reset email sent"
}

export const feeds = {
  // success: true,
  orders: [{
    createdAt: "2022-03-08T19:42:04.693Z",
    name: "Spicy флюоресцентный space бургер",
    ingredients: ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cc"],
    number: 11340,
    status: "done",
    updatedAt: "2022-03-08T19:42:04.921Z",
    _id: "6227b18c25b9a4001b6e3694",
  }, {
    createdAt: "2022-03-08T17:32:39.815Z",
    ingredients: ["60d3b41abdacab0026a733c6", "60d3b41abdacab0026a733ce", "60d3b41abdacab0026a733c8", "60d3b41abdacab0026a733cb"],
    name: "Люминесцентный био-марсианский краторный метеоритный традиционный-галактический бургер",
    number: 11337,
    status: "done",
    updatedAt: "2022-03-08T17:46:56.718Z",
    _id: "6227969025b9a4001b6e35f5",
  }], total: 11253, totalToday: 43,
}

export const feedsStart = {
  success: false, orders: [{
    createdAt: "2022-03-08T19:42:04.693Z",
    name: "Spicy флюоресцентный space бургер",
    ingredients: ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cc"],
    number: 11340,
    status: "done",
    updatedAt: "2022-03-08T19:42:04.921Z",
    _id: "6227b18c25b9a4001b6e3694",
  }, {
    createdAt: "2022-03-08T17:32:39.815Z",
    ingredients: ["60d3b41abdacab0026a733c6", "60d3b41abdacab0026a733ce", "60d3b41abdacab0026a733c8", "60d3b41abdacab0026a733cb"],
    name: "Люминесцентный био-марсианский краторный метеоритный традиционный-галактический бургер",
    number: 11337,
    status: "done",
    updatedAt: "2022-03-08T17:46:56.718Z",
    _id: "6227969025b9a4001b6e35f5",
  }], total: 11253, totalToday: 43,
}

export const user = {
  success: true,
  accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTQ0ODdmNmQ3Y2Q4MDAxYjJkMGVlYiIsImlhdCI6MTY0Njc3Nzc2MCwiZXhwIjoxNjQ2Nzc4OTYwfQ.634H0F_SlPYQlQEj05KLGYMNRI9jY2XhqaEgEBjylh4",
  refreshToken: "c92722c5760947bb5f8d76a5f32acbe482bd06579e1aae4de6cc56d375a8b0f1f5cd5fe763bcfedc",
  user: {
    email: "bonus@bk.ru", name: "Olga",
  }
}

export const currentUser = {
  success: true, user: {
    email: "bonus@bk.ru", name: "Olga"
  }
}

export const token = {
  success: true,
  accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTQ0ODdmNmQ3Y2Q4MDAxYjJkMGVlYiIsImlhdCI6MTY0Njc3Nzc2MCwiZXhwIjoxNjQ2Nzc4OTYwfQ.634H0F_SlPYQlQEj05KLGYMNRI9jY2XhqaEgEBjylh4",
  refreshToken: "c92722c5760947bb5f8d76a5f32acbe482bd06579e1aae4de6cc56d375a8b0f1f5cd5fe763bcfedc",
}
