import { describe, it, expect } from "vitest";
import calculateHeroStrengthPower from "../utils/heroStrength";
describe("calculateHeroStrengthPower", () => {
  it('should return "weak" for strength less than 10', () => {
    expect(calculateHeroStrengthPower(5)).toBe("5 (weak)");
    expect(calculateHeroStrengthPower(0)).toBe("0 (weak)");
    expect(calculateHeroStrengthPower(9)).toBe("9 (weak)");
  });
  it('should return "strong" for strength between 10 and 19 (inclusive)', () => {
    expect(calculateHeroStrengthPower(10)).toBe("10 (strong)");
    expect(calculateHeroStrengthPower(15)).toBe("15 (strong)");
    expect(calculateHeroStrengthPower(19)).toBe("19 (strong)");
  });

  it('should return "unbelievable" for strength 20 or greater', () => {
    expect(calculateHeroStrengthPower(20)).toBe("20 (unbelievable)");
    expect(calculateHeroStrengthPower(25)).toBe("25 (unbelievable)");
    expect(calculateHeroStrengthPower(100)).toBe("100 (unbelievable)");
  });
  it("should handle negative strength as weak", () => {
    expect(calculateHeroStrengthPower(-1)).toBe("-1 (weak)");
  });
});
