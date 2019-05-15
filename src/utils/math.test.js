import { add, subtract } from "./math";

it("should return 3 when passed 1 and 2", () => {
  // arrange

  // act
  const result = add(1, 2);

  // assert
  expect(result).toBe(3);
});

it("should return 1 when passed 3, 2", () => {
  // arrange

  // act
  const result = subtract(3, 2);

  // assert
  expect(result).toBe(1);
});
