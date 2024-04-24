const minUmbrellas = require("../minUmbrellas")
const timeFunction = require("../performance")

describe("minUmbrellas", () => {
  test("should return 0 when passing an empty array", () => {
    timeFunction(minUmbrellas, [])
    expect(minUmbrellas([])).toBe(0)
  })
  test("should return 0 when passing an array of umbrellaless weather", () => {
    timeFunction(minUmbrellas, [
      "clear",
      "sunny",
      "cloudy",
      "overcast",
      "windy",
    ])
    expect(
      minUmbrellas(["clear", "sunny", "cloudy", "overcast", "windy"])
    ).toBe(0)
  })
  test("should return 1 when the passing array with only one umbrella-needed weather", () => {
    timeFunction(minUmbrellas, ["rainy"])
    expect(minUmbrellas(["rainy"])).toBe(1)
  })
  test("should return 0 when the passing array without umbrella-needed weather", () => {
    timeFunction(minUmbrellas, ["sunny"])
    timeFunction(minUmbrellas, ["sunny", "windy", "sunny", "clear"])
    expect(minUmbrellas(["sunny"])).toBe(0)
    expect(minUmbrellas(["sunny", "windy", "sunny", "clear"])).toBe(0)
  })
  test("should return the numOfUmbrellas needed when the passing array takes multiple weather but only one umbrella-needed weather", () => {
    timeFunction(minUmbrellas, [
      "clear",
      "rainy",
      "cloudy",
      "overcast",
      "windy",
    ])
    expect(
      minUmbrellas(["clear", "rainy", "cloudy", "overcast", "windy"])
    ).toBe(1)
  })
  test("should return the number of umbrella needed when pass an array of multiple weather", () => {
    timeFunction(minUmbrellas, ["rainy", "clear", "rainy", "cloudy"])
    expect(minUmbrellas(["rainy", "clear", "rainy", "cloudy"])).toBe(2)
    timeFunction(minUmbrellas, [
      "rainy",
      "rainy",
      "rainy",
      "rainy",
      "thunderstorms",
      "rainy",
    ])
    expect(
      minUmbrellas([
        "rainy",
        "rainy",
        "rainy",
        "rainy",
        "thunderstorms",
        "rainy",
      ])
    ).toBe(1)
    timeFunction(minUmbrellas, [
      "rainy",
      "clear",
      "rainy",
      "clear",
      "thunderstorms",
      "clear",
    ])
    expect(
      minUmbrellas([
        "rainy",
        "clear",
        "rainy",
        "clear",
        "thunderstorms",
        "clear",
      ])
    ).toBe(3)
    timeFunction(minUmbrellas, [
      "rainy",
      "cloudy",
      "rainy",
      "windy",
      "thunderstorms",
      "rainy",
      "windy",
      "sunny",
    ])
    expect(
      minUmbrellas([
        "rainy",
        "cloudy",
        "rainy",
        "windy",
        "thunderstorms",
        "rainy",
        "windy",
        "sunny",
      ])
    ).toBe(3)
  })
})
