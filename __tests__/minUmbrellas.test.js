const minUmbrellas = require("../minUmbrellas");

describe("minUmbrellas", () => {
  test("should return 0 when passing an empty array", () => {
    expect(minUmbrellas([])).toBe(0);
  });
  test("should return 0 when passing an array of umbrellaless weather", () => {
    expect(
      minUmbrellas(["clear", "sunny", "cloudy", "overcast", "windy"])
    ).toBe(0);
  });
  test("should return 1 when the passing array with only one umbrella-needed weather", () => {
    expect(minUmbrellas(["rainy"])).toBe(1);
  });
  test("should return 1 when the passing array with only one umbrellaless weather", () => {
    expect(minUmbrellas(["sunny"])).toBe(0);
  });
  test("should return the numOfUmbrellas needed when the passing array takes multiple weather but only one umbrella-needed weather", () => {
    expect(
      minUmbrellas(["clear", "rainy", "cloudy", "overcast", "windy"])
    ).toBe(1);
  });
  test("should return the number of umbrella needed when pass an array of multiple weather", () => {
    expect(minUmbrellas(["rainy", "clear", "rainy", "cloudy"])).toBe(2);
    expect(minUmbrellas(["sunny", "windy", "sunny", "clear"])).toBe(0);
    expect(
      minUmbrellas([
        "rainy",
        "rainy",
        "rainy",
        "rainy",
        "thunderstorms",
        "rainy",
      ])
    ).toBe(1);
    expect(
      minUmbrellas([
        "rainy",
        "clear",
        "rainy",
        "clear",
        "thunderstorms",
        "clear",
      ])
    ).toBe(3);
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
    ).toBe(3);
  });
});
