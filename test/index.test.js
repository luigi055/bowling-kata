import { expect } from "https://deno.land/x/expect/expect.ts";
import calculateScore from "../src/bowling.js";

Deno.test("should return 90", () => {
  const result = calculateScore("54|63|45|36|72|27|18|81|18|54||")

  expect(result).toBe(90);
})

Deno.test("should return 90", () => {
  const result = calculateScore("9-|-9|9-|9-|9-|-9|9-|9-|9-|9-||")

  expect(result).toBe(90);
})

Deno.test("should return 150", () => {
  const result = calculateScore("5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5")

  expect(result).toBe(150);
})